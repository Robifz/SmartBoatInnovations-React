<template>
  <div class="download-code-container">
    <div class="download-code-container1">
      <div class="download-code-container2">
        <header data-thq="thq-navbar" class="download-code-navbar-interactive">
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            class="download-code-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              class="download-code-nav"
            >
              <router-link to="/" class="download-code-navlink">Home</router-link>
              <span class="download-code-text">About</span>
              <router-link to="/services" class="download-code-navlink01">
                Services
              </router-link>
              <router-link to="/download-code" class="download-code-navlink02">
                Code
              </router-link>
              <router-link to="/contact" class="download-code-navlink03">
                Contact
              </router-link>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            class="download-code-btn-group"
          ></div>
          <div data-thq="thq-burger-menu" class="download-code-burger-menu">
            <svg viewBox="0 0 1024 1024" class="download-code-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" class="download-code-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              class="download-code-nav1"
            >
              <div class="download-code-container3">
                <div
                  data-thq="thq-close-menu"
                  class="download-code-menu-close"
                ></div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                class="download-code-nav2"
              >
                <router-link to="/" class="download-code-navlink04">
                  Home
                </router-link>
                <router-link to="/about" class="download-code-navlink05">
                  About
                </router-link>
                <router-link to="/services" class="download-code-navlink06">
                  Services
                </router-link>
                <router-link to="/download-code" class="download-code-navlink07">
                  Code
                </router-link>
                <router-link to="/contact" class="download-code-navlink08">
                  Contact
                </router-link>
              </nav>
              <div class="download-code-container4"></div>
            </div>
            <div class="download-code-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                class="download-code-icon2"
              >
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg
              ><svg
                viewBox="0 0 877.7142857142857 1024"
                class="download-code-icon4"
              >
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg
                viewBox="0 0 602.2582857142856 1024"
                class="download-code-icon6"
              >
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <img alt="image" src="/wlan%20logo.png" class="download-code-image" />
      <div class="download-code-container5">
        <span class="download-code-text01">Smart Boat Innovations</span>
      </div>
    </div>
    <h1 class="download-code-text02">Download Code Centre</h1>
    <span class="download-code-text03">
      <span>
        Welcome to the Smart Boat Innovations Download Center! I&apos;m here to
        share a collection of code snippets that I&apos;ve personally crafted to
        enhance your smart boat&apos;s capabilities. I&apos;ve put in a lot of
        time and effort to develop this code, and if you find it valuable, I
        kindly ask for your support through a donation.
        <span v-html="rawgd5r"></span>
      </span>
      <br />
      <br />
      <span>
        Your contribution helps me fuel my passion for advancing boating
        technology and enables future projects.
      </span>
      <br />
      <br />
      <span>Rob</span>
      <br />
      <br />
      <br />
      <br />
    </span>
    <a
      href="https://ko-fi.com/smartboatinnovations"
      target="_blank"
      rel="noreferrer noopener"
      class="download-code-link"
    >
      <img alt="image" src="/kofi_logo_blue.svg" class="download-code-image1" />
    </a>
    <div class="download-code-cards-container"></div>
    <footer class="download-code-footer">
      <div class="download-code-container6">
        <nav class="download-code-nav3">
          <router-link to="/" class="download-code-navlink09">Home</router-link>
          <router-link to="/about" class="download-code-navlink10">
            About
          </router-link>
          <router-link to="/services" class="download-code-navlink11">
            Services
          </router-link>
          <router-link to="/download-code" class="download-code-navlink12">
            Code
          </router-link>
          <router-link to="/contact" class="download-code-navlink13">
            Contact
          </router-link>
        </nav>
      </div>
      <div class="download-code-separator"></div>
      <div class="download-code-container7">
        <span class="download-code-text15">
          © 2023 Smart Boat Innovations, All Rights Reserved.
        </span>
        <div class="download-code-icon-group1">
          <a
            href="https://ko-fi.com/smartboatinnovations"
            target="_blank"
            rel="noreferrer noopener"
            class="download-code-link1"
          >
            <img
              alt="image"
              src="/kofi_logo_blue.svg"
              class="download-code-image2"
            />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DownloadCode',
  data() {
    return {
      rawgd5r: ' ',
    }
  },
  metaInfo: {
    title: 'Download-Code - SmartBoatInnovations',
    meta: [
      {
        name: 'description',
        content:
          'Smart Boat ,  boat automation, IoT, intelligent monitoring, seamless connectivity, Home Assistant, Anchor Alarm, engine monitoring, bilge alarm, safety',
      },
      {
        property: 'og:title',
        content: 'Download-Code - SmartBoatInnovations',
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
.download-code-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 5px;
  flex-direction: column;
}
.download-code-container1 {
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
.download-code-container2 {
  display: flex;
  position: relative;
}
.download-code-navbar-interactive {
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
.download-code-desktop-menu {
  display: flex;
}
.download-code-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.download-code-navlink {
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
}
.download-code-text {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.download-code-navlink01 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.download-code-navlink02 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.download-code-navlink03 {
  font-style: normal;
  font-weight: 500;
  margin-left: 32px;
  text-decoration: none;
}
.download-code-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.download-code-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.download-code-icon {
  width: 32px;
  height: 32px;
}
.download-code-mobile-menu {
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
.download-code-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.download-code-container3 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.download-code-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.download-code-nav2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.download-code-navlink04 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.download-code-navlink05 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.download-code-navlink06 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.download-code-navlink07 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.download-code-navlink08 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.download-code-container4 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.download-code-icon-group {
  display: flex;
}
.download-code-icon2 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.download-code-icon4 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.download-code-icon6 {
  width: 16px;
  height: 16px;
}
.download-code-image {
  width: 100px;
  align-self: center;
  margin-top: 40px;
  object-fit: cover;
}
.download-code-container5 {
  width: 400px;
  height: 66px;
  display: flex;
  align-self: center;
  margin-top: 20px;
  align-items: flex-start;
}
.download-code-text01 {
  display: block;
  font-size: 32px;
  align-self: center;
  font-style: normal;
  margin-top: 0px;
  font-weight: 800;
  margin-left: auto;
  margin-right: auto;
}
.download-code-text02 {
  align-self: center;
  margin-top: 50px;
}
.download-code-text03 {
  font-size: 14px;
  text-align: justify;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.download-code-link {
  display: contents;
}
.download-code-image1 {
  width: 150px;
  object-fit: cover;
  text-decoration: none;
}
.download-code-cards-container {
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
.download-code-footer {
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
.download-code-container6 {
  display: flex;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.download-code-nav3 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.download-code-navlink09 {
  margin-left: 0px;
  text-decoration: underline;
}
.download-code-navlink10 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.download-code-navlink11 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.download-code-navlink12 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.download-code-navlink13 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: underline;
}
.download-code-separator {
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
.download-code-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.download-code-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.download-code-link1 {
  display: contents;
}
.download-code-image2 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
@media(max-width: 991px) {
  .download-code-navlink {
    font-style: normal;
    font-weight: 500;
  }
  .download-code-text {
    font-style: normal;
    font-weight: 500;
  }
  .download-code-navlink01 {
    font-style: normal;
    font-weight: 500;
  }
  .download-code-navlink02 {
    font-style: normal;
    font-weight: 500;
  }
  .download-code-navlink03 {
    font-style: normal;
    font-weight: 500;
  }
  .download-code-text03 {
    border-width: 0px;
  }
  .download-code-cards-container {
    justify-content: center;
  }
  .download-code-image2 {
    width: auto;
    height: 50px;
  }
}
@media(max-width: 767px) {
  .download-code-navbar-interactive {
    padding-left: 32px;
    padding-right: 32px;
  }
  .download-code-text {
    margin-left: var(--dl-space-space-unit);
  }
  .download-code-navlink01 {
    margin-left: var(--dl-space-space-unit);
  }
  .download-code-navlink02 {
    margin-left: var(--dl-space-space-unit);
  }
  .download-code-navlink03 {
    margin-left: var(--dl-space-space-unit);
  }
  .download-code-footer {
    padding-left: 32px;
    padding-right: 32px;
  }
  .download-code-separator {
    margin-top: 24px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 24px;
  }
  .download-code-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .download-code-text15 {
    margin-bottom: 24px;
  }
}
@media(max-width: 479px) {
  .download-code-container {
    border-width: 3px;
  }
  .download-code-navbar-interactive {
    padding: var(--dl-space-space-unit);
    padding-bottom: 1em;
  }
  .download-code-desktop-menu {
    display: none;
  }
  .download-code-btn-group {
    display: none;
  }
  .download-code-burger-menu {
    display: flex;
  }
  .download-code-mobile-menu {
    padding: 16px;
  }
  .download-code-navlink04 {
    font-style: normal;
    font-weight: 500;
    text-decoration: underline;
  }
  .download-code-navlink05 {
    font-weight: 500;
    text-decoration: underline;
  }
  .download-code-navlink06 {
    font-weight: 500;
    text-decoration: underline;
  }
  .download-code-navlink07 {
    font-weight: 500;
    text-decoration: underline;
  }
  .download-code-navlink08 {
    font-style: normal;
    font-weight: 500;
    text-decoration: underline;
  }
  .download-code-text01 {
    display: block;
    font-size: 26px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
  .download-code-footer {
    padding: var(--dl-space-space-unit);
  }
  .download-code-separator {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .download-code-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .download-code-text15 {
    text-align: center;
    margin-bottom: 24px;
  }
  .download-code-image2 {
    width: auto;
    height: 50px;
  }
}
</style>
