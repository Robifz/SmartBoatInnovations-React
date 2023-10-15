import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Services from './views/services'
import OilPressureYAML from './views/oil-pressure-yaml'
import DallasYAML from './views/dallas-yaml'
import Contact from './views/contact'
import Equipment from './views/equipment'
import INA219YAML from './views/ina219-yaml'
import DownloadCode from './views/download-code'
import LandingPage from './views/landing-page'
import Videos from './views/videos'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Services} exact path="/services" />
        <Route component={OilPressureYAML} exact path="/oil-pressure-yaml" />
        <Route component={DallasYAML} exact path="/dallas-yaml" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Equipment} exact path="/equipment" />
        <Route component={INA219YAML} exact path="/ina219-yaml" />
        <Route component={DownloadCode} exact path="/download-code" />
        <Route component={LandingPage} exact path="/" />
        <Route component={Videos} exact path="/videos" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
