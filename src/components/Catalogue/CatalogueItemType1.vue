<template>
  <div class="catalogue__item catalogue__item--type-1">
    <div class="grid content__wrapper">
      <div class="grid__col grid__col--4-of-12">
        <ImageSlider :images="images" />
      </div>
      <div class="catalogue__content grid__col grid__col--8-of-12">
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
              <div
                class="content__item-value grid__col grid__col--3-of-12 text--right text--bold"
                v-html="itemDescription.value"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import ImageSlider from '../Common/ImageSlider.vue';

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

defineProps<Props>();
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  &__wrapper {
    display: flex;
  }
  &__item {
    margin: 25px 0;
  }
  &__item-text {
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
  }
  &__item {
    &--type-1 {
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
  min-height: 350px;
}
</style>
