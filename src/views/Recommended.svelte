<script>
import PostList from "../components/PostList.svelte";
import {onMount} from "svelte";
import axios from "axios";
import {apiHost} from "../config/config";

let posts = [];
onMount(async () => {
    axios.get(apiHost + '/posts').then(data => {
        posts = data.data;
    }).catch(e => console.log(e.error))
})

</script>

<h1>Recommended</h1>
<PostList posts="{posts}"/>