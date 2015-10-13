class Stanza < ActiveRecord::Base
  validates :body, :order, :poem_id, :author_id, presence: true
  validate :stanza_order_cannot_exceed_num_stanzas_of_poem

  belongs_to :poem
  belongs_to(
  :author,
  class_name: "User",
  foreign_key: :author_id
  )

  private
  def stanza_order_cannot_exceed_num_stanzas_of_poem
    if order > self.poem.num_stanzas
      errors.add(:order, "can't be greater than poem's maximum stanza count.")
    end
  end
end
