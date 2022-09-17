<template>
  <div class="main-content-container" :style="mainStyle">
    <div
      v-if="showConfigScreen"
    >
      <setup-screen
        @continue="showConfigScreen = false; $emit('showFooter', true)"
      />
    </div>
    <div v-else>
      <div class="title-container" >{{ leagueName }}</div>
      <div class="sub-title-container" @click="showLotteryScreen" >Draft Lottery</div>
      <countdown-screen v-show="showCountdown" @videoMode="videoMode" @hideCountDown="showLotteryScreen"/>
      <lottery-screen v-show="!showCountdown"/>
    </div>
  </div>
</template>
<script>
import * as Data from '@/js/data'
import SetupScreen from './setupScreen/SetupScreen'
import CountdownScreen from './countdown/CountdownScreen'
import LotteryScreen from './lotteryScreen/LotteryScreen'
export default {
  name: 'MainContent',
  components: { CountdownScreen, LotteryScreen, SetupScreen },
  data: () => ({
    showCountdown: true,
    inVideoMode: false,
    showConfigScreen: true,
    leagueName: null
  }),
  computed: {
    mainStyle () {
      let background = this.inVideoMode ? 'black' : 'rgba(0,0,0,0)'
      return {
        background
      }
    }
  },
  watch: {
    showConfigScreen (val) {
      if (!val) {
        // set the league name
        this.leagueName = Data.getConfigByKey('leagueName')
        Data.save()
      }
    }
  },
  methods: {
    showLotteryScreen () {
      this.showCountdown = false
      this.inVideoMode = false
      this.$emit('showFooter', true)
    },
    videoMode () {
      if (this.showCountdown) {
        this.inVideoMode = true
        this.$emit('showFooter', false)
      }
    }
  }
}
</script>
<style>
.title-container{
  font-size: 80px;
  text-align: center;
}
.sub-title-container {
  text-align:  center;
  font-size: 50px;
}

.main-content-container{
  height: 100%;
    -webkit-transition: background 1.5s linear;
  -moz-transition: background 1.5s linear;
  -o-transition: background 1.5s linear;
  -ms-transition: background 1.5s linear;
  transition: background 1.5s linear;
}
</style>
