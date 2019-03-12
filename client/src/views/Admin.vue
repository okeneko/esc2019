<template>
  <div>
    <!-- Login modal -->
    <b-modal
      :active.sync="isLoginModalActive"
      has-modal-card
      :canCancel="false"
      @close="fetchEntries()"
    >
      <LoginForm/>
    </b-modal>
    <!-- Entry modal -->
    <b-modal :active.sync="isEntryModalActive" has-modal-card>
      <EntryForm/>
    </b-modal>

    <div :class="'container ' + isHidden">
      <h1 class="title has-text-centered">
        <router-link to="/">ESC2019</router-link>&nbsp;Admin Page
      </h1>
      <table class="table is-hoverable is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>Country</th>
            <th>Artist</th>
            <th>Song</th>
            <th>
              <button class="button is-success is-fullwidth" @click="create()">Create</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries" :key="entry.country">
            <td width="15%">{{entry.country}}</td>
            <td width="30%">{{entry.artist}}</td>
            <td width="30%">{{entry.song}}</td>
            <td width="15%">
              <button class="button is-dark is-fullwidth" @click="update(entry)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import LoginForm from "@/components/LoginForm";
import EntryForm from "@/components/EntryForm";
export default {
  components: {
    LoginForm,
    EntryForm
  },
  data() {
    return {
      isLoginModalActive: false,
      isEntryModalActive: false
    };
  },
  mounted() {
    if (!this.isLoggedIn) this.isLoginModalActive = true;
  },
  computed: {
    isHidden() {
      if (!this.isLoggedIn) return "is-hidden";
      return "";
    },
    ...mapState("entries", ["entries"]),
    ...mapGetters("auth", ["isLoggedIn"])
  },
  methods: {
    create() {
      this.setNull();
      this.setCreate();
      this.fetchEntrylessCountries();
      this.isEntryModalActive = true;
    },
    update(entry) {
      this.setNull();
      this.setUpdate(entry);
      this.isEntryModalActive = true;
    },
    ...mapMutations("entries", ["setCreate", "setUpdate", "setNull"]),
    ...mapActions("entries", ["fetchEntries", "fetchEntrylessCountries"])
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 1em;
  a {
    text-decoration: none;
  }
}
.table {
  th,
  td {
    vertical-align: middle;
  }
}
</style>
