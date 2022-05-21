<script>
    export let user;
</script>

<div class="d-flex">
    <ul class="list-group">
        <li class="list-group-item">id: {user.id}</li>
        <li class="list-group-item">username : {user.username}</li>
        <li class="list-group-item">email: {user.email}</li>
        <li class="list-group-item">subscribers: {user.subscribers} </li>
        <li class="list-group-item">subscriptions: {user.subscriptions} </li>
    </ul>
</div>