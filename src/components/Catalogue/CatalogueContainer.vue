<template>
  <div class="catalogue">
    <div class="grid">
      <div class="grid__col grid__col--10-of-12 grid__col--push-1-of-12">
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etc1.title"
            :dimension="productsData.etc1.dimension"
            :product="productsData.etc1.product"
            :explosive="productsData.etc1.explosive"
            :image-src="productsData.etc1.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etc2.title"
            :dimension="productsData.etc2.dimension"
            :product="productsData.etc2.product"
            :explosive="productsData.etc2.explosive"
            :image-src="productsData.etc2.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType2
            :title="productsData.etc3k.title"
            :dimension="productsData.etc3k.dimension"
            :note="productsData.etc3k.note"
            :product="productsData.etc3k.product"
            :explosive="productsData.etc3k.explosive"
            :image-src="productsData.etc3k.imageSrc"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CatalogueItemType1 from './CatalogueItemType1.vue';
import CatalogueItemType2 from './CatalogueItemType2.vue';

export default defineComponent({
  components: {
    CatalogueItemType1,
    CatalogueItemType2,
  },
  setup() {
    const productsData = {
      etc1: {
        title: 'Взрывозащитный контейнер ЭТЦ-1 (ВЗК ЭТЦ-1)',
        explosive: {
          unit: 'г',
          value: '10',
        },
        dimension: {
          unit: 'мм',
          value: '200/100',
        },
        product: {
          unit: 'кг',
          value: '2.2',
        },
        imageSrc: 'etc-1.png',
      },
      etc2: {
        title: 'Взрывозащитный контейнер ЭТЦ-2 (ВЗК ЭТЦ-2)',
        explosive: {
          unit: 'г',
          value: '400',
        },
        dimension: {
          unit: 'мм',
          value: '615/412',
        },
        product: {
          unit: 'кг',
          value: '79',
        },
        imageSrc: 'etc-2.png',
      },
      etc3k: {
        title: 'Взрывозащитный контейнер ЭТЦ-3К (ВЗК ЭТЦ-3К)',
        explosive: {
          unit: 'кг',
          value: '1.5',
        },
        dimension: {
          unit: 'мм',
          value: {
            height: '860',
            width: '677',
            depth: '1250',
          },
        },
        product: {
          unit: 'кг',
          value: '2.2',
        },
        note: 'Изделие может комплектоваться специальным прицепом для перевозки автотранспортом',
        imageSrc: 'etc-3k.png',
      },
    };

    return { productsData };
  },
});
</script>

<style lang="less">
.catalogue {
  &__item {
    border: 1px solid #ccc;
    border-radius: 9px;
    padding: 15px;

    &-container {
      margin-bottom: 30px;
    }
  }

  &__title {
    font-weight: 600;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
}
</style>
