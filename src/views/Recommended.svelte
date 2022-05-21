<script>
import PostList from "../components/PostList.svelte";
import {onMount} from "svelte";
import axios from "axios";

let posts = [];
onMount(async () => {
    axios.get('https://localhost:7298/api/Posts').then(data => {
        posts = data.data;
        console.log(posts);
    }).catch(e => console.log(e.error))
})

</script>

<h1>Recommended</h1>
<PostList posts="{posts}"/>