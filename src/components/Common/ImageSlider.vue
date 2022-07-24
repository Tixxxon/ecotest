<template>
  <div
    class="picture"
    :style="{
      'background-image': 'url(' + imageSrc + ')',
    }"
  >
    <span class="picture__preview-handler" @click="showFullImage"></span>
    <span
      v-if="images.length > 1"
      @click.stop="prevImage"
      class="picture__button picture__button--prev"
    >
      <fa-icon class="picture__icon" icon="fa-regular fa-circle-left" />
    </span>
    <span
      v-if="images.length > 1"
      @click.stop="nextImage"
      class="picture__button picture__button--next"
    >
      <fa-icon class="picture__icon" icon="fa-regular fa-circle-right" />
    </span>
    <teleport to="#app" v-if="hasShowPreview">
      <div class="picture__preview-content" @click="hasShowPreview = false">
        <div
          class="picture__preview-container"
          :style="{ top: scrollHeight + 'px' }"
        >
          <!-- <span
            class="picture__preview-closebtn"
            @click="hasShowPreview = false"
          >
            <fa-icon icon="fa-regular fa-times-circle"></fa-icon>
          </span> -->
          <img
            class="picture__preview-image"
            :src="imageSrc"
            alt=""
            srcset=""
          />
          <span
            v-if="images.length > 1"
            @click.stop="prevImage"
            class="picture__button picture__button--prev"
          >
            <fa-icon class="picture__icon" icon="fa-regular fa-circle-left" />
          </span>
          <span
            v-if="images.length > 1"
            @click.stop="nextImage"
            class="picture__button picture__button--next"
          >
            <fa-icon class="picture__icon" icon="fa-regular fa-circle-right" />
          </span>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue';
import { useImageCarousel } from '../Catalogue/image';

interface Props {
  images: string[];
}
const props = defineProps<Props>();

const { nextImage, prevImage, imageSrc } = useImageCarousel(props.images);

const hasShowPreview = ref(false);
let scrollHeight = ref(0);

watch(hasShowPreview, (nVal) => {
  if (nVal === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

const showFullImage = function () {
  hasShowPreview.value = true;
  scrollHeight.value = window.scrollY + window.innerHeight / 2;
};
</script>

<style lang="less">
@import url('@/assets/styles/base/variables.less');

.picture {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  min-height: 500px;
  border-radius: 8px;
  &:hover {
    .picture__icon {
      opacity: 1;
    }
  }

  &__preview {
    &-handler {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      padding: 1em;
      background-color: rgba(0, 0, 0, 0.8);
    }
    &-container {
      position: absolute;
      transform: translateY(-50%);
      overflow: hidden;
      width: 90%;
    }
    &-image {
      border-radius: 8px;
      max-width: 100%;
      max-height: 100%;
      // width: 100%;
    }
    &-closebtn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5em;
      color: white;
    }
  }
  &__icon {
    font-size: 2.5em;
    color: white;
    opacity: 0.7;
  }
  &__button {
    cursor: pointer;
    position: absolute;
    display: block;
    border: none;
    outline: none;
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

@media screen and (min-width: @xs-size) and (max-width: @sm-size) {
  .picture {
    min-height: 900px;
  }
}
</style>
