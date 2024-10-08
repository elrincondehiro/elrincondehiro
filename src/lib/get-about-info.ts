import { query } from "./strapi";

export function getAboutInfo(){
    return query("about")
    .then(res => {
        console.log(res)
        return res
    })
}