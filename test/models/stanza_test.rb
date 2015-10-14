# == Schema Information
#
# Table name: stanzas
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  order      :integer          not null
#  poem_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class StanzaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
