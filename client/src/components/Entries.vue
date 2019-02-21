<template>
  <div class="table-div">
    <b-table
      :data="entries"
      ref="table"
      icon-pack="mdi"
      hoverable
      :mobile-cards="false"
      :detailed="isMobile"
      detail-key="country"
      :show-detail-icon="false"
      class="tbl"
    >
      <template slot-scope="props">
        <b-table-column width="70" centered>
          <img
            :src="'/flags/'+ props.row.country + '.png'"
            :alt="props.row.country + '\'s icon.'"
            class="flag-icon"
          >
        </b-table-column>

        <b-table-column class="is-hidden-mobile">
          <h1 class="title is-5">{{props.row.country}}</h1>
          {{props.row.artist}}
        </b-table-column>

        <b-table-column class="is-hidden-mobile">
          <h2 class="subtitle">{{props.row.song}}</h2>
        </b-table-column>

        <b-table-column class="mobile-row is-hidden-tablet">
          <a @click="toggle(props.row)">
            <h1 class="title is-5">{{props.row.country}}</h1>
            {{!!props.row.song? props.row.song + ' by ' : ''}}{{props.row.artist}}
          </a>
        </b-table-column>

        <b-table-column class="has-text-right is-hidden-mobile">
          <a
            v-if="hasVideos(props.row)"
            @click="setMedia('youtube', props.row)"
            :class="'is-hidden-mobile link youtube ' + isActive('youtube', props.row.country)"
          >
            <b-icon icon="youtube" size="is-medium"></b-icon>
          </a>
          <a
            v-if="!!props.row.spotifyId"
            @click="setMedia('spotify', props.row)"
            :class="'is-hidden-mobile link spotify ' + isActive('spotify', props.row.country)"
          >
            <b-icon icon="spotify" size="is-medium"></b-icon>
          </a>
        </b-table-column>
      </template>

      <!-- Links for mobile view only -->
      <template slot="detail" slot-scope="props">
        <ul>
          <li v-if="!!props.row.performanceId">
            <a
              :href="'https://youtu.be/'+props.row.performanceId"
              target="_blank"
              class="button is-large is-dark is-outlined is-fullwidth"
            >
              <b-icon icon="youtube"></b-icon>
              <span>Eurovision Performance</span>
            </a>
          </li>
          <li v-if="!!props.row.nationalPerformanceId">
            <a
              :href="'https://youtu.be/'+props.row.nationalPerformanceId"
              target="_blank"
              class="button is-large is-dark is-outlined is-fullwidth"
            >
              <b-icon icon="youtube"></b-icon>
              <span>National Final Performance</span>
            </a>
          </li>
          <li v-if="!!props.row.musicVideoId">
            <a
              :href="'https://youtu.be/'+props.row.musicVideoId"
              target="_blank"
              class="button is-large is-dark is-outlined is-fullwidth"
            >
              <b-icon icon="youtube"></b-icon>
              <span>Music Video</span>
            </a>
          </li>
          <li v-if="!!props.row.spotifyId">
            <a
              :href="'https://open.spotify.com/track/'+props.row.spotifyId"
              target="_blank"
              class="button is-large is-dark is-outlined is-fullwidth"
            >
              <b-icon icon="spotify"></b-icon>
              <span>Stream on Spotify</span>
            </a>
          </li>
        </ul>
      </template>

      <template slot="empty">
        <section class="section empty-section is-flex">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad-outline" size="is-large"></b-icon>
            </p>
            <h1 class="title is-4 has-text-grey">Is this post-Eurovision depression?</h1>
            <h2 class="subtitle is-5 has-text-grey">There are no entries yet.</h2>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  mounted() {
    this.fetchEntries();
  },
  computed: {
    isMobile: () => {
      return window.innerWidth < 769;
    },
    ...mapState("entries", ["entries"]),
    ...mapState("media", ["spotify", "youtube", "country"])
  },
  methods: {
    hasVideos: entry => {
      if (
        !!entry.performanceId ||
        !!entry.nationalPerformanceId ||
        !!entry.musicVideoId
      )
        return true;
      return false;
    },
    setMedia(source, entry) {
      if (source === "youtube") {
        if (!!this.youtube && this.country === entry.country) this.emptyMedia();
        else this.setYouTube(entry);
      } else if (source === "spotify") {
        if (!!this.spotify && this.country === entry.country) this.emptyMedia();
        else this.setSpotify(entry);
      }
    },
    isActive(source, country) {
      if (source === "youtube" && !!this.youtube && this.country === country) {
        return "active";
      } else if (
        source === "spotify" &&
        !!this.spotify &&
        this.country === country
      ) {
        return "active";
      }
    },
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
    ...mapMutations("media", ["setSpotify", "setYouTube", "emptyMedia"]),
    ...mapActions("entries", ["fetchEntries"])
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma";
$spotifyGreen: #1db954;
$youtubeRed: #ff0000;
.table-div {
  height: 100vh;
  overflow-y: scroll;
  .tbl {
    margin-top: -19px;
    td {
      vertical-align: middle;
    }
    .link {
      color: #363636;
      margin-left: 0.5rem;
    }
    .link.youtube:hover {
      color: $youtubeRed;
    }
    .link.youtube.active {
      color: $youtubeRed;
    }
    .link.spotify:hover {
      color: $spotifyGreen;
    }
    .link.spotify.active {
      color: $spotifyGreen;
    }
    .link.edit:hover {
      color: $primary;
    }
    .mobile-row a {
      color: #363636;
      text-decoration: none;
    }
    a.button {
      margin-bottom: 0.5rem;
    }
  }
  .empty-section {
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
}
</style>
