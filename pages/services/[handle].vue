<script setup lang='ts'>
useHead({
    title: 'service category',
})
const handle = useRoute().params.handle as string

// change navigation if handle is not correct
onBeforeMount(() => {
    if (!handle) {
        navigateTo('/services')
    }
})

const { data, pending } = await useFetch(`/api/service/${handle}`)

useSeoMeta({
    title: data.value?.seo_title,
    description: data.value?.seo_description,
})

const messages = [
    'Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum. Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.',
    'Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in .',
    'Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.',
    'Elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.',
]
</script>

<template>
    <div>
        <div v-if="pending">
            loading
        </div>
        <div v-else>
            <div>
                <UContainer>
                    <TemplateSectionV3 class="flex flex-col justify-center items-center md:flex-row"
                                       :section-text="{ h1: data.title, caption: { label: 'Service' }, p: data.excerpt }"
                    >
                        <div class="w-full relative h-fit">
                            <NuxtImg :src="`/r2/${data.image}`"
                                     :width="$device.isMobile ? 400 : 600"
                                     :alt="`${data.title} image`"
                                     class=""
                            />
                        </div>
                    </TemplateSectionV3>
                </UContainer>
            </div>

            <div class="cont_bg">
                <UContainer>
                    <TemplateSectionV2 :section-text="{ h2: 'Why choose our service', caption: { label: 'Features' } }"
                                       layout-orientation="center"
                    >
                        <div class="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                            <ServiceFeature v-for="(service, key) of data.service_features"
                                            v-bind="service"
                                            :key="key"
                                            class="shadow-md bg-primary-50 dark:bg-gray-900"
                            />
                        </div>
                    </TemplateSectionV2>
                </UContainer>
            </div>
            <div class="">
                <UContainer>
                    <TemplateSectionV2 :section-text="{ h2: 'How it works', caption: { label: 'Our Approach' }, p: 'We follow a structured process to deliver an efficient and effective services. Below is a general overview of our proven methodology' }"
                                       layout-orientation="center"
                    >
                        <div class="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-10 lg:gap-12">
                            <serviceHowWorksOption v-for="(service, key) of data.serviceApproach"
                                                   v-bind="service"
                                                   :key="key"
                                                   class="shadow-md alternate_cont_bg"
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
                            <TestimonialV1 v-for="(item, ind) of messages"
                                           :key="ind"
                                           class="break-inside-avoid"
                                           :msg="item"
                            />
                        </div>
                    </TemplateSectionV2>
                </UContainer>
            </div>

            <!-- FAQ should be here -->

            <div class="">
                <UContainer>
                    <TemplateSectionV3 :section-text="{ h2: 'FAQ' }"
                                       layout-orientation="center"
                    >
                        <UAccordion
                            :items="data.serviceFaqs"
                            multiple
                            class="w-full"
                        >
                            <template #default="{ item, index, open }">
                                <UButton color="gray"
                                         variant="ghost"
                                         class="border-b border-gray-200 dark:border-gray-700 w-full"
                                         :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
                                >
                                    <span class="text-start text-pretty">{{ index + 1 }}. {{ item.question }}</span>

                                    <template #trailing>
                                        <UIcon
                                            name="i-heroicons-chevron-right-20-solid"
                                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                            :class="[open && 'rotate-90']"
                                        />
                                    </template>
                                </UButton>
                            </template>

                            <template #item="{ item }">
                                <p class="ml-2 sm:ml-4">
                                    {{ item.answer }}
                                </p>
                            </template>
                        </UAccordion>
                    </TemplateSectionV3>
                </UContainer>
            </div>

            <div class="cont_bg">
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
        </div>
    </div>
</template>