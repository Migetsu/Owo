<!-- <template>
        <router-link 
        :to="link.url"
        class="courses__content-item"
        v-for="(link, idx) in links"
        :key="idx"
        >
            <div class="courses__content-item_box">
                <picture class="courses__content-item_box-img">
                    <img :src="link.img" alt="">
                </picture>
                <p class="courses__content-item-desc">
                    <span class="courses__content-item_title">{{ link.title }}</span>
                    <span class="courses__content-item_descr">{{ link.descr }}</span>
                </p>
            </div>
        </router-link>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const links = reactive([
    {title: 'Веб-Программирование', url: '/courses/web-development', descr: 'Создание сайтов и веб-приложений', img: 'https://2.downloader.disk.yandex.ru/preview/ea526674c4e26eabef2a2008546cfdbe9391debd439769a688cfb1a9ccd0df5b/inf/n50eeBIBPemaVBC635p_koTbzv6w9weEUjRJwzlxNAnNpSFkDRBy_0Q3B0IlfBydCb0FdwR2wE8jjdInlNWvRQ%3D%3D?uid=1455971601&filename=courses_img-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920'},
    {title: 'Blender', url: '/courses/blender', descr: 'Основы 3D графики. Полное погружение в 3D визуализацию и анимацию', img: 'https://3.downloader.disk.yandex.ru/preview/57fb3a96604c741a15d7369ea2230d1d506187180e61994e1df17b8ace0538d9/inf/rvZp1foLk9sBzHItu2G3TbcV1wGoiRx4jQb3J7qmQq2i9RRMUS0ac7ypUyWRsLuY5FzltXrjqcNYCAPbFhT2Pw%3D%3D?uid=1455971601&filename=courses_img-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920'},
    {title: 'Python', url: '/courses/python', descr: 'Создание интернет магазинов, веб-приложений и Telegram ботов', img: 'https://3.downloader.disk.yandex.ru/preview/e909859e82e99ffb2848ceff9790baa5aeebb85dcc77f1975b42d1555899450b/inf/alFX0DJ2n60WSIRgu_76doCEc_wNO4eRqmpUMnXCGQR9ZUOMoWyAS8RV4eGM7zJxYarqXlzY--zl5tDNp77uNQ%3D%3D?uid=1455971601&filename=courses_img-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920'},
    {title: 'Системный Администратор', url: '/courses/computers', descr: 'Начальный этап подготовки IT-специалистов и системных администраторов', img: 'https://2.downloader.disk.yandex.ru/preview/93a58cc3220a5a17436a024fb7a5c360dadd8d0b46b7a4eb9ab0713bf77e4065/inf/1GB83kK0TqlwIpg4vE5M5ThQYJFVChXKBqrpCZ_6t3LNqnMcRCBZmvwKsvug1S18RFqod-3RGnQmd_pE1fbF2Q%3D%3D?uid=1455971601&filename=courses_img-4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920'}
])
</script>

<style></style> -->

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
    { title: 'Веб-Программирование', url: '/courses/web-development', descr: 'Создание сайтов и веб-приложений', img: 'https://2.downloader.disk.yandex.ru/preview/ea526674c4e26eabef2a2008546cfdbe9391debd439769a688cfb1a9ccd0df5b/inf/n50eeBIBPemaVBC635p_koTbzv6w9weEUjRJwzlxNAnNpSFkDRBy_0Q3B0IlfBydCb0FdwR2wE8jjdInlNWvRQ%3D%3D?uid=1455971601&filename=courses_img-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920' },
    { title: 'Blender', url: '/courses/blender', descr: 'Основы 3D графики. Полное погружение в 3D визуализацию и анимацию', img: 'https://3.downloader.disk.yandex.ru/preview/57fb3a96604c741a15d7369ea2230d1d506187180e61994e1df17b8ace0538d9/inf/rvZp1foLk9sBzHItu2G3TbcV1wGoiRx4jQb3J7qmQq2i9RRMUS0ac7ypUyWRsLuY5FzltXrjqcNYCAPbFhT2Pw%3D%3D?uid=1455971601&filename=courses_img-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920' },
    { title: 'Python', url: '/courses/python', descr: 'Создание интернет магазинов, веб-приложений и Telegram ботов', img: 'https://3.downloader.disk.yandex.ru/preview/e909859e82e99ffb2848ceff9790baa5aeebb85dcc77f1975b42d1555899450b/inf/alFX0DJ2n60WSIRgu_76doCEc_wNO4eRqmpUMnXCGQR9ZUOMoWyAS8RV4eGM7zJxYarqXlzY--zl5tDNp77uNQ%3D%3D?uid=1455971601&filename=courses_img-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920' },
    { title: 'Системный Администратор', url: '/courses/computers', descr: 'Начальный этап подготовки IT-специалистов и системных администраторов', img: 'https://2.downloader.disk.yandex.ru/preview/93a58cc3220a5a17436a024fb7a5c360dadd8d0b46b7a4eb9ab0713bf77e4065/inf/1GB83kK0TqlwIpg4vE5M5ThQYJFVChXKBqrpCZ_6t3LNqnMcRCBZmvwKsvug1S18RFqod-3RGnQmd_pE1fbF2Q%3D%3D?uid=1455971601&filename=courses_img-4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920' }
])
</script>

<style></style>