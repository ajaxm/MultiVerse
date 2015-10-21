# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_sesion_token

  has_many(
    :poems,
    foreign_key: :author_id
  )

  has_many(
    :authored_stanzas,
    class_name: 'Stanza',
    foreign_key: :author_id
  )

  has_many(
    :contributed_poems,
    -> { uniq },
    through: :authored_stanzas,
    source: :poem
  )

  # has_many(
  #   :completed_contributed_poems,
  #   -> { joins(:stanzas)
  #        .group("poems.id")
  #        .having("poems.num_stanzas = COUNT(stanzas.id)")
  #        .order(created_at: :desc)
  #        .preload(:author, :contributors, :favoritors, stanzas: :author) },
  #   through: :stanzas,
  #   source: :poem
  # )

  has_many :favorites
  has_many :favorited_poems, through: :favorites, source: :poem

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user if user && user.is_password?(password)
  end

#   def thing
#     self.contributed_poems.joins(:stanzas)
#         .group("poems.id")
#         .having("poems.num_stanzas = COUNT(stanzas.id)")
#         .order(created_at: :desc)
#         .preload(:author, :contributors, stanzas: :author)
#         .page(page).per(10)
#
# m.contributed_poems.joins("as ps JOIN stanzas ON ps.poem_id = poems.id")
# .group("poems.id")
# .having("poems.num_stanzas = COUNT(ps.id)")
#       Poem.find_by_sql(<<-SQL)
#         SELECT DISTINCT
#           poems.*
#         FROM
#           poems
#         JOIN
#           stanzas as a_stanza
#         ON a_stanza.poem_id = poems.id
#         JOIN
#           (
#             SELECT
#               poems.id
#             FROM
#               poems
#             JOIN
#               stanzas ON poems.id = stanzas.poem_id
#             GROUP BY
#               poems.id
#             HAVING
#               poems.num_stanzas = COUNT(stanzas.id)
#           ) as complete_poems
#         ON complete_poems.id = poems.id
#         WHERE
#           a_stanza.author_id = 1
#       SQL
#   end

  def completed_contributed_poems(page)
    contributed_poems.page(page).select do |poem|
      poem.length === poem.num_stanzas
    end
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  private
  def generate_session_token
    SecureRandom.base64(16)
  end

  def ensure_sesion_token
    self.session_token = generate_session_token
  end
end
