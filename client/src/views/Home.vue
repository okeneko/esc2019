<template>
  <div>
    <div class="columns is-gapless">
      <div class="column is-two-fifths">
        <!-- <Navbar/> -->
        <section class="hero is-dark upbar"></section>
        <Entries/>
      </div>
      <div class="column is-hidden-mobile">
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
.column {
  height: 100vh;
}
.upbar {
  height: 2vh;
}
</style>
