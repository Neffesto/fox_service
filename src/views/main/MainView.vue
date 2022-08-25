<template>
  <section class="main">
    <PreviewComponent />
    <QuoteComponent />
    <ProcessComponent />
    <OfferComponent />
  </section>
</template>

<script>
import PreviewComponent from "@/views/main/components/PreviewComponent";
import QuoteComponent from "@/views/main/components/QuoteComponent";
import ProcessComponent from "@/views/main/components/ProcessComponent";
import OfferComponent from "@/views/main/components/OfferComponent";
export default {
  name: 'HomeView',
  components: {OfferComponent, ProcessComponent, QuoteComponent, PreviewComponent},
}
</script>

<style scoped lang="scss">
</style>
