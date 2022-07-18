<template>
  <div class="catalogue__item catalogue__item--type-2">
    <div class="content__wrapper">
      <div
        class="catalogue__picture"
        :style="{
          'background-image': 'url(' + imageSrc + ')',
        }"
      ></div>
      <div class="catalogue__content">
        <div class="catalogue__title">
          {{ title }}
        </div>
        <div class="content">
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--8-of-12">
                <div class="content__item-text text--regular">
                  Масса заряда ВВ, допустимого к безопасному хранению,
                  {{ explosive.unit }}
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
              </div>
              <div
                class="grid__col grid__col--2-of-12 text--right text--regular"
              >
                <div>высота</div>
                <div>ширина</div>
                <div>длина</div>
              </div>
              <div class="grid__col grid__col--2-of-12 text--right text--bold">
                <div>{{ dimension.value.height }}</div>
                <div>{{ dimension.value.width }}</div>
                <div>{{ dimension.value.depth }}</div>
              </div>
            </div>
          </div>
          <div class="content__item">
            <div class="grid">
              <div class="grid__col grid__col--8-of-12">
                <div class="content__item-text text--regular">
                  Масса контейнера с транспортировочной тележкой,
                  {{ product.unit }}
                </div>
                <div class="content__item-subtext">(не более)</div>
              </div>
              <div class="grid__col grid__col--4-of-12 text--right text--bold">
                {{ product.value }}
              </div>
            </div>
          </div>
          <div class="content__item">
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
import { defineProps, computed } from 'vue';
interface ProductParam {
  unit: string;
  value: string;
}

interface Props {
  title: string;
  imageSrc: string;
  explosive: ProductParam;
  dimension: {
    unit: string;
    value: { width: string; height: string; depth: string };
  };
  product: ProductParam;
  note: string;
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
    flex-direction: column;
  }
  &__item {
    margin: 25px 0;
  }
  &__item-text {
  }
  &__item-note {
    font-size: 0.9em;
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
    margin-top: 1em;
  }
  &__item {
    &--type-2 {
    }
  }
}
</style>
