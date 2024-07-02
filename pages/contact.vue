<script lang="ts" setup>
const socialLinks = useNuxtApp().$socialContacts

async function sendMessage(data:any) {
  const d = await $fetch('/api/contact',{
    method:'POST',
    body:data
  })

  if(d.status) {
    useMail().send({
      from:'QBTech Website',
      subject:'Enquiry',
      text: `name: ${data.name}\nemail: ${data.email}\nmsg :${data.msg}`
    })
  }
}
</script>

<template>
    <div class="w-full h-full">
        <UContainer>
            <TemplateSectionV3
                :section-text="{ h1: 'Get In Touch', p: 'We are happy to hear from you.', caption: { label: 'Contact Us', color: 'primary', variant: 'outline' } }"
                layout-orientation="center"
            >
                <div class="grid gap-12 lg:grid-cols-2">
                    <div class="flex flex-col gap-3 w-full">
                        <div>
                            <UButton color="gray"
                                     :to="`tel:${socialLinks.phone}`"
                                     :label="socialLinks.phone"
                                     icon="i-heroicons-phone"
                                     size="lg"
                                     variant="link"
                                     aria-label="phone number"
                            />
                        </div>
                        <div>
                            <UButton color="gray"
                                     label="Github"
                                     :to="socialLinks.github"
                                     target="_blank"
                                     icon="carbon:logo-github"
                                     size="lg"
                                     variant="link"
                                     aria-label="phone number"
                            />
                        </div>
                        <div>
                            <UButton color="gray"
                                     label="Instagram"
                                     :to="socialLinks.instagram"
                                     target="_blank"
                                     icon="carbon:logo-instagram"
                                     size="lg"
                                     variant="link"
                                     aria-label="phone number"
                            />
                        </div>
                        <div>
                            <UButton color="gray"
                                     label="Facebook"
                                     :to="socialLinks.facebook"
                                     target="_blank"
                                     icon="carbon:logo-facebook"
                                     size="lg"
                                     variant="link"
                                     aria-label="phone number"
                            />
                        </div>
                    </div>
                    <div>
                        <UCard>
                            <FormsContact @submit="sendMessage" />
                        </UCard>
                    </div>
                </div>
            </TemplateSectionV3>
        </UContainer>
    </div>
</template>

<style scoped>

</style>