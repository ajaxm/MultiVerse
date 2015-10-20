# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  poem_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ActiveRecord::Base
  validates :poem_id, :user_id, presence: true
  validates :poem_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :poem
end
