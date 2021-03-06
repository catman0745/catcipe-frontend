import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import RecipeCard from './RecipeCard'

const RecipeList = ({ recipes }) => (
  <Grid container spacing={2} justify="center">
    {recipes.map((recipe) => (
      <Grid item key={recipe.id} xs={12} md={6} lg={4}>
        <RecipeCard
          id={recipe.id}
          title={recipe.title}
          author={recipe.author}
          image={recipe.image}
          time={recipe.time}
          description={recipe.description}
        />
      </Grid>
    ))}
  </Grid>
)
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
