import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { actions, store } from '../redux'
import getRecipe from '../api/getRecipe'
import Recipe from '../components/Recipe'

const Container = styled(Paper)`
  ${({ theme }) => `
    padding: ${theme.spacing(4)}px;
    flex-grow: 1;
  `}
`

const RecipePage = () => {
  const { recipeId } = useParams()

  const history = useHistory()

  const [recipe, setRecipe] = useState()

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getRecipe(recipeId)
      if (result.success) {
        setRecipe(result.recipe)
      } else {
        history.push('/')
        switch (result.errorMessage) {
          case `Recipe with id ${recipeId} does not exist`:
            store.dispatch(actions.showAlert('warning', 'Recipe not found'))
            break
          case 'Validation error':
            store.dispatch(actions.showAlert('warning', `Invalid recipe id`))
            break
          default:
            store.dispatch(actions.showAlert('warning', result.errorMessage))
        }
      }
    }

    fetchRecipe()
  }, [history, recipeId])

  return (
    <Container square>
      {recipe && (
        <Recipe
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          text={recipe.text}
        />
      )}
    </Container>
  )
}

export default RecipePage
