import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - SmartBoatInnovations</title>
        <meta
          name="description"
          content="Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety"
        />
        <meta property="og:title" content="Services - SmartBoatInnovations" />
        <meta
          property="og:description"
          content="Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1"
        />
      </Helmet>
      <div className="services-container1">
        <div className="services-container2">
          <header data-thq="thq-navbar" className="services-navbar-interactive">
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="services-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="services-nav"
              >
                <Link to="/" className="services-navlink">
                  Home
                </Link>
                <Link to="/equipment" className="services-navlink01">
                  Equipment
                </Link>
                <span className="services-text">Services</span>
                <Link to="/download-code" className="services-navlink02">
                  Code
                </Link>
                <Link to="/contact" className="services-navlink03">
                  Contact
                </Link>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="services-btn-group"
            ></div>
            <div data-thq="thq-burger-menu" className="services-burger-menu">
              <svg viewBox="0 0 1024 1024" className="services-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="services-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="services-nav1"
              >
                <div className="services-container3">
                  <div
                    data-thq="thq-close-menu"
                    className="services-menu-close"
                  ></div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="services-nav2"
                >
                  <Link to="/" className="services-navlink04">
                    Home
                  </Link>
                  <Link to="/equipment" className="services-navlink05">
                    Equipment
                  </Link>
                  <Link to="/services" className="services-navlink06">
                    Services
                  </Link>
                  <Link to="/download-code" className="services-navlink07">
                    Code
                  </Link>
                  <Link to="/contact" className="services-navlink08">
                    Contact
                  </Link>
                </nav>
                <div className="services-container4"></div>
              </div>
              <div className="services-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="services-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="services-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="services-icon6"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <img alt="image" src="/wlan%20logo.png" className="services-image" />
        <div className="services-container5">
          <span className="services-text01">Smart Boat Innovations</span>
        </div>
      </div>
      <h1 className="services-text02">Services</h1>
      <span className="services-text03">
        <span>
          Are you looking to automate your boat and enhance its functionality,
          but lack the time or technical expertise to do so? Look no further!
          With my professional consultancy services, I can assist you in fully
          automating your boat, and the best part is, it can all be done
          remotely without requiring your physical presence.Here are the options
          available to you:
        </span>
        <br></br>
        <br></br>
        <span>
          1. Personalized Consultation: We will discuss your specific
          requirements and preferences for your smart boat. Based on this
          information, I will develop a comprehensive plan of approach tailored
          to your needs.
        </span>
        <br></br>
        <br></br>
        <span>
          2. Complete Setup and Management: Sit back and relax as I handle the
          entire setup and management of your smart boat. From installing the
          necessary systems and configuring them to ongoing maintenance and
          troubleshooting, I will ensure that your boat operates smoothly and
          efficiently.
        </span>
        <br></br>
        <br></br>
        <span>
          3. Knowledge Transfer: If you prefer to be more hands-on with the
          management of your smart boat, I can provide a kickstart session where
          I share my expertise and knowledge with you. You will gain the
          necessary skills and understanding to take charge of managing your
          boat yourself.
        </span>
        <br></br>
        <br></br>
        <span>
          4. Personalized Advice: If you already have some automation systems in
          place but need guidance on how to optimize and enhance them, I can
          provide personalized advice. I will help you identify the best
          strategies and technologies to further automate your boat and maximize
          its potential.
        </span>
        <br></br>
        <br></br>
        <span>
          5. One-on-One Communication: I am available for personal consultations
          to address any questions or concerns you may have. We can discuss your
          project in detail, explore options, and ensure that your smart boat
          meets your expectations.
        </span>
        <br></br>
        <br></br>
        <span>
          Please don&apos;t hesitate to
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <Link to="/contact" className="services-navlink09">
          contact
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </Link>
        <span>
          me to discuss your requirements and delve into further details.
          Together, we can make your boat smarter and more efficient, providing
          you with a truly enjoyable and hassle-free experience on the water.
        </span>
        <br></br>
      </span>
      <div className="services-cards-container"></div>
      <footer className="services-footer">
        <div className="services-container6">
          <nav className="services-nav3">
            <Link to="/" className="services-navlink10">
              Home
            </Link>
            <Link to="/equipment" className="services-navlink11">
              Equipment
            </Link>
            <Link to="/services" className="services-navlink12">
              Services
            </Link>
            <Link to="/download-code" className="services-navlink13">
              Code
            </Link>
            <Link to="/contact" className="services-navlink14">
              Contact
            </Link>
          </nav>
        </div>
        <div className="services-separator"></div>
        <div className="services-container7">
          <span className="services-text25">
            © 2023 Smart Boat Innovations, All Rights Reserved.
          </span>
          <div className="services-icon-group1">
            <a
              href="https://ko-fi.com/smartboatinnovations"
              target="_blank"
              rel="noreferrer noopener"
              className="services-link"
            >
              <img
                alt="image"
                src="/kofi_logo_blue.svg"
                className="services-image1"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Services
