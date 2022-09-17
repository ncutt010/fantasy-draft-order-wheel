<template>
  <span>
    <marquee-text :duration="250">
      <span v-for="(item, idx) in content" :key="idx" class="footer-content-container">
        <span v-if="item.type === 'pick'">
          <strong class="pddr-5">{{ content[0].title }}:</strong> <span v-html="content[0].content"></span>
        </span>
        <span v-else>
          <strong class="pldfdf-16">Team: </strong> {{ item.teamName}}
          <strong class="pl-16">Full Name: </strong> {{ item.name}}
          <span v-if="item.instagram" class="pl-16 pr-2"><img src="../assets/instagram.png" alt="Girl in a jacket" width="35" height="35"></span> {{ item.instagram }}
          <strong v-if="item.record" class="pl-16">Record: </strong> {{ item.record}}
          <strong v-if="item.rating" class="pl-16">Ranking: </strong> {{ item.rating}} {{ item.ratingRank}}
          <!-- <strong class="pl-16">Win%: </strong> {{ item.percentage}} % -->
          <strong v-if="item.overall" class="pl-16">Skill Level: </strong> {{ item.overall }}
          <strong class="pl-16" v-if="item.icecream">Favorite Ice Cream: </strong> {{ item.icecream }}
        </span>
        <v-divider vertical color="orange" height="20px" class="vertical-divider"/>
      </span>
    </marquee-text>
  </span>
</template>
<script>
import MarqueeText from 'vue-marquee-text-component'
import * as Data from '@/js/data'

export default {
  name: 'FooterContent',
  components: { MarqueeText },
  data: () => ({
    // item: null,
    content: [
      {
        type: 'pick',
        title: 'Win Percentage By Pick',
        content: 'Pick 1 <strong class="pr-5"> (9%),</strong>' +
                 'Pick 2 <strong class="pr-5"> (11%),</strong>' +
                 'Pick 3 <strong class="pr-5"> (13%),</strong>' +
                 'Pick 4 <strong class="pr-5"> (12%),</strong>' +
                 'Pick 5 <strong class="pr-5"> (12%),</strong>' +
                 'Pick 6 <strong class="pr-5"> (11%),</strong>' +
                 'Pick 7 <strong class="pr-5"> (9%),</strong>' +
                 'Pick 8 <strong class="pr-5"> (8%),</strong>' +
                 'Pick 9 <strong class="pr-5"> (8%),</strong>' +
                 'Pick 10 <strong class="pr-5"> (7%)</strong>'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Terrell\'s Team',
      //   instagram: '@mack_808',
      //   name: 'Terrell Mack',
      //   record: '64-43-0',
      //   ratingRank: 'Gold',
      //   rating: 780,
      //   percentage: 15,
      //   overall: 'Great',
      //   icecream: 'Strawberry Shortcake'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Ewing Elites',
      //   name: 'Charles (CJ) Cunningham',
      //   record: '10-5-0',
      //   ratingRank: 'Silver',
      //   rating: 664,
      //   percentage: 12,
      //   overall: 'Good'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Burr\'fect Storm',
      //   instagram: '@nick_lauda',
      //   name: 'Nick Lauda',
      //   record: '10-6-0',
      //   ratingRank: 'Silver',
      //   rating: 642,
      //   percentage: 12,
      //   overall: 'Average'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Da Schuyler Blitzers',
      //   name: 'Michael Northcutt',
      //   instagram: '@ncutt010',
      //   record: '47-32-0',
      //   ratingRank: 'Gold',
      //   rating: 796,
      //   percentage: 12,
      //   overall: 'Great'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Robert\'s Team',
      //   name: 'Robb Stark!',
      //   record: '8-8-0',
      //   ratingRank: 'Bronze',
      //   rating: 591,
      //   percentage: 6,
      //   overall: 'Good'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Bird Gang',
      //   name: 'Warren Smith',
      //   record: '0-0-0',
      //   ratingRank: 'Silver',
      //   rating: 642,
      //   percentage: 8,
      //   overall: 'Average'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Fonx\'s Team',
      //   instagram: '@phatfonx',
      //   name: 'Offofon Udoyen',
      //   record: '16-39-0',
      //   ratingRank: 'Bronze',
      //   rating: 533,
      //   percentage: 7,
      //   overall: 'Poor'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'william\'s Team',
      //   instagram: '@seeley31',
      //   name: 'Young William',
      //   record: '313-303-2',
      //   ratingRank: 'Gold',
      //   rating: 746,
      //   percentage: 12,
      //   overall: 'Veteran'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'Stugotz',
      //   name: 'Scott Malkinson',
      //   record: '12-3-0',
      //   ratingRank: 'Gold',
      //   rating: 736,
      //   percentage: 12,
      //   overall: 'Great'
      // },
      // {
      //   type: 'manager',
      //   teamName: 'John\'s Majestic Team',
      //   instagram: '@dg_courtesy',
      //   name: 'John (JB) Brown',
      //   record: '20-35-0',
      //   ratingRank: 'Bronze',
      //   rating: 542,
      //   percentage: 7,
      //   overall: 'Mediocre'
      }
    ]
  }),
  mounted () {
    this.content.push(...Data.getConfigByKey('teams'))
    console.log('here', this.content)
  }
}
</script>
<style>
.footer-content-container{
  font-size: 35px !important;
  height: 90px;
}
.vertical-divider {
  height: 45px;
  border-width: 3px;
  padding: 0px;
  margin: 0px 150px;
}
</style>
