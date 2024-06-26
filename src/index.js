import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import TankYAML from './views/tank-yaml'
import Smart2000usb from './views/smart2000usb'
import SmartAnchor from './views/smart-anchor'
import Smart0183serial from './views/smart0183serial'
import Smart2000esp from './views/smart2000esp'
import TachoYAML from './views/tacho-yaml'
import Smart0183tcp from './views/smart0183tcp'
import DigitalGaugeYAML from './views/digital-gauge-yaml'
import Videos from './views/videos'
import Services from './views/services'
import OilPressureYAML from './views/oil-pressure-yaml'
import Smart0183 from './views/smart0183'
import DallasYAML from './views/dallas-yaml'
import Contact from './views/contact'
import Equipment from './views/equipment'
import INA219YAML from './views/ina219-yaml'
import DownloadCode from './views/download-code'
import Commands from './views/commands'
import LandingPage from './views/landing-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={TankYAML} exact path="/tank-yaml" />
        <Route component={Smart2000usb} exact path="/smart2000usb" />
        <Route component={SmartAnchor} exact path="/smart-anchor" />
        <Route component={Smart0183serial} exact path="/smart0183serial" />
        <Route component={Smart2000esp} exact path="/smart2000esp" />
        <Route component={TachoYAML} exact path="/tacho-yaml" />
        <Route component={Smart0183tcp} exact path="/smart0183tcp" />
        <Route component={DigitalGaugeYAML} exact path="/digital-gauge-yaml" />
        <Route component={Videos} exact path="/videos" />
        <Route component={Services} exact path="/services" />
        <Route component={OilPressureYAML} exact path="/oil-pressure-yaml" />
        <Route component={Smart0183} exact path="/smart0183" />
        <Route component={DallasYAML} exact path="/dallas-yaml" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Equipment} exact path="/equipment" />
        <Route component={INA219YAML} exact path="/ina219-yaml" />
        <Route component={DownloadCode} exact path="/download-code" />
        <Route component={Commands} exact path="/commands" />
        <Route component={LandingPage} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
