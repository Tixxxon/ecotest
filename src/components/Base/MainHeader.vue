<template>
  <div class="ect-header">
    <div class="ect-container">
      <div class="grid ect-header__content">
        <div class="ect-header__logo grid__col grid__col--1-of-3 text--black">
          ООО НПП "ЭКОТЕСТ ЛТД"
        </div>
        <div class="grid__col grid__col--1-of-3">
          <div class="ect-header__working">
            <div class="grid ect-header__line">
              <span class="grid__col grid__col--1-of-2 ect-header__working-days"
                >ПН-ЧТ</span
              >
              <span
                class="grid__col grid__col--1-of-2 ect-header__working-time text--right"
                >с 8:00 - 17:00</span
              >
            </div>
            <div class="grid ect-header__line">
              <span class="grid__col grid__col--1-of-2 ect-header__working-days"
                >ПТ</span
              >
              <span
                class="grid__col grid__col--1-of-2 ect-header__working-time text--right"
                >с 8:00 - 16:00</span
              >
            </div>
            <div class="grid ect-header__line">
              <span class="grid__col grid__col--1-of-2 ect-header__working-days"
                >СБ-ВС</span
              >
              <span
                class="grid__col grid__col--1-of-2 ect-header__working-time text--right"
                >Выходной</span
              >
            </div>
          </div>
        </div>
        <div class="grid__col grid__col--1-of-3">
          <div class="ect-header__contact">
            <div class="ect-header__line text--right">
              <a class="ect-header__contact-item" href="tel:+78313067244"
                >+7 (83130) 6-72-44</a
              >
            </div>
            <div class="ect-header__line text--right">
              <a class="ect-header__contact-item" href="tel:+78313067254"
                >+7 (83130) 6-72-54</a
              >
            </div>
            <div class="ect-header__line text--right">
              <a
                class="ect-header__contact-item"
                href="mailto:ecotest.ltd.141@gmail.com"
                >ecotest.ltd.141@gmail.com</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import url('@/assets/styles/base/variables.less');

.ect-header {
  background-color: @gray-color;
  color: white;
  -webkit-user-select: none;
  user-select: none;

  &__logo {
    font-size: 1.2em;
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__line {
    padding: 5px 0;
  }

  &__working {
    &-days {
      display: inline-block;
      min-width: 100px;
      text-align: left;
    }
  }

  &__contact {
    &-item {
      color: white;
    }
  }
}
</style>
