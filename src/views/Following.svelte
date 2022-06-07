<script>
import PostList from "../components/PostList.svelte";

import {onMount} from "svelte";
import axios from "axios";
import {apiAuth, apiHost} from "../config/config";
import {jwtToken} from "../config/stores";

let posts = [];

onMount(async () => {
    axios.get(apiHost + '/posts/subs', apiAuth($jwtToken))
        .then(data => {
            posts = data.data;
        })
        .catch(e => console.log(e.error))
})
</script>

<h1>Following</h1>
<PostList posts="{posts}"/>