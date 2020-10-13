const getRecipes = async (recipeId) => {
  const response = await fetch(`http://localhost:5000/api/recipes/${recipeId}`)

  const result = await response.json()
  return {
    success: result.success,
    errorMessage: result.errorMessage,
    recipe: result.payload && result.payload,
  }
}

export default getRecipes
