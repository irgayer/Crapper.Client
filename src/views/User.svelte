<script>
    import PostList from "../components/PostList.svelte";
    import axios from "axios";
    import UserCard from "../components/UserCard.svelte";
    import {apiHost} from "../config/config";
    export let params = {};

    async function getUser() {
        const res = await axios.get(`${apiHost}/User/${params.id}`);

        return res.data;
    }

    async function getPosts() {
        const res = await axios.get(`${apiHost}/Posts/user/${params.id}`);

        return res.data;
    }

    let userPromise = getUser();
    let postsPromise = getPosts();
    /*onMount(async() => {

    })*/
</script>

{#await userPromise}
    <p>Please wait</p>
{:then user}
    <UserCard user="{user}"/>
{:catch error}
    <p>{error.message}</p>
{/await}

{#await postsPromise}
    <p>Please wait</p>
{:then posts}
    <PostList posts="{posts}"/>
{:catch error}
    <p>{error.message}</p>
{/await}
