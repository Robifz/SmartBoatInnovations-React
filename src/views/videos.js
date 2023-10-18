import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './videos.css'

const Videos = (props) => {
  return (
    <div className="videos-container">
      <Helmet>
        <title>Videos - SmartBoatInnovations</title>
        <meta
          name="description"
          content="Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety"
        />
        <meta property="og:title" content="Videos - SmartBoatInnovations" />
        <meta
          property="og:description"
          content="Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="videos-container01">
        <div className="videos-container02">
          <header data-thq="thq-navbar" className="videos-navbar-interactive">
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="videos-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="videos-nav"
              >
                <Link to="/" className="videos-navlink">
                  Home
                </Link>
                <Link to="/equipment" className="videos-navlink01">
                  Equipment
                </Link>
                <Link to="/services" className="videos-navlink02">
                  Services
                </Link>
                <Link to="/download-code" className="videos-navlink03">
                  Code
                </Link>
                <Link to="/contact" className="videos-navlink04">
                  Contact
                </Link>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="videos-btn-group"
            ></div>
            <div data-thq="thq-burger-menu" className="videos-burger-menu">
              <svg viewBox="0 0 1024 1024" className="videos-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="videos-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="videos-nav1"
              >
                <div className="videos-container03">
                  <div
                    data-thq="thq-close-menu"
                    className="videos-menu-close"
                  ></div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="videos-nav2"
                >
                  <Link to="/" className="videos-navlink05">
                    Home
                  </Link>
                  <Link to="/equipment" className="videos-navlink06">
                    Equipment
                  </Link>
                  <Link to="/services" className="videos-navlink07">
                    Services
                  </Link>
                  <Link to="/download-code" className="videos-navlink08">
                    Code
                  </Link>
                  <Link to="/contact" className="videos-navlink09">
                    Contact
                  </Link>
                </nav>
                <div className="videos-container04"></div>
              </div>
              <div className="videos-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="videos-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="videos-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="videos-icon6"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <img alt="image" src="/wlan%20logo.png" className="videos-image" />
        <div className="videos-container05">
          <span className="videos-text">Smart Boat Innovations</span>
        </div>
      </div>
      <h1 className="videos-text01">Smart Boating Videos</h1>
      <div className="videos-container06">
        <span className="videos-text02">
          <span>
            The majority of our content can be found on our
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
            className="videos-link"
          >
            YouTube channel.
          </a>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            I invite you to head over there, subscribe to our channel, and join
            the vibrant community
          </span>
          <br></br>
          <span>
            {' '}
            of boating enthusiasts who are exploring the exciting possibilities
            of affordable technology
          </span>
          <br></br>
          <span>.</span>
        </span>
      </div>
      <div className="videos-container07">
        <div className="videos-container08">
          <a
            href="https://youtu.be/tXhyfL7mbQE"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link01"
          >
            <img
              alt="image"
              src="/essential%20thumbnail%20low%20200-200h.png"
              className="videos-image01"
            />
          </a>
          <a
            href="https://youtu.be/H34KSeNSUcU"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link02"
          >
            <img
              alt="image"
              src="/thumbnail%20router%20low-200h.png"
              className="videos-image02"
            />
          </a>
          <a
            href="https://youtu.be/fnlelyXIBqE"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link03"
          >
            <img
              alt="image"
              src="/thumbnail%20ha%20setup%20guide%20low-200h.png"
              className="videos-image03"
            />
          </a>
          <a
            href="https://youtu.be/EXuBQPV3NCY"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link04"
          >
            <img
              alt="image"
              src="/thumbnail%20zigbee%20low-200h.png"
              className="videos-image04"
            />
          </a>
          <a
            href="https://youtu.be/rWSxImiTxEw"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link05"
          >
            <img
              alt="image"
              src="/thumbnail%20siren%20low-200h.png"
              className="videos-image05"
            />
          </a>
          <a
            href="https://youtu.be/bOKVcJPTIqs"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link06"
          >
            <img
              alt="image"
              src="/thumbnail%20ha%20add%20on%20low-200h.png"
              className="videos-image06"
            />
          </a>
          <a
            href="https://youtu.be/hfo4Pd6KxlE"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link07"
          >
            <img
              alt="image"
              src="/engine%20temp%20thumbnail%20low-200h.png"
              className="videos-image07"
            />
          </a>
          <a
            href="https://youtu.be/q0JC-2xTj_I"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link08"
          >
            <img
              alt="image"
              src="/intro%20thumbnail%20brighter%20low-200h.png"
              className="videos-image08"
            />
          </a>
        </div>
        <div className="videos-container09">
          <a
            href="https://youtu.be/t87EIejPqaU"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link09"
          >
            <img
              alt="image"
              src="/thumbnail%20raspberry%20pi%20low-200h.png"
              className="videos-image09"
            />
          </a>
          <a
            href="https://youtu.be/sUzZLOp1Rr4"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link10"
          >
            <img
              alt="image"
              src="/thumbnail%20smart%20app%20low-200h.png"
              className="videos-image10"
            />
          </a>
          <a
            href="https://youtu.be/T18iQO_atgE"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link11"
          >
            <img
              alt="image"
              src="/thumbnail%20auto%20anchor%20light%20low-200h.png"
              className="videos-image11"
            />
          </a>
          <a
            href="https://youtu.be/KiT4qYASe44"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link12"
          >
            <img
              alt="image"
              src="/thumbnail%20new%20bilge%20low-200h.png"
              className="videos-image12"
            />
          </a>
          <a
            href="https://youtu.be/qadsMnxe9c0"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link13"
          >
            <img
              alt="image"
              src="/fire%20alarm%20300-200h.png"
              className="videos-image13"
            />
          </a>
          <a
            href="https://youtu.be/Xjgw3LuyOAw"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link14"
          >
            <img
              alt="image"
              src="/esp32%20low-200h.png"
              className="videos-image14"
            />
          </a>
          <a
            href="https://youtu.be/ScP7xjOwWFg"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link15"
          >
            <img
              alt="image"
              src="/oil%20pressure%20thumbnail%20low-200h.png"
              className="videos-image15"
            />
          </a>
          <a
            href="https://youtu.be/Z6F7-IKwX9A"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-link16"
          >
            <img
              alt="image"
              src="/thumbnail%20diy%20smart%20low-200h.png"
              className="videos-image16"
            />
          </a>
        </div>
      </div>
      <div className="videos-cards-container"></div>
      <footer className="videos-footer">
        <div className="videos-container10">
          <nav className="videos-nav3">
            <Link to="/" className="videos-navlink10">
              Home
            </Link>
            <Link to="/equipment" className="videos-navlink11">
              Equipment
            </Link>
            <Link to="/services" className="videos-navlink12">
              Services
            </Link>
            <Link to="/download-code" className="videos-navlink13">
              Code
            </Link>
            <Link to="/contact" className="videos-navlink14">
              Contact
            </Link>
          </nav>
        </div>
        <div className="videos-separator"></div>
        <div className="videos-container11">
          <span className="videos-text11">
            © 2023 Smart Boat Innovations, All Rights Reserved.
          </span>
          <div className="videos-icon-group1">
            <a
              href="https://ko-fi.com/smartboatinnovations"
              target="_blank"
              rel="noreferrer noopener"
              className="videos-link17"
            >
              <img
                alt="image"
                src="/kofi_logo_blue.svg"
                className="videos-image17"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Videos
