# frozen_string_literal: true

class Comment < ApplicationRecord
  belongs_to :task, required: true
  belongs_to :user, required: true

  validates :content, presence: true, length: { maximum: 120 }
end

