<template>
  <v-row justify="center" align="center" v-if="!demoActive">
    <v-col cols="12" class="text-center">
      <Logo style="margin: 0 auto" />

      <p class="mt-8">
        A fully modular open-source web desktop made with Vue.js
      </p>
      <p class="mb-0">
        <a :href="demoLink" @click="toggleDemo">Check the demo!</a>
      </p>
    </v-col>
  </v-row>

  <div v-else>
    <iframe :src="demoLink" />

    <v-btn text icon @click="toggleDemo" class="iframe-close">
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
      titleTemplate: 'A fully modular web desktop - %s',
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
    }
  }
}
</script>

<style scoped lang="scss">
  iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-btn.iframe-close {
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -18px;
  }
</style>