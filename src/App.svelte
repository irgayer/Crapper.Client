<script>
    import Router from 'svelte-spa-router';
    import { routes } from './routes';
    import Navv from "./components/Navv.svelte";
    import {SvelteToast} from '@zerodevx/svelte-toast';

    const options = {};
</script>

<main>
    <Navv/>
    <div class="container">
        <Router {routes}/>
    </div>
</main>

<SvelteToast {options}/>