import React from 'react'
import styled from 'styled-components'
import { Card, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import FormSection from './FormSection'

const Container = styled(Card)`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(2)}px;
  `}
`

const Form = ({ title, children }) => (
  <Container>
    <FormSection justify="center">
      <Typography variant="h4">{title}</Typography>
    </FormSection>
    {children}
  </Container>
)
Form.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Form
