<template>
  <div class="table-div">
    <b-table :data="entries" icon-pack="mdi" hoverable :mobile-cards="false" class="tbl">
      <template slot-scope="props">
        <b-table-column width="70" centered>
          <img
            :src="'/flags/'+ props.row.country + '.png'"
            :alt="props.row.country + '\'s icon.'"
            class="flag-icon"
          >
        </b-table-column>

        <b-table-column>
          <h1 class="title is-5">{{props.row.country}}</h1>
          {{props.row.song}} by {{props.row.artist}}
        </b-table-column>

        <b-table-column class="has-text-right">
          <a
            v-if="!!props.row.nationalPerformanceId"
            @click="setYouTube(props.row.nationalPerformanceId)"
            class="link"
          >
            <b-icon icon="television" size="is-medium"></b-icon>
          </a>
          <a
            v-if="!!props.row.performanceId"
            @click="setYouTube(props.row.performanceId)"
            class="link"
          >
            <b-icon icon="earth-box" size="is-medium"></b-icon>
          </a>
          <a
            v-if="!!props.row.musicVideoId"
            @click="setYouTube(props.row.musicVideoId)"
            class="link"
          >
            <b-icon icon="youtube" size="is-medium"></b-icon>
          </a>
          <a v-if="!!props.row.spotifyId" @click="setSpotify(props.row.spotifyId)" class="link">
            <b-icon icon="spotify" size="is-medium"></b-icon>
          </a>
        </b-table-column>
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
    ...mapState("entries", ["entries"]),
    ...mapState("media", ["spotify", "youtube"])
  },
  methods: {
    ...mapMutations("entries", []),
    ...mapMutations("media", ["setSpotify", "setYouTube"]),
    ...mapActions("entries", ["fetchEntries"])
  }
};
</script>

<style lang="scss" scoped>
.table-div {
  overflow-y: scroll;
  height: 98vh;
  .tbl {
    margin-top: -19px;
    td {
      vertical-align: middle;
    }
    .link {
      color: #363636;
      margin-left: 0.5rem;
    }
  }
  .empty-section {
    height: 98vh;
    justify-content: center;
    align-items: center;
  }
}
</style>
