<template>
  <div class="container">
    <div class="overflow-auto">
      <div v-if="this.contact">
        <h4 class="title_contact">Contact</h4>
        <b-table stacked :items="items" responsive :fields="fields">
          <template v-if="editable" v-slot:cell(first_name)="{ item }">
            <b-form-input v-model="item.first_name" />
          </template>
          <template v-if="editable" v-slot:cell(last_name)="{ item }">
            <b-form-input v-model="item.last_name" />
          </template>
          <template v-if="editable" v-slot:cell(email)="{ item }">
            <b-form-input v-model="item.email" />
          </template>
          <template v-if="editable" v-slot:cell(contact_number)="{ item }">
            <b-form-input v-model="item.contact_number" />
          </template>
        </b-table>
        <div v-if="editable">
          <b-button
            class="btn"
            variant="outline-danger"
            v-on:click="disableEditing()"
            ><i class="fa fa-window-close"></i
          ></b-button>
          <b-button
            class="btn"
            variant="outline-success"
            v-on:click="updateContact()"
            ><i class="fa fa-save"></i
          ></b-button>
        </div>
        <div v-else>
          <b-button
            class="btn"
            variant="outline-danger"
            v-on:click="confirmation()"
            ><i class="fa fa-trash"></i
          ></b-button>
          <b-button
            class="btn"
            variant="outline-warning"
            v-on:click="enableEditing()"
            ><i class="fa fa-edit"></i
          ></b-button>
        </div>
      </div>
      <div v-else>
        <br />
        <p>Please click on a contact...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AXIOS } from "./http-common";
export default {
  name: "contact",
  props: ["contact"],
  data() {
    return {
      items: [this.contact],
      fields: ["first_name", "last_name", "email", "contact_number"],
      editable: false,
    };
  },
  methods: {
    /* eslint-disable no-console */
    updateContact() {
      var data = {
        id: this.contact._id,
        first_name: this.contact.first_name,
        last_name: this.contact.last_name,
        email: this.contact.email,
        contact_number: this.contact.contact_number,
      };

      AXIOS.put("/contact/" + this.contact._id, data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      this.editable = false;
    },
    deleteContact() {
      AXIOS.delete("/contact/" + this.contact._id)
        .then((response) => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push("/").catch(err => {console.log(err)});
        })
        .catch((e) => {
          console.log(e);
        });
    },

    disableEditing() {
      this.editable = false;
    },
    enableEditing() {
      this.editable = true;
    },
    confirmation() {
      let r = confirm("Delete?");
      if (r == true) {
        this.deleteContact();
        return true;
      } else {
        return false;
      }
    },
    /* eslint-enable no-console */
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.title_contact {
  font-size: 3em;
}
@media only screen and (max-width: 768px) {
  .overflow-auto {
    display: flex;
    justify-content: center;
  }
  .b-table table{
    margin:40px;
  }
  input {
    width: 200% !important;
  }
}
</style>
<style scoped >
.fa {
  font-size: 2em;
  color: black;
}
.btn {
  margin: 1vh;
}
@media only screen and (max-width: 768px) {
  
}
</style>