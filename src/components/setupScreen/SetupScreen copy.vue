<template>
  <div class="my-16 ">
    <v-row>
      <v-spacer />
      <v-btn large color="red" @click="clearEverythingClicked" class="mr-16">
        RESET EVERYTHING
      </v-btn>
    </v-row>
    <v-card
      class="card-container"
      max-width="700px"
      style="margin-left: auto; margin-right: auto"
    >
    <v-toolbar>
      Configuration - <b class="ml-2">{{ leagueName }}</b>
      <v-spacer />
      <v-btn @click="showImportDialog = true; importedText = null" color="secondary">
        Import
      </v-btn>
      <v-btn @click="exportClicked" color="primary" class="ml-2">
        Export
      </v-btn>
      <v-btn @click="$emit('continue')" color="success"  class="ml-2">
        Continue
      </v-btn>
    </v-toolbar>
    <div class="px-4">
      <v-text-field
        v-model="leagueName"
        label="League Name"
        @input="updateName"
      />
      <v-text-field
        v-model="countdownInSeconds"
        label="Countdown - In seconds"
        type="number"
        @input="updateTime"
      />
      <v-divider />
      <v-subheader>NOTES</v-subheader>
      <v-textarea
        v-model="notes"
        @input="updateNotes"
        label="Enter Notes here." hint="Each new line is a bullet point"
      />
      <v-divider />
      <v-subheader>PLAYERS ({{ teams.length }}) </v-subheader>
      <v-btn color="success" @click="addPlayer">
        Add Player
      </v-btn>
      <v-card
        v-for="(team, idx) in teams"
        color="secondary"
        class="pa-3 my-4"
        :key="idx"
      >
      <v-row no-gutters>
        {{ team.teamName }}
        <v-btn @click="deletePlayer(team)" color="red" class="ml-3">
          Delete Player
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="team.show = !team.show">
          Collapse/Show
        </v-btn>
      </v-row>
        <v-form v-show="team.show">
          <v-text-field
            v-for="(option, idx2) in teamOptions"
            dense
            :key="idx2"
            :rules="[v => !!v || option + ' is required']"
            clearable
            :label="option"
            :required="option === 'teamName' || option === 'name'"
            :value="team[option]"
            @input="updateTeam"
          />
        </v-form>
      </v-card>
    </div>
    </v-card>
    <v-dialog
      v-model="showImportDialog"
    >
      <v-card>
        <v-toolbar>
          <v-spacer />
          <v-btn class="mr-3" @click="importClicked">
            Import
          </v-btn>
          <v-btn color="error" @click="showImportDialog = false">
            Cancel
          </v-btn>
        </v-toolbar>
        <v-textarea v-model="importedText" label="Paste JSON Config Here"/>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import * as Data from '@/js/data'
import { uniqueId, map } from 'lodash'

export default {
  name: 'SetupScreen',
  data: () => ({
    countdownInSeconds: 30,
    leagueName: 'UNKNOWN',
    showImportDialog: false,
    importedText: null,
    notes: null,
    teams: [],
    teamOptions: [
      'teamName', 'name', 'instagram', 'record', 'ratingRank', 'rating', 'overall', 'icecream'
    ]
  }),
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // set time
      this.countdownInSeconds = Data.getConfigByKey('countdownInSeconds')
      this.leagueName = Data.getConfigByKey('leagueName')
      this.notes = Data.getConfigByKey('notes')
      this.teams = map(Data.getConfigByKey('teams'), team => {
        return {
          ...team,
          show: true
        }
      })
    },
    deletePlayer (team) {

    },
    addPlayer () {
      const name = uniqueId('Name ')
      this.teams.push({
        name,
        teamName: name
      })
    },
    exportClicked () {
      Data.copyToClipboard()
    },
    importClicked () {
      console.log(JSON.parse(this.importedText))
      Data.loadByData(JSON.parse(this.importedText))
      this.showImportDialog = false
      this.init()
    },
    clearEverythingClicked () {
      Data.clearLocalStorage()
      window.location.reload()
    },
    updateTime (val) {
      console.log(val)
      Data.setConfig('countdownInSeconds', val)
    },
    updateName (val) {
      Data.setConfig('leagueName', val)
    },
    updateTeam (val) {
      console.log(val)
      Data.setConfig('team', this.teams)
      this.init()
    },
    updateNotes (val) {
      Data.setConfig('notes', val)
    }
  }
}
</script>
<style lang="css" scoped>
.card-container {
  max-height: 600px;
  overflow: auto;
}
</style>
