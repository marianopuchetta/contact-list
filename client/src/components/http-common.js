
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

export const AXIOS = axios.create({
    baseURL:'https://node-mongo-vue-crud.herokuapp.com/',
    // baseURL:'https://localhost:3000/',
    
   headers: {
    "Content-type": "application/json"
  }
})
