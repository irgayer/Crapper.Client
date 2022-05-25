<script>
    import {jwtToken, userId} from "../config/stores";
    import {link, push} from 'svelte-spa-router';
    import axios from "axios";
    import {apiAuth, apiHost} from "../config/config";
    import {toast} from "@zerodevx/svelte-toast";
    import {onMount} from "svelte";
    import PostList from "../components/PostList.svelte";

    let content;
    let post = {
        content,
    };

    let posts = [];


    function publish() {
        axios.post(apiHost + '/Posts', post, apiAuth($jwtToken))
            .then(data => {
                if (data.status === 200) {
                    toast.push("Success!");
                    post.content = '';
                }
            })
            .catch(e => {
                toast.push(e.message);
            })
    }

    onMount(() => {
        if ($jwtToken) {
            axios.get(apiHost + '/Posts/my', apiAuth($jwtToken))
                .then(data => {
                    posts = data.data;
                })
                .catch(e => console.log(e.error))
        }
    })
</script>

<h1>Welcome to Crapper!</h1>
{#if $jwtToken }
    <form>
        <div class="mb-3">
            <label for="content" class="form-label">New post</label>
            <textarea id="content" bind:value={post.content} class="form-control" placeholder="What a wonderful day!"
                      required></textarea>
        </div>
        <button class="btn btn-success" on:click|preventDefault={publish}>Publish</button>
    </form>
    <PostList posts="{posts}"/>
{:else}
    <p>You are not <a href="/signin" use:link>logged in!</a></p>
{/if}
