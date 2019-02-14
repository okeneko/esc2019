<template>
  <div class="table-div">
    <b-table :data="entries" icon-pack="mdi" hoverable :mobile-cards="false" class="tbl">
      <template slot-scope="props">
        <b-table-column width="70" centered>
          <img
            :src="'/flags/'+ props.row.name + '.png'"
            :alt="props.row.name + '\'s icon.'"
            class="flag-icon"
          >
        </b-table-column>

        <b-table-column>
          <h1 class="title is-5">{{props.row.name}}</h1>
          <!-- {{props.row.song}} by {{props.row.artist}} -->
        </b-table-column>

        <!-- <b-table-column class="has-text-right">
          <b-icon icon="spotify" size="is-medium"></b-icon>
        </b-table-column>-->
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
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  mounted() {
    this.fetchEntries();
  },
  computed: {
    ...mapState("entries", ["entries"])
  },
  methods: {
    ...mapMutations("entries", []),
    ...mapActions("entries", ["fetchEntries"])
  }
};
</script>

<style lang="scss" scoped>
.table-div {
  overflow-y: scroll;
  height: 98%;
}

.tbl {
  margin-top: -19px;
  td {
    vertical-align: middle;
  }
}
</style>
