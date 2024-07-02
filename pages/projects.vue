<script lang="ts" setup>
// const storage_url = useRuntimeConfig().public.storage_bucket_url
// const isDark = useColorMode()

const integrations = [
    'cloudflare.svg', 'vercel.svg', 'aws-amplify.svg', 'digitalocean.svg', 'heroku.svg', 'netlify.svg', 'cleavr.svg', 'stormkit.webp','render.png', 'sanity.svg',
    'algolia.svg', 'meilisearch.svg', 'directus.svg', 'postgresql.svg', 'mongodb.svg', 'appwrite.svg', 'nhost.svg', 'firebase.svg', 'supabase.svg',  'sentry.svg', 'shopify.svg', 'snipcart.svg', 'medusa-js.svg', 'nuxthub.svg', 'storyblok.svg', 'strapi.svg', 'stripe.svg', 'wordpress.svg', 'tailwind.svg','figma.svg']

const {project} = storeToRefs(useProjectsStore())
</script>

<template>
    <div>
        <div>
            <UContainer>
                <TemplateSectionV3 class="flex flex-col justify-center items-center md:flex-row"
                                   :section-text="{ h1: 'Our Works', caption: { label: 'Projects' }, p: 'Discover our portfolio showcasing successful projects and satisfied clients. See how our digital solutions have transformed businesses.' }"
                >
                    <div class="w-full relative h-fit">
                        <NuxtImg src="/r2/projectPageHero.png"
                                 :width="$device.isMobile ? 400 : 600"
                                 placeholder
                                 class=""
                        />
                    </div>
                </TemplateSectionV3>
            </UContainer>
        </div>

        <div class="cont_bg">
            <UContainer>
                <TemplateSectionV3 class="grid"
                                   :section-text="{ h2: 'Completed Projects' }"
                >
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                        <template v-if="project.length">
                            <ProjectListingV1 v-for="(item, i) of project"
                                          :key="i"
                                          :image="'/r2/' +item.image.trim()"
                                          :favicon="'/r2/'+(item.favicon.trim())"
                                          :desc="(item.desc)"
                                          :title="(item.title)"
                                          :to="(item.link)"
                                          :is-active="i==0"
                                          class="bg-gray-100 dark:bg-gray-900 shadow rounded-sm"
                        />
                        </template>
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
                    <div class="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 sm:gap-5 md:gap-8">
                        <UTooltip v-for="(img, ind) of integrations"
                                  :key="ind"
                                  :text="img.split('.')[0]"
                        >
                            <img
                                :src="`/integrations/${img}`"
                                :alt="img.split('.')[0]"
                                class="lg:hover:scale-110 transition h-full"
                                loading="lazy"
                            >
                        </UTooltip>
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>

        <div class="cont_bg">
            <UContainer>
                <TemplateSectionV2
                    :section-text="{ h2: 'Get started today', p: 'We are ever ready and committed to help actualize your vision for your business. Click below to be our next success story ' }"
                    layout-orientation="center"
                >
                    <div class="flex items-center gap-4">
                        <UButton label="Get Started"
                                 trailing-icon="i-heroicons-arrow-right"
                        />
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>
    </div>
</template>

<style scoped>

</style>
