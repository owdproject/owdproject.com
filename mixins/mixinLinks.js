export default {
  computed: {
    socialLinkTwitter() {
      return process.env.SOCIAL_LINK_TWITTER
    },
    socialLinkDiscord() {
      return process.env.SOCIAL_LINK_DISCORD
    },
    socialLinkPatreon() {
      return process.env.SOCIAL_LINK_PATREON
    },
    owdLinkRepository() {
      return process.env.SOCIAL_LINK_GITHUB
    },
    owdLinkModules() {
      return process.env.OWD_LINK_MODULES
    },
    owdLinkDemo() {
      return process.env.OWD_LINK_DEMO
    }
  }
}