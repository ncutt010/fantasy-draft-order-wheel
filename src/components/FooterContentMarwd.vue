<template>
  <span class="marquee">
    <!-- <span>
        O, let my land be a land where Liberty is crowned
        with no false patriotic wreath, But opportunity is
        real, and life is free, Equality is in the air we
        <strong>breathe</strong>. – (Langston Hughes, 1902-1967)
        <template class="ok-no">Testing</template>
    </span> -->
    <span>
      <template v-for="(item, idx) in content" class="footer-content-container">
        <template v-if="item.type === 'pick'" >
          <strong class="pr-5" :key="idx">{{ content[0].title }}:</strong> <template v-html="content[0].content"></template>
        </template>
        <template v-if="item.type === 'manager'">
          <strong class="pr-5" :key="idx">Team: </strong> {{ item.teamName}}
          <strong class="pl-16" :key="idx">Full Name: </strong> {{ item.name}}
          <strong class="pl-16" :key="idx">Record: </strong> {{ item.record}}
          <strong class="pl-16" :key="idx">Ranking: </strong> {{ item.rating}} {{ item.ratingRank}}
          <strong class="pl-16" :key="idx">Win%: </strong> {{ item.percentage}} %
          <strong class="pl-16" :key="idx">Overall: </strong> {{ item.overall }} Player
        </template>
      </template>
    </span>
  </span>
</template>
<script>
import { delay } from 'lodash'

export default {
  name: 'FooterContent',
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
      },
      {
        type: 'manager',
        teamName: 'Terrell\'s Team',
        name: 'Terrell Mack',
        record: '64-43-0',
        ratingRank: 'Gold',
        rating: 780,
        percentage: 15,
        overall: 'Great'
      },
      {
        type: 'manager',
        teamName: 'Ewing Elites',
        name: 'Charles (CJ) Cunningham',
        record: '10-5-0',
        ratingRank: 'Silver',
        rating: 664,
        percentage: 12,
        overall: 'Good'
      },
      {
        type: 'manager',
        teamName: 'White Boy Nick',
        name: 'Nick Lauda',
        record: '10-6-0',
        ratingRank: 'Silver',
        rating: 642,
        percentage: 12,
        overall: 'Good'
      },
      {
        type: 'manager',
        teamName: 'Da Schuyler Blitzers',
        name: 'Michael Northcutt',
        record: '47-32-0',
        ratingRank: 'Gold',
        rating: 796,
        percentage: 12,
        overall: 'Great'
      },
      {
        type: 'manager',
        teamName: 'Steveonson\'s Team',
        name: 'Steveonson Jackson',
        record: '0-0-0',
        ratingRank: 'Bronze',
        rating: 593,
        percentage: 6,
        overall: 'Noob'
      },
      {
        type: 'manager',
        teamName: 'Bird Gang',
        name: 'Warren Smith',
        record: '0-0-0',
        ratingRank: 'Silver',
        rating: 642,
        percentage: 8,
        overall: 'Good'
      },
      {
        type: 'manager',
        teamName: 'Fonx\'s Team',
        name: 'Offofon Uduyen',
        record: '16-39-0',
        ratingRank: 'Bronze',
        rating: 533,
        percentage: 7,
        overall: 'Poor'
      },
      {
        type: 'manager',
        teamName: 'william\'s Team',
        name: 'Young William',
        record: '313-303-2',
        ratingRank: 'Gold',
        rating: 746,
        percentage: 12,
        overall: 'Great'
      },
      {
        type: 'manager',
        teamName: 'Stugotz',
        name: 'Scott Malkinson',
        record: '16-39-0',
        ratingRank: 'Gold',
        rating: 736,
        percentage: 12,
        overall: 'Great'
      },
      {
        type: 'manager',
        teamName: 'John\'s Majestic Team',
        name: 'John (JB) Brown',
        record: '16-39-0',
        ratingRank: 'Bronze',
        rating: 542,
        percentage: 7,
        overall: 'Poor'
      }
    ]
  }),
  created () {
    let index = 0
    this.item = this.content[index]
    setInterval(() => {
      index = this.content.length - 1 === index ? 0 : index + 1
      // this.item = null
      // blank out for a sec
      delay(() => {
        // this.item = this.content[index]
      }, 1000)
    }, 15000)
  }
}
</script>
<style>
.footer-content-container{
  font-size: 35px !important;
  height: 90px;
}

marquee {
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  /* show the marquee just outside the paragraph */
  will-change: transform;
  animation: marquee 5s linear infinite;
  white-space: nowrap;
}

.marquee span:hover {
  animation-play-state: paused
}

@keyframes marquee {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-100%, 0); }
}

/* Respect user preferences about animations */

@media (prefers-reduced-motion: reduce) {
  .marquee {
    white-space: normal
  }
  .marquee span {
    animation-iteration-count: 1;
    animation-duration: 0.01;
    /* instead of animation: none, so an animationend event is
     * still available, if previously attached.
     */
    padding-left: 0;
  }
}
.ok-no{
  display: inline;
}
</style>
