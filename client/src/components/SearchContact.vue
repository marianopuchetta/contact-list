<template>
  <div class="container">
   
 
    <div class="overflow-auto" >
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="contacts_table"
        size="sm"
      ></b-pagination>
      <b-table
        id="contacts_table"
        class="table"
        hover
        :items="this.search_result"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <!-- A custom formatted column -->
        <template #cell(name)="contact">
          <b class="text-info">{{ contact.item.last_name.toUpperCase() }}</b
          >, <b>{{ contact.item.first_name }}</b>
        </template>
        <template #cell(see)="contact">
          <router-link
            :to="{
              name: 'contact-details',
              params: { _id: contact.item._id, contact: contact.item },
            }"
          >
            <i class="fa fa-share-square"></i>
          </router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";


export default {
  name: "searchContact",
  data() {
    return {
       message: "",
      perPage: 5,
      currentPage: 1,
      fields: [
        // A column that needs custom formatting
        { key: "name", label: "Full Name" },
        "email",
        "contact_number",
        "see",
      ],
    };
  },
  methods: {
    
    fullName(value) {
      return `${value} ${value}`;
    },
  },
  computed: {
     ...mapState(["token"]),
    ...mapGetters(["role","search_result"]),
    rows() {
      return this.search_result.length;
    },
  },
  created() {
    this.getToken();
  },
};
</script>

<style>
</style>