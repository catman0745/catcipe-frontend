import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled(Grid)`
  ${({ theme }) => `
    padding: ${theme.spacing(2)}px;
  `}
`

const FormSection = ({ children, direction, justify }) => (
  <Container container direction={direction} justify={justify} spacing={2}>
    {React.Children.map(children, (Child) => (
      <Grid item>{Child}</Grid>
    ))}
  </Container>
)
FormSection.propTypes = {
  direction: PropTypes.string,
  justify: PropTypes.string,
}
FormSection.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
}

export default FormSection
