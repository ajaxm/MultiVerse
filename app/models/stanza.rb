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

class Stanza < ActiveRecord::Base
  validates :body, :order, :poem_id, :author_id, presence: true
  validate :stanza_order_cannot_exceed_num_stanzas_of_poem
  validate :stanza_must_have_at_least_two_lines
  validate :stanza_must_not_exceed_three_lines
  validate :prevent_successive_stanzas

  belongs_to :poem
  belongs_to(
  :author,
  class_name: "User",
  foreign_key: :author_id
  )

  def lines
    body.split("\n")
  end

  private
  def stanza_order_cannot_exceed_num_stanzas_of_poem
    if order > poem.num_stanzas
      errors.add(:order, "can't be greater than poem's maximum stanza count.")
    end
  end

  def prevent_successive_stanzas
    if poem.stanzas.last.author_id == author_id
      errors.add(:user, "cannot contribute successive stanzas.")
    end
  end

  def stanza_must_have_at_least_two_lines
    if lines.length < 2
      errors.add(:stanza, "must have at least two lines")
    end
  end

  def stanza_must_not_exceed_three_lines
    if lines.length > 3
      errors.add(:stanza, "must not have more than three lines")
    end
  end
end
