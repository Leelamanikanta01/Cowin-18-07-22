import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import StateWiseCases from './components/StateWiseCases'
import Vaccination from './components/Vaccination'
import ThemeContent from './components/ThemeContent'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state

    return (
      <ThemeContent.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Vaccination" component={Vaccination} />
          <Route exact path="/state/:stateCode" component={StateWiseCases} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContent.Provider>
    )
  }
}

export default App
