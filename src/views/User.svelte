<script>
    import {jwtToken, userId} from "../config/stores";
    import PostList from "../components/PostList.svelte";
    import axios from "axios";
    import UserCard from "../components/UserCard.svelte";
    import {apiAuth, apiHost} from "../config/config";
    import {onMount} from "svelte";
    import {push} from "svelte-spa-router";
    import {toast} from "@zerodevx/svelte-toast";
    export let params = {};

    async function getUser() {
        const res = await axios.get(`${apiHost}/user/${params.id}`);

        return res.data;
    }

    async function getPosts() {
        const res = await axios.get(`${apiHost}/posts/user/${params.id}`);

        return res.data;
    }

    let userPromise = getUser();
    let postsPromise = getPosts();
    onMount(() => {
        if ($jwtToken)
        {
            axios.get(apiHost + '/user/whoami', apiAuth($jwtToken))
                .then(data => {
                    if (params.id == data.data.id)
                    {
                        push('/');
                    }
                })
                .catch(e => {
                    toast.push(e.message);
                })
        }
    })
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
