const getRecipes = async (page = 1, perPage = 20) => {
  const response = await fetch(
    `http://localhost:5000/api/recipes?pageNumber=${page}&pageSize=${perPage}`
  )
  const result = await response.json()

  return result.success ? result.payload : []
}

export default getRecipes
