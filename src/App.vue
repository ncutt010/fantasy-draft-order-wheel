<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <!-- <v-navigation-drawer
          v-model="drawer"
          permanent
          app
          clipped
        >
          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer> -->
        <!--
        <v-app-bar
          app
          clipped-left
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar> -->
        <v-main>
          <main-content @showFooter="showFooter" />
        </v-main>
        <v-footer app v-if="showingFooter">
          <footer-content/>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Application from './components/Application'
import Footer from './components/Footer'
import Toolbar from './components/Toolbar'
import MainContent from './components/MainContent'
import FooterContent from './components/FooterContent'
import * as Data from './js/data'

export default {
  name: 'App',
  components: {
    Application,
    Footer,
    Toolbar,
    MainContent,
    FooterContent
  },
  data: () => ({
    drawer: false,
    showingFooter: false
  }),
  created () {
    Data.init()
    this.$vuetify.theme.dark = true
  },
  methods: {
    showFooter (toShow) {
      this.showingFooter = toShow
    }
  }
}
</script>

<style scopped>

html{
  overflow: hidden;
}
#app {
  overflow-y: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* background: url("https://www.thehamilcast.com/wp-content/uploads/2016/04/hambg.jpg") no-repeat center center fixed;
  background-size: cover; */
  background: url("https://www.thehamilcast.com/wp-content/uploads/2016/04/hambg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* background: linear-gradient(to bottom, #00BCD4, #3F51B5) */
  /* margin-top: 60px; */
}
.theme--dark.v-application {
    background: unset !important;
}

.confetti {
  width: 15px;
  height: 15px;
  background-color: #f2d74e;
  position: absolute;
  left: 50%;
  animation: confetti 5s ease-in-out -2s infinite;
  transform-origin: left top;
}
.confetti:nth-child(1) {
  background-color: #f2d74e; left: 10%; animation-delay: 0;
}
.confetti:nth-child(2) {
  background-color: #95c3de; left: 20%; animation-delay: -5s;
}
.confetti:nth-child(3) {
  background-color: #ff9a91; left: 30%; animation-delay: -3s;
}
.confetti:nth-child(4) {
  background-color: #f2d74e; left: 40%; animation-delay: -2.5s;
}
.confetti:nth-child(5) {
  background-color: #95c3de; left: 50%; animation-delay: -4s;
}
.confetti:nth-child(6) {
  background-color: #ff9a91; left: 60%; animation-delay: -6s;
}
.confetti:nth-child(7) {
  background-color: #f2d74e; left: 70%; animation-delay: -1.5s;
}
.confetti:nth-child(8) {
  background-color: #95c3de; left: 80%; animation-delay: -2s;
}
.confetti:nth-child(9) {
  background-color: #ff9a91; left: 90%; animation-delay: -3.5s;
}
.confetti:nth-child(10) {
  background-color: #f2d74e; left: 100%; animation-delay: -2.5s;
}.confetti:nth-child(11) {
  background-color: #f2d74e; left: 10%; animation-delay: 0;
}
.confetti:nth-child(12) {
  background-color: #95c3de; left: 20%; animation-delay: -5s;
}
.confetti:nth-child(13) {
  background-color: #ff9a91; left: 30%; animation-delay: -3s;
}
.confetti:nth-child(14) {
  background-color: #f2d74e; left: 40%; animation-delay: -2.5s;
}
.confetti:nth-child(15) {
  background-color: #95c3de; left: 50%; animation-delay: -4s;
}
.confetti:nth-child(16) {
  background-color: #ff9a91; left: 60%; animation-delay: -6s;
}
.confetti:nth-child(17) {
  background-color: #f2d74e; left: 70%; animation-delay: -1.5s;
}
.confetti:nth-child(18) {
  background-color: #95c3de; left: 80%; animation-delay: -2s;
}
.confetti:nth-child(19) {
  background-color: #ff9a91; left: 90%; animation-delay: -3.5s;
}
.confetti:nth-child(20) {
  background-color: #f2d74e; left: 100%; animation-delay: -2.5s;
}
.confetti:nth-child(21) {
  background-color: #f2d74e; left: 10%; animation-delay: 0;
}
.confetti:nth-child(22) {
  background-color: #95c3de; left: 20%; animation-delay: -5s;
}
.confetti:nth-child(23) {
  background-color: #ff9a91; left: 30%; animation-delay: -3s;
}
.confetti:nth-child(24) {
  background-color: #f2d74e; left: 40%; animation-delay: -2.5s;
}
.confetti:nth-child(25) {
  background-color: #95c3de; left: 50%; animation-delay: -4s;
}
.confetti:nth-child(26) {
  background-color: #ff9a91; left: 60%; animation-delay: -6s;
}
.confetti:nth-child(27) {
  background-color: #f2d74e; left: 70%; animation-delay: -1.5s;
}
.confetti:nth-child(28) {
  background-color: #95c3de; left: 80%; animation-delay: -2s;
}
.confetti:nth-child(29) {
  background-color: #ff9a91; left: 90%; animation-delay: -3.5s;
}
.confetti:nth-child(30) {
  background-color: #f2d74e; left: 100%; animation-delay: -2.5s;
}

@keyframes confetti {
  0% { transform: rotateZ(15deg) rotateY(0deg) translate(0,0); }
  25% { transform: rotateZ(5deg) rotateY(360deg) translate(-5vw,20vh); }
  50% { transform: rotateZ(15deg) rotateY(720deg) translate(5vw,60vh); }
  75% { transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw,80vh); }
  100% { transform: rotateZ(15deg) rotateY(1440deg) translate(10vw,110vh); }
}

</style>
