<template>
  <section>
    <PreviewComponent />
    <QuoteComponent />
  </section>
</template>

<script>
import PreviewComponent from "@/views/main/components/PreviewComponent";
import QuoteComponent from "@/views/main/components/QuoteComponent";
export default {
  name: 'HomeView',
  components: {QuoteComponent, PreviewComponent},
}
</script>

<style scoped lang="scss">
</style>
