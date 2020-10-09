<template>
  <v-row justify="center" align="center" v-if="!demoActive">
    <v-col cols="12" class="owd-intro text-center">
      <Logo style="margin: 0 auto" />

      <p class="mt-8">
        A fully modular open-source web desktop made with Vue.js
      </p>
      <p class="mb-0">
        <a @click="toggleDemo">Check the demo!</a>

        <v-tooltip bottom attach=".owd-intro">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-on="on">mdi-information-variant</v-icon>
          </template>
          <span>This demo is my personal website and it's based on Open Web Desktop.<br />Check <b>owd-client</b> on GitHub if you are looking for a fresh demo!</span>
        </v-tooltip>
      </p>
    </v-col>
  </v-row>

  <div v-else>
    <v-progress-circular indeterminate color="#444" class="iframe-loader" v-if="!iframeLoaded" />
    <iframe :src="demoLink" v-show="iframeLoaded" @load="iframeLoaded = true" />

    <v-btn text icon @click="toggleDemo" class="iframe-close" v-if="iframeLoaded">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Logo from "../components/Logo";
import mixinLinks from "../mixins/mixinLinks";
export default {
  components: {Logo},
  mixins: [mixinLinks],
  head() {
    return {
      titleTemplate: '%s - A fully modular web desktop in Vue.js',
    }
  },
  data() {
    return {
      iframeLoaded: false
    }
  },
  computed: {
    ...mapGetters({
      'demoActive': 'demo/active'
    })
  },
  methods: {
    toggleDemo(e) {
      e.preventDefault()

      this.$store.commit('demo/SET_DEMO', !this.demoActive)

      if (this.demoActive === false) {
        this.iframeLoaded = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .owd-intro {
    p {
      .v-icon {
        margin-left: 7.5px;
        vertical-align: -3px;
        opacity: 0.25;
      }
    }

    .v-tooltip__content {
      position: absolute !important;
      left: 0 !important;
      right: 0 !important;
      min-width: 480px;
      margin-top: 10px;
      margin-left: 50%;
      transform: translateX(-50%);
      padding: 12px;

      @media(max-width: 560px) {
        min-width: 80vw;

        br {
          display: none;
        }
      }
    }
  }

  iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .iframe-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -16px 0 0 -16px;
  }

  .v-btn.iframe-close {
    position: absolute;
    bottom: 9px;
    left: 50%;
    margin-left: -18px;
  }
</style>