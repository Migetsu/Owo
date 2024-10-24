<template>
    <header class="header">
        <nav class="header__nav" :class="{ color: scrolled > 0 }">
            <div class="container">
            <div class="header__nav-container">

                <el-menu :default-active="activeIndex" router="true" class="el-menu-demo header__nav-logo"
                    :class="{ active: burger }" mode="horizontal" :ellipsis="false" @select="handleSelect"
                    background-color="transparent" text-color="rgba(255, 255, 255, 0.6)" active-text-color="#fff">

                    <el-menu-item class="header__nav-logo" index="/">
                        <img src="@/assets/images/logo.svg" alt="OwO logo" />
                        <span header__nav-logo-name>OwO</span>
                    </el-menu-item>
                </el-menu>

                <div class="header__nav-btn" @click="burger = !burger" :class="{ active: burger }">
                    <span></span>
                </div>

                <ul class="header__nav-list" :class="{ active: burger }">
                    <li v-for="(link, idx) in links" :key="idx" @click="idx == 1 ? '' : burger = false">
                        <router-link :to="link.url" class="header__nav-link" :class="{ dropdown: idx == 1 }">
                            {{ link.title }}
                            <svg v-if="idx == 1" class="header__nav-link-arrow" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                                </path>
                            </svg>
                            <ul v-if="idx == 1" class="header__nav-courses">
                                <li><router-link @click="burger = false" class="dropdown__link" to="/courses/web-development">Веб-программирование</router-link></li>
                                <li><router-link @click="burger = false" class="dropdown__link" to="/courses/blender">Blender</router-link></li>
                                <li><router-link @click="burger = false" class="dropdown__link" to="/courses/python">Python</router-link></li>
                                <li><router-link @click="burger = false" class="dropdown__link" to="/courses/computers">Системный Администратор</router-link></li>
                            </ul>
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
    { title: 'Главная', url: '/' },
    { title: 'Курсы', url: '' },
    { title: 'Контакты', url: '/contacts' },
    // {title: 'Трудоустройство', url: '/employment'},
])

const scrolled = ref(0)
const burger = ref(false)

const updateScroll = () => {
    scrolled.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})
</script>

<style lang="scss">
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none !important;
}

.el-menu--horizontal>.el-menu-item {
    border-bottom: none !important;
}

.el-menu--horizontal>.el-menu-item {
    border-bottom: none !important;
}

.el-menu--horizontal.el-menu {
    border-bottom: none !important;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background: transparent !important;
}

.el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
    background: transparent !important;
    border-bottom: none !important;
}

.el-popper.is-light,
.el-popper.is-light>.el-popper__arrow:before {
    background: black !important;
    border-color: transparent !important;
}
</style>