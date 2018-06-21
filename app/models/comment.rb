# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  poem_id    :integer          not null
#  user_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :poem_id, :user_id, :body, presence: true

  belongs_to :user
  belongs_to :poem
end
