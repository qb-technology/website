<script setup lang='ts'>
async function getStartedClicked() {

}

// detect scrolling
const { x, y } = useWindowScroll()
</script>

<template>
    <div>
        <div :class="y>10 ? 'backdrop-blur bg-white/90 dark:bg-gray-900/90 sticky top-0 py-3 z-10' :'bg-transparent relative py-5'"
             class="ease duration-75"
        >
            <UContainer>
                <TemplateHeaderDesktop @get-started="getStartedClicked" />
            </UContainer>
        </div>
        <div>
            <slot />
        </div>

        <div class="bg-primary-100 dark:bg-gray-950/50">
            <UContainer>
                <TemplateFooterDesktop />
            </UContainer>
        </div>
    </div>
</template>
