<script>
    import axios from "axios";
    import { apiHost } from "../config/config";
    import { jwt } from '../config/stores';
    import {toast} from "@zerodevx/svelte-toast";
    import { push } from "svelte-spa-router";
    import { link } from 'svelte-spa-router';

    let email;
    let password;

    let user = {
        email,
        password
    };

    function login() {
        console.log(user);

        axios.post(apiHost + '/User/login', user)
            .then(data => {
                if (data.status === 200) {
                    jwt.set(data.data);
                    toast.push("You have successfully logged in!");
                    push('/')
                    email = password = '';
                }
            })
            .catch(e => {
                toast.push(e.message);
            });
    }
</script>

<form class="mx-auto">
    <div class="mb-3">
        <label for="username" class="form-label">Email</label>
        <input class="form-control" id="username" bind:value={user.email}>
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" bind:value={user.password}>
    </div>
    <button type="submit" class="btn btn-primary" on:click|preventDefault={login}>Submit</button>
</form>
<p>Don't have account yet? <a href="/signup" use:link class="link-primary">Create new.</a></p>
