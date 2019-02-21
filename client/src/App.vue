<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
$navbar-breakpoint: $tablet;
@import "~bulma";
@import "~buefy/src/scss/buefy";

* {
  font-family: "Roboto Condensed", sans-serif;
}
</style>
