<template>
  <div class="div_login container">
    <b-form class="form" v-show="show" v-on:submit="submitForm">
      <b-form-group id="input_email" label="email:" label-for="input_email">
        <b-form-input
          id="input_email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input_password"
        label="password:"
        label-for="input_password"
      >
        <b-form-input
          id="input_password"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <div v-if="message !== ''">
        <p class="error">{{ message }}</p>
      </div>
      <b-button type="submit" variant="outline-success">Submit</b-button>
      <div id="formFooter">
        <router-link to="/register">Register</router-link>
        <!-- <router-link to="/forgotpassword">Forgot password?</router-link> -->
      </div>
      <p>user: admin@email.com
        <br>
        password: @1234Pass</p>
    </b-form>
    <!-- Remind Passowrd -->
      

  </div>

</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { AXIOS } from "./http-common";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      message: "",
    };
  },
  methods: {
    ...mapMutations(["getUser","setUsername(localStorage('user_name')"]),
    ...mapActions(["logIn", "getToken", "logOut"]),

    submitForm: function (event) {
      event.preventDefault();
      let data = {
        email: this.form.email,
        password: this.form.password,
      };
      AXIOS.post("/login", data)
        .then((res) => {
          const token = res.data.token;
          // let user_name = res.data.userDB.username
          this.logIn(token);
        })
        .catch((err) => {
          console.log(err.response.data.err.message);
          this.message = err.response.data.err.message;
          setTimeout(() => (this.message = ""), 3000);
        });
      event.target.reset();
    },
  },
};
</script>

<style>
.container {
  width: 100%;
}
.div_login {
    display: flex;
  justify-content: center;
}
.form {
  background-color: rgba(204, 204, 243, 0.6);
  border-radius: 10px;
  width: 50%;
  display: block;
}
.form input {
  width: 70%;
  margin: auto;
}

#formFooter {
  display: flex;
  flex-direction: column;
}
.error {
  color: red;
}
@media only screen and (max-width: 768px) {
  .form {
    width: 100%;
  }
  .form input {
  width: 100% !important;
  margin: auto;
}
}
</style>