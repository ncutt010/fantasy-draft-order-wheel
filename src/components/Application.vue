<template>
  <div>
    <!-- <countdown-screen /> -->
    <draft-order class="pa-3"/>
  </div>
</template>
<script>
import DraftOrder from './DraftOrder'
import CountdownScreen from './countdown/CountdownScreen'
export default {
  name: 'Application',
  components: {
    DraftOrder,
    CountdownScreen
  }
}
</script>
