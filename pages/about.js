import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - SmartBoatInnovations</title>
          <meta
            name="description"
            content="Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety"
          />
          <meta property="og:title" content="About - SmartBoatInnovations" />
          <meta
            property="og:description"
            content="Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1"
          />
        </Head>
        <div className="about-container1">
          <div className="about-container2">
            <header data-thq="thq-navbar" className="about-navbar-interactive">
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="about-desktop-menu"
              >
                <nav
                  data-thq="thq-navbar-nav-links"
                  data-role="Nav"
                  className="about-nav"
                >
                  <Link href="/">
                    <a className="about-link">Home</a>
                  </Link>
                  <Link href="/about">
                    <a className="about-link01">About</a>
                  </Link>
                  <Link href="/services">
                    <a className="about-link02">Services</a>
                  </Link>
                  <Link href="/download-code">
                    <a className="about-link03">Code</a>
                  </Link>
                  <Link href="/contact">
                    <a className="about-link04">Contact</a>
                  </Link>
                </nav>
              </div>
              <div
                data-thq="thq-navbar-btn-group"
                className="about-btn-group"
              ></div>
              <div data-thq="thq-burger-menu" className="about-burger-menu">
                <svg viewBox="0 0 1024 1024" className="about-icon">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="about-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="about-nav1"
                >
                  <div className="about-container3">
                    <div
                      data-thq="thq-close-menu"
                      className="about-menu-close"
                    ></div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="about-nav2"
                  >
                    <Link href="/">
                      <a className="about-link05">Home</a>
                    </Link>
                    <Link href="/about">
                      <a className="about-link06">About</a>
                    </Link>
                    <Link href="/services">
                      <a className="about-link07">Services</a>
                    </Link>
                    <Link href="/download-code">
                      <a className="about-link08">Code</a>
                    </Link>
                    <Link href="/contact">
                      <a className="about-link09">Contact</a>
                    </Link>
                  </nav>
                  <div className="about-container4"></div>
                </div>
                <div className="about-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="about-icon2"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-icon4"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="about-icon6"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
          <img alt="image" src="/wlan%20logo.png" className="about-image" />
          <div className="about-container5">
            <span className="about-text">Smart Boat Innovations</span>
          </div>
        </div>
        <h1 className="about-text01">About Me    </h1>
        <span className="about-text02">
          <span>
            Welcome to Smart Boat Innovations! I&apos;m Rob, a seasoned sailor
            and tech enthusiast dedicated to revolutionizing the boating
            industry through the integration of accessible technology. With over
            20 years of global sailing experience and a Computer Science degree,
            I am committed to providing you with practical innovations and ideas
            that will transform your boating experience.
          </span>
          <br></br>
          <br></br>
          <span>
            At Smart Boat Innovations, we explore the world of boat automation
            and harness the power of the Internet of Things (IoT) technology. My
            philosophy revolves around utilizing free open systems and
            affordable sensors and equipment. I believe that everyone should
            have access to these advancements without breaking the bank.
          </span>
          <br></br>
          <br></br>
          <span>
            While our website provides valuable insights and information, the
            majority of our content can be found on our
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
            className="about-link10"
          >
            YouTube channel.
          </a>
          <span>
            {' '}
            I invite you to head over there, subscribe to our channel, and join
            the vibrant community of boating enthusiasts who are exploring the
            exciting possibilities of affordable technology.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="about-cards-container"></div>
        <footer className="about-footer">
          <div className="about-container6">
            <nav className="about-nav3">
              <Link href="/">
                <a className="about-link11">Home</a>
              </Link>
              <Link href="/about">
                <a className="about-link12">About</a>
              </Link>
              <Link href="/services">
                <a className="about-link13">Services</a>
              </Link>
              <Link href="/download-code">
                <a className="about-link14">Code</a>
              </Link>
              <Link href="/contact">
                <a className="about-link15">Contact</a>
              </Link>
            </nav>
          </div>
          <div className="about-separator"></div>
          <div className="about-container7">
            <span className="about-text11">
              © 2023 Smart Boat Innovations, All Rights Reserved.
            </span>
            <div className="about-icon-group1">
              <a
                href="https://ko-fi.com/smartboatinnovations"
                target="_blank"
                rel="noreferrer noopener"
                className="about-link16"
              >
                <img
                  alt="image"
                  src="/kofi_logo_blue.svg"
                  className="about-image1"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 5px;
            flex-direction: column;
          }
          .about-container1 {
            width: 100%;
            height: 300px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/website%20banner%20no%20logo%20or%20name.png');
          }
          .about-container2 {
            display: flex;
            position: relative;
          }
          .about-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .about-desktop-menu {
            display: flex;
          }
          .about-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-link {
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .about-link01 {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .about-link02 {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .about-link03 {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .about-link04 {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .about-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .about-icon {
            width: 32px;
            height: 32px;
          }
          .about-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .about-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .about-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-container4 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .about-icon-group {
            display: flex;
          }
          .about-icon2 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .about-icon4 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .about-icon6 {
            width: 16px;
            height: 16px;
          }
          .about-image {
            width: 100px;
            align-self: center;
            margin-top: 40px;
            object-fit: cover;
          }
          .about-container5 {
            width: 400px;
            height: 66px;
            display: flex;
            align-self: center;
            margin-top: 20px;
            align-items: flex-start;
          }
          .about-text {
            display: block;
            font-size: 32px;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-weight: 800;
            margin-left: auto;
            margin-right: auto;
          }
          .about-text01 {
            align-self: center;
            margin-top: 50px;
          }
          .about-text02 {
            font-size: 14px;
            text-align: justify;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .about-link10 {
            text-decoration: underline;
          }
          .about-cards-container {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .about-footer {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .about-container6 {
            display: flex;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-nav3 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .about-link11 {
            margin-left: 0px;
            text-decoration: underline;
          }
          .about-link12 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .about-link13 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .about-link14 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .about-link15 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .about-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: 32px;
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: 32px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-container7 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-link16 {
            display: contents;
          }
          .about-image1 {
            width: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .about-link {
              font-style: normal;
              font-weight: 500;
            }
            .about-link01 {
              font-style: normal;
              font-weight: 500;
            }
            .about-link02 {
              font-style: normal;
              font-weight: 500;
            }
            .about-link03 {
              font-style: normal;
              font-weight: 500;
            }
            .about-link04 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text02 {
              border-width: 0px;
            }
            .about-cards-container {
              justify-content: center;
            }
            .about-image1 {
              width: auto;
              height: 50px;
            }
          }
          @media (max-width: 767px) {
            .about-navbar-interactive {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-link01 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-link02 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-link03 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-link04 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-footer {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-separator {
              margin-top: 24px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 24px;
            }
            .about-container7 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-text11 {
              margin-bottom: 24px;
            }
          }
          @media (max-width: 479px) {
            .about-container {
              border-width: 3px;
            }
            .about-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .about-desktop-menu {
              display: none;
            }
            .about-btn-group {
              display: none;
            }
            .about-burger-menu {
              display: flex;
            }
            .about-mobile-menu {
              padding: 16px;
            }
            .about-link05 {
              font-style: normal;
              font-weight: 500;
              text-decoration: underline;
            }
            .about-link06 {
              font-weight: 500;
              text-decoration: underline;
            }
            .about-link07 {
              font-weight: 500;
              text-decoration: underline;
            }
            .about-link08 {
              font-weight: 500;
              text-decoration: underline;
            }
            .about-link09 {
              font-style: normal;
              font-weight: 500;
              text-decoration: underline;
            }
            .about-text {
              display: block;
              font-size: 26px;
              align-self: center;
              margin-left: auto;
              margin-right: auto;
            }
            .about-footer {
              padding: var(--dl-space-space-unit);
            }
            .about-separator {
              margin-top: 24px;
              margin-bottom: 24px;
            }
            .about-container7 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-text11 {
              text-align: center;
              margin-bottom: 24px;
            }
            .about-image1 {
              width: auto;
              height: 50px;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
