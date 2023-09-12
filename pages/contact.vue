<template>
  <div class="contact-container">
    <div class="contact-container1">
      <div class="contact-container2">
        <header data-thq="thq-navbar" class="contact-navbar-interactive">
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            class="contact-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              class="contact-nav"
            >
              <nuxt-link to="/" class="contact-navlink">Home</nuxt-link>
              <nuxt-link to="/about" class="contact-navlink01">About</nuxt-link>
              <nuxt-link to="/services" class="contact-navlink02">
                Services
              </nuxt-link>
              <nuxt-link to="/download-code" class="contact-navlink03">
                Code
              </nuxt-link>
              <nuxt-link to="/contact" class="contact-navlink04">
                Contact
              </nuxt-link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" class="contact-btn-group"></div>
          <div data-thq="thq-burger-menu" class="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" class="contact-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" class="contact-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              class="contact-nav1"
            >
              <div class="contact-container3">
                <div data-thq="thq-close-menu" class="contact-menu-close"></div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                class="contact-nav2"
              >
                <nuxt-link to="/" class="contact-navlink05">Home</nuxt-link>
                <nuxt-link to="/about" class="contact-navlink06">About</nuxt-link>
                <nuxt-link to="/services" class="contact-navlink07">
                  Services
                </nuxt-link>
                <nuxt-link to="/download-code" class="contact-navlink08">
                  Code
                </nuxt-link>
                <nuxt-link to="/contact" class="contact-navlink09">
                  Contact
                </nuxt-link>
              </nav>
              <div class="contact-container4"></div>
            </div>
            <div class="contact-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" class="contact-icon2">
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg
              ><svg viewBox="0 0 877.7142857142857 1024" class="contact-icon4">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg viewBox="0 0 602.2582857142856 1024" class="contact-icon6">
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <img alt="image" src="/wlan%20logo.png" class="contact-image" />
      <div class="contact-container5">
        <span class="contact-text">Smart Boat Innovations</span>
      </div>
    </div>
    <h1 class="contact-text1">Contact</h1>
    <span class="contact-text2">smart.boat.innovations@gmail.com</span>
    <div class="contact-cards-container"></div>
    <footer class="contact-footer">
      <div class="contact-container6">
        <nav class="contact-nav3">
          <nuxt-link to="/" class="contact-navlink10">Home</nuxt-link>
          <nuxt-link to="/about" class="contact-navlink11">About</nuxt-link>
          <nuxt-link to="/services" class="contact-navlink12">Services</nuxt-link>
          <nuxt-link to="/download-code" class="contact-navlink13">
            Code
          </nuxt-link>
          <nuxt-link to="/contact" class="contact-navlink14">Contact</nuxt-link>
        </nav>
      </div>
      <div class="contact-separator"></div>
      <div class="contact-container7">
        <span class="contact-text3">
          © 2023 Smart Boat Innovations, All Rights Reserved.
        </span>
        <div class="contact-icon-group1">
          <a
            href="https://ko-fi.com/smartboatinnovations"
            target="_blank"
            rel="noreferrer noopener"
            class="contact-link"
          >
            <img alt="image" src="/kofi_logo_blue.svg" class="contact-image1" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  head: {
    title: 'Contact - SmartBoatInnovations',
    meta: [
      {
        name: 'description',
        content:
          'Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety',
      },
      {
        property: 'og:title',
        content: 'Contact - SmartBoatInnovations',
      },
      {
        property: 'og:description',
        content:
          'Join me as we explore boat automation and the Internet of Things (IoT) technology, from intelligent monitoring to seamless connectivity.  Open systems and cost-effective designs.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea7f7557-3544-4a71-a4e9-4320e8b75036/0aa20519-76fc-42ec-9c9d-541129945274?org_if_sml=1',
      },
    ],
  },
}
</script>

