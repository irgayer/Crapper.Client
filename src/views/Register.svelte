<script>
    import axios from "axios";

    let username;
    let password;
    let email;

    function register() {

    }
</script>

<form class="mx-auto">
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input class="form-control" id="email" bind:value={email}>
    </div>
    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input class="form-control" id="username" bind:value={username}>
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" bind:value={password}>
    </div>
    <button type="submit" class="btn btn-primary" on:click|preventDefault={register}>Submit</button>
</form>