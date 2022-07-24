<template>
  <div class="ect-container">
    <section class="ect-section text--center">
      <div class="row center-xs">
        <div class="col-xs-12 col-md-8 col-md-push-2">
          <div class="quote">
            <div class="quote__text text--left">
              "За безопасность необходимо платить, a за ее отсутствие -
              расплачиваться"
            </div>
            <div class="quote__signature text--black text--right">
              Уинстон Черчиль
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ect-section text--left">
      <h1 class="ect-title">О КОМПАНИИ</h1>
      <div class="ect-section__content">
        <div class="about">
          <p class="ect-paragraph">
            Наша компания предлагает оборудование для безопасного обращения,
            хранения и транспортировки самодельных взрывных устройств, средств
            инициирования, взрывчатых веществ и других взрывоопасных предметов.
          </p>
          <p class="ect-paragraph">
            За период с 1993 г. по настоящее время произведено несколько тысяч
            единиц взрывозащитных контейнеров и иного оборудования для
            безопасного обращения с взрывными устройствами.
          </p>
          <p class="ect-paragraph">
            Продукцией нашей компании оснащены метрополитены г.Москвы,
            г.Санкт-Петербурга, г.Нижнего Новгорода, а также вокзалы и ж/д
            станции АО «РЖД».
          </p>
          <p class="ect-paragraph">
            На взрывозащитные контейнеры имеется заключение о соответствии
            требованиям Центра специальной техники ФСБ России.
          </p>
          <p class="ect-paragraph">
            Компания осуществляет контрактные поставки с реальными сроками
            исполнения.
          </p>
          <div class="about__signature">
            С уважением,<br />Директор ООО НПП «ЭКОТЕСТ ЛТД»
          </div>
        </div>
      </div>
    </section>
    <section class="ect-section text--left">
      <h1 class="ect-title">Каталог продукции</h1>
      <div class="ect-section__content">
        <CatalogueContainer />
      </div>
    </section>
    <section class="ect-section text--left">
      <h1 class="ect-title">Контакты</h1>
      <div class="ect-section__content">
        <ContactsContainer />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CatalogueContainer from './Catalogue/CatalogueContainer.vue';
import ContactsContainer from './Contacts/ContactsContainer.vue';

export default defineComponent({
  components: {
    CatalogueContainer,
    ContactsContainer,
  },
});
</script>

<style lang="less" scoped>
.about {
  &__signature {
    line-height: 1.5em;

    margin-top: 1.5em;
    font-weight: 600;
  }
}

.quote {
  font-size: 1.3em;
  line-height: 1.2em;
  &__signature {
    margin-top: 0.5em;
  }
}
</style>
