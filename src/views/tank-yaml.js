import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './tank-yaml.css'

const TankYAML = (props) => {
  return (
    <div className="tank-yaml-container">
      <Helmet>
        <title>Tank-YAML - SmartBoatInnovations</title>
        <meta
          name="description"
          content="Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety"
        />
        <meta property="og:title" content="Tank-YAML - SmartBoatInnovations" />
        <meta
          property="og:description"
          content="Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="tank-yaml-container01">
        <div className="tank-yaml-container02">
          <header
            data-thq="thq-navbar"
            className="tank-yaml-navbar-interactive"
          >
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="tank-yaml-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="tank-yaml-nav"
              >
                <Link to="/" className="tank-yaml-navlink">
                  Home
                </Link>
                <Link to="/equipment" className="tank-yaml-navlink01">
                  Equipment
                </Link>
                <Link to="/services" className="tank-yaml-navlink02">
                  Services
                </Link>
                <Link to="/download-code" className="tank-yaml-navlink03">
                  Code
                </Link>
                <Link to="/contact" className="tank-yaml-navlink04">
                  Contact
                </Link>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="tank-yaml-btn-group"
            ></div>
            <div data-thq="thq-burger-menu" className="tank-yaml-burger-menu">
              <svg viewBox="0 0 1024 1024" className="tank-yaml-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="tank-yaml-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="tank-yaml-nav1"
              >
                <div className="tank-yaml-container03">
                  <div
                    data-thq="thq-close-menu"
                    className="tank-yaml-menu-close"
                  ></div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="tank-yaml-nav2"
                >
                  <Link to="/" className="tank-yaml-navlink05">
                    Home
                  </Link>
                  <Link to="/equipment" className="tank-yaml-navlink06">
                    Equipment
                  </Link>
                  <Link to="/services" className="tank-yaml-navlink07">
                    Services
                  </Link>
                  <Link to="/download-code" className="tank-yaml-navlink08">
                    Code
                  </Link>
                  <Link to="/contact" className="tank-yaml-navlink09">
                    Contact
                  </Link>
                </nav>
                <div className="tank-yaml-container04"></div>
              </div>
              <div className="tank-yaml-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="tank-yaml-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="tank-yaml-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="tank-yaml-icon6"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <img alt="image" src="/wlan%20logo.png" className="tank-yaml-image" />
        <div className="tank-yaml-container05">
          <span className="tank-yaml-text">Smart Boat Innovations</span>
        </div>
      </div>
      <h1 className="tank-yaml-text01">Tank Template YAML</h1>
      <div className="tank-yaml-container06">
        <a
          href="https://youtu.be/ScP7xjOwWFg"
          target="_blank"
          rel="noreferrer noopener"
          className="tank-yaml-link"
        >
          <br></br>
          <span>
            Here is the essential Tank template YAML snippet to add to your
            configuration.yaml.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            For a step-by-step guide, watch the comprehensive tutorial available
            at the following link: 
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="tank-yaml-text07">Video</span>
          <br></br>
          <br></br>
          <br></br>
        </a>
        <a
          href="https://ko-fi.com/smartboatinnovations"
          target="_blank"
          rel="noreferrer noopener"
          className="tank-yaml-link1"
        >
          <img
            alt="image"
            src="/kofi_button_blue-200h.png"
            className="tank-yaml-image1"
          />
        </a>
        <a
          href="https://youtu.be/ScP7xjOwWFg"
          target="_blank"
          rel="noreferrer noopener"
          className="tank-yaml-link2"
        >
          <img
            alt="image"
            src="/analog%20to%20digital%20thumbnail%20low-200h.png"
            className="tank-yaml-image2"
          />
        </a>
      </div>
      <div className="tank-yaml-container07">
        <div className="tank-yaml-container08">
          <div className="tank-yaml-container09">
            <Script
              html={`<div style="position:relative; background-color: #f8f8f8; border: 1px solid #ccc; padding: 10px;">
    <div style="position: absolute; top: 10px; right: 10px;">
        <button id="copyButton" style="padding: 5px 10px; background-color: #007BFF; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;" onclick="copyToClipboard()">Copy</button>
        <a href="/tank_config.txt" download style="padding: 5px 10px; background-color: #28a745; color: #fff; border: none; border-radius: 4px; text-decoration: none; text-align: center; line-height: 1.5;">Download</a>
    </div>
    <pre id="codeBlock" style="font-size: 16px; margin: 40px 0 0 0;">
    <code style="font-family: 'Courier New', Courier, monospace; white-space: pre-wrap;">

template:
  - sensor:
      - name: "Tank Level"
        unit_of_measurement: "%"
        state_class: "measurement"
        state: >
          {% set volts_full = 6.0 %}
          {% set volts_half = 4.0 %}
          {% set volts_empty = 2 * volts_half - volts_full %}
          {% set current_voltage = states('sensor.digital_gauges_tank_sender_voltage') | float(default=0) %}
          {% set increasing_voltage = (volts_full > volts_empty) %}
          {% if increasing_voltage %}
            {% set slope = (volts_full - volts_empty) / 100 %}
          {% else %}
            {% set slope = (volts_empty - volts_full) / 100 %}
          {% endif %}
          {% if current_voltage == 0 %}
            0
          {% else %}
            {% if increasing_voltage %}
              {% set level = (current_voltage - volts_empty) / slope %}
            {% else %}
              {% set level = (volts_empty - current_voltage) / slope %}
            {% endif %}
            {% set level = max(0, min(level, 100)) %}
            {{ level | round(0) }}
          {% endif %}
    </code>
    </pre>
</div>

<script>
function copyToClipboard() {
  const str = document.getElementById('codeBlock').textContent;
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  
  // Indicate the text has been copied by changing the button text
  const copyButton = document.getElementById('copyButton');
  copyButton.textContent = 'Copied!';
  setTimeout(() => copyButton.textContent = 'Copy', 2000); // Revert back to "Copy" after 2 seconds
}
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <footer className="tank-yaml-footer">
        <div className="tank-yaml-container10">
          <nav className="tank-yaml-nav3">
            <Link to="/" className="tank-yaml-navlink10">
              Home
            </Link>
            <Link to="/equipment" className="tank-yaml-navlink11">
              Equipment
            </Link>
            <Link to="/services" className="tank-yaml-navlink12">
              Services
            </Link>
            <Link to="/download-code" className="tank-yaml-navlink13">
              Code
            </Link>
            <Link to="/contact" className="tank-yaml-navlink14">
              Contact
            </Link>
          </nav>
        </div>
        <div className="tank-yaml-separator"></div>
        <div className="tank-yaml-container11">
          <span className="tank-yaml-text11">
            © 2023 Smart Boat Innovations, All Rights Reserved.
          </span>
          <div className="tank-yaml-icon-group1">
            <a
              href="https://ko-fi.com/smartboatinnovations"
              target="_blank"
              rel="noreferrer noopener"
              className="tank-yaml-link3"
            >
              <img
                alt="image"
                src="/kofi_logo_blue.svg"
                className="tank-yaml-image3"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TankYAML
