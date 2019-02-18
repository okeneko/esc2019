<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title" v-if="creating">Create Entry</p>
      <p class="modal-card-title" v-if="!creating">Update Entry</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column is-one-quarter" v-if="creating">
          <b-field label="Country">
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
          <div class="columns">
            <div class="column">
              <b-field label="Artist">
                <b-input :value="artist" @input="setArtist" rounded></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Song">
                <b-input :value="song" @input="setSong" rounded></b-input>
              </b-field>
            </div>
          </div>
          <b-field label="Spotify Link or URI">
            <b-input :value="spotifyLink" @input="setSpotifyLink" icon="spotify" rounded></b-input>
          </b-field>
          <b-field label="Eurovision Performance YouTube Link">
            <b-input :value="performanceLink" @input="setPerformanceLink" icon="youtube" rounded></b-input>
          </b-field>
          <b-field label="Music Video YouTube Link">
            <b-input :value="musicVideoLink" @input="setMusicVideoLink" icon="youtube" rounded></b-input>
          </b-field>
          <b-field label="National Final Performance YouTube Link">
            <b-input
              :value="nationalPerformanceLink"
              @input="setNationalPerformanceLink"
              icon="youtube"
              rounded
            ></b-input>
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
        :disabled="selectedCountries.length < 1 || artist === null || artist === ''"
      >Create Entry</button>
      <div v-if="!creating" class="columns entry-buttons is-gapeless">
        <div class="column is-one-quarter">
          <button
            class="button is-danger is-fullwidth"
            type="button"
            @click="entryDelete()"
          >Delete Entry</button>
        </div>
        <div class="column">
          <button
            class="button is-success is-fullwidth"
            type="button"
            @click="update()"
          >Update Entry</button>
        </div>
      </div>
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
      this.selectedCountries = [this.selectedCountries[0]];
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
    },
    entryDelete() {
      this.deleteEntry();
      this.setNull();
      this.$parent.close();
      this.$toast.open({
        message: "The entry was successfully deleted!",
        position: "is-bottom",
        type: "is-light"
      });
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
    ...mapActions("entries", [
      "fetchEntries",
      "createEntry",
      "updateEntry",
      "deleteEntry"
    ])
  }
};
</script>

<style lang="scss" scoped>
.entry-buttons {
  width: 100%;
}
</style>
