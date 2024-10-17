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

let numOfImg = reactive(0)
let numberOfIcon = reactive(1)
let numOfText = reactive(1)
let info = reactive([
    { title_1: '0 лет', title_2: 'Обучаем IT', text: `С 2010 года мы даем возможность освоить профессию в сфере Digital и IT. На сегодняшний день мы обучили и выпустили более 16 000 студентов по 4 направлениям.`, img: 'https://raw.githubusercontent.com/Migetsu/OwoFiles/7251521487f37de971970add1b764617f3a9cea2/advantages_img-1.svg?token=A6HD52F6XMO6JYOE2RUAOF3HCGAMQ' },
    { title_1: '1 курс -', title_2: '1 профессия', text: 'Среди множества IT-курсов именно наши программы обучения адаптированы под реальные требования рынка. Таким образом каждый из вас сможет стать полноценным начинающим специалистом и обладать навыками, которые необходимы для успешного трудоустройства.', img: 'https://raw.githubusercontent.com/Migetsu/OwoFiles/7251521487f37de971970add1b764617f3a9cea2/advantages_img-2.svg?token=A6HD52HTBLY6OGJ465W6AR3HCGARS'},
    { title_1: 'Практический', title_2: 'Курс', text: 'Чтобы полноценно освоить профессию, программы наших курсов содержат в себе не только актуальную теорию, но и 80% практики. Все занятия будут проходить в полностью оборудованном кабинете с современной техникой.', img: 'https://raw.githubusercontent.com/Migetsu/OwoFiles/7251521487f37de971970add1b764617f3a9cea2/advantages_img-3.svg?token=A6HD52FRA4V33GMTRS5SALTHCGASG' },
    { title_1: 'Помощь', title_2: 'Наставника', text: 'Наставник - это практикующий специалист в своей сфере, который будет сопровождать вас на протяжении всего обучения. Вы сможете обратиться к нему по любому возникшему вопросу, касаемого курса, как на очной встрече в дни обучения, так и в закрытой Telegram-группе в будние дни.', img: 'https://raw.githubusercontent.com/Migetsu/OwoFiles/7251521487f37de971970add1b764617f3a9cea2/advantages_img-4.svg?token=A6HD52A7CKMB7RHG56VH5B3HCGATI' },
    { title_1: 'Карьерный', title_2: 'Центр', text: 'Карьерный центр помогает нашим выпускникам в трудоустройстве. По окончанию курса вы получите доступ к Telegram-каналу с вакансиями и дополнительным материалом. Также наш HR-отдел поможет вам с составлением резюме и портфолио.', img: 'https://raw.githubusercontent.com/Migetsu/OwoFiles/7251521487f37de971970add1b764617f3a9cea2/advantages_img-5.svg?token=A6HD52CKNWIST733KXKG2D3HCGAUA' }
])
</script>

<style></style>