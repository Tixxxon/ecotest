<template>
  <div class="catalogue">
    <div class="row">
      <div class="col-xs-12">
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etc1.title"
            :item-descriptions="productsData.etc1.itemDescriptions"
            :images="productsData.etc1.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etc2.title"
            :item-descriptions="productsData.etc2.itemDescriptions"
            :images="productsData.etc2.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType2
            :title="productsData.etc3k.title"
            :item-descriptions="productsData.etc3k.itemDescriptions"
            :note="productsData.etc3k.note"
            :images="productsData.etc3k.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType2
            :title="productsData.etc3mk.title"
            :item-descriptions="productsData.etc3mk.itemDescriptions"
            :note="productsData.etc3mk.note"
            :images="productsData.etc3mk.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemTypeETC11M
            :title="productsData.etc11m.title"
            :item-descriptions="productsData.etc11m.itemDescriptions"
            :images="productsData.etc11m.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etcv12.title"
            :item-descriptions="productsData.etcv12.itemDescriptions"
            :images="productsData.etcv12.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etcv1200400.title"
            :item-descriptions="productsData.etcv1200400.itemDescriptions"
            :images="productsData.etcv1200400.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etcv14mk.title"
            :item-descriptions="productsData.etcv14mk.itemDescriptions"
            :images="productsData.etcv14mk.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType2
            :title="productsData.etc15.title"
            :item-descriptions="productsData.etc15.itemDescriptions"
            :images="productsData.etc15.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType1
            :title="productsData.etc16.title"
            :item-descriptions="productsData.etc16.itemDescriptions"
            :images="productsData.etc16.imageSrc"
          />
        </div>
        <div class="catalogue__item-container">
          <CatalogueItemType2
            :title="productsData.etc45.title"
            :item-descriptions="productsData.etc45.itemDescriptions"
            :note="productsData.etc45.note"
            :images="productsData.etc45.imageSrc"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CatalogueItemType1 from './CatalogueItemType1.vue';
import CatalogueItemType2 from './CatalogueItemType2.vue';
import CatalogueItemTypeETC11M from './CatalogueItemTypeETC11M.vue';

