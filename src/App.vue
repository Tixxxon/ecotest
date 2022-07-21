<template>
  <router-view />
</template>

<style lang="less">
@import url('@/assets/styles/base/variables.less');
@import url('@/assets/styles/styles.less');

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-user-select: none;
  user-select: none;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #484848;
}

.ect {
  &-container {
    margin: 0 auto;
    max-width: 940px;
    padding: 1.4444rem;
  }

  &-section {
    margin-top: 30px;
  }

  &-title {
    font-weight: 800;
    font-size: 1.3em;
    border-bottom: 1px solid black;
    padding-bottom: 7px;
    margin-top: 55px;
    margin-bottom: 35px;
    text-transform: uppercase;
  }

  &-paragraph {
    line-height: 2em;
    margin-top: 0.6em;
    &::first-letter {
      margin-left: 1em;
    }
  }
}

@media screen and (max-width: @sm-size) {
  body {
    font-size: 22px;
  }
}
</style>
