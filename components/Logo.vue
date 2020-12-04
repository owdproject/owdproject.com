<template>
  <div :class="['logo', {'logo-square': square, 'logo-small': small}]">
    <div class="logo-content">
      <v-btn color="#2775a7">
        <v-icon>mdi-flask-outline</v-icon>
      </v-btn>
      <v-btn color="#2775a7">
        <v-icon>mdi-format-color-fill</v-icon>
      </v-btn>
      <v-btn color="#4c4c4c">
        <v-icon>mdi-radio</v-icon>
      </v-btn>
      <v-btn color="#f0584a">
        <v-icon>mdi-patreon</v-icon>
      </v-btn>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    square: Boolean,
    small: Boolean,
  }
}
</script>

<style scoped lang="scss">
.logo {
  .logo-content {
    margin: 0 auto;
    height: 114px;
    padding: 3px 5px;
    border-radius: 7px;
    user-select: none;
    overflow: hidden;

    .v-btn {
      box-sizing: border-box;
      width: 48px;
      min-width: auto !important;
      min-height: 48px;
      margin: 3px 1px;
      cursor: default;
      box-shadow: none;

      .v-icon {
        color: white;

        &.mdi-format-color-fill {
          top: 5px;
          left: 1px;
          font-size: 29px;
        }

        &.mdi-patreon {
          font-size: 23px;
        }
      }
    }
  }

  &.logo-square {
    .logo-content {
      width: 115px;
    }
  }

  &.logo-small {
    width: 40px;

    .logo-content {
      width: 34px;
      height: 34px;
      line-height: 16px;
      padding: 0;
      border-radius: 0;

      .v-btn {
        width: 14px;
        height: 14px;
        min-height: 14px;
        margin: 1px -2px 0 0;
        padding: 0;
        border-radius: 2px;

        .v-icon {
          font-size: 8px !important;

          &.mdi-format-color-fill {
            top: inherit;
            left: inherit;
          }
        }
      }
    }
  }

  .v-toolbar__title {
    position: absolute;
    top: 2px;
    left: calc(100% + 28px);
  }
}
</style>