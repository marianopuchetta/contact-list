import Vue from "vue";
import Router from "vue-router";
import Contacts from "@/components/Contacts.vue";
import Contact from "@/components/Contact.vue";
import AddContact from "@/components/AddContact.vue";
import SearchContact from "@/components/SearchContact.vue";
import Users from "@/components/Users.vue";
import User from "@/components/User.vue";
import AddUser from "@/components/AddUser.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import NavBar from "@/components/NavBar.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import ChangePassword from "@/components/ChangePassword.vue";
import store from '../store.js';





Vue.use(Router);
const router  = new Router({
// export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/navbar",
            name: "navbar",
            component: NavBar,
           
        },
        {
            path: "/",
            name: "contacts",
            component: Contacts,
           
        },
        {
            path: "/contact/:_id",
            name: "contact-details",
            component: Contact,
            props: true,
            meta: { requireAuth: true }

        },
        {
            path: "/addContact",
            name: "addcontact",
            component: AddContact,
            meta: { requireAuth: true }
        },
        {
            path: "/searchContact",
            name: "searchContact",
            component: SearchContact,
            meta: { requireAuth: true }
        },
        {
            path: "/users",
            name: "users",
            component: Users,
            meta: { requireAuth: true }
        },
        {
            path: "/user/:_id",
            name: "user-details",
            component: User,
            props: true,
            meta: { requireAuth: true }
        },
        {
            path: "/adduser",
            name: "adduser",
            component: AddUser,
            meta: { requireAuth: true }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
        {
            path: "/forgotPassword",
            name: "forgotPassword",
            component: ForgotPassword,
        },
        {
            path: "/changePassword",
            name: "changePassword",
            component: ChangePassword,
        }

    ]
});

router.beforeEach((to, from, next) => {
    const protectedPath = to.matched.some(record => record.meta.requireAuth);
    if (protectedPath && store.state.token === '') {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router;