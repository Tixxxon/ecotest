<template>
  <div class="catalogue__item catalogue__item--type-1">
    <div class="row content__wrapper">
      <div class="col-xs-12 col-md-4">
        <ImageSlider :images="images" />
      </div>
      <div class="catalogue__content col-xs-12 col-md-8">
        <div class="catalogue__title">
          {{ title }}
        </div>
        <div class="content">
          <div
            class="content__item"
            v-for="(itemDescription, index) in itemDescriptions"
            :key="index"
          >
            <div class="row">
              <div class="col-xs-12 col-sm-8">
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
              <div class="col-xs-12 col-sm-4">
                <div
                  class="content__item-value text--right text--bold"
                  v-html="itemDescription.value"
                ></div>
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
@import url('@/assets/styles/base/variables.less');
@import url('@/assets/styles/base/catalogue-item.less');
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
  // min-height: 500px;
}

@media screen and (max-width: @md-size) {
  .picture {
    // min-height: 800px;
  }
}
</style>
