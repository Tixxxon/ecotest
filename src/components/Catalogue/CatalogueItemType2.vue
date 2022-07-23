<template>
  <div class="catalogue__item catalogue__item--type-2">
    <div class="row content__wrapper">
      <div class="col-xs-12">
        <ImageSlider :images="images" />
      </div>
      <div class="col-xs-12">
        <div class="catalogue__content">
          <div class="catalogue__title">
            {{ title }}
          </div>
          <div class="content">
            <div class="content__item">
              <div class="row">
                <div class="col-xs-9">
                  <div class="content__item-text text--regular">
                    {{ explosive.text }}
                  </div>
                  <div class="content__item-subtext" v-if="explosive.subtext">
                    {{ explosive.subtext }}
                  </div>
                </div>
                <div
                  class="content__item-value text--right text--bold col-xs-3"
                >
                  {{ explosive.value }}
                </div>
              </div>
            </div>
            <div class="content__item">
              <div class="row">
                <div class="col-xs-12 col-sm-8 content__item-text">
                  <div class="content__item-text text--regular">
                    {{ dimension.text }}
                  </div>
                  <div class="content__item-subtext" v-if="dimension.subtext">
                    {{ dimension.subtext }}
                  </div>
                </div>
                <div class="text--right text--regular col-xs-12 col-sm-4">
                  <div class="dimension__line row">
                    <span class="dimension__label col-xs-6 text--left"
                      >высота</span
                    >
                    <span
                      class="dimension__value content__item-value col-xs-6 text--right text--bold"
                    >
                      {{ dimension.value.height }}
                    </span>
                  </div>
                  <div class="dimension__line row">
                    <span class="dimension__label col-xs-6 text--left"
                      >ширина</span
                    >
                    <span
                      class="dimension__value content__item-value col-xs-6 text--right text--bold"
                    >
                      {{ dimension.value.width }}
                    </span>
                  </div>
                  <div class="dimension__line row">
                    <span class="dimension__label col-xs-6 text--left"
                      >длина</span
                    >
                    <span
                      class="dimension__value content__item-value col-xs-6 text--right text--bold"
                    >
                      {{ dimension.value.depth }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content__item">
              <div class="row">
                <div class="col-xs-9">
                  <div class="content__item-text text--regular">
                    {{ product.text }}
                  </div>
                  <div class="content__item-subtext" v-if="product.subtext">
                    {{ product.subtext }}
                  </div>
                </div>
                <div
                  class="content__item-value text--right text--bold col-xs-3"
                  v-html="product.value"
                ></div>
              </div>
            </div>
            <div class="content__item" v-if="note">
              <div class="content__item-note text--regular">
                <span class="text--bold">Примечание: </span>
                <span class="text--light">{{ note }}</span>
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
  explosive: ProductParam;
  dimension: {
    text: string;
    subtext?: string;
    value: { width: string; height: string; depth: string };
  };
  product: ProductParam;
  note?: string;
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
    flex-direction: column;
  }
  &__item {
    margin: 25px 0;
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
  height: 400px;
}
.dimension {
  &__line {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: @sm-size) {
  .catalogue {
    &__content {
      margin-top: 0;
    }
  }
}
</style>
