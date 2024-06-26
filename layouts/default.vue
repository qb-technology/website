<script setup lang='ts'>

async function getStartedClicked() {
  console.log('get started clicked');  
}
</script>

<template>
  <div >
    <div class="sticky top-0 backdrop-blur bg-white/60 dark:bg-gray-900/60">
      <UContainer>
        <TemplateHeaderDesktop @get-started="getStartedClicked" />
      </UContainer>
    </div>
  <div>
    <slot />
  </div>

    <UContainer>
      <TemplateFooterDesktop />
    </UContainer>
  </div>
</template>
