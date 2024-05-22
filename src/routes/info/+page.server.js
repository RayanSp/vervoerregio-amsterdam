import { FORM_KEY } from '$env/static/private'

let vragen

export async function load() {
    return{
        vragen: FORM_KEY
    }
}