const productsData = {
  etc1: {
    title: 'Взрывозащитный контейнер ЭТЦ-1',
    itemDescriptions: [
      {
        text: 'Масса загружаемого ВВ, г',
        subtext: '(в тротиловом эквиваленте)',
        value: '10',
      },
      {
        text: 'Габариты контейнера длина/диаметр, мм',
        value: '200/100',
      },
      {
        text: 'Диаметр загрузочного отверстия, мм',
        value: '70',
      },
      {
        text: 'Масса контейнера, кг',
        subtext: '(не более)',
        value: '2.2',
      },
    ],
    imageSrc: ['etc-1/etc-1-1.png'],
  },
  etc2: {
    title: 'Взрывозащитный контейнер ЭТЦ-2',
    itemDescriptions: [
      {
        text: 'Масса загружаемого ВВ, г',
        subtext: '(в тротиловом эквиваленте)',
        value: '400',
      },
      {
        text: 'Габариты контейнера длина/диаметр, мм',
        value: '625/412',
      },
      {
        text: 'Диаметр загрузочного отверстия, мм',
        value: '163',
      },
      {
        text: 'Масса контейнера с тележкой, кг',
        subtext: '(не более)',
        value: '79',
      },
    ],
    imageSrc: ['etc-2/etc-2-1.png'],
  },
  etc3k: {
    title: 'Взрывозащитный контейнер ЭТЦ 3К',
    itemDescriptions: [
      {
        text: 'Масса заряда ВВ, допустимого к безопасному хранению, кг',
        subtext: '(в тротиловом эквиваленте)',
        value: '1.5',
      },
      {
        text: 'Габариты контейнера, мм',
        value: [
          { text: 'высота', value: '860' },
          { text: 'ширина', value: '677' },
          {
            text: 'длина',
            subtext: '(при закрытой/открытой пробке)',
            value: '1250/1970',
          },
        ],
      },
      {
        text: 'Диаметр загрузочного отверстия, мм',
        value: '390',
      },
      {
        text: 'Масса контейнера с транспортировочной тележкой, кг',
        subtext: '(не более)',
        value: '390',
      },
    ],
    note: 'Изделие может комплектоваться специальным прицепом для перевозки автотранспортом',
    imageSrc: [
      // 'etc-3k/etc-3k-1.jpg',
      // 'etc-3k/etc-3k-2.jpg',
      'etc-3k/etc-3k-3.jpg',
      'etc-3k/etc-3k-4.jpg',
    ],
  },
  etc3mk: {
    title: 'Взрывозащитный контейнер ЭТЦ-3МК',
    itemDescriptions: [
      {
        text: 'Масса заряда ВВ, допустимого к безопасному хранению и транспортированию, кг',
        subtext: '(в тротиловом эквиваленте)',
        value: '1.5',
      },
      {
        text: 'Габариты контейнера, мм',
        value: [
          { text: 'высота', value: '860' },
          { text: 'ширина', value: '677' },
          {
            text: 'длина',
            subtext: '(при закрытой/открытой пробке)',
            value: ' 1160/1830',
          },
        ],
      },
      {
        text: 'Диаметр загрузочного отверстия, мм',
        value: '390',
      },
      {
        text: 'Масса контейнера с транспортировочной тележкой, кг',
        subtext: '(не более)',
        value: '392',
      },
    ],
    note: 'Изделие обладает повышенной герметичностью и может комплектоваться специальным прицепом для перевозки автотранспортом',
    imageSrc: [
      'etc-3mk/etc-3mk-1.jpg',
      'etc-3mk/etc-3mk-2.jpg',
      'etc-3mk/etc-3mk-3.jpg',
      'etc-3mk/etc-3mk-4.jpg',
    ],
  },
  etc15: {
    title: 'Взрывозащитный контейнер ЭТЦ-15',
    itemDescriptions: [
      {
        text: 'Масса загружаемого ВВ, г',
        subtext: '(в тротиловом эквиваленте)',
        value: '60',
      },
      {
        text: 'Габариты длина/диаметр, мм',
        value: '405/210',
      },
      {
        text: 'Диаметр загрузочного отверстия, мм',
        value: '180',
      },
      {
        text: 'Масса контейнера, кг',
        subtext: '(не более)',
        value: '13',
      },
    ],
    imageSrc: ['etc-15/etc-15-1.png', 'etc-15/etc-15-2.png'],
  },
  etc16: {
    title: 'Взрывозащитный контейнер ЭТЦ-16',
    itemDescriptions: [
      {
        text: 'Масса загружаемого ВВ, г',
        subtext: '(в тротиловом эквиваленте)',
        value: '300',
      },
      {
        text: 'Габариты контейнера длина/диаметр, мм',
        value: '720/412',
      },
      {
        text: 'Габариты загрузочного отверстия, мм',
        value: '260х120',
      },
      {
        text: 'Масса контейнера, кг',
        subtext: '(не более)',
        value: '60',
      },
    ],
    imageSrc: ['etc-16/etc-16-1.png'],
  },
  etc45: {
    title: 'Взрывозащитный контейнер ЭТЦ-45',
    itemDescriptions: [
      {
        text: 'Масса загружаемого ВВ, г',
        subtext: '(в тротиловом эквиваленте)',
        value: '100',
      },
      {
        text: 'Габариты длина/диаметр, мм',
        value: '405/210',
      },
      {
        text: 'Диаметр загрузочного отверстия, мм',
        value: '180',
      },
      {
        text: 'Масса контейнера, кг',
        subtext: '(не более)',
        value: '18',
      },
    ],

    note: 'Применяется для обеспечения безопасного хранения и транспортировки взрывоопасных устройств и веществ, включая 60 шт. электродетонаторов типа ЭД-8-Ж-2000',
    imageSrc: ['etc-15/etc-15-1.png'],
  },
  etcv12: {
    title: 'Навесной противоосколочный экран «ЭТЦВ-12»',
    itemDescriptions: [
      {
        text: 'Безопасная работа с ВВ, кг',
        subtext: '(в тротиловом эквиваленте)',
        value: '1.5',
      },
      {
        text: 'Масса экрана, кг',
        subtext: '(не более)',
        value: '40',
      },
      {
        text: 'Масса ручного манипулятора длиной 1.5м, кг',
        subtext: '(не более)',
        value: '3.4',
      },
    ],
    imageSrc: ['etcv-12/etcv-12-1.png'],
  },
  etc11m: {
    title: 'Специальный взрывозащитный комплект ЭТЦ 11М-«Демпфер-М»',
    itemDescriptions: [
      {
        text: 'Расстояние до обезвреживаемого СВУ при работе манипулятором, м',
        value: '4.5',
      },
      {
        text: 'Тротиловый эквивалент СВУ, кг',
        value: '5',
      },
      {
        text: 'Габариты щита, мм',
        subtext: '(в сложенном виде)',
        value: '1700х600х200',
      },
      {
        text: 'Габариты щита, мм',
        subtext: '(в упаковке)',
        value: '1660х550х150',
      },
      {
        text: 'Масса щита, кг',
        value: '90',
      },
      {
        text: 'Масса манипулятора с захватом, кг',
        subtext: '(без противовесов)',
        value: '10',
      },
      {
        text: 'Масса противовесов, кг',
        value: '12',
      },
      {
        text: 'Общая масса комплекта с комплектом сменных устройств, кг',
        value: '139',
      },
    ],
    imageSrc: ['etc11m/etc11m-1.png'],
  },
  etcv14mk: {
    title: 'Многоцелевой ствольный разрушитель – «Деформатор-М» (ЭТЦВ-14МК)',
    itemDescriptions: [
      {
        text: 'Калибр стреляющего устройства, мм',
        value: '23',
      },
      {
        text: 'Длина стреляющего устройства, мм',
        value: '280',
      },
      {
        text: 'Тип и толщина пробиваемой преграды, мм',
        subtext: 'сталь (стальным шариком)',
        value: '4',
      },
      {
        text: 'Тип и толщина пробиваемой преграды, мм',
        subtext: 'фанера (дробью с жидкостью)',
        value: '4',
      },
      {
        text: 'Дульная скорость метаемых тел, м/сек',
        value: '240',
      },
      {
        text: 'Температурный диапазон применения, °С',
        value: 'от -25<br/>до +40',
      },
    ],
    imageSrc: ['etcv-14mk/etcv-14mk-2.png', 'etcv-14mk/etcv-14mk-1.png'],
  },
  etcv1200400: {
    title:
      'Комплект ручных манипуляторов для дистанционной работы с СВУ – «ЭТЦВ-12.00.400»',
    itemDescriptions: [
      {
        text: 'Безопасная работа с ВВ, г',
        subtext: '(в тротиловом эквиваленте)',
        value: '400',
      },
      {
        text: 'Длина манипулятора, м',
        subtext: '(от схвата до ложемента под руку)',
        value: '1.5',
      },
      {
        text: 'Масса ручного манипулятора, кг',
        value: '3.4',
      },
    ],
    imageSrc: [
      'etcv-12.00.400/etcv-12.00.400-1.png',
      'etcv-12.00.400/etcv-12.00.400-2.png',
    ],
  },
};
</script>

<style lang="less">
.content {
  &__item-value {
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 1.3em;
  }
}
</style>
