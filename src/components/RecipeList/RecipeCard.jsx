import React from 'react'
import {
  Card,
  Typography,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled(Card)`
  height: 100%;
`

const ClickableArea = styled(CardActionArea)`
  height: 100%;
  align-items: stretch;
  display: flex;
  flex-direction: column;
`

const Image = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`

const CardDescription = styled(CardContent)`
  flex-grow: 1;
`

const Header = ({ title, author, time }) => (
  <CardHeader title={title} subheader={`${time} mins by ${author}`} />
)
Header.propTypes = {
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

const RecipeCard = ({ id, title, author, image, description, time }) => {
  const history = useHistory()

  return (
    <Container>
      <ClickableArea onClick={() => history.push(`/recipes/${id}`)}>
        <Header title={title} author={author} time={time} />
        <Image image={image} title={title} />
        <RecipeDescription description={description} />
      </ClickableArea>
    </Container>
  )
}
RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

export default RecipeCard
