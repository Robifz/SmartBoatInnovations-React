import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Services from './views/services'
import DallasYAML from './views/dallas-yaml'
import Contact from './views/contact'
import Equipment from './views/equipment'
import DownloadCode from './views/download-code'
import LandingPage from './views/landing-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Services} exact path="/services" />
        <Route component={DallasYAML} exact path="/dallas-yaml" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Equipment} exact path="/equipment" />
        <Route component={DownloadCode} exact path="/download-code" />
        <Route component={LandingPage} exact path="/" />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
