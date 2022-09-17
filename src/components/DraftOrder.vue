<template>
  <v-card class="draft-order-results" color="rgba(0,0,0,.5)">
    <h1 class="text-center">Results:</h1>
    <v-alert
      v-if="placePosition"
      color="#FFD60080"
      dark
      @click="placePosition = null"
      class="text-center black--text "
    >
    <!-- <span class="racing-for-text">
      Spinning For...
    </span>
    <br />
    <strong v-if="placePosition===1" class="racing-for-value">
      {{ placePosition }}st place!
    </strong>
    <strong v-if="placePosition===2" class="racing-for-value">
      {{ placePosition }}nd place!
    </strong>
    <strong v-if="placePosition===3" class="racing-for-value">
      {{ placePosition }}rd place!
    </strong>
    <strong v-if="placePosition>3" class="racing-for-value">
      {{ placePosition }}th place!
    </strong> -->
    <!-- <strong class="racing-for-text">
      !
    </strong> -->
    </v-alert>
    <v-card color="transparent">
      <div
        v-for="(pos, idx) in positions"
        :key="idx"
      >
        <v-card :class="testMethod(pos)" tile flat @click="onClick(pos)">
          <v-row no-gutters class="pa-3">
            <v-col cols="12">
              <v-autocomplete
                v-model="pos.model"
                color="#FFD600"
                :prefix="'#' + pos.num + '.'"
                :items="playerNames"
                prepend-icon="sports_football"
                clearable
                hide-details
                height="25px"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-card>
  </v-card>
</template>
<script>
import { map } from 'lodash'
import * as Data from '@/js/data'
export default {
  name: 'DraftOrder',
  data: () => ({
    placePosition: 0,
    value: null,
    positions: [],
    // positions: [
    //   { num: 1, model: undefined },
    //   { num: 2, model: undefined },
    //   { num: 3, model: undefined },
    //   { num: 4, model: undefined },
    //   { num: 5, model: undefined },
    //   { num: 6, model: undefined },
    //   { num: 7, model: undefined },
    //   { num: 8, model: undefined },
    //   { num: 9, model: undefined },
    //   { num: 10, model: undefined },
    //   { num: 11, model: undefined },
    //   { num: 12, model: undefined }
    // ],
    playerNames: []
  }),
  mounted () {
    this.positions = map(Data.getConfigByKey('teams'), (team, idx) => {
      return { num: idx + 1, model: undefined }
    })
    this.playerNames = map(Data.getConfigByKey('teams'), 'teamName')
  },
  methods: {
    testMethod (pos) {
      // :color="pos.model === undefined ? '' : 'success'"
      return pos.model === undefined ? 'no-selection-picked' : 'selection-picked'
    },
    onClick (pos) {
      this.placePosition = pos.num
    }
  }
}
</script>
<style>
.no-selection-picked {
  background: rgba(0,0,0,0) !important
}

.selection-picked {
  background: rgba(0,0,0,0) !important
}
.racing-for-value {
  font-size: 50px;
}

.draft-order-results input{
  font-size: 30px;
}
</style>
