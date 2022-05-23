import Login from "./views/Login.svelte";
import Register from "./views/Register.svelte";
import Home from "./views/Home.svelte";
import NotFound from "./views/NotFound.svelte";
import Recommended from "./views/Recommended.svelte";
import Following from "./views/Following.svelte";
import User from "./views/User.svelte";


export const routes = {
    "/": Home,
    "/signin" : Login,
    "/signup" : Register,
    "/recommended" : Recommended,
    "/following" : Following,
    "/user/:id": User,
    "*" : NotFound,
};
