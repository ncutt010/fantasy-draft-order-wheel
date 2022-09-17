<template>
  <div>
    <span v-if="dialog || finished">
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
      <div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/><div class="confetti"/>
    </span>
    <div v-if="showingWelcomingScreen" class="pa-16 ma-16">
      <h1 class="title-container mb-10">Welcome to the Draft Lottery!!</h1>
      <br/>
      <li
        v-for="(note, idx) in notes"
        :key="idx"
        class="sub-title-container"
      >
        {{ note }}
      </li>
      <br/><br/>
      <div class="text-center">
        <v-btn x-large @click="doneWelcomeSCreen" color="success" class="pa-12">Lets get it!</v-btn>
      </div>
    </div>
    <v-row v-else no-gutters>
      <v-flex xs8>
        <lottery-wheel @landedOn="landedOn" @finish="finish"/>
      </v-flex>
      <v-flex xs3>
        <draft-order class="mr-16"/>
      </v-flex>
    </v-row>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
        dark
      >
        <v-card v-if="itemLandedOn">
          <v-card-title class="headline grey darken-2">
            <!-- Pick # {{ itemLandedOn.position }} -->
            Winner!
          </v-card-title>

          <h1 class="px-4 text-center">Congratulations {{itemLandedOn.label}}!!!</h1>
          <!-- <h1 class="px-4 text-center">You have Pick <span class="red--text"># {{ itemLandedOn.position }}</span>!!!You have Pick <span class="red--text"># {{ itemLandedOn.position }}</span>!!!</h1> -->

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="dialog = false"
              x-large
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import * as Data from '@/js/data'
import LotteryWheel from './LotteryWheel'
import DraftOrder from '../DraftOrder'
import { split } from 'lodash'
export default {
  name: 'LotteryScreen',
  components: {
    LotteryWheel,
    DraftOrder
  },
  data: () => ({
    dialog: false,
    itemLandedOn: null,
    finished: false,
    showingWelcomingScreen: true,
    notes: []
  }),
  mounted () {
    console.log('sttarting')
    this.notes = split(Data.getConfigByKey('notes'), '\n')
  },
  methods: {
    landedOn (land) {
      console.log('laind')
      this.dialog = true
      this.itemLandedOn = land
    },
    doneWelcomeSCreen () {
      this.showingWelcomingScreen = false
    },
    finish () {
      this.finished = true
    }
  }
}
</script>
