<template>
    <header class="header">
        <nav class="header__nav" :class="{ color: scrolled > 0 }">
            <!-- <div class="container"> -->
                <div class="header__nav-container">
                    <!-- <router-link to="/" class="header__nav-logo">
                        <img src="@/assets/images/logo.svg" alt="">
                    </router-link> -->

                    <!-- <ul class="header__nav-list">
                    <li v-for="(link, idx) in links" :key="idx">
                        <router-link :to="link.url" class="header__nav-link">
                            {{ link.title }}
                        </router-link>
                    </li>
                </ul> -->

                <el-menu 
                    :default-active="activeIndex" 
                    router="true" 
                    class="el-menu-demo header__nav-list" 
                    mode="horizontal"  
                    :ellipsis="false" 
                    @select="handleSelect" 
                    background-color="transparent"
                    text-color="rgba(255, 255, 255, 0.6)" 
                    active-text-color="#fff"
                    >
                        
                        <el-menu-item class="header__nav-logo" index="/">
                            <img src="@/assets/images/logo.svg" alt="OwO logo"/>
                            <span header__nav-logo-name>OwO</span>
                        </el-menu-item>
                        <!-- <el-menu-item class="header__nav-logo" index="/">
                            <span>OwO</span>
                        </el-menu-item> -->
                    </el-menu>

                    <el-menu 
                    :default-active="activeIndex" 
                    router="true" 
                    class="el-menu-demo header__nav-list" 
                    mode="horizontal"  
                    :ellipsis="false" 
                    @select="handleSelect" 
                    background-color="transparent"
                    text-color="rgba(255, 255, 255, 0.6)" 
                    active-text-color="#fff"
                    >
                        <el-menu-item class="header__nav-link" index="/">Главная</el-menu-item>
                        <el-sub-menu class="header__nav-sublist" index="">
                            <template #title><span class="header__nav-link">Курсы</span></template>
                            <el-menu-item class="header__nav-link" index="/courses/web-development">Веб-программирование</el-menu-item>
                            <el-menu-item class="header__nav-link" index="/courses/blender">Blender</el-menu-item>
                            <el-menu-item class="header__nav-link" index="/courses/python">Python</el-menu-item>
                            <el-menu-item class="header__nav-link" index="/courses/computers">Системный администратор</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item  class="header__nav-link" index="/contacts">Контакты</el-menu-item>
                    </el-menu>
                </div>
            <!-- </div> -->
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

const updateScroll = () => {
    scrolled.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})
</script>

<style>
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

.el-popper.is-light, .el-popper.is-light>.el-popper__arrow:before {
    background: black !important;
    border-color: transparent !important;
}
</style>