import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import './download-code.css'

const DownloadCode = (props) => {
  return (
    <div className="download-code-container">
      <Helmet>
        <title>Download-Code - SmartBoatInnovations</title>
        <meta
          name="description"
          content="Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety"
        />
        <meta
          property="og:title"
          content="Download-Code - SmartBoatInnovations"
        />
        <meta
          property="og:description"
          content="Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="download-code-container01">
        <div className="download-code-container02">
          <NavbarInteractive1></NavbarInteractive1>
        </div>
        <img
          alt="image"
          src="/wlan%20logo.png"
          className="download-code-image"
        />
        <div className="download-code-container03">
          <span className="download-code-text">Smart Boat Innovations</span>
        </div>
      </div>
      <h1 className="download-code-text01">Download Code Centre</h1>
      <span className="download-code-text02">
        <span>
          Welcome to the Smart Boat Innovations Download Center! I&apos;m here
          to share a collection of code snippets that I&apos;ve personally
          crafted to enhance your smart boat&apos;s capabilities. I&apos;ve put
          in a lot of time and effort to develop this code, and if you find it
          valuable, I kindly ask for your support through a donation.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <br></br>
        <span>
          Your contribution helps me fuel my passion for advancing boating
          technology and enables future projects.
        </span>
        <br></br>
        <br></br>
        <span>Rob</span>
        <br></br>
        <br></br>
      </span>
      <a
        href="https://ko-fi.com/smartboatinnovations"
        target="_blank"
        rel="noreferrer noopener"
        className="download-code-link"
      >
        <img
          alt="image"
          src="/kofi_button_blue-200h.png"
          className="download-code-image1"
        />
      </a>
      <div className="download-code-container04"></div>
      <div className="download-code-container05">
        <span className="download-code-text12">Available Code Snippets:</span>
      </div>
      <div className="download-code-container06">
        <Link to="/commands" className="download-code-navlink">
          Miscellaneous Commands
        </Link>
        <Link to="/dallas-yaml" className="download-code-navlink01">
          Temperature Sensor Dallas YAML
        </Link>
        <Link to="/ina219-yaml" className="download-code-navlink02">
          INA219 YAML
        </Link>
        <Link to="/digital-gauge-yaml" className="download-code-navlink03">
          Digital Gauge YAML
        </Link>
        <Link to="/oil-pressure-yaml" className="download-code-navlink04">
          Oil Pressure Template YAML
        </Link>
        <Link to="/tank-yaml" className="download-code-navlink05">
          Tank Template YAML
        </Link>
        <Link to="/tacho-yaml" className="download-code-navlink06">
          <span>Tachometer</span>
          <span> YAML</span>
        </Link>
        <Link to="/smart0183" className="download-code-navlink07">
          <span>
            Smart0183 
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>YAML</span>
        </Link>
        <Link to="/smart0183serial" className="download-code-navlink08">
          Smart 0183 Serial
        </Link>
        <Link to="/smart0183tcp" className="download-code-navlink09">
          Smart 0183 TCP
        </Link>
        <Link to="/smart2000esp" className="download-code-navlink10">
          Smart 2000 ESP
        </Link>
        <Link to="/smart2000usb" className="download-code-navlink11">
          <span>Smart 200</span>
          <span>0 USB</span>
        </Link>
      </div>
      <div className="download-code-container07">
        <div>
          <div className="download-code-container09">
            <Script
              html={`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334564583627358"
     crossorigin="anonymous"></script>`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="download-code-cards-container"></div>
      <footer className="download-code-footer">
        <div className="download-code-container10">
          <nav className="download-code-nav">
            <Link to="/" className="download-code-navlink12">
              Home
            </Link>
            <Link to="/equipment" className="download-code-navlink13">
              Equipment
            </Link>
            <Link to="/services" className="download-code-navlink14">
              Services
            </Link>
            <Link to="/download-code" className="download-code-navlink15">
              Code
            </Link>
            <Link to="/contact" className="download-code-navlink16">
              Contact
            </Link>
          </nav>
        </div>
        <div className="download-code-separator"></div>
        <div className="download-code-container11">
          <span className="download-code-text19">
            © 2023 Smart Boat Innovations, All Rights Reserved.
          </span>
          <div className="download-code-icon-group">
            <a
              href="https://ko-fi.com/smartboatinnovations"
              target="_blank"
              rel="noreferrer noopener"
              className="download-code-link1"
            >
              <img
                alt="image"
                src="/kofi_logo_blue.svg"
                className="download-code-image2"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DownloadCode
