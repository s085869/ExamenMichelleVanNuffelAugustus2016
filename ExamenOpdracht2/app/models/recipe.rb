class Recipe < ActiveRecord::Base

  def initialize(name, price, ingredients)
    @recipeName=name
    @recipePrice=price
    @recipeIngredients=ingredients
  end

  def getName
    "#@recipeName"
  end

  def getPrice
    "#@recipePrice"
  end

  def getIngredients
    "#@recipeIngredients"
  end

  def addIngredient

  end
end
