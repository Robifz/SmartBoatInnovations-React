import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './equipment.css'

const Equipment = (props) => {
  return (
    <div className="equipment-container">
      <Helmet>
        <title>Equipment - SmartBoatInnovations</title>
        <meta
          name="description"
          content="Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety"
        />
        <meta property="og:title" content="Equipment - SmartBoatInnovations" />
        <meta
          property="og:description"
          content="Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="equipment-container01">
        <div className="equipment-container02">
          <header
            data-thq="thq-navbar"
            className="equipment-navbar-interactive"
          >
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="equipment-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="equipment-nav"
              >
                <Link to="/" className="equipment-navlink">
                  Home
                </Link>
                <Link to="/equipment" className="equipment-navlink01">
                  Equipment
                </Link>
                <Link to="/services" className="equipment-navlink02">
                  Services
                </Link>
                <Link to="/download-code" className="equipment-navlink03">
                  Code
                </Link>
                <Link to="/contact" className="equipment-navlink04">
                  Contact
                </Link>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="equipment-btn-group"
            ></div>
            <div data-thq="thq-burger-menu" className="equipment-burger-menu">
              <svg viewBox="0 0 1024 1024" className="equipment-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="equipment-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="equipment-nav1"
              >
                <div className="equipment-container03">
                  <div
                    data-thq="thq-close-menu"
                    className="equipment-menu-close"
                  ></div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="equipment-nav2"
                >
                  <Link to="/" className="equipment-navlink05">
                    Home
                  </Link>
                  <Link to="/equipment" className="equipment-navlink06">
                    Equipment
                  </Link>
                  <Link to="/services" className="equipment-navlink07">
                    Services
                  </Link>
                  <Link to="/download-code" className="equipment-navlink08">
                    Code
                  </Link>
                  <Link to="/contact" className="equipment-navlink09">
                    Contact
                  </Link>
                </nav>
                <div className="equipment-container04"></div>
              </div>
              <div className="equipment-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="equipment-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="equipment-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="equipment-icon6"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <img alt="image" src="/wlan%20logo.png" className="equipment-image" />
        <div className="equipment-container05">
          <span className="equipment-text">Smart Boat Innovations</span>
        </div>
      </div>
      <h1 className="equipment-text001">Equipment for Smart Boating</h1>
      <div className="equipment-container06">
        <span className="equipment-text002">
          <br></br>
          <span>
            Explore the equipment featured in our YouTube series on building the
            ultimate smart boat.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Below, you will find each item listed along with direct links to
            purchase them on Amazon and AliExpress.
          </span>
          <br></br>
          <br></br>
        </span>
      </div>
      <div className="equipment-container07">
        <span className="equipment-text009">
          <span className="equipment-text010">✔ Raspberry Pi:</span>
          <span className="equipment-text011">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text012"></br>
          <span className="equipment-text013">
            A small, affordable, and user-friendly computer that&apos;s perfect
            for boating.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text014"></br>
          <span className="equipment-text015">
            I recommend the Raspberry Pi 3, 3B, 4 or 5 with at least 4GB of RAM.
            It can handle various tasks and has low power consumption.
          </span>
          <br className="equipment-text016"></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br className="equipment-text019"></br>
          <a
            href="https://geni.us/hwWcaxU"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link"
          >
            https://geni.us/hwWcaxU
          </a>
          <br className="equipment-text020"></br>
          <a
            href="https://geni.us/mhs2ygK"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link01"
          >
            https://geni.us/mhs2ygK
          </a>
          <br className="equipment-text021"></br>
          <br></br>
          <span>🎁 AliExpress (Pick 4G or 8GB Option):</span>
          <br className="equipment-text024"></br>
          <a
            href="https://s.click.aliexpress.com/e/_DFqcCiP"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link02"
          >
            https://s.click.aliexpress.com/e/_DFqcCiP
          </a>
          <br className="equipment-text025"></br>
          <br></br>
          <span className="equipment-text027">✔ Raspberry Pi Case:</span>
          <span className="equipment-text028">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text029"></br>
          <span className="equipment-text030">
            Protects the Raspberry Pi from moisture and hazards. Keep it in a
            dry location below deck, near the boat&apos;s main switchboard.
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/m4Y0b"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link03"
          >
            https://geni.us/m4Y0b
          </a>
          <br className="equipment-text035"></br>
          <a
            href="https://geni.us/u6sFQQX"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link04"
          >
            https://geni.us/u6sFQQX
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text038">✔ </span>
          <span className="equipment-text039">4G LTE Router:</span>
          <span className="equipment-text040">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text041"></br>
          <span className="equipment-text042">
            Enables communication between smart boat components and provides
            internet access for remote monitoring and control - Router TP-Link
            TL-MR6400.
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/Z1yFZek"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link05"
          >
            https://geni.us/Z1yFZek
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text049">
            ✔  NMEA 2000 to 0183 USB Adapter :
          </span>
          <br></br>
          <br></br>
          <span>🎁 Digital Yacht:</span>
          <br></br>
          <span>
            For %10 Discount at Digital Yacht use the
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="equipment-text055">
            SMARTBOAT10
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>coupon code</span>
          <br></br>
          <a
            href="https://digitalyacht.co.uk/product/ikonvert-nmea-2000-to-usb"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link06"
          >
            https://digitalyacht.co.uk/product/ikonvert-nmea-2000-to-usb
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text060">✔ 12V to 9V converter:</span>
          <br className="equipment-text061"></br>
          <span className="equipment-text062">
            If your router model takes 9V.
          </span>
          <br className="equipment-text063"></br>
          <br className="equipment-text064"></br>
          <span>🎁 AliExpress ( Select 12V to 9V 3A Option )</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DDliOIn"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link07"
          >
            https://s.click.aliexpress.com/e/_DDliOIn
          </a>
          <br className="equipment-text067"></br>
          <br className="equipment-text068"></br>
          <span className="equipment-text069">✔ 12V to 12V converter.:</span>
          <br className="equipment-text070"></br>
          <span className="equipment-text071">
            If your router model takes 12V ( Select 3A Option )
          </span>
          <span>.</span>
          <br className="equipment-text073"></br>
          <br className="equipment-text074"></br>
          <span>🎁 AliExpress</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DB7Riz5"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link08"
          >
            https://s.click.aliexpress.com/e/_DB7Riz5
          </a>
          <br className="equipment-text077"></br>
          <br></br>
          <span className="equipment-text079">✔ Heat Sink:</span>
          <span className="equipment-text080">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text081"></br>
          <span className="equipment-text082">
            Helps dissipate heat from the Raspberry Pi, ensuring optimal
            performance in the boat environment.
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/8wRR"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link09"
          >
            https://geni.us/8wRR
          </a>
          <br className="equipment-text087"></br>
          <a
            href="https://geni.us/mJkAS5P"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link10"
          >
            https://geni.us/mJkAS5P
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DcZ56cj"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link11"
          >
            https://s.click.aliexpress.com/e/_DcZ56cj
          </a>
          <br className="equipment-text092"></br>
          <br></br>
          <span className="equipment-text094">✔ MicroSD Card:</span>
          <span className="equipment-text095">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text096"></br>
          <span className="equipment-text097">
            A high-quality A2 class microSD card provides fast, reliable, and
            durable storage for the Raspberry Pi. At least 32GB is needed.
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br className="equipment-text101"></br>
          <a
            href="https://geni.us/F4BQ"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link12"
          >
            https://geni.us/F4BQ
          </a>
          <br className="equipment-text102"></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br className="equipment-text105"></br>
          <a
            href="https://s.click.aliexpress.com/e/_De5JvCf"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link13"
          >
            https://s.click.aliexpress.com/e/_De5JvCf
          </a>
          <br className="equipment-text106"></br>
          <br></br>
          <span className="equipment-text108">✔ Ethernet Cable:</span>
          <span className="equipment-text109">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text110"></br>
          <span className="equipment-text111">
            Connects the Raspberry Pi to the router for initial configuration.
            Wi-Fi can be used later for regular usage.
          </span>
          <br className="equipment-text112"></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br className="equipment-text115"></br>
          <a
            href="https://geni.us/TpfWW4"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link14"
          >
            https://geni.us/TpfWW4
          </a>
          <br className="equipment-text116"></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br className="equipment-text119"></br>
          <a
            href="https://s.click.aliexpress.com/e/_DmHdxQb"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link15"
          >
            https://s.click.aliexpress.com/e/_DmHdxQb
          </a>
          <br className="equipment-text120"></br>
          <br></br>
          <span className="equipment-text122">✔ USB-C Cable:</span>
          <span className="equipment-text123">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="equipment-text124"></br>
          <span className="equipment-text125">
            Powers the Raspberry Pi from the boat&apos;s DC power system. Avoid
            using an inverter for continuous operation.
          </span>
          <br className="equipment-text126"></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br className="equipment-text129"></br>
          <a
            href="https://geni.us/5tpz"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link16"
          >
            https://geni.us/5tpz
          </a>
          <br className="equipment-text130"></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br className="equipment-text133"></br>
          <a
            href="https://s.click.aliexpress.com/e/_DFH9izV"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link17"
          >
            https://s.click.aliexpress.com/e/_DFH9izV
          </a>
          <br className="equipment-text134"></br>
          <br></br>
          <span className="equipment-text136">
            ✔ USB cigarette lighter plug or USB Hub:
          </span>
          <br className="equipment-text137"></br>
          <span className="equipment-text138">
            Choose a high power 3A adapter for the Raspberry Pi USB Cable.
          </span>
          <br className="equipment-text139"></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br className="equipment-text142"></br>
          <a
            href="https://geni.us/FYfHJ"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link18"
          >
            https://geni.us/FYfHJ
          </a>
          <br className="equipment-text143"></br>
          <a
            href="https://geni.us/edYnmTY"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link19"
          >
            https://geni.us/edYnmTY
          </a>
          <br className="equipment-text144"></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br className="equipment-text147"></br>
          <a
            href="https://s.click.aliexpress.com/e/_DeJQYSR"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link20"
          >
            https://s.click.aliexpress.com/e/_DeJQYSR
          </a>
          <br className="equipment-text148"></br>
          <a
            href="https://s.click.aliexpress.com/e/_DlBQrTH"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link21"
          >
            https://s.click.aliexpress.com/e/_DlBQrTH
          </a>
          <br className="equipment-text149"></br>
          <br></br>
          <span className="equipment-text151">✔ Shelly 1 Relay Switch:</span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/Znr9"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link22"
          >
            https://geni.us/Znr9
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DEZ2AAR"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link23"
          >
            https://s.click.aliexpress.com/e/_DEZ2AAR
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text162">
            ✔ SONOFF Zigbee 3.0 USB Dongle Plus Gateway:
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/l80Ab"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link24"
          >
            https://geni.us/l80Ab
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DCj5pzN"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link25"
          >
            https://s.click.aliexpress.com/e/_DCj5pzN
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text173">
            ✔ Aqara IP67 Water Immersing Sensor Flood Water Leak:
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/D06kbNA"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link26"
          >
            https://geni.us/D06kbNA
          </a>
          <br className="equipment-text178"></br>
          <a
            href="https://geni.us/1rb2G4L"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link27"
          >
            https://geni.us/1rb2G4L
          </a>
          <br></br>
          <br></br>
          <span>
            🎁 AliExpress: (Select how many pieces in the item options)
          </span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DeXguFH"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link28"
          >
            https://s.click.aliexpress.com/e/_DeXguFH
          </a>
          <br className="equipment-text183"></br>
          <br></br>
          <span className="equipment-text185">
            ✔ Tuya Zigbee Siren Sound Light Alarm 90dB:
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/XFxiTrT"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link29"
          >
            https://geni.us/XFxiTrT
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress:</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DkTQ4mF"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link30"
          >
            https://s.click.aliexpress.com/e/_DkTQ4mF
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text196">
            ✔ Tuya WiFi Zigbee Smoke Detector Alarm:
          </span>
          <br></br>
          <br></br>
          <span>🎁 AliExpress: (Select Zigbee version in options)</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DCcAuYB"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link31"
          >
            https://s.click.aliexpress.com/e/_DCcAuYB
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text203">✔ ESP32:</span>
          <br></br>
          <br></br>
          <span>
            🎁 Amazon: Select 38pin model. They usually do not have holes in the
            4 corners.
          </span>
          <br></br>
          <a
            href="https://geni.us/n4Agt2"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link32"
          >
            https://geni.us/n4Agt2
          </a>
          <br className="equipment-text208"></br>
          <br></br>
          <span>🎁 AliExpress: Select 38Pins-Type-C-ESP32 option</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_Ddsn2z5"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link33"
          >
            https://s.click.aliexpress.com/e/_Ddsn2z5
          </a>
          <br className="equipment-text212"></br>
          <br></br>
          <span className="equipment-text214">
            ✔ ESP32 Expansion Breakout Board:
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/jySpd"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link34"
          >
            https://geni.us/jySpd
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress: Select ESP32 breakout board option</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_Ddsn2z5"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link35"
          >
            https://s.click.aliexpress.com/e/_Ddsn2z5
          </a>
          <br className="equipment-text223"></br>
          <br className="equipment-text224"></br>
          <span className="equipment-text225">
            ✔ 12v to 5v Converter for ESP32
          </span>
          <span>:</span>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/4fpMDiB"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link36"
          >
            https://geni.us/4fpMDiB
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress: Select the 12V to 5V 3A option</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_Deuww1D"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link37"
          >
            https://s.click.aliexpress.com/e/_Deuww1D
          </a>
          <a
            href="https://s.click.aliexpress.com/e/_Deuww1D"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br className="equipment-text234"></br>
          </a>
          <br></br>
          <span className="equipment-text236">
            ✔ Temperature Sensors Dallas One Wre:
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <span>(1M Length)</span>
          <br></br>
          <a
            href="https://geni.us/vANa"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link39"
          >
            https://geni.us/vANa
          </a>
          <br></br>
          <span>(3M Length)</span>
          <br></br>
          <a
            href="https://geni.us/7KqXm1w"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link40"
          >
            https://geni.us/7KqXm1w
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress: Select length and pieces option</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DByVEZV"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link41"
          >
            https://s.click.aliexpress.com/e/_DByVEZV
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text252">
            ✔ Resistors for Temp Sensor ( 4.7K OHM ):
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon: Kit of various sizes</span>
          <br></br>
          <a
            href="https://geni.us/DWBKQ"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link42"
          >
            https://geni.us/DWBKQ
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress: Kit of various sizes</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DeuWUYb"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link43"
          >
            https://s.click.aliexpress.com/e/_DeuWUYb
          </a>
          <br className="equipment-text261"></br>
          <br></br>
          <span className="equipment-text263">
            ✔  Junction Box (80mm x 80mm):
          </span>
          <br></br>
          <br></br>
          <span>
            🎁 Amazon:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <a
            href="https://geni.us/n9oc7"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link44"
          >
            https://geni.us/n9oc7
          </a>
          <br className="equipment-text268"></br>
          <a
            href="https://geni.us/a3xe"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link45"
          >
            https://geni.us/a3xe
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress: Select 83x81x56mm</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DBOgxxV"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link46"
          >
            https://s.click.aliexpress.com/e/_DBOgxxV
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text275">✔  INA219 Module:</span>
          <br className="equipment-text276"></br>
          <br className="equipment-text277"></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/yE8oa"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link47"
          >
            https://geni.us/yE8oa
          </a>
          <a
            href="https://geni.us/yE8oa"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br className="equipment-text280"></br>
          </a>
          <br></br>
          <span>🎁 AliExpress: Select soldered option or ask them</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_Dd2RsTZ"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link49"
          >
            https://s.click.aliexpress.com/e/_Dd2RsTZ
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text286">✔ Dupont breakout cables:</span>
          <br></br>
          <br></br>
          <span>
            🎁 Amazon:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <a
            href="https://geni.us/tKWkywT"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link50"
          >
            https://geni.us/tKWkywT
          </a>
          <a
            href="https://geni.us/tKWkywT"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br className="equipment-text291"></br>
          </a>
          <br></br>
          <span>
            🎁 AliExpress:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DdQTOsx"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link52"
          >
            https://s.click.aliexpress.com/e/_DdQTOsx
          </a>
          <br className="equipment-text295"></br>
          <br></br>
          <span className="equipment-text297">
            ✔ USB to RS-232 DB9 Serial 9 pin Adapter :
          </span>
          <br></br>
          <br></br>
          <span>
            🎁 Amazon:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <a
            href="https://geni.us/gXDJT"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link53"
          >
            https://geni.us/gXDJT
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text304">
            ✔  USB to RS422 Serial Adapter :
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/dArAn8"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link54"
          >
            https://geni.us/dArAn8
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text311">
            ✔  DB-9 Female RS232 Serial Plug:
          </span>
          <br></br>
          <br></br>
          <span>🎁 Amazon:</span>
          <br></br>
          <a
            href="https://geni.us/X6cOtZq"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link55"
          >
            https://geni.us/X6cOtZq
          </a>
          <br></br>
          <br></br>
          <span>🎁 AliExpress: Select Female option</span>
          <br></br>
          <a
            href="https://s.click.aliexpress.com/e/_DmSWQBZ"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link56"
          >
            https://s.click.aliexpress.com/e/_DmSWQBZ
          </a>
          <br></br>
          <br></br>
          <span className="equipment-text322">
            ✔  NMEA 2000 to 0183 USB Adapter :
          </span>
          <br className="equipment-text323"></br>
          <br className="equipment-text324"></br>
          <span>🎁 Digital Yacht:</span>
          <br className="equipment-text326"></br>
          <br className="equipment-text327"></br>
          <span>
            For %10 Discount at Digital Yacht use the
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="equipment-text329">
            SMARTBOAT10
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>coupon code</span>
          <br className="equipment-text331"></br>
          <a
            href="https://digitalyacht.co.uk/product/ikonvert-nmea-2000-to-usb"
            target="_blank"
            rel="noreferrer noopener"
            className="equipment-link57"
          >
            https://digitalyacht.co.uk/product/ikonvert-nmea-2000-to-usb
          </a>
          <a
            href="https://digitalyacht.co.uk/product/ikonvert-nmea-2000-to-usb"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br className="equipment-text332"></br>
          </a>
          <br></br>
          <span>
            Some links above are affiliate links, meaning I may earn a small
            commission if you make a purchase. Your support helps fund valuable
            content. Thank you!
          </span>
          <br></br>
          <br></br>
        </span>
      </div>
      <div className="equipment-cards-container"></div>
      <footer className="equipment-footer">
        <div className="equipment-container08">
          <nav className="equipment-nav3">
            <Link to="/" className="equipment-navlink10">
              Home
            </Link>
            <Link to="/equipment" className="equipment-navlink11">
              Equipment
            </Link>
            <Link to="/services" className="equipment-navlink12">
              Services
            </Link>
            <Link to="/download-code" className="equipment-navlink13">
              Code
            </Link>
            <Link to="/contact" className="equipment-navlink14">
              Contact
            </Link>
          </nav>
        </div>
        <div className="equipment-separator"></div>
        <div className="equipment-container09">
          <span className="equipment-text337">
            © 2023 Smart Boat Innovations, All Rights Reserved.
          </span>
          <div className="equipment-icon-group1">
            <a
              href="https://ko-fi.com/smartboatinnovations"
              target="_blank"
              rel="noreferrer noopener"
              className="equipment-link59"
            >
              <img
                alt="image"
                src="/kofi_logo_blue.svg"
                className="equipment-image1"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Equipment
