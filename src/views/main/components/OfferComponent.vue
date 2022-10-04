<template>
  <section class="offer">
    <div class="offer__text">Что мы предлагаем</div>
    <h2>Мы предлагаем полный комплекс услуг по ремонту и техническому обслуживанию автомобилей</h2>
    <div class="offer__wrapper">
      <DiagnosticsComponent />
      <EngineRepairComponent />
      <WheelRepairComponent />
      <OilFilterComponent />
      <BodyWorkComponent />
      <Batteries />
      <InsuranceClaim />
      <CustomService />
    </div>
    <router-link to="/service" class="offer__btn">
      Узнайте больше об услугах
      <svg width="53" height="16" viewBox="0 0 53 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.7071 8.70711C53.0976 8.31658 53.0976 7.68342 52.7071 7.29289L46.3431 0.928932C45.9526 0.538408 45.3195 0.538408 44.9289 0.928932C44.5384 1.31946 44.5384 1.95262 44.9289 2.34315L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.70711ZM0 9H52V7H0V9Z"/>
      </svg>
    </router-link>
  </section>
</template>

<script>
import DiagnosticsComponent from "@/components/offer/diagnostics/DiagnosticsComponent";
import EngineRepairComponent from "@/components/offer/engine_repair/EngineRepairComponent";
import WheelRepairComponent from "@/components/offer/wheel_repair/WheelRepairComponent";
import OilFilterComponent from "@/components/offer/oil_filter/OilFilterComponent";
import BodyWorkComponent from "@/components/offer/body_work/BodyWorkComponent";
import Batteries from "@/components/offer/batteries/Batteries";
import InsuranceClaim from "@/components/offer/insurance_claim/InsuranceClaim";
import CustomService from  "@/components/offer/custom_service/CustomService"
export default {
  name: "OfferComponent",
  components: {
    DiagnosticsComponent,
    EngineRepairComponent,
    WheelRepairComponent,
    OilFilterComponent,
    BodyWorkComponent,
    Batteries,
    InsuranceClaim,
    CustomService
  }
}
</script>

<style scoped lang="scss">
  .offer {
    background: $additional_4;
    padding: 128px 320px;
    &__text {
      text-align: center;
      @include title-02
    }
    & h2 {
      text-align: center;
      margin-bottom: 64px;
      @include heading-h2
    }
    &__wrapper {
      display: grid;
      justify-content: center;
      grid-template-columns: 312px 312px 312px 312px;
      gap: 5px;
    }
    &__btn {
      margin-top: 32px;
      display: flex;
      justify-content: end;
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
</style>