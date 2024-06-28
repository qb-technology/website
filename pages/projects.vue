<script lang="ts" setup>
const storage_url = useRuntimeConfig().public.storage_bucket_url
const isDark = useColorMode()

const integrations = [
    'cloudflare.svg','vercel.svg','aws-amplify.svg','digitalocean.svg','heroku.svg','netlify.svg','cleavr.svg','stormkit.webp', 'sanity.svg',
    'algolia.svg', 'meilisearch.svg',    'directus.svg', 'firebase.svg','supabase.svg', 'gitlab.svg',    'render.png',  'sentry.svg', 'shopify.svg', 'snipcart.svg','nuxthub.svg', 'storyblok.svg', 'strapi.svg', 'stripe.svg',  'tailwind.svg',  'wordpress.svg',]
</script>

<template>
    <div>
        <div>
            <UContainer>
                <TemplateSectionV3 class="flex flex-col justify-center items-center md:flex-row"
                                   :section-text="{ h1: 'Our Works', caption: { label: 'Projects' }, p: 'Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing massa vitae auctor mi massa. Sodales libero viverra cursus sed duis luctus nulla. In malesuada vulputate pharetra ipsum orci.' }"
                >
                    <NuxtImg src="/r2/projectPageHero.png" />
                </TemplateSectionV3>
            </UContainer>
        </div>
        <div class="cont_bg">
            <UContainer>
                <TemplateSectionV3 class="grid"
                                   :section-text="{ h2: 'Completed Projects' }"
                >
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        <ProjectListingV1 v-for="i of [0, 1, 2, 3, 4, 5]"
                                          :key="i"
                                          image="https://picsum.photos/400"
                                          favicon="https://picsum.photos/50"
                                          :is-active="i==0"
                        />
                    </div>
                </TemplateSectionV3>
            </UContainer>
        </div>
        <div class="">
            <UContainer>
                <TemplateSectionV2 class=""
                                   layout-orientation="center"
                                   :section-text="{ h2: 'We work with the best', p: 'We are highly experienced with myriad of technologies and always use the right tools for your business.\n Already have tools you are using? You don\'t need to change if you don\'t want to. We have got you covered', caption: { label: 'Tech stack' } }"
                >
                    <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4 sm:gap-5 md:gap-8">
                        <LazyNuxtImg v-for="(img,ind) of integrations"
                                 :key="ind"
                                 :src="`/integrations/${img}`"
                                 :alt="img"
                                 class="lg:hover:scale-110 transition h-full"
                        />
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>

        <div class="cont_bg">
            <UContainer>
                <TemplateSectionV2
                    :section-text="{ h2: 'Get started today', p: 'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ' }"
                    layout-orientation="center"
                >
                    <div class="flex items-center gap-4">
                        <UButton label="Get Started"
                                 icon="i-heroicons-arrow-right"
                        />
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>
    </div>
</template>

<style scoped>

</style>
