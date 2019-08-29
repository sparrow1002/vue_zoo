<template lang="html">
  <v-btn small color="info" @click="save()"><font face="微軟正黑體" size="3">測試</font></v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
      methods: {
    ...mapActions([
      'save'
    ])
  }
}
</script>
      