<template>
  <v-app>
    <Header />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export default {
  components: {Header, Footer}
}
</script>

<style lang="scss">
.v-main {
  position: relative;
  min-height: 402px;

  a {
    color: #f0584a;
    transition: color 0.5s ease-in-out;

    &:hover {
      color: #666;
    }
  }

  .row {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -128px;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: 250px;
  }
}
</style>