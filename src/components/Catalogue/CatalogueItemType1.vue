<template>
  <div class="catalogue__item catalogue__item--type-1">
    <div class="row content__wrapper">
      <div class="col-xs-12 col-md-4">
        <ImageSlider class="content__picture" :images="images" />
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
            <div class="row" v-if="typeof itemDescription.value === 'string'">
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
                <!-- <div
                  class="content__item-value text--right text--bold"
                  v-html="itemDescription.value"
                ></div> -->
              </div>
            </div>
            <div v-else>
              <div class="row">
                <div class="col-xs-12">
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
              </div>
              <div class="row">
                <div class="col-xs-8 col-xs-offset-4">
                  <div
                    class="dimension__line row"
                    v-for="(subItem, idx) in itemDescription.value"
                    :key="idx"
                  >
                    <div class="dimension__label col-xs-10">
                      <div class="col-xs-12">
                        <div
                          class="content__item-text text--regular text--center"
                        >
                          {{ subItem.text }}
                        </div>
                        <div
                          class="content__item-subtext text--center"
                          v-if="subItem.subtext"
                        >
                          {{ subItem.subtext }}
                        </div>
                      </div>
                    </div>
                    <div class="content__item-value text--bold col-xs-2">
                      {{ subItem.value }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content__item" v-if="note">
            <span class="text--bold">Примечание:</span> {{ note }}
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
  value: string | ProductParam[];
}

interface Props {
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

.dimension {
  &__line {
    padding-top: 10px;
  }
}

@media screen and (max-width: @sm-size) {
  .content__picture {
    min-height: 900px;
    height: 900px;
  }
}
</style>
