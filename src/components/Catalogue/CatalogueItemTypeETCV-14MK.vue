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
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--9-of-12">
                <div class="content__item-text text--regular">
                  Масса заряда ВВ, допустимого к безопасному хранению,
                  {{ explosive.unit }}
                </div>
                <div class="content__item-subtext">
                  (в тротиловом эквиваленте)
                </div>
              </div>
              <div class="grid__col grid__col--3-of-12 text--right text--bold">
                {{ explosive.value }}
              </div>
            </div>
          </div>
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--9-of-12">
                <div class="content__item-text text--regular">
                  Габариты контейнера, {{ dimension.unit }}
                </div>
              </div>
              <div
                class="grid__col grid__col--3-of-12 text--right text--regular"
              >
                <div class="dimension__line grid">
                  <span class="dimension__label grid__col grid__col--6-of-12"
                    >высота</span
                  >
                  <span class="dimension__value grid__col grid__col--6-of-12">
                    {{ dimension.value.height }}
                  </span>
                </div>
                <div class="dimension__line grid">
                  <span class="dimension__label grid__col grid__col--6-of-12"
                    >ширина</span
                  >
                  <span class="dimension__value grid__col grid__col--6-of-12">
                    {{ dimension.value.width }}
                  </span>
                </div>
                <div class="dimension__line grid">
                  <span class="dimension__label grid__col grid__col--6-of-12"
                    >длина</span
                  >
                  <span class="dimension__value grid__col grid__col--6-of-12">
                    {{ dimension.value.depth }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--9-of-12">
                <div class="content__item-text text--regular">
                  Масса контейнера с транспортировочной тележкой,
                  {{ product.unit }}
                </div>
                <div class="content__item-subtext">(не более)</div>
              </div>
              <div class="grid__col grid__col--3-of-12 text--right text--bold">
                {{ product.value }}
              </div>
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
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { useImageCarousel } from './image';

interface ProductParam {
  unit: string;
  value: string;
}

interface Props {
  title: string;
  images: string[];
  explosive: ProductParam;
  dimension: {
    unit: string;
    value: { width: string; height: string; depth: string };
  };
  product: ProductParam;
  note?: string;
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
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 330px;
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
.dimension {
  &__line {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
