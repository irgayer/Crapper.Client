<script>
    let username;
    let password;

    function login() {
        console.log(username);
        console.log(password);

        username = '';
        password = '';
    }
</script>

<form class="mx-auto">
    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input class="form-control" id="username" bind:value={username}>
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" bind:value={password}>
    </div>
    <button type="submit" class="btn btn-primary" on:click|preventDefault={login}>Submit</button>
</form>