<script>
    import Router from 'svelte-spa-router';
    import { routes } from './routes';
    import Navv from "./components/Navv.svelte";
</script>

<main>
    <Navv/>
    <div class="container">
        <Router {routes}/>
    </div>
</main>

