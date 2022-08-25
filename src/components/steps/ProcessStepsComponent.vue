<template>
  <section class="process-step">
    <div class="process-step__block">
      <div class="process-step__block__wrapper-top">
        <div class="process-step__block__wrapper-top__element">
          <div class="process-step__block__wrapper-top__element__ico">01</div>
          <span></span>
        </div>
        <div class="process-step__block__wrapper-top__heading">
          Получите предложение
        </div>
      </div>
      <div class="process-step__block__wrapper-bot">
        <div class="process-step__block__wrapper-bot__decor">
          <div class="process-step__block__wrapper-bot__decor__element">
            <span></span>
          </div>

        </div>
        <div class="process-step__block__wrapper-bot__text">
          Through True Rich Attended does no end it his mother since real had half every.
        </div>
      </div>
      <div class="process-step__block__wrapper-top">
        <div class="process-step__block__wrapper-top__element">
          <div class="process-step__block__wrapper-top__element__ico">02</div>
          <span></span>
        </div>
        <div class="process-step__block__wrapper-top__heading">
          Запишитесь на прием
        </div>
      </div>
      <div class="process-step__block__wrapper-bot">
        <div class="process-step__block__wrapper-bot__decor">
          <div class="process-step__block__wrapper-bot__decor__element">
            <span></span>
          </div>

        </div>
        <div class="process-step__block__wrapper-bot__text">
          Through True Rich Attended does no end it his mother since real had half every.
        </div>
      </div>
      <div class="process-step__block__wrapper-top">
        <div class="process-step__block__wrapper-top__element">
          <div class="process-step__block__wrapper-top__element__ico">03</div>
          <span></span>
        </div>
        <div class="process-step__block__wrapper-top__heading">
          Получите готовый результат
        </div>
      </div>
      <div class="process-step__block__wrapper-bot">
        <div class="process-step__block__wrapper-bot__decor">
          <div class="process-step__block__wrapper-bot__decor__element">
            <!--              <span></span>-->
          </div>

        </div>
        <div class="process-step__block__wrapper-bot__text">
          Through True Rich Attended does no end it his mother since real had half every.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProcessStepsComponent"
}
</script>

<style scoped lang="scss">
  .process-step {
    &__block {
      &__wrapper-top {
        display: flex;
        &__element {
          position: relative;
          &__ico {
            width: 72px;
            height: 72px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-weight: 700;
            font-size: 32px;
            color: $additional_5;
            background: $additional_1;
          }
          & span {
              position: absolute;
              width: 41px;
              height: 42px;
              margin-top: -20px;
              margin-left: 15px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.24);
            }
          }
        &__heading {
          margin-bottom: 8px;
          margin-left: 24px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          @include title-01
          }
      }
      &__wrapper-bot {
        display: flex;
        &__decor {
          display: flex;
          &__element {
            width: 72px;
            display: flex;
            justify-content: center;
            & span {
                width: 0;
              //height: 100%;
                margin-top: 15px;
                margin-bottom: 15px;
                border: 1px dashed $primary;
              }
          }
        }
  &__text {
    margin-left: 24px;
    margin-bottom: 29px;
    opacity: 0.6;
    @include paragraph-1-body
  }
      }
    }
  }
</style>