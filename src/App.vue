<template>
  <section class="container">
    <div class="footer-press-down">
        <HeaderMain />
        <router-view/>
        <FooterMain />
    </div>
  </section>
</template>

<script>
import HeaderMain from "@/components/header/HeaderMain";
import FooterMain from "@/components/footer/FooterMain";
export default {
  components: {FooterMain, HeaderMain}
}
</script>

<style scoped lang="scss">
  //.container {
  //  max-width: 1920px;
  //  margin: 0 auto;
  //}
</style>