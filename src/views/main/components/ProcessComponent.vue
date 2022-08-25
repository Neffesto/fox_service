<template>
  <section class="process">
    <div class="process__left">
      <h2>
        Мы следуем четкому процессу, чтобы помочь вам в этом.
      </h2>
      <div class="process__left__text">
        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire
      </div>
      <button class="process__left__btn">Учить больше</button>
    </div>
    <div class="process__right">
      <ProcessStepsComponent />

    </div>
  </section>
</template>

<script>
import ProcessStepsComponent from "@/components/steps/ProcessStepsComponent";
export default {
  name: "ProcessComponent",
  components: {ProcessStepsComponent}
}
</script>

<style scoped lang="scss">
  .process {
    padding: 128px 320px;
    display: flex;
    justify-content: space-between;
    &__left {
      width: 624px;
      & h2 {
        margin-bottom: 16px;
        @include heading-h2
      }
      &__text {
        margin-bottom: 32px;
        opacity: 0.6;
        @include paragraph-2-body
      }
      &__btn {
        @include button
      }
    }
    &__right {
      width: 624px;
    }
  }
</style>