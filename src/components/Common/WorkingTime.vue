<template>
  <div class="working-time">
    <div class="row working-time__line">
      <span class="col-xs-6 text--left">ПН-ЧТ</span>
      <span class="col-xs-6 text--right">с 8:00 - 17:00</span>
    </div>
    <div class="row working-time__line">
      <span class="col-xs-6 text--left">ПТ</span>
      <span class="col-xs-6 text--right">с 8:00 - 16:00</span>
    </div>
    <div class="row working-time__line">
      <span class="col-xs-6 text--left">СБ-ВС</span>
      <span class="col-xs-6 text--right">Выходной</span>
    </div>
  </div>
</template>
<style lang="less">
.working-time {
  &__line {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
