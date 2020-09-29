<template>
  <v-toolbar max-height="64px" height="64px" elevation="0">
    <v-toolbar-title>Open Web Desktop</v-toolbar-title>

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

    <v-btn text class="ml-2" :icon="$vuetify.breakpoint.xsOnly" :href="socialLinkPatreon" target="_blank">
      <v-icon :left="$vuetify.breakpoint.smAndUp">mdi-patreon</v-icon>
      <span class="hidden-xs-only" v-text="`Support`" />
    </v-btn>
  </v-toolbar>
</template>

<script>
import mixinLinks from "../../mixins/mixinLinks";

export default {
  name: "Header",
  mixins: [mixinLinks]
}
</script>

<style scoped lang="scss">
  .v-toolbar {
    user-select: none;
  }
</style>