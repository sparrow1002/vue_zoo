<template lang="html">
    <v-content
      id="content"
      class="body-2">
        <v-flex xs12>
            足部範圍
        </v-flex>
        <v-flex>
            <img
            id="leftFootImg"
            src="../assets/left_foot.png"
            width="145"
            height="126"
            alt="leftFootImg">
            <svg
            id="svg_left"
            width="145"
            height="126">
            <polygon
                id="l_1"
                tabindex="1"
                points="0,0 25,0 40,90 20,92"
                @click="clickFootRange('l_1')"/>
            <polygon
                id="l_2"
                tabindex="2"
                points="26,0,70,20,60,100,41,91"
                @click="clickFootRange('l_2')"/>
            <polygon
                id="l_3"
                tabindex="3"
                points="20,93 40,91 48,120 20,120"
                @click="clickFootRange('l_3')"/>
            <polygon
                id="l_4"
                tabindex="4"
                points="41,91 61,100 51,120"
                @click="clickFootRange('l_4')"/>
            <polygon
                id="l_5"
                tabindex="5"
                points="75,20 135,5 125,120 80,120"
                @click="clickFootRange('l_5')"/>
            Sorry, your browser does not support inline SVG.
            </svg>
            <img
            id="rightFootImg"
            src="../assets/right_foot.png"
            width="145"
            height="126"
            alt="rightFootImg">
            <svg
            id="svg_right"
            width="145"
            height="126">
            <polygon
                id="r_1"
                tabindex="6"
                points="115,0 145,0 130,94 106,92"
                @click="clickFootRange('r_1')"/>
            <polygon
                id="r_2"
                tabindex="7"
                points="80,20 114,0 105,91 88,100"
                @click="clickFootRange('r_2')"/>
            <polygon
                id="r_3"
                tabindex="3"
                points="105,91 135,93 125,125 100,125"
                @click="clickFootRange('r_3')"/>
            <polygon
                id="r_4"
                tabindex="4"
                points="85,100 105,91 95,120"
                @click="clickFootRange('r_4')"/>
            <polygon
                id="r_5"
                tabindex="5"
                points="2,10 70,15 65,120 20,120"
                @click="clickFootRange('r_5')"/>
            Sorry, your browser does not support inline SVG.
            </svg>
        </v-flex>
    </v-content>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'setFootRange'
    ]),
    /* eslint-disable */
    /* 上面那行是讓console.log可以通過compile */
    clickFootRange (polygonId) {
      console.log('clickFootRange')
      if(document.querySelector('.on')) {
        document.querySelector('.on').classList.remove('on')
      }
      document.getElementById(polygonId).classList.add('on')
    //   this.setFootRange(polygonId)
    }
  }
}
</script>

<style lang='css' scoped>
#content {
  margin:0px auto
}
#leftFootImg, #rightFootImg {
  position: relative;
}
#svg_left {
  left: 111px;
  position: absolute;
  z-index: 9;
}
#svg_right {
  left: 256px;;
  position: absolute;
  z-index: 9;
}
polygon {
  fill: transparent;
  stroke:none;
  cursor: pointer;
}
.on {
  stroke:red;
  stroke-width: 2;
}
</style>
