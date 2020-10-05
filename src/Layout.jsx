import React from 'react'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { HomePage, NotFoundPage } from './pages'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PagesContainer = styled.div`
  flex-grow: 1;
`

const Pages = ({ children }) => {
  return (
    <PagesContainer>
      <Container style={{ height: '100%' }}>
        <Switch>{children}</Switch>
      </Container>
    </PagesContainer>
  )
}

const Layout = () => {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Pages>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Pages>
      </Router>
    </Wrapper>
  )
}

export default Layout
