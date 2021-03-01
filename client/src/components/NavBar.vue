<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-brand
        ><router-link to="/">Contacts</router-link></b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="links ml-auto-4">
          <b-nav-item
            ><router-link to="/addContact">Add Contact</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/searchContact">Search</router-link></b-nav-item
          >

          <b-nav-item v-if="isActive && role === 'ADMIN_ROLE'"
            ><router-link to="/users">Users</router-link></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              v-model="input_search_contact"
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button v-on:click="search()" size="sm" class="my-2 my-sm-0"
              >Search</b-button
            >
          </b-nav-form>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em v-if="isActive">{{ username }}</em>
              <em v-else>guess</em>
            </template>
            <div v-if="isActive">
              <b-dropdown-item
                ><b-button variant="outline-danger" @click="logOut()"
                  >LogOut</b-button
                >
              </b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item
                ><b-button variant="outline-success"
                  ><router-link to="/login">Login</router-link></b-button
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><b-button variant="outline-primary"
                  ><router-link to="/register">SignUp</router-link></b-button
                ></b-dropdown-item
              >
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { AXIOS } from "./http-common";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      input_search_contact: "",
    };
  },
  methods: {
    ...mapActions(["logOut", "getToken"]),
    search() {
      this.fill_search_result([]);
      let config = {
        headers: {
          token: this.token,
        },
      };
      let data = {
        input_search_contact: this.input_search_contact,
      };
      console.log(this.input_search_contact);
      AXIOS.post("/search/", data, config)
        .then((res) => {
          this.fill_search_result(res.data.contacts);
          this.input_search_contact = "";
        })
        .catch((err) => {
          console.log(err.response.data.err.message);
          this.input_search_contact = err.response.data.err.message;
          setTimeout(() => (this.input_search_contact = ""), 5000);
        });

      this.$router.push("/searchContact");
    },
    fill_search_result(data) {
      this.$store.commit("fill_search_result", data);
    },
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isActive", "username", "role"]),
  },
  created() {
    this.getToken();
  },
};
</script>

<style  >
</style>