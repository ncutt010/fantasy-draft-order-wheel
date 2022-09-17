<template>
  <div>
    <div class="pt-10 lottery-container" v-if="!isFinished">
      <!-- <v-btn x-large  height="100px" @click="finishClicked" v-if="isFinished" color="info">Finish</v-btn> -->
      <div class="button-container" v-if="!isFinished">
        <v-btn v-show="wheelStatus === 'running'" x-large height="100px" color="error" id="stop">STOP!</v-btn>
        <v-btn v-show="wheelStatus === 'stopping'" x-large height="100px" color="info">Stopping...</v-btn>
        <v-btn v-show="wheelStatus === 'stopped'" x-large height="100px" color="success" id="start">GO!</v-btn>
      </div>
      <div id="wheel">
        <canvas id="canvas" class="canvas-wheel" width="900" height="900"></canvas>
      </div>
      <br>
    </div>
    <div v-if="isFinished" class="text-center text-content">
      <h1 class="thanks-for-attending">Thanks for Attending!</h1>
      <h1 class="congrats-text">Congratulations <strong>{{ prepPlayers[0].label }}!! </strong></h1>
    </div>
  </div>
</template>
<script>
import * as Data from '@/js/data'
import { map, filter, isNil, cloneDeep, find } from 'lodash'
/* eslint-disable */

