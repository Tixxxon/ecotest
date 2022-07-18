<template>
  <div class="catalogue__item catalogue__item--type-1">
    <div class="grid content__wrapper">
      <div class="grid__col grid__col--4-of-12">
        <div
          class="catalogue__picture"
          :style="{
            'background-image': 'url(' + imageSrc + ')',
          }"
        ></div>
      </div>
      <div class="catalogue__content grid__col grid__col--8-of-12">
        <div class="catalogue__title">
          {{ title }}
        </div>
        <div class="content">
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--8-of-12">
                <div class="content__item-text text--regular">
                  Масса загружаемого ВВ, {{ explosive.unit }}
                </div>
                <div class="content__item-subtext">
                  (в тротиловом эквиваленте)
                </div>
              </div>
              <div class="grid__col grid__col--4-of-12 text--right text--bold">
                {{ explosive.value }}
              </div>
            </div>
          </div>
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--8-of-12">
                <div class="content__item-text text--regular">
                  Габариты контейнера, {{ dimension.unit }}
                </div>
                <div class="content__item-subtext">(длина / диаметр)</div>
              </div>
              <div class="grid__col grid__col--4-of-12 text--right text--bold">
                {{ dimension.value }}
              </div>
            </div>
          </div>
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--8-of-12">
                <div class="content__item-text text--regular">
                  Масса загружаемого ВВ, {{ product.unit }}
                </div>
                <div class="content__item-subtext">(не более)</div>
              </div>
              <div class="grid__col grid__col--4-of-12 text--right text--bold">
                {{ product.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue';
interface ProductParam {
  unit: string;
  value: string;
}

interface Props {
  title: string;
  imageSrc: string;
  explosive: ProductParam;
  dimension: ProductParam;
  product: ProductParam;
}

const props = defineProps<Props>();

const imageSrc = computed(() => {
  return `./${process.env.BASE_URL}/images/${props.imageSrc}`;
});
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
  &__picture {
    background-color: black;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 330px;
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
</style>
