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
  validate :username_must_be_under_fifteen_characters

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

  has_many :favorites
  has_many :favorited_poems, through: :favorites, source: :poem

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

  def username_must_be_under_fifteen_characters
    if username.length > 15
      errors.add(:username, "can't be longer than 15 characters")
    end
  end
end
