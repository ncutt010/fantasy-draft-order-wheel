<template>
  <div>
    <v-toolbar color="success" dark>
      <v-icon class="pr-4">sports_football</v-icon>

      <v-toolbar-title>The Social Distancing Club</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn color="info">
        <v-icon class="pr-3">info</v-icon>
        Fun Fact!
      </v-btn> -->

    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
        dark
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="info lighten-1"
            dark
            v-bind="attrs"
            v-on="on"
            @click="funFactClicked"
          >
            <v-icon class="pr-3">info</v-icon>
              Fun Fact!
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey darken-2">
            Did you know?
          </v-card-title>

          <div v-html="funFact" class="text-text pa-5 text-center" />

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              @click="dialog = false"
            >
              Wow
            </v-btn>
            <v-btn
              color="error"
              @click="dialog = false"
            >
              That's Sad!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
    dialog: false,
    funFactNumber: 0,
    funFact: '',
    funFacts: [
      'Nick\'s <span class="sub-text-here">(Wentz upon a Time)</span> K/D in Destiny is a staggering <strong class="red--text">0.54</strong>',
      'In Nick\'s <span class="sub-text-here">(Wentz upon a Time)</span> Destiny career, Nick has <strong class="red--text">never</strong> been to mercury.',
      'The odds of Nick <span class="sub-text-here">(Wentz upon a Time)</span> winning the championship this year are 2,700,565 to 1.  Yikes!',
      'Fonx <span class="sub-text-here">(Dakstreet Boys)</span> has never finshed higher than <strong class="success--text">9th place</strong>.  He\'s been in the league for <strong class="info--text">3 years!</strong>'
    ]
  }),
  methods: {
    funFactClicked () {
      this.funFact = this.funFacts[this.funFactNumber]
      this.funFactNumber = this.funFactNumber === this.funFacts.length ? 0 : this.funFactNumber + 1
    }
  }
}
</script>
<style>
.text-text {
  font-size: 30px;
}

.sub-text-here {
  color: #757575;
  font-size: 20px
}
</style>
