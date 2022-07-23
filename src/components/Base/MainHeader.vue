<template>
  <div class="ect-header">
    <div class="ect-container">
      <div class="row ect-header__content">
        <div class="ect-header__logo text--black col-xs-12 col-sm-12 col-md-4">
          ООО НПП "ЭКОТЕСТ ЛТД"
        </div>
        <div class="hidden-xs hidden-sm col-md-4">
          <div class="ect-header__working">
            <div class="row center-sm">
              <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                <working-time />
              </div>
            </div>
          </div>
        </div>
        <div class="hidden-xs col-sm-12 col-md-4">
          <div class="ect-header__contact">
            <div>
              <div class="row">
                <div
                  class="ect-header__line text--right col-xs-6 col-sm-6 col-md-12 center-sm end-md"
                >
                  <a class="ect-header__contact-item" href="tel:+78313067244"
                    >+7 (83130) 6-72-44</a
                  >
                </div>
                <div
                  class="ect-header__line text--right col-xs-6 col-sm-6 col-md-12 center-sm end-md"
                >
                  <a class="ect-header__contact-item" href="tel:+78313067254"
                    >+7 (83130) 6-72-54</a
                  >
                </div>
                <div
                  class="ect-header__line text--right col-xs-12 col-sm-12 col-md-12 center-sm end-md"
                >
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
