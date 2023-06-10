import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PlaceCard from '../components/place-card'
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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1"
        />
      </Helmet>
      <div className="landing-page-container1">
        <div className="landing-page-container2">
          <header
            data-thq="thq-navbar"
            className="landing-page-navbar-interactive"
          >
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="landing-page-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="landing-page-nav"
              >
                <Link to="/" className="landing-page-navlink">
                  Home
                </Link>
                <Link to="/about" className="landing-page-navlink01">
                  About
                </Link>
                <Link to="/services" className="landing-page-navlink02">
                  Services
                </Link>
                <span className="landing-page-text">Code</span>
                <Link to="/contact" className="landing-page-navlink03">
                  Contact
                </Link>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="landing-page-btn-group"
            ></div>
            <div
              data-thq="thq-burger-menu"
              className="landing-page-burger-menu"
            >
              <svg viewBox="0 0 1024 1024" className="landing-page-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="landing-page-mobile-menu"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="landing-page-nav1"
              >
                <div className="landing-page-container3">
                  <div
                    data-thq="thq-close-menu"
                    className="landing-page-menu-close"
                  ></div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="landing-page-nav2"
                >
                  <Link to="/" className="landing-page-navlink04">
                    Home
                  </Link>
                  <Link to="/about" className="landing-page-navlink05">
                    About
                  </Link>
                  <Link to="/services" className="landing-page-navlink06">
                    Services
                  </Link>
                  <Link to="/download-code" className="landing-page-navlink07">
                    Code
                  </Link>
                  <Link to="/contact" className="landing-page-navlink08">
                    Contact
                  </Link>
                </nav>
                <div className="landing-page-container4"></div>
              </div>
              <div className="landing-page-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon6"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <img
          alt="image"
          src="/wlan%20logo.png"
          className="landing-page-image"
        />
        <div className="landing-page-container5">
          <span className="landing-page-text1">Smart Boat Innovations</span>
        </div>
      </div>
      <h1 className="landing-page-text2">Welcome</h1>
      <span className="landing-page-text3">
        <span>
          Welcome to Smart Boat Innovations! I&apos;m Rob, a seasoned sailor and
          tech enthusiast dedicated to revolutionizing the boating industry
          through the integration of accessible technology. With over 20 years
          of global sailing experience and a Computer Science degree, I am
          committed to providing you with practical innovations and ideas that
          will transform your boating experience.
        </span>
        <br></br>
      </span>
      <h1 className="landing-page-text6">Videos</h1>
      <div className="landing-page-cards-container">
        <a
          href="https://youtu.be/q0JC-2xTj_I"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link"
        >
          <PlaceCard
            city="Introduction to Smart Boating"
            image="/intro%20thumbnail1.png"
            description="Join me on a journey towards smart boating in this video, where I'll show you the power of free and open systems."
            rootClassName="place-card-root-class-name6"
            className="landing-page-component"
          ></PlaceCard>
        </a>
        <a
          href="https://youtu.be/bwMf2vMeN48"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link1"
        >
          <PlaceCard
            city="What is Smart Boating"
            image="/thumbnail%20what%20is%20smart%20boating.png"
            description="In this video, we discuss the importance of Smart Boating and how it can enhance safety, efficiency, and peace of mind while on the water."
            rootClassName="place-card-root-class-name7"
            className="landing-page-component1"
          ></PlaceCard>
        </a>
        <a
          href="https://youtu.be/tXhyfL7mbQE"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link2"
        >
          <PlaceCard
            city="Essential equipment to get started"
            image="/essential%20thumbnail1.png"
            description="In this video I'll show you the essential equipment for setting up a smart boat."
            rootClassName="place-card-root-class-name8"
            className="landing-page-component2"
          ></PlaceCard>
        </a>
        <a
          href="https://youtu.be/t87EIejPqaU"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link3"
        >
          <PlaceCard
            city="Unbox and Install Raspberry Pi 4"
            image="/thumbnail%20unbox%20pi%203.png"
            description="In this video, we delve into the unboxing experience of the Raspberry Pi 4B with 8GB of RAM. "
            rootClassName="place-card-root-class-name9"
            className="landing-page-component3"
          ></PlaceCard>
        </a>
        <a
          href="https://youtu.be/H34KSeNSUcU"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link4"
        >
          <PlaceCard
            city="4G LTE Router"
            image="/thumbnail%20router%20final1.png"
            description=" In this video, we'll dive into the installation and configuration of a 4G LTE router, which is an essential component for our smart boat setup."
            rootClassName="place-card-root-class-name10"
            className="landing-page-component4"
          ></PlaceCard>
        </a>
        <a
          href="https://youtu.be/sUzZLOp1Rr4"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link5"
        >
          <PlaceCard
            city="Install Smart Boat App"
            image="/thumbnail%20smart%20app%20ha%20install%20final.png"
            description="In this video we will go through the installation and configuration of Home Assistant"
            rootClassName="place-card-root-class-name11"
            className="landing-page-component5"
          ></PlaceCard>
        </a>
      </div>
      <footer className="landing-page-footer">
        <div className="landing-page-container6">
          <nav className="landing-page-nav3">
            <Link to="/" className="landing-page-navlink09">
              Home
            </Link>
            <Link to="/about" className="landing-page-navlink10">
              About
            </Link>
            <Link to="/services" className="landing-page-navlink11">
              Services
            </Link>
            <Link to="/download-code" className="landing-page-navlink12">
              Code
            </Link>
            <Link to="/contact" className="landing-page-navlink13">
              Contact
            </Link>
          </nav>
        </div>
        <div className="landing-page-separator"></div>
        <div className="landing-page-container7">
          <span className="landing-page-text7">
            © 2023 Smart Boat Innovations, All Rights Reserved.
          </span>
          <div className="landing-page-icon-group1">
            <a
              href="https://ko-fi.com/smartboatinnovations"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-page-link6"
            >
              <img
                alt="image"
                src="/kofi_logo_blue.svg"
                className="landing-page-image1"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
