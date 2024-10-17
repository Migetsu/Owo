<template>
    <div class="advantages__content-item" v-for="(inf, idx) in info" :key="idx">
        <div class="advantages__content-item-title">
            <div class="advantages-textbox">
                <h3>{{ inf.title_1 }}</h3>
                <h3>{{ inf.title_2 }}</h3>
            </div>
            <span class="advantages__content-item-icon" :class="`icon_${numberOfIcon++}`">
                <img :src="inf.img" alt="" id="advantages-icon_">
            </span>
        </div>
        <p class="advantages__content-item-text" :class="`advantages__text-${numOfText++}`">{{ inf.text }}</p>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

var numberOfIcon = reactive(1)
var numOfText = reactive(1)
var info = reactive([
    { title_1: '0 лет', title_2: 'Обучаем IT', img: 'https://3.downloader.disk.yandex.ru/preview/4bb4ada7e2a89ca2f14143e68d5a1b7e81c9fad1b0c5c8c3acc1923528a55713/inf/dNTaFzdjLAonwdBkbbrdMUayuphZBjjQQLxFNX-LJ3E15_XuMF2AL5R1yrP7awifM3nW4GsRdQtFM2DF57Leaw%3D%3D?uid=1455971601&filename=arrow.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920', text: `С 2010 года мы даем возможность освоить профессию в сфере Digital и IT. На сегодняшний день мы обучили и выпустили более 16 000 студентов по 4 направлениям.` },
    { title_1: '1 курс -', title_2: '1 профессия', img: 'https://3.downloader.disk.yandex.ru/preview/abaec995b41d97ca40c8a273006b3dc0e49c9cade8453d6bf1b92b9680aced4b/inf/oIU-JtSGy4JFZz7R69MDRAHT-IzSoW41wSAdHWj3gdevA38EG2-QF4tHri0EzQosLvLNFRMAETOSGdsQ7hic9g%3D%3D?uid=1455971601&filename=star.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920', text: 'Среди множества IT-курсов именно наши программы обучения адаптированы под реальные требования рынка. Таким образом каждый из вас сможет стать полноценным начинающим специалистом и обладать навыками, которые необходимы для успешного трудоустройства.' },
    { title_1: 'Практический', title_2: 'Курс', img: 'https://3.downloader.disk.yandex.ru/preview/1b4c0f7ce04c36009207891d1a2a241ff0a54e03a38d6c7cec623948d0ba3177/inf/htNClO-ndP4ptszayLjB9kayuphZBjjQQLxFNX-LJ3E1b13gCnqhQ8K-FsCMd9NEP6Ty2Somd9Q7PlZPJdGR8Q%3D%3D?uid=1455971601&filename=almost_triangle.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920', text: 'Чтобы полноценно освоить профессию, программы наших курсов содержат в себе не только актуальную теорию, но и 80% практики. Все занятия будут проходить в полностью оборудованном кабинете с современной техникой.' },
    { title_1: 'Помощь', title_2: 'Наставника', img: 'https://2.downloader.disk.yandex.ru/preview/5d828c126ccdd6b7f2d9089b98a55d2a75ab842c8f1d717f0a91330404138c61/inf/IzaW_pOlzjIJlXWJHilTrEayuphZBjjQQLxFNX-LJ3HR3TpwDPRBptHXpM_E4P9Jbv6P9C_rZ9lOwWrs9ioofg%3D%3D?uid=1455971601&filename=circles.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920', text: 'Наставник - это практикующий специалист в своей сфере, который будет сопровождать вас на протяжении всего обучения. Вы сможете обратиться к нему по любому возникшему вопросу, касаемого курса, как на очной встрече в дни обучения, так и в закрытой Telegram-группе в будние дни.' },
    { title_1: 'Карьерный', title_2: 'Центр', img: 'https://4.downloader.disk.yandex.ru/preview/1218a081c3820047bcac832f4c2d0e536e10d35b9341875e58c658a27c2951f6/inf/1WrUSMCNijXU8fliQ0CyQwHT-IzSoW41wSAdHWj3gddg-LeRNmoO6qVMLE25-PBaTX7Gmj26wvYVI1jCcuHRHw%3D%3D?uid=1455971601&filename=square.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1455971601&tknv=v2&size=1912x920', text: 'Карьерный центр помогает нашим выпускникам в трудоустройстве. По окончанию курса вы получите доступ к Telegram-каналу с вакансиями и дополнительным материалом. Также наш HR-отдел поможет вам с составлением резюме и портфолио.' }
])
</script>

<style></style>