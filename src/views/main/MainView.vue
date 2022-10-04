<template>
  <section class="main">
    <PreviewComponent />
    <QuoteComponent />
    <ProcessComponent />
    <OfferComponent />
    <ContactUsComponent />
    <FooterContact />
  </section>
</template>

<script>
import PreviewComponent from "@/views/main/components/PreviewComponent";
import QuoteComponent from "@/views/main/components/QuoteComponent";
import ProcessComponent from "@/views/main/components/ProcessComponent";
import OfferComponent from "@/views/main/components/OfferComponent";
import ContactUsComponent from "@/views/main/components/ContactUsComponent";
import FooterContact from "@/components/footer/FooterContact";

export default {
  name: 'HomeView',
  components: {
    FooterContact,
    ContactUsComponent,
    OfferComponent,
    ProcessComponent,
    QuoteComponent,
    PreviewComponent
  },
}
</script>

<style scoped lang="scss">
</style>
