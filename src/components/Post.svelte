<script>
    import {apiAuth, apiHost} from "../config/config";
    import {jwtToken, userId} from "../config/stores";
    import {toast} from "@zerodevx/svelte-toast";
    import axios from "axios";

    export let content;
    export let authorUsername;
    export let authorId;
    export let id;

    function deletePost(id) {
        axios.delete(apiHost + `/Posts/${id}`, apiAuth($jwtToken))
            .then(data => {
                if (data.status === 200) {
                    toast.push("Successfully deleted!");
                }
            })
            .catch(e => toast.push(e.message));
    }
</script>

<div class="card">
    <h5 class="card-header"><a href="/#/user/{authorId}">{authorUsername}</a></h5>
    <div class="card-body">
        <p class="card-text">{content}</p>
        {#if $userId === authorId}
            <button class="btn btn-danger" on:click={() => deletePost(id)}>Delete</button>
        {/if}
    </div>
    <div class="card-footer">
        <p class="text-muted text-sm">lmao</p>
    </div>
</div>