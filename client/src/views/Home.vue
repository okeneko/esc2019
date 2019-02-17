<template>
  <div>
    <div class="columns is-gapless">
      <div class="column col is-two-fifths">
        <!-- Awful UX, I know -->
        <div class="is-hidden-mobile">
          <a v-if="!isLoggedIn" @click="isLoginModalActive = true">
            <section class="hero is-dark upbar"></section>
          </a>
          <div v-if="isLoggedIn" class="columns is-gapless upbar">
            <section class="column hero is-danger" @click="logOut()"></section>
            <section class="column hero is-primary" @click="create()"></section>
          </div>
        </div>
        <Entries/>
      </div>
      <div class="column col is-hidden-mobile">
        <Media/>
      </div>
    </div>
    <b-modal :active.sync="isLoginModalActive" has-modal-card>
      <LoginForm/>
    </b-modal>
    <b-modal :active.sync="isEntryModalActive" has-modal-card>
      <EntryForm/>
    </b-modal>
  </div>
</template>

<script>
import Entries from "@/components/Entries";
import Media from "@/components/Media";
import LoginForm from "@/components/LoginForm";
import EntryForm from "@/components/EntryForm";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      isLoginModalActive: false,
      isEntryModalActive: false
    };
  },
  components: {
    Entries,
    Media,
    LoginForm,
    EntryForm
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"])
  },
  methods: {
    logOut() {
      this.logout();
      this.$toast.open({
        message: "Successfully logged out.",
        position: "is-bottom",
        type: "is-light"
      });
    },
    create() {
      this.setNull();
      this.setCreate();
      this.fetchEntrylessCountries();
      this.isEntryModalActive = true;
    },
    ...mapMutations("entries", ["setCreate", "setNull"]),
    ...mapActions("auth", ["logout"]),
    ...mapActions("entries", ["fetchEntrylessCountries"])
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100vh;
}
.columns.upbar {
  margin-bottom: 0;
}
.upbar {
  height: 2vh;
}
</style>
