import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>SmartBoatInnovations</title>
        <meta
          name="description"
          content="Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety"
        />
        <meta property="og:title" content="SmartBoatInnovations" />
        <meta
          property="og:description"
          content="Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="landing-page-container1">
        <NavbarInteractive1 rootClassName="navbar-interactive1-root-class-name"></NavbarInteractive1>
        <div className="landing-page-container2"></div>
        <img
          alt="image"
          src="/wlan%20logo.png"
          className="landing-page-image"
        />
        <div className="landing-page-container3">
          <span className="landing-page-text">Smart Boat Innovations</span>
        </div>
      </div>
      <h1 className="landing-page-text01">Welcome</h1>
      <span className="landing-page-text02">
        <span>
          Welcome to Smart Boat Innovations! I&apos;m Rob, a seasoned sailor and
          tech enthusiast dedicated to revolutionizing the boating industry
          through the integration of accessible technology. With over 20 years
          of global sailing experience and a Computer Science degree, I am
          committed to providing you with practical innovations and ideas that
          will transform your boating experience. At Smart Boat Innovations, we
          explore the world of boat automation and harness the power of the
          Internet of Things (IoT) technology.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <br></br>
        <span>
          My philosophy revolves around utilizing free open systems and
          affordable sensors and equipment. I believe that everyone should have
          access to these advancements without breaking the bank. While our
          website provides valuable insights and information, the majority of
          our content can be found on our
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <a
          href="https://www.youtube.com/@SmartBoatInnovations"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link"
        >
          YouTube
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </a>
        <span>
          channel. I invite you to head over there, subscribe to our channel,
          and join the vibrant community of boating enthusiasts who are
          exploring the exciting possibilities of affordable technology.
        </span>
        <br></br>
        <br></br>
      </span>
      <h1 className="landing-page-text10">
        <span>Introduction Video</span>
        <br></br>
      </h1>
      <div className="landing-page-container4">
        <a
          href="https://youtu.be/Z6F7-IKwX9A"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link1"
        >
          <img
            alt="image"
            src="/thumbnail%20diy%20rounded-200h.png"
            className="landing-page-image1"
          />
        </a>
      </div>
      <span className="landing-page-text13">
        <br></br>
        <span>
          All the other Smart Boat videos can be found
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <Link to="/videos" className="landing-page-navlink">
          here
        </Link>
      </span>
      <footer className="landing-page-footer">
        <div className="landing-page-container5">
          <nav className="landing-page-nav">
            <Link to="/" className="landing-page-navlink1">
              Home
            </Link>
            <Link to="/equipment" className="landing-page-navlink2">
              Equipment
            </Link>
            <Link to="/services" className="landing-page-navlink3">
              Services
            </Link>
            <Link to="/download-code" className="landing-page-navlink4">
              Code
            </Link>
            <Link to="/contact" className="landing-page-navlink5">
              Contact
            </Link>
          </nav>
        </div>
        <div className="landing-page-separator"></div>
        <div className="landing-page-container6">
          <span className="landing-page-text16">
            © 2023 Smart Boat Innovations, All Rights Reserved.
          </span>
          <div className="landing-page-icon-group">
            <a
              href="https://ko-fi.com/smartboatinnovations"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-page-link2"
            >
              <img
                alt="image"
                src="/kofi_logo_blue.svg"
                className="landing-page-image2"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
