export default {
  computed: {
    socialLinkGitHub() {
      return process.env.SOCIAL_LINK_GITHUB
    },
    socialLinkTwitter() {
      return process.env.SOCIAL_LINK_TWITTER
    },
    socialLinkDiscord() {
      return process.env.SOCIAL_LINK_DISCORD
    },
    socialLinkPatreon() {
      return process.env.SOCIAL_LINK_PATREON
    },
    demoLink() {
      return process.env.DEMO_LINK
    }
  }
}