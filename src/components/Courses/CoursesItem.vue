<template>
    <router-link to="/" class="courses__content-title">
        <span>Курсы</span>
        <fa icon="chevron-right" class="courses__content-arrow" />
    </router-link>
    <Swiper :modules="modules" :space-between="25" navigation :breakpoints="swiperOptions.breakpoints">
        <SwiperSlide class="courses__content-item" v-for="(link, idx) in links" :key="idx">
            <router-link :to="link.url" class="courses__content-item-link">
                <img v-lazy="link.img" alt="" class="courses__content-item-img">
                <p class="courses__content-item-desc">
                    <span class="courses__content-item-title">{{ link.title }}</span>
                    <span class="courses__content-item-descr">{{ link.descr }}</span>
                </p>
            </router-link>
        </SwiperSlide>
        <!-- <SwiperSlide>
            <router-link to="/" class="courses__content-info">Все курсы</router-link>
        </SwiperSlide> -->
    </Swiper>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
// import { useIndexStore } from '@/store/indexStore.js'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperOptions = reactive({
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 1
        },
        900: {
            slidesPerView: 1.4
        },
        1200: {
            slidesPerView: 1.8
        },
        1450: {
            slidesPerView: 2.2
        }
    }
})
const modules = reactive([Navigation])

const links = reactive([
    { title: 'Веб-Программирование', url: '/courses/web-development', descr: 'Создание сайтов и веб-приложений', img: 'https://raw.githubusercontent.com/M1getsu/OwoFiles/refs/heads/main/courses_img-1.webp' },
    { title: 'Blender', url: '/courses/blender', descr: 'Основы 3D графики. Полное погружение в 3D визуализацию и анимацию', img: 'https://raw.githubusercontent.com/M1getsu/OwoFiles/refs/heads/main/courses_img-2.webp' },
    { title: 'Python', url: '/courses/python', descr: 'Создание интернет магазинов, веб-приложений и Telegram ботов', img: 'https://raw.githubusercontent.com/M1getsu/OwoFiles/refs/heads/main/courses_img-3.webp' },
    { title: 'Системный Администратор', url: '/courses/computers', descr: 'Начальный этап подготовки IT-специалистов и системных администраторов', img: 'https://raw.githubusercontent.com/M1getsu/OwoFiles/refs/heads/main/courses_img-4.webp' }
])
</script>

<style></style>