export default {
  name: 'LotteryWheel',
  data: () => ({
    showFinalScreen: false,
    wheelStatus: 'stopped',
    labelLandedOn: null,
    init: false,
    avaliableColors: [
      '#FFD600',
      '#000000',
      '#2196F3',
      '#4CAF50',
      '#80DEEA',
      '#9C27B0',
      '#607D8B',
      '#F44336',
      '#795548',
      '#009688',
      '#F48FB1'
    ],
    players: [],
    // playersOld: [
    //   {
    //     label: 'Schuyler Blitzers',
    //     color: '#FFD600',
    //     position: null
    //   },
    //   {
    //     label: 'william\'s Team',
    //     color: '#000000',
    //     position: null
    //   },
    //        {
    //     label: 'Terrell\'s Team',
    //     color: '#2196F3',
    //     position: null
    //   },
    //   {
    //     label: 'FonX\'s Team',
    //     color: '#4CAF50',
    //     position: null
    //   },
    //   {
    //     label: 'Bird Gang',
    //     color: '#80DEEA',
    //     position: null
    //   },
    //   {
    //     label: 'John\'s Majestic',
    //     color: '#9C27B0',
    //     position: null
    //   },
    //   {
    //     label: 'Stugotz',
    //     color: '#607D8B',
    //     position: null
    //   },
    //   {
    //     label: 'Burr\'fect Storm',
    //     color: '#F44336',
    //     position: null
    //   },
    //   {
    //     label: 'Ewing Elites',
    //     color: '#FF9800',
    //     position: null
    //   },
    //   {
    //     label: 'Robert\'s Team',
    //     color: '#795548',
    //     position: null
    //   }
    // ]
  }),
  computed: {
    isFinished () {
      let players = filter(this.players, (item) => {
        return isNil(item.position)
      })
      return players.length === 1
    },
    prepPlayers () {
      let players = filter(this.players, (item) => {
        return isNil(item.position)
      })
      console.log(players.length)
      let finalPlayers = cloneDeep(players)
      let idx = 0
      let playersLength = players.length
   
      let times = Math.floor(20 / players.length) - 1
      for(let i = 0; i < times; i++) {
        finalPlayers = finalPlayers.concat(players)
      }
      console.log(finalPlayers.length)
      return finalPlayers
    },
    colors () {
      let ary = map(this.prepPlayers, 'color')
      return ary
    },
    labels () {
      let ary = map(this.prepPlayers, 'label')
      return ary
    }
  },
  mounted () {
    this.players = map(Data.getConfigByKey('teams'), (team, idx) => {
      return {
        label: team.teamName || team.name,
        color: this.avaliableColors[idx],
        position: null
      }
    })
    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    // var color = ['#fbc','#f88','#fbc','#f88','#fbc','#f88', "#fbc", "#f67"];
    // var label = ['10', '200', '50', '100', '5', '500', '0', "jPOT"];
    // var slices = this.colors.length;
    // var (360/this.colors.length) = 360/this.colors.length;
    var deg = rand(0, 360);
    var speed = 0;
    var slowDownRand = 0;
    let canvas = this.$el.getElementsByClassName('canvas-wheel')[0]
    var ctx = canvas.getContext('2d');
    var width = canvas.width; // size
    var center = width/2;      // center
    var isStopped = false;
    var lock = false;

    function deg2rad(deg) {
      return deg * Math.PI/180;
    }

    let drawSlice = (deg, color) => {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(center, center);
      ctx.arc(center, center, width/2, deg2rad(deg), deg2rad(deg+(360/this.colors.length)));
      ctx.lineTo(center, center);
      ctx.fill();
    }

    function drawText(deg, text) {
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(deg2rad(deg));
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText(text, 420, 10);
      ctx.restore();
    }

    let drawImg = () => {
      ctx.clearRect(0, 0, width, width);
      for(var i=0; i<this.colors.length; i++){
        drawSlice(deg, this.colors[i]);
        drawText(deg+(360/this.colors.length)/2, this.labels[i]);
        deg += (360/this.colors.length);
      }
    }

    drawImg()
    let anims = () => {
      this.init = true
      deg += speed;
      deg %= 360;

      // Increment speed
      if(!isStopped && speed<5){
        speed = speed+1 * 0.1;
        this.labelLandedOn = null
      }
      // Decrement Speed
      if(isStopped){
        if(!lock){
          lock = true;
          slowDownRand = rand(0.993, 0.997);
        } 
        speed = speed>0.01 ? speed*=slowDownRand : 0;
      }
      // Stopped!
      if(lock && !speed && !this.labelLandedOn){
        var ai = Math.floor(((360 - deg - 90) % 360) / (360/this.colors.length)); // deg 2 Array Index
        ai = (this.colors.length+ai)%this.colors.length; // Fix negative index
        this.landedOn(this.labels[ai])
        this.wheelStatus = 'stopped'
        this.labelLandedOn = this.labels[ai]
        // alert("You got:\n"+ label[ai] ); // Get Array Item from end Degree
      }

     if (this.wheelStatus !== 'stopped') {
       drawImg();
      }
       window.requestAnimationFrame( anims );
    }
    document.getElementById("stop").addEventListener("mousedown", () => {
      isStopped = true;
      this.wheelStatus = 'stopping'
    }, false);
    document.getElementById("start").addEventListener("mousedown", () => {
      if (!this.init) {
        anims()
      }
      isStopped = false;
      lock = false;
      this.wheelStatus = 'running'
    }, false);
  },
  methods: {
    landedOn (label) {
    },
    finishClicked () {
      this.showFinalScreen = true
      this.$emit('finish')
    },
    removePayerByLabel (label) {
      let player = find(this.players, { label })
      let players = filter(this.players, (item) => {
        return isNil(item.position)
      })
      player.position = players.length
      this.$emit('landedOn', player)
    }
  },
  watch: {
    labelLandedOn (newVal, oldVal) {
      if (!isNil(newVal)) {
        console.log('newVal', newVal)
        this.removePayerByLabel(newVal)     
      }
    },
    isFinished (val) {
      if (val) {
        this.$emit('finish')
      }
    }
  }
}
</script>
<style>
#wheel{
  display:inline-block;
  position:relative;
  overflow:hidden;
}
#wheel:after{
  content:"";
  background:red;
  border:2px solid white;
  position:absolute;
  top:-20px;
  left:48%;
  width:40px;
  height:40px;
  margin-left:-7px;
  transform: rotate(45deg)
}
.button-container {
  /* text-align: center; */
  padding-bottom: 50px;
}
.lottery-container{
  text-align: center;
}

.button-container .v-btn.v-size--x-large {
    font-size: 5rem;
}

.thanks-for-attending{
  font-size: 150px;
}

.congrats-text{
  font-size: 80px;
  color: gold
}

.text-content{
  padding-top: 400px
}
</style>
