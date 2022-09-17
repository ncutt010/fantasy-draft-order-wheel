<template>
<div>
  <div class="text-center starts-in-text" v-if="time !== 0" @click="startsInClick">Starts in...</div>
    <v-row
      align="center"
      justify="center"
    >
    <span class="countdown-text" :style="style" v-if="!showVideo">
      {{ formattedTime }}
    </span>
    <iframe v-else width="4000" height="1200"
      allowfullscreen="allowfullscreen"
      src="https://www.youtube.com/embed/qqsWgmXIwK0?start=39&autoplay=1&mute=1">
      <!-- src="https://www.youtube.com/embed/qqsWgmXIwK0?start=39&autoplay=1&mute=1"> -->
    </iframe>
    </v-row>
</div>
</template>
<script>
import * as Data from '@/js/data'
import { padStart, delay } from 'lodash'
export default {
  name: 'CountdownScreen',
  data: () => ({
    time: 15,
    // time: 100,
    timeInterval: null,
    showVideo: false
  }),
  computed: {
    formattedTime () {
      let mins = Math.floor(this.time / 60)
      let secs = this.time - (mins * 60)
      let formatedMins = padStart(mins, 2, 0)
      let formattedSecs = padStart(secs, 2, 0)
      return `${formatedMins}:${formattedSecs}`
    },
    style () {
      let color = this.time <= 10 ? 'gold' : 'white'
      let animation = this.time <= 10 && this.time !== 0 ? 'pulse 1s infinite' : 'unset'
      return {
        color,
        animation
      }
    }
  },
  created () {
    this.time = Data.getConfigByKey('countdownInSeconds')
    this.startTimer()
  },
  methods: {
    videoStarted () {
      setTimeout(() => {
        this.$emit('hideCountDown')
      }, 34000)
    },
    startTimer () {
      this.timeInterval = setInterval(() => {
        if (this.time === 0) {
          this.$emit('videoMode')
          delay(() => {
            this.showVideo = true
            this.videoStarted()
          }, 3300)
          return
        }
        this.time = this.time - 1
      }, 1000)
    },
    nextScreen () {
      this.$emit('hideCountDown')
    },
    startsInClick () {
      // add time
      this.time += 60
    }
  }
}
</script>
<style>
.countdown-text {
  font-size: 28vw;
  font-family: fantasy;
}
@keyframes pulse {
0% {
  transform: scale(.6);
}

70% {
  transform: scale(1);
}

100% {
  transform: scale(1);
}
}

.starts-in-text{
  position: absolute;
  text-align: center;
  left: 47%;
  margin-top: 150px;
  font-size: 30px;
}
</style>
