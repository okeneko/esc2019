<template>
  <section class="hero is-dark is-fullheight content is-flex">
    <div class="hero-head" v-if="!spotify && !!youtube">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-menu">
            <a :class="'navbar-item ' + isActive('esc')" @click="setVideo('esc')">Eurovision</a>
            <a :class="'navbar-item ' + isActive('mv')" @click="setVideo('mv')">Music Video</a>
            <a :class="'navbar-item ' + isActive('nf')" @click="setVideo('nf')">National Final</a>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
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
          :src="'https://www.youtube.com/embed/' + youtube + '?vq=hd1080&autoplay=1'"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  mounted() {
    this.emptyMedia();
  },
  computed: {
    ...mapState("media", ["spotify", "youtube", "youtubeIds"])
  },
  methods: {
    isActive(vid) {
      switch (vid) {
        case "esc":
          if (!this.youtubeIds.performanceId) return "is-hidden";
          if (this.youtube === this.youtubeIds.performanceId)
            return "is-active";
          else return "";
          break;

        case "mv":
          if (!this.youtubeIds.musicVideoId) return "is-hidden";
          if (this.youtube === this.youtubeIds.musicVideoId) return "is-active";
          else return "";
          break;

        case "nf":
          if (!this.youtubeIds.nationalPerformanceId) return "is-hidden";
          if (this.youtube === this.youtubeIds.nationalPerformanceId)
            return "is-active";
          else return "";
          break;
      }
    },
    ...mapMutations("media", [
      "setSpotify",
      "setYouTube",
      "setVideo",
      "emptyMedia"
    ])
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
  .navbar-menu {
    box-shadow: 0 0 0px;
  }
  .hero-body {
    margin: 0;
    padding: 0;
  }
  .youtube iframe {
    height: calc((9 / 16) * 50vw);
    width: 50vw;
  }
}
</style>
