import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavbarInteractive = (props) => {
  return (
    <>
      <div className="navbar-interactive-container">
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-navbar-interactive"
        >
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="navbar-interactive-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="navbar-interactive-nav"
            >
              <Link href="/">
                <a className="navbar-interactive-link">{props.text}</a>
              </Link>
              <span className="navbar-interactive-text">{props.text1}</span>
              <span className="navbar-interactive-text1">{props.text2}</span>
              <span className="navbar-interactive-text2">{props.text3}</span>
              <span className="navbar-interactive-text3">{props.text4}</span>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="navbar-interactive-btn-group"
          ></div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-interactive-nav1"
            >
              <div className="navbar-interactive-container1">
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-menu-close"
                ></div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-interactive-nav2"
              >
                <span className="navbar-interactive-text4">{props.text5}</span>
                <span className="navbar-interactive-text5">{props.text6}</span>
                <span className="navbar-interactive-text6">{props.text7}</span>
                <span className="navbar-interactive-text7">{props.text8}</span>
                <span className="navbar-interactive-text8">{props.text9}</span>
              </nav>
              <div className="navbar-interactive-container2"></div>
            </div>
            <div className="navbar-interactive-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-interactive-icon2"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-interactive-icon4"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-interactive-icon6"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-container {
            display: flex;
            position: relative;
          }
          .navbar-interactive-navbar-interactive {
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
          .navbar-interactive-desktop-menu {
            display: flex;
          }
          .navbar-interactive-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-interactive-link {
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-interactive-text {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .navbar-interactive-text1 {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .navbar-interactive-text2 {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .navbar-interactive-text3 {
            font-style: normal;
            font-weight: 500;
            margin-left: 32px;
            text-decoration: none;
          }
          .navbar-interactive-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-icon {
            width: 16px;
            height: 16px;
          }
          .navbar-interactive-mobile-menu {
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
          .navbar-interactive-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .navbar-interactive-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-text4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-text5 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-text6 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-text7 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-text8 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-container2 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .navbar-interactive-icon-group {
            display: flex;
          }
          .navbar-interactive-icon2 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .navbar-interactive-icon4 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .navbar-interactive-icon6 {
            width: 16px;
            height: 16px;
          }
          @media (max-width: 991px) {
            .navbar-interactive-link {
              font-style: normal;
              font-weight: 500;
            }
            .navbar-interactive-text {
              font-style: normal;
              font-weight: 500;
            }
            .navbar-interactive-text1 {
              font-style: normal;
              font-weight: 500;
            }
            .navbar-interactive-text2 {
              font-style: normal;
              font-weight: 500;
            }
            .navbar-interactive-text3 {
              font-style: normal;
              font-weight: 500;
            }
          }
          @media (max-width: 767px) {
            .navbar-interactive-navbar-interactive {
              padding-left: 32px;
              padding-right: 32px;
            }
            .navbar-interactive-text {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-interactive-text1 {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-interactive-text2 {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-interactive-text3 {
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-interactive-desktop-menu {
              display: none;
            }
            .navbar-interactive-btn-group {
              display: none;
            }
            .navbar-interactive-burger-menu {
              display: flex;
            }
            .navbar-interactive-mobile-menu {
              padding: 16px;
            }
            .navbar-interactive-text4 {
              text-decoration: none;
            }
            .navbar-interactive-text5 {
              font-weight: 500;
              text-decoration: underline;
            }
            .navbar-interactive-text6 {
              font-weight: 500;
              text-decoration: underline;
            }
            .navbar-interactive-text7 {
              font-weight: 500;
              text-decoration: underline;
            }
            .navbar-interactive-text8 {
              text-decoration: underline;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive.defaultProps = {
  text8: 'Code',
  text7: 'Services',
  text2: 'Services',
  text9: 'Contact',
  text: 'Home',
  text4: 'Contact',
  text1: 'About',
  text5: 'Home',
  text3: 'Code',
  text6: 'About',
}

NavbarInteractive.propTypes = {
  text8: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  text9: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
}

export default NavbarInteractive
