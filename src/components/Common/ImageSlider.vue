<template>
  <div
    class="picture"
    :style="{
      'background-image': 'url(' + imageSrc + ')',
    }"
  >
    <span
      v-if="images.length > 1"
      @click="prevImage"
      class="picture__button picture__button--prev"
    >
      <fa-icon class="picture__icon" icon="fa-regular fa-circle-left" />
    </span>
    <span
      v-if="images.length > 1"
      @click="nextImage"
      class="picture__button picture__button--next"
    >
      <fa-icon class="picture__icon" icon="fa-regular fa-circle-right" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useImageCarousel } from '../Catalogue/image';

interface Props {
  images: string[];
}

const props = defineProps<Props>();
const { nextImage, prevImage, imageSrc } = useImageCarousel(props.images);
</script>

<style lang="less">
.picture {
  &:hover {
    .picture__icon {
      opacity: 1;
    }
  }
  &__icon {
    font-size: 2em;
    color: white;
    opacity: 0.7;
  }
  &__button {
    cursor: pointer;
    position: absolute;
    display: block;
    &--prev {
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    &--next {
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
