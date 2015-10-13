class Poem < ActiveRecord::Base
  attr_reader :first_stanza

  validates :title, :author_id, :num_stanzas, presence: true
  validates :first_stanza, length: { allow_nil: true, minimum: 1 }
  after_create :ensure_first_stanza

  has_many :stanzas, inverse_of: :poem, dependent: :destroy

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id
  )

  def first_stanza=(first_stanza)
    @first_stanza_content = first_stanza
  end

  def length
    self.stanzas.count
  end

  def ensure_first_stanza
    first_stanza = Stanza.new(
      body: @first_stanza_content, order: 1, author_id: author_id, poem_id: id
    )
    first_stanza.save!
  end
end
