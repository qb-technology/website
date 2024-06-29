<script setup lang='ts'>
useHead({
    title: 'QB Tech Website',
})

const services = [1, 2, 3, 4, 5, 6]
const colorMode = useColorMode()
const storage_url = useRuntimeConfig().public.storage_bucket_url

const {data,error,pending} = await useFetch('/api/homepage')

</script>

<template>
    <div>
        <UContainer>
            <TemplateSectionV1
                :section-text="{ h1: 'Boosting Business Through', h2: 'Digitization', p: 'QB-Tech offers fast, secure, reliable, and highly performant web technologies to help businesses grow through smart, innovative solutions.', caption: { label: 'Best In' } }"
                layout-orientation="center"
            >
                <div class="flex items-center gap-4">
                    <UButton label="Get Started" />
                    <UButton label="Contact Us"
                             variant="outline"
                    />
                </div>
                <ClientOnly>
                    <div class="w-full p-4 rounded shadow"
                         :class="colorMode.value == 'dark' ? 'bg-neutral-900' : 'bg-white'"
                    >
                        <NuxtImg v-if="colorMode.value === 'dark'"
                                 :src="`${storage_url}bazari_dark_dashboard.png`"
                                 format="webp"
                                 class="w-full aspect-video"
                        />
                        <NuxtImg v-else
                                 :src="`${storage_url}bazari_light_dashboard.png`"
                                 format="webp"
                                 class="w-full aspect-video"
                        />
                    </div>
                    <template #fallback>
                        <div class="w-full aspect-video grid place-content-center">
                            <UIcon dynamic
                                   name="fluent:spinner-ios-16-filled"
                                   class="w-10 h-10 animate-spin"
                            />
                        </div>
                    </template>
                </ClientOnly>
            </TemplateSectionV1>
        </UContainer>

        <div class="cont_bg">
            <UContainer class="py-20">
                <TemplateSectionV2 :section-text="{ h2: 'Trusted Partners' }"
                                   layout-orientation="center"
                                   p="lg:pt-12"
                >
                    <div class="flex flex-col md:flex-row flex-nowrap md:flex-wrap items-center justify-center md:justify-between gap-10 md:gap-5 w-full">
                        <TechLogoCloudflare />
                        <TechLogoRailway />
                        <TechLogoHetzner />
                        <TechLogoSupabase />
                        <TechLogoNuxt />
                        <TechLogoTailwindcss />
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>

        <div class="">
            <UContainer>
                <TemplateSectionV2 :section-text="{ h2: 'Why choose our service?', p: 'Discover our top-tier web design and development solutions tailored for your success.', caption: { label: 'Features' } }"
                                   layout-orientation="center"
                >
                    <div class="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                        <ServiceV1 v-for="(service, key) of data.services.data"
                                    v-bind="service"
                                   :key="key"
                                   class="bg-gray-200/50 dark:bg-gray-950/50 shadow-md"
                        />
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>

        <div class="cont_bg">
            <UContainer>
                <TemplateSectionV2 :section-text="{ h2: 'What Our Clients Are Saying', caption: { label: 'Testimony' } }"
                                   layout-orientation="center"
                >
                    <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <TestimonialV1 class="break-inside-avoid"
                                       msg="Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum. Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."
                        />
                        <TestimonialV1 class="break-inside-avoid" />
                        <TestimonialV1 class="break-inside-avoid"
                                       msg="Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in ."
                        />
                        <TestimonialV1 class="break-inside-avoid"
                                       msg="Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."
                        />
                        <TestimonialV1 class="break-inside-avoid"
                                       msg="Elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."
                        />
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>

        <UContainer>
            <TemplateSectionV2
                :section-text="{ h2: 'Get started today', p: 'We are ever ready and committed to help actualize your vision for your business. Click below to be our next success story' }"
                layout-orientation="center"
            >
                <div class="flex items-center gap-4">
                    <UButton label="Get Started" />
                </div>
            </TemplateSectionV2>
        </UContainer>
    </div>
</template>
