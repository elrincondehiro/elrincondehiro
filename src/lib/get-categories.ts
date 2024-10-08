import { STRAPI_URL } from "astro:env/server";
import { query } from "./strapi";

export function getCategories (){
    return query("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url")
    .then(res => {
        return res.data.map((category: { name: string; slug: string; description: string; image: any; }) =>{
            const {name, slug, description, image: rawImage} = category  
            const image = `${STRAPI_URL}${rawImage.url}`
            return {name, slug, description, image}
        })
        
    })
}