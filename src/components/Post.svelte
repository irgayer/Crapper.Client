<script>
    export let content;
    export let authorUsername;
    export let authorId;
</script>

<div class="card">
    <h5 class="card-header"><a href="/#/user/{authorId}">{authorUsername}</a></h5>
    <div class="card-body">
        <p class="card-text">{content}</p>
    </div>
    <div class="card-footer">
        <p class="text-muted text-sm">lmao</p>
    </div>
</div>