<style scoped>
.contact-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 5px;
  flex-direction: column;
}
.contact-container1 {
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-start;
  background-image: url("/website%20banner%20no%20logo%20or%20name.png");
}
.contact-container2 {
  display: flex;
  position: relative;
}
.contact-navbar-interactive {
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
.contact-desktop-menu {
  display: flex;
}
.contact-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contact-navlink {
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
}
.contact-navlink01 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.contact-navlink02 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.contact-navlink03 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.contact-navlink04 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.contact-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contact-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.contact-icon {
  width: 32px;
  height: 32px;
}
.contact-mobile-menu {
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
.contact-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contact-container3 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.contact-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-nav2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contact-navlink05 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.contact-navlink06 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.contact-navlink07 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.contact-navlink08 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.contact-navlink09 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.contact-container4 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.contact-icon-group {
  display: flex;
}
.contact-icon2 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.contact-icon4 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.contact-icon6 {
  width: 16px;
  height: 16px;
}
.contact-image {
  width: 100px;
  align-self: center;
  margin-top: 40px;
  object-fit: cover;
}
.contact-container5 {
  width: 400px;
  height: 66px;
  display: flex;
  align-self: center;
  margin-top: 20px;
  align-items: flex-start;
}
.contact-text {
  display: block;
  font-size: 32px;
  align-self: center;
  font-style: normal;
  margin-top: 0px;
  font-weight: 800;
  margin-left: auto;
  margin-right: auto;
}
.contact-text1 {
  align-self: center;
  margin-top: 50px;
}
.contact-text2 {
  font-size: 14px;
  text-align: justify;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.contact-cards-container {
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
.contact-footer {
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
.contact-container6 {
  display: flex;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.contact-nav3 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.contact-navlink10 {
  margin-left: 0px;
  text-decoration: underline;
}
.contact-navlink11 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.contact-navlink12 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.contact-navlink13 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.contact-navlink14 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.contact-separator {
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
.contact-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contact-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contact-link {
  display: contents;
}
.contact-image1 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
@media(max-width: 991px) {
  .contact-navlink {
    font-style: normal;
    font-weight: 500;
  }
  .contact-navlink01 {
    font-style: normal;
    font-weight: 500;
  }
  .contact-navlink02 {
    font-style: normal;
    font-weight: 500;
  }
  .contact-navlink03 {
    font-style: normal;
    font-weight: 500;
  }
  .contact-navlink04 {
    font-style: normal;
    font-weight: 500;
  }
  .contact-text2 {
    border-width: 0px;
  }
  .contact-cards-container {
    justify-content: center;
  }
  .contact-image1 {
    width: auto;
    height: 50px;
  }
}
@media(max-width: 767px) {
  .contact-navbar-interactive {
    padding-left: 32px;
    padding-right: 32px;
  }
  .contact-navlink01 {
    margin-left: var(--dl-space-space-unit);
  }
  .contact-navlink02 {
    margin-left: var(--dl-space-space-unit);
  }
  .contact-navlink03 {
    margin-left: var(--dl-space-space-unit);
  }
  .contact-navlink04 {
    margin-left: var(--dl-space-space-unit);
  }
  .contact-footer {
    padding-left: 32px;
    padding-right: 32px;
  }
  .contact-separator {
    margin-top: 24px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 24px;
  }
  .contact-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .contact-text3 {
    margin-bottom: 24px;
  }
}
@media(max-width: 479px) {
  .contact-container {
    border-width: 3px;
  }
  .contact-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .contact-desktop-menu {
    display: none;
  }
  .contact-btn-group {
    display: none;
  }
  .contact-burger-menu {
    display: flex;
  }
  .contact-mobile-menu {
    padding: 16px;
  }
  .contact-navlink05 {
    font-style: normal;
    font-weight: 500;
    text-decoration: underline;
  }
  .contact-navlink06 {
    font-weight: 500;
    text-decoration: underline;
  }
  .contact-navlink07 {
    font-weight: 500;
    text-decoration: underline;
  }
  .contact-navlink08 {
    font-weight: 500;
    text-decoration: underline;
  }
  .contact-navlink09 {
    font-style: normal;
    font-weight: 500;
    text-decoration: underline;
  }
  .contact-text {
    display: block;
    font-size: 26px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
  .contact-footer {
    padding: var(--dl-space-space-unit);
  }
  .contact-separator {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .contact-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .contact-text3 {
    text-align: center;
    margin-bottom: 24px;
  }
  .contact-image1 {
    width: auto;
    height: 50px;
  }
}
</style>
