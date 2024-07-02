<script lang="ts" setup>
const { services } = storeToRefs(useServiceStore())

const options = [
  {
    title: 'Client-Centric Approach',
    icon: 'ph:users-three',
    description: 'Your success is our priority. We work closely with you to understand your requirements and deliver results that exceed your expectations.',
  },
  {
    title: 'Cutting-Edge Technology',
    icon: 'i-heroicons-cpu-chip',
    description: 'We utilize the latest technologies and industry best practices to deliver innovative and efficient digital solutions.',
  },
  {
    title: 'Competitive Pricing',
    icon: 'i-heroicons-currency-dollar',
    description: 'We offer high-quality digital solutions at competitive prices, providing you with the best value for your investment.',
  },
  {
    title: 'Continuous Support',
    icon: 'hugeicons:customer-service-01',
    description: 'Our relationship with you doesn’t end after project delivery. We offer ongoing support and maintenance to ensure your digital assets continue to perform optimally',
  },
]

const messages = [
    "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum. Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
    "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in .",
    "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
    "Elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."
]
</script>

<template>
    <div>
        <div>
            <UContainer>
                <TemplateSectionV3 class="flex flex-col justify-center items-center md:flex-row"
                                   :section-text="{ h1: 'What We Do', caption: { label: 'Services' }, p: 'Explore our range of digital services designed to boost your business. From web and app development to digital marketing, we have you covered.' }"
                >
                    <div class="w-full relative h-fit">
                        <NuxtImg src="/r2/projectPageHero.png"
                                 :width="$device.isMobile ? 350 : 600"
                                 placeholder
                                 alt="project image"
                        />
                    </div>
                </TemplateSectionV3>
            </UContainer>
        </div>

        <div class="cont_bg">
            <UContainer>
                <TemplateSectionV2 :section-text="{ h2: 'Categories of services' }"
                                   layout-orientation="center"
                >
                    <div class="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                        <ServiceV1 v-for="(service, key) of services"
                                   v-bind="service"
                                   :handle="`/services${service.handle ? '/'+service.handle : '#'}`"
                                   :key="key"
                                   class="shadow-md bg-primary-50 dark:bg-gray-900"
                        />
                    </div>
                </TemplateSectionV2>
            </UContainer>
        </div>

        <TemplateSectionContainer>
            <UContainer class="grid gap-12 lg:grid-cols-2">
                <div>
                    <img src="https://placehold.co/700"
                         class="w-full h-full"
                    >
                </div>
                <div class="space-y-12">
                    <Text :section-text="{ caption: { label: 'Why choose us?' }, h2: 'Your success is our work.' }" />

                    <div class="grid sm:grid-cols-2 gap-y-10 gap-x-6">
                        <ServiceFeature v-for="(item, i) of options"
                                               :key="i"
                                               v-bind="item"
                                               class="alternate_cont_bg"
                                               icon-class="text-primary"
                        />
                    </div>
                </div>
            </UContainer>
        </TemplateSectionContainer>

        <div class="cont_bg">
            <UContainer>
                <TemplateSectionV2 :section-text="{ h2: 'What Our Clients Are Saying', caption: { label: 'Testimony' } }"
                                   layout-orientation="center"
                >
                    <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <TestimonialV1 class="break-inside-avoid"
                                       v-for="(item,ind) of messages"
                                       :key="ind"
                                       :msg="item"
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

<style scoped></style>