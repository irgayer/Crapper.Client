<script>
    import link from 'svelte-spa-router';
    let username;

    function search() {

    }
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Crapper</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/#/recommended">Recommended</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#/following">Following</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/#/signin">Sign In</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#/signup">Sign up</a>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" bind:value={   username} type="search" placeholder="Username" aria-label="Search">
            <button class="btn btn-outline-success" type="submit" on:click|preventDefault={search}>Search</button>
        </form>
    </div>
</nav>