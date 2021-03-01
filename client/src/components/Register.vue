<template>
  <div class="div_register container">
    <b-form v-show="show" class="form" v-on:submit="submitForm">
      <b-form-group
        id="input_username"
        label="username:"
        label-for="input_username"
      >
        <b-form-input
          id="input_username"
          v-model="form.username"
          
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input_email" label="email:" label-for="input_email">
        <b-form-input
          id="input_email"
          v-model="form.email"
          type="email"
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
          
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input_confirm_password"
        label="confirm password:"
        label-for="input_confirm_password"
      >
        <b-form-input
          id="input_confirm_password"
          v-model="form.confirm_password"
          type="password"

          placeholder="Enter password again"
        ></b-form-input>
      </b-form-group>
       <div v-if="message !== ''">
        <p class="error">{{ message }}</p>
      </div>
      <b-button type="submit" variant="outline-success">Submit</b-button>
      <b-button type="reset" v-on:click="onReset()" variant="outline-danger"
        >Reset</b-button
      >
      <!-- Remind Passowrd -->
      <div id="form_footer">
        <router-link to="/login">Login</router-link>
        <router-link to="/forgotPassword">Forgot password?</router-link>
      </div>
    </b-form>
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
        username: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      show: true,
      message: "",
    };
  },
  methods: {
    ...mapMutations(["getUser"]),
    ...mapActions(["logIn", "getToken", "logOut"]),

    submitForm: function (event) {
      event.preventDefault();
      let data = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        confirm_password : this.form.confirm_password
      };
      AXIOS.post("/register", data)
        .then((res) => {
          const token = res.data.token;
          this.logIn(token);
        })
        .catch((err) => {
          console.log(err.response.data.err.message);
          this.message = err.response.data.err.message;
          setTimeout(() => (this.message = ""), 5000);
        });
      event.target.reset();
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
.div_register {
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
#form_footer {
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
  #form_footer {
    margin-top: 1vh;
  }
  .error{
    font-size: 1em;
  }
}
</style>