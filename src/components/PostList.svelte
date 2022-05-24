<script>
    import Post from "./Post.svelte";

    export let posts = [];
</script>

{#each posts as post}
    <Post content="{post.content}" authorUsername="{post.authorUsername}" authorId="{post.authorId}" id="{post.id}"/>
{/each}