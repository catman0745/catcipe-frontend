import React from 'react'
import {
  Card,
  Typography,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Image = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`

const CardDescription = styled(CardContent)`
  flex-grow: 1;
`

const Header = ({ id, title, author, time }) => (
  <Link to={`/recipes/${id}`}>
    <CardHeader title={title} subheader={`${time} mins by ${author}`} />
  </Link>
)
Header.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

const RecipeDescription = ({ description }) => (
  <CardDescription>
    <Typography variant="body2" color="textSecondary" component="p">
      {description}
    </Typography>
  </CardDescription>
)
RecipeDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

const RecipeCard = ({ id, title, author, image, description, time }) => (
  <Container>
    <Header id={id} title={title} author={author} time={time} />
    <Image image={image} title={title} />
    <RecipeDescription description={description} />
  </Container>
)
RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

export default RecipeCard
