<template>
  <div class="catalogue__item catalogue__item--type-2">
    <div class="row content__wrapper">
      <div class="col-xs-12">
        <div class="catalogue__title">
          {{ title }}
        </div>
      </div>
      <div class="col-xs-12">
        <ImageSlider class="content__picture" :images="images" />
      </div>
      <div class="col-xs-12">
        <div class="catalogue__content">
          <div class="content">
            <div
              class="content__item"
              v-for="(itemDescription, index) in itemDescriptions"
              :key="index"
            >
              <div class="row">
                <div class="col-xs-12 col-md-9">
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
                  class="content__item-value text--right text--bold col-xs-12 col-md-3"
                >
                  {{ itemDescription.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ImageSlider from '../Common/ImageSlider.vue';

export interface ProductParam {
  text: string;
  subtext?: string;
  value: string | ProductParam[];
}

export interface Props {
  title: string;
  images: string[];
  itemDescriptions: ProductParam[];
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
    margin-bottom: 1em;
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

.content__picture {
  height: 700px;
  background-position: top left;
}

@media screen and (max-width: @sm-size) {
  .catalogue {
    &__content {
      margin-top: 0;
    }
  }
}
</style>
