<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <RouterLink :to="{ name: 'home' }"><img src="/logo-header.png" alt="Header logo" class="header__logo" width="53" height="53" /></RouterLink>
      <nav class="nav">
        <ul class="list-reset nav__list">
          <li class="nav__item"><RouterLink :to="{ name: 'discover' }" class="nav__link">Discover</RouterLink></li>
          <li class="nav__item"><RouterLink :to="{ name: 'creators' }" class="nav__link">creators</RouterLink></li>
          <li class="nav__item"><RouterLink :to="{ name: 'sell' }" class="nav__link">Sell</RouterLink></li>
          <li class="nav__item"><RouterLink :to="{ name: 'stats' }" class="nav__link">stats</RouterLink></li>
        </ul>
      </nav>
      <div class="header__search">
        <img src="/header-search.png" alt="Лупа" width="21" height="21">
        <input type="text" class="header__search-input input-reset" placeholder="Search Art Work / Creator">
      </div>
      <a href="#" class="header__connect main-button">Connect Wallet</a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header{
    padding-top: 45px;
    &__container {
      display: flex;
      align-items: center;
    }
    &__search{
      margin-left: auto;
      max-width: 348px;
      padding-left: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      border-radius: 14px;
      background-color: #ededed;
      img{
        margin-right: 25px;
        user-select: none;
        pointer-events: none;
        -webkit-user-drag: none;
        user-drag: none;
      }
    }
    &__search-input{
      padding: 18px 80px 18px 0;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 15px;
      line-height: 117%;
      letter-spacing: -0.02em;
      background-color: #ededed;
      border-radius: 14px;
      outline: none;
      &::placeholder {
        color: #c2c3cb;
      }
    }
    &__connect{
      margin-left: 30px;
      padding: 16px 24px;
      max-width: 200px;
    }
  }

  .nav{
    margin-left: 60px;
    &__list{
      gap: 53px;
    }
    &__link{
      text-transform: uppercase;
      color: #606060;
      transition: color .2s ease;
      &:focus{
        outline: none;
      }
      &:hover{
        color: #000;
      }
      &:active{
        color: #353535;
      }
    }
  }
</style>
