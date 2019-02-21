<template>
  <div>
    <div class="columns is-gapless">
      <div class="column col is-two-fifths">
        <Entries/>
      </div>
      <div class="column col is-hidden-mobile">
        <Media/>
      </div>
    </div>
  </div>
</template>

<script>
import Entries from "@/components/Entries";
import Media from "@/components/Media";
export default {
  name: "home",
  components: {
    Entries,
    Media
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

.col {
  height: 100vh;
}
</style>
