<template>
  <section class="footer">
    <div class="footer__logo">
    </div>
    <nav class="footer__nav">
<!--      <router-link to="/" class="footer__nav__element">Главная</router-link>-->
<!--      <router-link to="/about" class="footer__nav__element">О Нас</router-link>-->
<!--      <router-link to="/service" class="footer__nav__element">Сервис</router-link>-->
<!--      <router-link to="/blog" class="footer__nav__element">Блог</router-link>-->
<!--      <router-link to="/contact" class="footer__nav__element">Контакты</router-link>-->
    </nav>
    <div class="footer__copy">
      @ Copyright Finsweet 2021
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterMain"
}
</script>

<style scoped lang="scss">
  .footer {
    height: 157px;
    padding-left: 320px;
    padding-right: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $secondary;
    &__logo {
      width: 122px;
    }
    &__nav {
      &__element {
        color: $additional_5;
      }
      &__element:not(:last-child) {
        margin-right: 45px;
      }
    }
    &__copy {
      color: $additional_3;
    }
  }

</style>