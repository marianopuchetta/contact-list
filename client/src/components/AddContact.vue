<template>
  <div class="container">
    <div class="submitform">
      <div v-if="!submitted">
        <b-form @submit="saveContact" class="form_contact">
          <b-form-group
            id="input_first_name"
            label="first name:"
            label-for="input_first_name"
          >
            <b-form-input
              id="input_first_name"
              v-model="contact.first_name"
              required
              placeholder="Enter first name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input_last_name"
            label="last name:"
            label-for="input_last_name"
          >
            <b-form-input
              id="input_last_name"
              v-model="contact.last_name"
              required
              placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>
          <b-form-group 
          id="input_email" 
          label="email:" 
          label-for="input_email">
            <b-form-input
              id="input_email"
              v-model="contact.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input_contact_number"
            label="contact number:"
            label-for="input_contact_number"
          >
            <b-form-input
              id="input_contact_number"
              v-model="contact.contact_number"
              required
              placeholder="Enter contact number"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" v-on:click="onReset()" variant="danger"
            >Reset</b-button
          >
        </b-form>
      </div>
      <div v-else>
        <h4>The contact was added successfully!</h4>
        <button class="btn btn-success" v-on:click="newContact">
          Add new contact
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { AXIOS } from "./http-common";
export default {
  name: "addcontact",
  data() {
    return {
      contact: {
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
      },
      submitted: false,
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveContact() {
      var data = {
        first_name: this.contact.first_name,
        last_name: this.contact.last_name,
        email: this.contact.email,
        contact_number: this.contact.contact_number,
      };

      AXIOS.post("/contact/add", data)
        .then((response) => {
          this.contact.id = response.data.id;
        })
        .catch((e) => {
          console.log(e);
        });
      this.submitted = true;
    },
    newContact() {
      this.submitted = false;
      this.contact = {};
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.email = "";
      (this.first_name = ""), (this.last_name = ""), (this.contact_number = "");

      // Trick to reset/clear native browser form validation state
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
    /* eslint-enable no-console */
  },
};
</script>

<style>
.form_contact{
    margin:0 50vh;
}
@media only screen and (max-width: 1064px) {
    .form_contact{
    margin:0 10vh;
}
}
@media only screen and (max-width: 768px) {
    .form_contact{
    margin:0 10vh;
}
}
</style>