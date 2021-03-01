  <template>
  <div class="container">
    <h1>Contact List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="" />
    <div v-else>
      <div class="overflow-auto">
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
          :items="contacts"
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

    <div>
      <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { AXIOS } from "./http-common";

export default {
  name: "contacts-list",
  data() {
    return {
      loading: true,
      perPage: 5,
      currentPage: 1,
      contacts: [],
      fields: [
        // A column that needs custom formatting
        { key: "name", label: "Full Name" },
        "email",
        "contact_number",
        "see",
      ],
    };
  },
  computed: {
    ...mapState(["token"]),
    rows() {
      return this.contacts.length;
    },
  },
  methods: {
    /* eslint-disable no-console */
    retrieveContacts() {
      // let config = {
      //   headers:{
      //     token:this.token
      //   }
      // }
      AXIOS.get("/contacts")
        .then((response) => {
          this.contacts = response.data; // JSON are parsed automatically.
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveContacts();
    },
    fullName(value) {
      return `${value} ${value}`;
    },
    /* eslint-enable no-console */
  },
  created() {
    setTimeout(() => (this.loading = false), 2000);
    this.retrieveContacts();
  },
};
</script>

<style >
.list-row {
  display: flex;
  align-self: center;
  flex-flow: column wrap;
}
@media only screen and (max-width: 768px) {
  .overflow-auto {
    font-size: 0.6em;
    display:flex;
    flex-direction: column;
  }
  h1 {
    font-size: 1.2em;
  }
}
</style>