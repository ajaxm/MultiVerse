class StaticPagesController < ApplicationController
  before_action :ensure_login
  
  def root
  end
end
