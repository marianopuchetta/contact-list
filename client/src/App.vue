<template>
  <div id="app" class="container">
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NavBar from './components/NavBar' 

export default {
  name: "App",
  components:{
    NavBar
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(["logOut", "getToken"]),
  
  },
  computed: {
    ...mapGetters(["isActive"]),
  },
  created() {
    this.getToken();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ranchers&family=Roboto:wght@500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
body {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  align-content: center;
}

label {
  font-size: 1.1em;
}
span {
  font-size: 0.8em;
}
</style>
<style scoped >
nav {
  width: 100%;
  height: 10vh;
  background-color: aqua;
  margin-bottom: 5vh;
}
</style>
