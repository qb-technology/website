<script setup lang='ts'>
async function getStartedClicked() {

}

// detect scrolling
const { x, y } = useWindowScroll()
</script>

<template>
    <div>
        <div :class="'backdrop-blur bg-white/90 dark:bg-gray-900/90 sticky top-0 z-10 py-4'"
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
