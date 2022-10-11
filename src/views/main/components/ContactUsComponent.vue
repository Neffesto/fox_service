<template>
  <section class="contact-us">
    <div class="contact-us__bg-left">
      <div class="contact-us__bg-left__block">
        <h3>Свяжитесь с нами по вашему запросу</h3>
        <a class="contact-us__bg-left__block__btn" href="tel:+18002652452">связаться с нами</a>
      </div>
    </div>
    <div class="contact-us__bg-right"></div>
  </section>
</template>

<script>
export default {
  name: "ContactUsComponent"
}
</script>

<style scoped lang="scss">
.contact-us {
  display: flex;
  justify-content: space-between;
  &__bg-left {
    width: 960px;
    height: 502px;
    position: relative;
    background: url("../src/img/image002.jpg");
    background-repeat: no-repeat;
    &__block {
      width: 760px;
      height: 502px;
      margin-left: 320px;
      position: absolute;
      background: $primary;
      & h3 {
        margin: 180px 80px 48px;
        color: $additional_5;
        @include heading-h3
      }
      &__btn {
        margin-left: 80px;
        @include button-black;
      }
    }
  }
  &__bg-right {
    width: 910px;
    height: 502px;
    background: url("../src/img/image003.jpg");
    background-repeat: no-repeat;
    background-position: right;
  }
}
</style>