<script>
    import {jwtToken} from "../config/stores";
    import link from 'svelte-spa-router';

    let username;

    function search() {

    }

    function logout() {
        jwtToken.set(null);
    }
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/#/">Crapper</a>
        <ul class="navbar-nav">
            { #if !$jwtToken }
            <li class="nav-item">
                <a class="nav-link" href="/#/signin">Sign In</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#/signup">Sign up</a>
            </li>
            {:else}
                <li class="nav-item">
                    <button class="nav-link" on:click={logout}>Logout</button>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/following">Following</a>
                </li>
            {/if}
            <li class="nav-item">
                <a class="nav-link" href="/#/recommended">Recommended</a>
            </li>

        </ul>
        <form class="d-flex">
            <input class="form-control me-2" bind:value={   username} type="search" placeholder="Username" aria-label="Search">
            <button class="btn btn-outline-success" type="submit" on:click|preventDefault={search}>Search</button>
        </form>
    </div>
</nav>