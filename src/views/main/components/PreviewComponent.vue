<template>
  <section class="preview">
    <div class="preview__left">
      <h1>
        Получите услугу обслуживания вашего автомобиля онлайн в одном месте
      </h1>
      <button class="preview__left__btn" href="tel:+18002652452">
        Закажите услугу
      </button>
      <div class="preview__left__work">
        <div class="preview__left__work__left">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.4224 4.54586C23.5009 1.62414 19.6161 0.0151367 15.4844 0.0151367C11.3526 0.0151367 7.46789 1.62414 4.54635 4.54586C1.62462 7.4674 0.015625 11.3522 0.015625 15.4839C0.015625 19.6156 1.62462 23.5004 4.54635 26.4219C7.46789 29.3436 11.3526 30.9526 15.4844 30.9526C19.6161 30.9526 23.5009 29.3436 26.4224 26.4219C29.3441 23.5004 30.9531 19.6156 30.9531 15.4839C30.9531 11.3522 29.3441 7.4674 26.4224 4.54586ZM15.4844 28.5356C8.28778 28.5356 2.43262 22.6805 2.43262 15.4839C2.43262 8.28729 8.28778 2.43213 15.4844 2.43213C22.681 2.43213 28.5361 8.28729 28.5361 15.4839C28.5361 22.6805 22.681 28.5356 15.4844 28.5356ZM17.8009 16.1741L22.1979 20.5486L20.4932 22.2624L16.0435 17.835C15.8639 17.8778 15.677 17.9009 15.4844 17.9009C14.1496 17.9009 13.0674 16.8187 13.0674 15.4839C13.0674 14.6145 13.5266 13.8526 14.2155 13.4268V4.90955H15.424H16.6324V13.3566C17.3879 13.7654 17.9014 14.5645 17.9014 15.4839C17.9014 15.7237 17.8659 15.9552 17.8009 16.1741Z" fill="#E2E6E9"/>
          </svg>
        </div>
        <div class="preview__left__work__right">
          <p class="preview__left__work__right__top">
            Мы открыты
          </p>
          <p class="preview__left__work__right__bot">
            ПН - ПТ с 9:00 до 10:00 утра
          </p>
        </div>
      </div>
    </div>
    <div class="preview__right">
      <img alt="img" src="../src/img/image001.jpg">
    </div>
  </section>
</template>

<script>
export default {
  name: "PreviewComponent"
}
</script>

<style scoped lang="scss">
  .preview {
    padding: 80px 320px 128px;
    display: flex;
    justify-content: space-between;

    &__left {
      h1 {
        @include heading-h1
      }
      &__btn {
        margin-top: 32px;
        @include button
      }
      &__work {
        margin-top: 48px;
        display: flex;

        &__left {
          margin-right: 13px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>