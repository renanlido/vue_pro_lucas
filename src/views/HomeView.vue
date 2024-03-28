<script setup>
import { ActionFactory } from '@/core/Action'

const bubbleTextSmall = new ActionFactory().create('text', 'Bubble Small').renderSmall()
const bubbleTextLarge = new ActionFactory().create('text', 'Bubble Large').renderLarge()
const bubbleImage = new ActionFactory()
  .create(
    'image',
    'https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg'
  )
  .renderLarge()

defineExpose({
  bubbleTextSmall,
  bubbleTextLarge,
  bubbleImage
})
</script>

<template>
  <main>
    <div v-html="bubbleTextSmall"></div>
    <div v-html="bubbleTextLarge"></div>
    <div v-html="bubbleImage"></div>
  </main>
</template>

<style>
.bubble-image_small img {
  height: 100px;
  width: 100px;
  object-fit: contain;
}

.bubble-image_large img {
  height: 500px;
  width: 500px;
  object-fit: contain;
}
</style>
