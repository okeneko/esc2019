<template>
  <div>
    <div class="columns is-gapless">
      <div class="column is-5 col-left">
        <Navbar/>
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

              <b-table-column class="entry-data">
                <h1 class="title is-5">{{props.row.country}}</h1>
                {{props.row.song}} by {{props.row.artist}}
              </b-table-column>

              <b-table-column class="has-text-right entry-data">
                <div class="is-flex links">
                  <b-icon icon="spotify" size="is-medium"></b-icon>
                </div>
              </b-table-column>
            </template>

            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <b-icon icon="emoticon-sad" size="is-large"></b-icon>
                  </p>
                  <p>Nothing here.</p>
                </div>
              </section>
            </template>
          </b-table>
        </div>
      </div>
      <div class="column is-hidden-mobile col-right">
        <section class="hero is-dark is-fullheight"></section>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "home",
  components: {
    Navbar
  },
  data() {
    const entries = [
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      },
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      },
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      },
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      },
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      },
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      },
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      },
      {
        country: "Albania",
        artist: "Jonida Maliqi",
        song: "Ktheju tokës",
        nationalPerformanceId: "vZDCw9Pedw"
      },
      {
        country: "Italy",
        artist: "Mahmood",
        song: "Soldi",
        nationalPerformanceId: "ogqRjzZjFSE"
      }
    ];

    return {
      entries
    };
  }
};
</script>

<style lang="scss" scoped>
.column {
  height: 100vh;
}

// .col-left {
//   padding-right: 0;
// }

// .col-right {
//   padding-left: 0;
// }

.table-div {
  overflow-y: scroll;
  height: 89%;
}

.tbl {
  margin-top: -19px;
}

.entry-data {
  padding: 1em;
}

.links {
  height: 100%;
  justify-content: flex-end;
  align-items: center;
}
</style>
