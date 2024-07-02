<script setup lang='ts'>
async function getStartedClicked() {

}

// detect scrolling
const { x, y } = useWindowScroll()
const header = ref(null)
const footer = ref(null)

const {height:header_height} = useElementSize(header)
const {height:footer_height} = useElementSize(footer)

const bodyHeight = computed(()=>({
    'min-height': `calc(100vh - ${header_height.value + footer_height.value}px)`
}))
const social = useNuxtApp().$socialContacts
const icons = [
    {
        name: 'mdi:youtube',
        to: social.youtube
    },
    {
        name: 'uil:facebook-f',
        to: social.facebook
    },
    {
        name: 'ri:twitter-x-line',
        to: social.twitter
    },
    {
        name: 'mdi:instagram',
        to: social.instagram
    },
    {
        name: 'ri:linkedin-fill',
        to: social.linkedin
    },
]
</script>

<template>
    <div>
        <div ref="header"
             :class="'backdrop-blur bg-white/90 dark:bg-gray-900/90 sticky top-0 z-10 py-4'"
             class="ease duration-75"
        >
            <UContainer>
                <TemplateHeaderDesktop @get-started="getStartedClicked" />
            </UContainer>
        </div>
        <div :style="bodyHeight">
            <slot />
        </div>

        <div ref="footer"
             class="bg-primary-100 dark:bg-gray-950/50"
        >
            <UContainer>
                <TemplateFooterDesktop :icons="icons" />
            </UContainer>
        </div>
    </div>
</template>
