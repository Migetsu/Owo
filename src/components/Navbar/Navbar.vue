<template>
  <header class="header">
    <nav class="header__nav" :class="{color: scrolled > 0}">
        <div class="container">
            <div class="header__nav-container">
                <router-link to="/" class="header__nav-logo">
                    <img src="@/assets/images/logo.svg" alt="">
                </router-link>

                <ul class="header__nav-list">
                    <li v-for="(link, idx) in links" :key="idx">
                        <router-link :to="link.url" class="header__nav-link">
                            {{ link.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const links = reactive([
    {title: 'Главная', url: '/'},
    {title: 'Курсы', url: ''},
    {title: 'Контакты', url: '/contacts'}
])

const scrolled = ref(0)

const updateScroll = () => {
    scrolled.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})
</script>

<style>

</style>