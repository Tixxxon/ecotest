<template>
  <div class="contacts">
    <div class="row">
      <div class="col-xs-12 col-md-5">
        <h2 class="contacts__title text--center text--bold">Адрес</h2>
        <div class="contacts__address text--center">
          <div class="text--regular">Юридический адрес:</div>
          <span
            >607188 Россия, Нижегородская область, г.Саров, ул.Бессарабенко,
            14-31</span
          >
        </div>
        <div class="contacts__address text--center">
          <div class="text--regular">Почтовый адрес:</div>
          <span
            >607188 Россия, Нижегородская область, г.Саров, Главпочтамт, а/я
            141</span
          >
        </div>
      </div>
      <div class="col-xs-12 col-md-5 col-md-offset-2 text--center">
        <h2 class="contacts__title text--center text--bold">Как связаться</h2>
        <div class="contacts__contact">
          <a href="mailto:ecotest.ltd.141@gmail.com"
            >ecotest.ltd.141@gmail.com</a
          >
        </div>
        <div class="contacts__contact">
          <a href="tel:+78313067244">+7(83130) 6-72-44</a>
        </div>
        <div class="contacts__contact">
          <a href="tel:+78313067254">+7(83130) 6-72-54</a>
        </div>
        <div class="contacts__contact row center-xs">
          <div class="col-xs-12 col-sm-8">
            <working-time />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-8 col-md-offset-2 text--center">
        <span class="contacts__company text--bold">
          Общество с ограниченной ответственностью<br />Научно-производственное
          предприятие «ЭКОТЕСТ ЛТД»<br />(ООО НПП «ЭКОТЕСТ ЛТД»)
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.contacts {
  &__title {
    font-size: 1.3em;
  }
  &__address {
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 1.3em;
  }
  &__contact {
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 1.3em;
  }
  &__company {
    line-height: 1.4em;
  }

  &__working-time {
  }
}
</style>
