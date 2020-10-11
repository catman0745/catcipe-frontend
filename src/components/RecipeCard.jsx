import React from 'react'
import {
  Card,
  Typography,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core'
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

const Header = ({ title, author, time }) => {
  return <CardHeader title={title} subheader={`${time} mins by ${author}`} />
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

const RecipeDescription = ({ description }) => {
  return (
    <CardDescription>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardDescription>
  )
}
RecipeDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

const RecipeCard = ({ title, author, image, description, time }) => {
  return (
    <Container>
      <Header title={title} author={author} time={time} />
      <Image image={image} title={title} />
      <RecipeDescription description={description} />
    </Container>
  )
}
RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

export default RecipeCard
