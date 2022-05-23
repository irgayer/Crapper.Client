import {readable, writable} from "svelte/store";

const storedJwt = localStorage.getItem("jwt");
export const jwtToken = writable(storedJwt === "null" ? null : storedJwt);

jwtToken.subscribe(value => {
    localStorage.setItem('jwt', value);
})

