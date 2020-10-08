import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Recipe from './Recipe'

const RecipeList = ({ recipes }) => {
  return (
    <Grid container spacing={2} alignItems="stretch" justify="center">
      {recipes.map((recipe) => (
        <Grid item key={recipe.id} xs={12} md={6} lg={4}>
          <Recipe
            title={recipe.title}
            author={recipe.author}
            image={recipe.image}
            time={recipe.time}
            description={recipe.description}
            stretch
          />
        </Grid>
      ))}
    </Grid>
  )
}
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default RecipeList
