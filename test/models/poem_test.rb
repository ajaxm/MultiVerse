# == Schema Information
#
# Table name: poems
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  num_stanzas :integer          default(6), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PoemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
