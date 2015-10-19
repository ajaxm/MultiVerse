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
    :stanzas,
    foreign_key: :author_id
  )

  has_many(
    :contributed_poems, -> { uniq }, through: :stanzas, source: :poem
  )

  def completed_contributed_poems
    self.contributed_poems.joins(:stanzas).group("poems.id")
        .having("poems.num_stanzas = COUNT(stanzas.id)")
        .order(created_at: :desc)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user if user && user.is_password?(password)
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
