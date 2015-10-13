class Poem < ActiveRecord::Base
  attr_reader :first_stanza

  validates :title, :author_id, :num_stanzas, presence: true
  validates :first_stanza, length: { allow_nil: true, minimum: 1 }

  has_many :stanzas

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id
  )

  def first_stanza=(first_stanza)
    @first_stanza = first_stanza
    current_user.stanzas.create!(
      poem: self, body: first_stanza, order: 1
    )
  end
end
