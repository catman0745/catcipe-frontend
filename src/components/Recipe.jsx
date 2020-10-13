import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Recipe = ({ title, description, image, text }) => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Typography variant="h3">{title}</Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1">{description}</Typography>
    </Grid>
    <Grid item>
      <img src={image} alt={title} width="100%" />
    </Grid>
    <Grid item>
      <Typography variant="body2">{text}</Typography>
    </Grid>
  </Grid>
)
Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Recipe
