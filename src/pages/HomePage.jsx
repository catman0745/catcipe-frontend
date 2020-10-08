import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RecipeList from '../components/RecipeList'
import getRecipes from '../api/getRecipes'

const Wrapper = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing(4)}px;
  `}
`

const HomePage = () => {
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    const fetchedRecipes = await getRecipes()
    setRecipes(fetchedRecipes)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <Wrapper>
      <RecipeList recipes={recipes} />
    </Wrapper>
  )
}

export default HomePage
