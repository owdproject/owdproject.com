<template>
  <v-footer class="text-center">
    <v-row class="my-4">
      <v-col>

        <div class="footer-links mb-6">
          <a :href="socialLinkGitHub" target="_blank">
            <v-icon size="28">mdi-github</v-icon>
          </a>
          <a :href="socialLinkTwitter" target="_blank">
            <v-icon size="30">mdi-twitter</v-icon>
          </a>
          <a :href="socialLinkPatreon" target="_blank">
            <v-icon size="29">mdi-patreon</v-icon>
          </a>
        </div>

        <div class="footer-copyright">
          <p class="mb-0">
            Released under the
            <a :href="`${socialLinkGitHub}/owd-client/blob/master/LICENSE`" target="_blank">MIT License</a>
            <br />
            Copyright &copy; 2020 hacklover
          </p>
        </div>

      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  import mixinLinks from "../../mixins/mixinLinks";

  export default {
    name: "Footer",
    mixins: [mixinLinks]
  }
</script>

<style scoped lang="scss">
.v-footer {
  user-select: none;

  .footer-links {
    a {
      display: inline-block;
      margin: 0 8px;
      color: #BBB;
    }
  }

  .footer-copyright {
    color: #CCC;

    a {
      color: #999;
    }
  }
}
</style>