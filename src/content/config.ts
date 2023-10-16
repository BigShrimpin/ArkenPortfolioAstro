import { z, defineCollection } from "astro:content";

const articleCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        siteInfo: z.string(),
        links: z.string()
    })
});

export const collections = {
    articles: articleCollection,
};