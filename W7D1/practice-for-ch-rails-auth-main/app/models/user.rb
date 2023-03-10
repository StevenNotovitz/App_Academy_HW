# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

class User < ApplicationRecord
    before_validation :ensure_session_token
    validates :username, :session_token, presence: true
    validates :password_digest, presence: { message: "Password can't be blank" }
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user&.is_password?(password) ? user : nil
    end

    def generate_unique_session_token
        token = SecureRandom.urlsafe_base64
        while User.exists?(session_token: token)
            token = SecureRandom.urlsafe_base64
        end
        token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

end
