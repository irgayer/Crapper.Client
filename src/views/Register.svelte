<script>
    import axios from "axios";
    import {apiHost} from "../config/config";
    import {toast} from '@zerodevx/svelte-toast';
    import {push, link} from "svelte-spa-router";

    let username;
    let password;
    let email;

    let user = {
        username,
        password,
        email
    };

    function register() {
        axios.post(apiHost + '/user/register', user)
            .then(data => {
                if (data.status == 200) {
                    toast.push('You have successfully registered');
                    push('/signin');
                    username = password = email = '';
                }
            })
            .catch(e => {
                toast.push(`Error: ${e.message}`);
            })
    }


</script>

<form class="mx-auto">
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input class="form-control" id="email" bind:value={user.email} required>
    </div>
    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input class="form-control" id="username" bind:value={user.username} required>
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" bind:value={user.password} required>
    </div>
    <button type="submit" class="btn btn-primary" on:click|preventDefault={register}>Submit</button>
</form>
<p>Already have an account? <a href="/signin" class="link-primary" use:link>Sign in.</a></p>