<template>
  <section class="quote">
    <div class="quote__left">
      <h2>Мы серьезно относимся к обслуживанию автомобилей</h2>
      <div class="quote__left__element">
        <div>
          <div class="quote__left__element__ico">
            <img alt="сервис" src="../src/ico/service.png">
          </div>
        </div>
        <div class="quote__left__element__wrapper">
          <div class="quote__left__element__wrapper__heading">Удобный сервис</div>
          <div class="quote__left__element__wrapper__text">
            Through True Rich Attended does no end it his mother since real had half every him.
          </div>
        </div>
      </div>
      <div class="quote__left__element">
        <div>
          <div class="quote__left__element__ico">
            <img alt="механик" src="../src/ico/mechanic.png">
          </div>
        </div>
        <div class="quote__left__element__wrapper">
          <div class="quote__left__element__wrapper__heading">Опытные механики</div>
          <div class="quote__left__element__wrapper__text">
            Through True Rich Attended does no end it his mother since real had half every him.
          </div>
        </div>
      </div>
      <div class="quote__left__element">
        <div>
          <div class="quote__left__element__ico">
            <img alt="ценообразование" src="../src/ico/pricing.png">
          </div>
        </div>
        <div class="quote__left__element__wrapper">
          <div class="quote__left__element__wrapper__heading">Прозрачное ценообразование</div>
          <div class="quote__left__element__wrapper__text">
            Through True Rich Attended does no end it his mother since real had half every him.
          </div>
        </div>
      </div>
      <router-link to="/about" class="quote__left__btn">
        Узнайте больше о нас
        <svg width="53" height="16" viewBox="0 0 53 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.7071 8.70711C53.0976 8.31658 53.0976 7.68342 52.7071 7.29289L46.3431 0.928932C45.9526 0.538408 45.3195 0.538408 44.9289 0.928932C44.5384 1.31946 44.5384 1.95262 44.9289 2.34315L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.70711ZM0 9H52V7H0V9Z"/>
        </svg>
      </router-link>
    </div>
    <div class="quote__right">
      <h3>Получите ценовое предложение на автосервис</h3>
      <input type="text" class="quote__right__inp" placeholder="Введите свое местоположение">
      <input type="text" class="quote__right__inp" placeholder="Введите свое местоположение">
      <input type="text" class="quote__right__inp" placeholder="Введите свое местоположение">
      <input type="text" class="quote__right__inp" placeholder="Ваш номер телефона">
      <button class="quote__right__btn">Получите предложение</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuoteComponent"
}
</script>

<style scoped lang="scss">
  .quote {
    padding: 128px 320px;
    display: flex;
    justify-content: space-between;
    background: $additional_3;
    &__left {
      width: 624px;
      display: flex;
      flex-direction: column;
      & h2 {
        margin-bottom: 42px;
        @include heading-h2
      }
      &__element {
        display: flex;
        &__ico {
          width: 47px;
          height: 47px;
          margin-right: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: $additional_5;
          & svg {
          }
        }
        &__wrapper {
          margin-bottom: 37px;
          &__heading {
            margin-bottom: 8px;
            @include title-02
          }
          &__text {
            opacity: 0.6;
            @include paragraph-2-body
          }
        }
      }
      &__btn {
        margin-left: 63px;
        display: flex;
        align-items: center;
        color: $secondary;
        & svg {
          margin-left: 21px;
          fill: $secondary;
        }
      }
      &__btn:hover {
        color: $primary;
        & svg {
          fill: $primary;
        }
      }
    }
    &__right {
      width: 624px;
      display: flex;
      flex-direction: column;
      & h3 {
        margin-bottom: 32px;
        @include heading-h3
      }
      &__inp {
        margin-bottom: 4px;
        padding: 23px 40px;
        border: none;
        border-radius: 2px;
        outline: none;
        background: $additional_5;

        @include paragraph-2-body
      }
      &__btn {
        @include button
      }
    }
    &__right :nth-child(5) {
      margin-bottom: 32px;
    }
  }
</style>