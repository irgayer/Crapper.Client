import {readable, writable} from "svelte/store";
import axios from "axios";
import {apiAuth, apiHost} from "./config";
import {toast} from "@zerodevx/svelte-toast";

const storedJwt = localStorage.getItem("jwt");
export const jwtToken = writable(storedJwt === "null" ? null : storedJwt);
export const userId = writable(null);

jwtToken.subscribe(value => {
    localStorage.setItem('jwt', value);

    if (value)
        axios.get(apiHost + '/User/whoami', apiAuth(value))
            .then(data => {
                userId.set(data.data.id);
            })
            .catch(e => {
                if (e.response.status === 401)
                {
                    userId.set(null);
                    jwtToken.set(null);
                }
            })
})

