<template>
  <div class="services-container">
    <div class="services-container1">
      <div class="services-container2">
        <header data-thq="thq-navbar" class="services-navbar-interactive">
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            class="services-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              class="services-nav"
            >
              <router-link to="/" class="services-navlink">Home</router-link>
              <router-link to="/about" class="services-navlink01">
                About
              </router-link>
              <router-link to="/about" class="services-navlink02">
                Services
              </router-link>
              <router-link to="/download-code" class="services-navlink03">
                Code
              </router-link>
              <router-link to="/contact" class="services-navlink04">
                Contact
              </router-link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" class="services-btn-group"></div>
          <div data-thq="thq-burger-menu" class="services-burger-menu">
            <svg viewBox="0 0 1024 1024" class="services-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" class="services-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              class="services-nav1"
            >
              <div class="services-container3">
                <div data-thq="thq-close-menu" class="services-menu-close"></div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                class="services-nav2"
              >
                <router-link to="/" class="services-navlink05">Home</router-link>
                <router-link to="/about" class="services-navlink06">
                  About
                </router-link>
                <router-link to="/services" class="services-navlink07">
                  Services
                </router-link>
                <router-link to="/download-code" class="services-navlink08">
                  Code
                </router-link>
                <router-link to="/contact" class="services-navlink09">
                  Contact
                </router-link>
              </nav>
              <div class="services-container4"></div>
            </div>
            <div class="services-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" class="services-icon2">
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg
              ><svg viewBox="0 0 877.7142857142857 1024" class="services-icon4">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg viewBox="0 0 602.2582857142856 1024" class="services-icon6">
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <img alt="image" src="/wlan%20logo.png" class="services-image" />
      <div class="services-container5">
        <span class="services-text">Smart Boat Innovations</span>
      </div>
    </div>
    <h1 class="services-text01">Services</h1>
    <span class="services-text02">
      <span>
        Are you looking to automate your boat and enhance its functionality, but
        lack the time or technical expertise to do so? Look no further! With my
        professional consultancy services, I can assist you in fully automating
        your boat, and the best part is, it can all be done remotely without
        requiring your physical presence.Here are the options available to you:
      </span>
      <br />
      <br />
      <span>
        1. Personalized Consultation: We will discuss your specific requirements
        and preferences for your smart boat. Based on this information, I will
        develop a comprehensive plan of approach tailored to your needs.
      </span>
      <br />
      <br />
      <span>
        2. Complete Setup and Management: Sit back and relax as I handle the
        entire setup and management of your smart boat. From installing the
        necessary systems and configuring them to ongoing maintenance and
        troubleshooting, I will ensure that your boat operates smoothly and
        efficiently.
      </span>
      <br />
      <br />
      <span>
        3. Knowledge Transfer: If you prefer to be more hands-on with the
        management of your smart boat, I can provide a kickstart session where I
        share my expertise and knowledge with you. You will gain the necessary
        skills and understanding to take charge of managing your boat yourself.
      </span>
      <br />
      <br />
      <span>
        4. Personalized Advice: If you already have some automation systems in
        place but need guidance on how to optimize and enhance them, I can provide
        personalized advice. I will help you identify the best strategies and
        technologies to further automate your boat and maximize its potential.
      </span>
      <br />
      <br />
      <span>
        5. One-on-One Communication: I am available for personal consultations to
        address any questions or concerns you may have. We can discuss your
        project in detail, explore options, and ensure that your smart boat meets
        your expectations.
      </span>
      <br />
      <br />
      <span>
        Please don&apos;t hesitate to
        <span v-html="raweqwu"></span>
      </span>
      <router-link to="/contact" class="services-navlink10">
        contact
        <span v-html="raw7gjq"></span>
      </router-link>
      <span>
        me to discuss your requirements and delve into further details. Together,
        we can make your boat smarter and more efficient, providing you with a
        truly enjoyable and hassle-free experience on the water.
      </span>
      <br />
    </span>
    <div class="services-cards-container"></div>
    <footer class="services-footer">
      <div class="services-container6">
        <nav class="services-nav3">
          <router-link to="/" class="services-navlink11">Home</router-link>
          <router-link to="/about" class="services-navlink12">About</router-link>
          <router-link to="/services" class="services-navlink13">
            Services
          </router-link>
          <router-link to="/download-code" class="services-navlink14">
            Code
          </router-link>
          <router-link to="/contact" class="services-navlink15">
            Contact
          </router-link>
        </nav>
      </div>
      <div class="services-separator"></div>
      <div class="services-container7">
        <span class="services-text24">
          © 2023 Smart Boat Innovations, All Rights Reserved.
        </span>
        <div class="services-icon-group1">
          <a
            href="https://ko-fi.com/smartboatinnovations"
            target="_blank"
            rel="noreferrer noopener"
            class="services-link"
          >
            <img alt="image" src="/kofi_logo_blue.svg" class="services-image1" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      raweqwu: ' ',
      raw7gjq: ' ',
    }
  },
  metaInfo: {
    title: 'Services - SmartBoatInnovations',
    meta: [
      {
        name: 'description',
        content:
          'Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety',
      },
      {
        property: 'og:title',
        content: 'Services - SmartBoatInnovations',
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
.services-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 5px;
  flex-direction: column;
}
.services-container1 {
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
.services-container2 {
  display: flex;
  position: relative;
}
.services-navbar-interactive {
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
.services-desktop-menu {
  display: flex;
}
.services-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.services-navlink {
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
}
.services-navlink01 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.services-navlink02 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.services-navlink03 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.services-navlink04 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.services-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.services-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.services-icon {
  width: 32px;
  height: 32px;
}
.services-mobile-menu {
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
.services-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.services-container3 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.services-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.services-nav2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.services-navlink05 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.services-navlink06 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.services-navlink07 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.services-navlink08 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.services-navlink09 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.services-container4 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.services-icon-group {
  display: flex;
}
.services-icon2 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.services-icon4 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.services-icon6 {
  width: 16px;
  height: 16px;
}
.services-image {
  width: 100px;
  align-self: center;
  margin-top: 40px;
  object-fit: cover;
}
.services-container5 {
  width: 400px;
  height: 66px;
  display: flex;
  align-self: center;
  margin-top: 20px;
  align-items: flex-start;
}
.services-text {
  display: block;
  font-size: 32px;
  align-self: center;
  font-style: normal;
  margin-top: 0px;
  font-weight: 800;
  margin-left: auto;
  margin-right: auto;
}
.services-text01 {
  align-self: center;
  margin-top: 50px;
}
.services-text02 {
  font-size: 14px;
  text-align: justify;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.services-navlink10 {
  text-decoration: underline;
}
.services-cards-container {
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
.services-footer {
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
.services-container6 {
  display: flex;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.services-nav3 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.services-navlink11 {
  margin-left: 0px;
  text-decoration: underline;
}
.services-navlink12 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.services-navlink13 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.services-navlink14 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.services-navlink15 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.services-separator {
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
.services-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.services-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.services-link {
  display: contents;
}
.services-image1 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
@media(max-width: 991px) {
  .services-navlink {
    font-style: normal;
    font-weight: 500;
  }
  .services-navlink01 {
    font-style: normal;
    font-weight: 500;
  }
  .services-navlink02 {
    font-style: normal;
    font-weight: 500;
  }
  .services-navlink03 {
    font-style: normal;
    font-weight: 500;
  }
  .services-navlink04 {
    font-style: normal;
    font-weight: 500;
  }
  .services-text02 {
    font-size: 14px;
    border-width: 0px;
  }
  .services-cards-container {
    justify-content: center;
  }
  .services-image1 {
    width: auto;
    height: 50px;
  }
}
@media(max-width: 767px) {
  .services-navbar-interactive {
    padding-left: 32px;
    padding-right: 32px;
  }
  .services-navlink01 {
    margin-left: var(--dl-space-space-unit);
  }
  .services-navlink02 {
    margin-left: var(--dl-space-space-unit);
  }
  .services-navlink03 {
    margin-left: var(--dl-space-space-unit);
  }
  .services-navlink04 {
    margin-left: var(--dl-space-space-unit);
  }
  .services-footer {
    padding-left: 32px;
    padding-right: 32px;
  }
  .services-separator {
    margin-top: 24px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 24px;
  }
  .services-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .services-text24 {
    margin-bottom: 24px;
  }
}
@media(max-width: 479px) {
  .services-container {
    border-width: 3px;
  }
  .services-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .services-desktop-menu {
    display: none;
  }
  .services-btn-group {
    display: none;
  }
  .services-burger-menu {
    display: flex;
  }
  .services-mobile-menu {
    padding: 16px;
  }
  .services-navlink05 {
    font-weight: 500;
    text-decoration: underline;
  }
  .services-navlink06 {
    font-weight: 500;
    text-decoration: underline;
  }
  .services-navlink07 {
    font-weight: 500;
    text-decoration: underline;
  }
  .services-navlink08 {
    font-weight: 500;
    text-decoration: underline;
  }
  .services-navlink09 {
    font-style: normal;
    font-weight: 500;
    text-decoration: underline;
  }
  .services-text {
    display: block;
    font-size: 26px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
  .services-footer {
    padding: var(--dl-space-space-unit);
  }
  .services-separator {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .services-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .services-text24 {
    text-align: center;
    margin-bottom: 24px;
  }
  .services-image1 {
    width: auto;
    height: 50px;
  }
}
</style>
