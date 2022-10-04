<template>
  <section class="footer-contact">
    <div class="footer-contact__left">
      <h3>Свяжитесь с нами для вашего обслуживания</h3>
    </div>
    <div class="footer-contact__right">
      <div class="footer-contact__right__element">
        <div class="footer-contact__right__element__heading">
          Контактный телефон
        </div>
        <div class="footer-contact__right__element__text">
          1800 265 24 52
        </div>
      </div>
      <div class="footer-contact__right__element">
        <div class="footer-contact__right__element__heading">
          Адресс
        </div>
        <div class="footer-contact__right__element__text">
          NH 234   Public Square San Francisco  65368
        </div>
      </div>
      <div class="footer-contact__right__element">
        <div class="footer-contact__right__element__heading">
          Мы открыты
        </div>
        <div class="footer-contact__right__element__text">
          Monday to Friday 9:00 AM to  10:00  AM
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterContact"
}
</script>

<style scoped lang="scss">
.footer-contact {
  display: flex;
  justify-content: space-between;
  background: $secondary;
  &__left {
    width: 976px;
    padding-top: 128px;
    & h3 {
      margin-left: 320px;
      margin-right: 193px;
      color: $additional_5;
      @include heading-h3
    }
  }
  &__right {
    width: 976px;
    padding-top: 128px;
    &__element {
      margin-bottom: 32px;
      &__heading {
        margin-bottom: 8px;
        opacity: 0.6;
        @include paragraph-1-bodyBlack
      }
      &__text {
        @include title-02Black
      }
    }
  }
}
</style>