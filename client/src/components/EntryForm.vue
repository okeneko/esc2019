<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title" v-if="creating">Create Entry</p>
      <p class="modal-card-title" v-if="!creating">Update Entry</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column is-one-third" v-if="creating">
          <b-message type="is-danger" v-if="selectedCountries.length > 1">Select only one country!</b-message>
          <b-field label="Country (select only one)">
            <b-select multiple native-size="10" v-model="selectedCountries" @input="onCountryInput">
              <option
                v-for="country in entrylessCountries"
                :key="country.name"
                :value="country.name"
              >{{country.name}}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Artist">
            <b-input :value="artist" @input="setArtist" required rounded></b-input>
          </b-field>
          <b-field label="Song">
            <b-input :value="song" @input="setSong" required rounded></b-input>
          </b-field>
          <b-field label="Spotify Link or URI">
            <b-input :value="spotifyLink" @input="setSpotifyLink" rounded></b-input>
          </b-field>
          <b-field label="Eurovision Performance YouTube Link">
            <b-input :value="performanceLink" @input="setPerformanceLink" rounded></b-input>
          </b-field>
          <b-field label="Music Video YouTube Link">
            <b-input :value="musicVideoLink" @input="setMusicVideoLink" rounded></b-input>
          </b-field>
          <b-field label="National Final Performance YouTube Link">
            <b-input :value="nationalPerformanceLink" @input="setNationalPerformanceLink" rounded></b-input>
          </b-field>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button
        v-if="creating"
        class="button is-success is-fullwidth"
        type="button"
        @click="create()"
      >Create Entry</button>
      <button
        v-if="!creating"
        class="button is-success is-fullwidth"
        type="button"
        @click="update()"
      >Update Entry</button>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      selectedCountries: []
    };
  },
  computed: {
    ...mapState("entries", [
      "creating",
      "country",
      "artist",
      "song",
      "spotifyLink",
      "performanceLink",
      "musicVideoLink",
      "nationalPerformanceLink",
      "entrylessCountries"
    ])
  },
  methods: {
    onCountryInput() {
      this.setCountry(this.selectedCountries[0]);
    },
    create() {
      this.createEntry();
      this.setNull();
      this.$parent.close();
      this.$toast.open({
        message: "The entry was successfully created!",
        position: "is-bottom",
        type: "is-light"
      });
      this.fetchEntries();
    },
    update() {
      this.updateEntry();
      this.setNull();
      this.$parent.close();
      this.$toast.open({
        message: "The entry was successfully updated!",
        position: "is-bottom",
        type: "is-light"
      });
      this.fetchEntries();
    },
    ...mapMutations("entries", [
      "setCountry",
      "setArtist",
      "setSong",
      "setSpotifyLink",
      "setPerformanceLink",
      "setMusicVideoLink",
      "setNationalPerformanceLink",
      "setNull"
    ]),
    ...mapActions("entries", ["fetchEntries", "createEntry", "updateEntry"])
  }
};
</script>
