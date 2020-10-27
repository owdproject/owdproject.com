<template>
  <v-toolbar max-height="64px" height="64px" elevation="0">
    <Logo square small :class="['mr-12', {'visible': visible}]">
      <v-toolbar-title>Open Web Desktop</v-toolbar-title>
    </Logo>

    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="ml-2" :icon="$vuetify.breakpoint.xsOnly" v-on="on">
          <v-icon :left="$vuetify.breakpoint.smAndUp">mdi-text-box-outline</v-icon>
          <span class="hidden-xs-only" v-text="`Documentation`" />
        </v-btn>
      </template>
      <span>Not available</span>
    </v-tooltip>

    <v-btn text class="ml-2" :icon="$vuetify.breakpoint.xsOnly" :href="socialLinkGitHub" target="_blank">
      <v-icon :left="$vuetify.breakpoint.smAndUp">mdi-github</v-icon>
      <span class="hidden-xs-only" v-text="`GitHub`" />
    </v-btn>
  </v-toolbar>
</template>

<script>
import mixinLinks from "../../mixins/mixinLinks";
import Logo from "~/components/Logo";
import {mapGetters} from "vuex";

export default {
  name: "Header",
  components: {Logo},
  mixins: [mixinLinks],
  data() {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters({
      'demoActive': 'demo/active'
    })
  },
  mounted() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'demo/SET_DEMO_LOADED') {
        this.visible = mutation.payload
      }
      if (mutation.type === 'demo/SET_DEMO_ACTIVE') {
        this.visible = mutation.payload
      }
    })
  }
}
</script>

<style lang="scss">
  .v-toolbar {
    user-select: none;

    .logo {
      transition: transform 1s ease-in-out;
      transform: translateX(-56px);
      will-change: transform;

      &.visible {
        transform: translateX(8px);
      }
    }
  }
</style>