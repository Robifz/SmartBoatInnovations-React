import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Services from './views/services'
import Contact from './views/contact'
import DownloadCode from './views/download-code'
import LandingPage from './views/landing-page'
import About from './views/about'
import DallasYAML from './views/dallas-yaml'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Services} exact path="/services" />
        <Route component={Contact} exact path="/contact" />
        <Route component={DownloadCode} exact path="/download-code" />
        <Route component={LandingPage} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={DallasYAML} exact path="/dallas-yaml" />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
