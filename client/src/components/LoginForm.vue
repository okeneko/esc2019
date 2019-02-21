<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
    </header>
    <section class="modal-card-body">
      <b-message type="is-danger" v-if="!!loginError">{{loginError}}</b-message>
      <b-field label="Username">
        <b-input
          :value="username"
          @input="setUsername"
          @keyup.enter.native="logIn"
          required
          rounded
          autofocus
        ></b-input>
      </b-field>

      <b-field label="Password">
        <b-input
          type="password"
          :value="password"
          @input="setPassword"
          @keyup.enter.native="logIn"
          required
          rounded
        ></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button
        class="button is-success is-fullwidth"
        type="button"
        :disabled="emptyFields"
        @click="logIn"
      >Login</button>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  computed: {
    emptyFields() {
      if (
        this.username === null ||
        this.password === null ||
        this.username.length < 1 ||
        this.password.length < 1
      )
        return true;
      return false;
    },
    ...mapState("auth", ["username", "password", "loginError"])
  },
  methods: {
    logIn() {
      this.login();
      if (!this.loginError) {
        this.$parent.close();
        this.setNull();
        this.$toast.open({
          message: "Successfully logged in!",
          position: "is-bottom",
          type: "is-light"
        });
      }
    },
    ...mapMutations("auth", ["setUsername", "setPassword", "setNull"]),
    ...mapActions("auth", ["login"])
  }
};
</script>
