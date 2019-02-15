<template>
  <section class="hero is-dark is-fullheight content is-flex">
    <div class="empty" v-if="!spotify && !youtube">
      <figure class="image">
        <img alt="Logo of the Eurovision Song Contest" src="../assets/esc.png">
      </figure>
    </div>
    <div class="spotify" v-if="!!spotify && !youtube">
      <iframe
        :src="'https://open.spotify.com/embed/track/' + spotify"
        width="450"
        height="530"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
    <div class="youtube" v-if="!spotify && !!youtube">
      <iframe
        height="360"
        :src="'https://www.youtube-nocookie.com/embed/' + youtube + '?vq=hd1080&autoplay=1'"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("media", ["spotify", "youtube"])
  },
  methods: {
    ...mapMutations("media", ["setSpotify", "setYouTube", "emptyMedia"])
  }
};
</script>

<style lang="scss" scoped>
.content {
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
  .youtube iframe {
    height: calc((9 / 16) * 50vw);
    width: 50vw;
  }
}
</style>
