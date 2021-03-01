<template>
  <div class="div_forgot_password container">
    
      <p v-if="mail_sended">Check your mail</p>
    
    
      <b-form v-else
      class="form" v-on:submit="submitForm">
        <b-form-group
          id="input_email"
          label="type your email:"
          label-for="input_forgot_password_email"
        >
          <b-form-input
            id="input_forgot_password_email"
            v-model="form.forgot_password_email"
            required
            type="email"
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <div v-if="message !== ''">
          <p class="error">{{ message }}</p>
        </div>
        <b-button type="submit" variant="outline-success">Submit</b-button>
        <b-button type="reset" v-on:click="onReset()" variant="outline-danger"
          >Reset</b-button
        >
      </b-form>
    
  </div>
</template>

<script>
import { AXIOS } from "./http-common";

export default {
  name: "forgotPassword",
  data() {
    return {
      message: "",
      mail_sended: false,
      form: {
        forgot_password_email: "",
      },
    };
  },
  methods: {
    submitForm: function (event) {
    
      AXIOS.get(
        "/forgotPassword/" +
          this.form.forgot_password_email
      )
        .then((res) => {
          console.log(res);
          this.mail_sended = true;
        })
        .catch((err) => {
          console.log(err);
          this.message = err.response.data.err.message;
          setTimeout(() => (this.message = ""), 5000);
        });
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
.container {
  width: 100% !important;
}
.div_forgot_password {
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
@media only screen and (max-width: 768px) {
    .form{
    margin:5vh 5vh;
      width: 100%;
}
}
</style>