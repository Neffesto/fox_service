<template>
  <section class="feedback">
    <h1>Свяжитесь с нашими экспертами</h1>
    <div class="feedback__mid">
      <div class="feedback__mid__left">
        <form class="feedback__mid__left__form">
          <input class="feedback__mid__left__form__inp" placeholder="Ваше полное имя">
          <input class="feedback__mid__left__form__inp" placeholder="Ваш e-mail">
          <input class="feedback__mid__left__form__inp" placeholder="Выберите услугу">
          <input class="feedback__mid__left__form__inp" placeholder="Сообщение">
          <button class="feedback__mid__left__form__btn">
            Отправить сообщение
          </button>
        </form>
      </div>
      <div class="feedback__mid__right">
        <div class="feedback__mid__right__element">
          <div class="feedback__mid__right__element__heading">
            Адресс
          </div>
          <div class="feedback__mid__right__element__text">
            NH 234   Public Square San Francisco  65368
          </div>
        </div>
        <div class="feedback__mid__right__element">
          <div class="feedback__mid__right__element__heading">
            Контакты
          </div>
          <div class="feedback__mid__right__element__text">
            1800 265 24 52
            <br>
            Finsweet@gmail.com
          </div>
        </div>
        <div class="feedback__mid__right__element">
          <div class="feedback__mid__right__element__heading">
            Мы открыты
          </div>
          <div class="feedback__mid__right__element__text">
            Monday to Friday 9:00 AM to  10:00  AM
          </div>
        </div>
      </div>
    </div>
    <img class="feedback__map" src="../src/img/map.jpg">
    <div class="feedback__bot"></div>
  </section>
</template>

<script>
export default {
  name: "FeedbackComponent"
}
</script>

<style scoped lang="scss">
.feedback {
  position: relative;
  & h1 {
    width: 624px;
    margin-top: 80px;
    margin-left: 320px;
    @include heading-h1
  }
  &__mid {
    margin-top: 48px;
    padding-left: 320px;
    padding-right: 320px;
    display: flex;
    justify-content: space-between;
    &__left {
      width: 624px;
      &__form {
        display: flex;
        flex-direction: column;
        &__inp {
          padding: 23px 40px;
          border: none;
          border-radius: 2px;
          outline: none;
          background: $additional_4;
          @include paragraph-2-body
        }
        &__inp:not(:nth-child(4)) {
          margin-bottom: 4px;
        }
        &__btn {
          margin-top: 48px;
          @include button
        }
      }
    }
    &__right {
      width: 500px;
      &__element {
        &__heading {
          margin-bottom: 2px;
          opacity: 0.7;
          @include paragraph-2-body
        }
        &__text {
          @include title-02
        }
      }
      &__element:not(:last-child) {
        margin-bottom: 32px;
      }
    }
  }
  &__map {
    width: 1280px;
    height: 512px;
    margin-top: 128px;
    margin-left: 320px;
    margin-right: 320px;
    position: absolute;
    background: #F2F2F2;
  }
  &__bot {
    //width: 1920px;
    height: 448px;
    margin-top: 472px;
    background: url("../src/img/image.jpg");
    background-repeat: no-repeat;
    background-size: auto;
  }
}
</style>