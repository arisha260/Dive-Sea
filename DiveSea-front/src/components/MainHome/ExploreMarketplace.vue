<script setup>
  import MainCategory from '@/components/MainCategory.vue'
  import NftCard from '@/components/NftCard.vue'
</script>

<template>
  <section class="explore-marketplace">
    <div class="container explore-marketplace__container">
      <h1 class="main-title explore-marketplace__title">Explore Marketplace</h1>
      <MainCategory />
      <div class="explore-marketplace__nft">
        <NftCard class="explore-marketplace__card" img="/card1.png" alt="card1" title="Sun-Glass" rate="1.75"/>
        <NftCard class="explore-marketplace__card" img="/card2.png" alt="card2" title="Sun-Glass" rate="1.75"/>
        <NftCard class="explore-marketplace__card" img="/card3.png" alt="card3" title="Sun-Glass" rate="1.75"/>
        <NftCard class="explore-marketplace__card" img="/card4.png" alt="card4" title="NuEvey" rate="1.25"/>
        <NftCard class="explore-marketplace__card" img="/card5.png" alt="card5" title="NuEvey" rate="1.25"/>
        <NftCard class="explore-marketplace__card" img="/card4.png" alt="card4" title="NuEvey" rate="1.25"/>
        <NftCard class="explore-marketplace__card" img="/card5.png" alt="card5" title="NuEvey" rate="1.25"/>
        <NftCard class="explore-marketplace__card" img="/card4.png" alt="card4" title="NuEvey" rate="1.25"/>
      </div>
      <div class="explore-marketplace__explore-all explore-all">
        <span class="explore-all__text">Explore All</span>
        <svg width="17" height="17" viewBox="0 0 17 17" class="explore-all__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25293 8.35095H15.2177" stroke="currentColor" stroke-width="1.99471" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.2334 1.36646L15.2158 8.34884L8.2334 15.3312" stroke="currentColor" stroke-width="1.99471" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .explore-marketplace {
    margin-top: 100px;
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__title{
      margin-bottom: 65px;
    }
    &__categories {
      display: flex;
      align-items: center;
      gap: 22px;
    }
    &__category{
      height: auto;
      padding: 17px;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 9px;
      font-family: var(--third-family);
      font-weight: 600;
      font-size: 15px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: #1a202c;
      border: 2.21px solid #141416;
      border-radius: 13px;
      cursor: pointer;
    }
    &__nft{
      margin-top: 100px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 40px;
      row-gap: 67px;
    }
    &__card{
      grid-column: 3 span;
    }
    &__explore-all{
      margin-top: 103px;
    }
  }
</style>