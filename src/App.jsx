import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Alert, Header } from './components'
import { HomePage, SignInPage, NotFoundPage } from './pages'
import { store, actions } from './redux'
import equals from './utils/equals'

const configureSession = () => {
  const session = JSON.parse(localStorage.getItem('userSession'))
  if (session) {
    store.dispatch(actions.setCurrentUser(session.username, session.token))
  }
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PagesContainer = styled.div`
  flex-grow: 1;
`

const Pages = ({ children }) => (
  <PagesContainer>
    <Container style={{ height: '100%' }}>
      <Switch>{children}</Switch>
    </Container>
  </PagesContainer>
)

const App = () => {
  const [alert, setAlert] = useState(store.getState().alert)

  const stateUpdateHandler = () => {
    const updatedState = store.getState()
    if (!equals(alert, updatedState.alert)) {
      setAlert(updatedState.alert)
    }
  }

  store.subscribe(stateUpdateHandler)

  useEffect(() => {
    configureSession()
  }, [])

  return (
    <Wrapper>
      <Router>
        <Header />
        <Pages>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route component={NotFoundPage} />
        </Pages>
      </Router>
      <Alert
        open={alert.open}
        type={alert.type}
        message={alert.message}
        onClose={() => {
          store.dispatch(actions.hideAlert())
        }}
      />
    </Wrapper>
  )
}

export default App
