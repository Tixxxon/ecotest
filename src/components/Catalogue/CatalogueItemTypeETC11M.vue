<template>
  <div class="catalogue__item catalogue__item--type-2">
    <div class="content__wrapper">
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
        ></span>
        <span
          v-if="images.length > 1"
          @click="nextImage"
          class="picture__button picture__button--next"
        ></span>
      </div>
      <div class="catalogue__content">
        <div class="catalogue__title">
          {{ title }}
        </div>
        <div class="content">
          <div
            class="content__item"
            v-for="(itemDescription, index) in itemDescriptions"
            :key="index"
          >
            <div class="grid">
              <div class="grid__col grid__col--9-of-12">
                <div class="content__item-text text--regular">
                  {{ itemDescription.text }}
                </div>
                <div
                  class="content__item-subtext"
                  v-if="itemDescription.subtext"
                >
                  {{ itemDescription.subtext }}
                </div>
              </div>
              <div class="grid__col grid__col--3-of-12 text--right text--bold">
                {{ itemDescription.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useImageCarousel } from './image';

interface ProductParam {
  text: string;
  subtext?: string;
  value: string;
}

interface Props {
  title: string;
  images: string[];
  itemDescriptions: ProductParam[];
}
const props = defineProps<Props>();

const { nextImage, prevImage, imageSrc } = useImageCarousel(props.images);
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  &__wrapper {
    display: flex;
    flex-direction: column;
  }
  &__item {
    margin: 15px 0;
  }
  &__item-text {
  }
  &__item-note {
    font-size: 0.9em;
    line-height: 1.5em;
  }
  &__item-subtext {
    font-size: 0.8em;
  }
}
.catalogue {
  &__title {
    font-size: 1.2em;
  }
  &__content {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
  }
  &__item {
    &--type-2 {
    }
  }
}

.picture {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 450px;
  &__button {
    cursor: pointer;
    position: absolute;
    display: block;
    border-radius: 50%;
    background-color: white;
    width: 30px;
    height: 30px;
    &:hover {
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
    }
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
