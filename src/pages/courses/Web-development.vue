<template>
    <main class="main">
        <section class="webdev">
            <img src="https://raw.githubusercontent.com/M1getsu/OwoFiles/refs/heads/main/courses_img-1.webp" alt=""
                class="webdev__bg">
            <div class="container">
                <div class="webdev__content">
                    <h1 class="webdev__title">Веб Программирование</h1>
                    <p class="webdev__descr">Создание интерактивных сайтов и веб-приложений</p>
                    <span class="webdev__btn">Бесплатная консультация</span>
                </div>
            </div>
        </section>
        <section class="info">
            <div class="info__content">
                <div class="info__content-item">
                    <h3 class="info__content-item-title">Длительность курса:</h3>
                    <h3 class="info__content-item-text">10 месяцев</h3>
                </div>
                <div class="info__content-item">
                    <h3 class="info__content-item-title">Количество уроков:</h3>
                    <h3 class="info__content-item-text">80 уроков</h3>
                </div>
                <div class="info__content-item">
                    <h3 class="info__content-item-title">Форматы обучения:</h3>
                    <h3 class="info__content-item-text">Очно / онлайн</h3>
                </div>
                <div class="info__content-item">
                    <h3 class="info__content-item-title">Длительность урока:</h3>
                    <h3 class="info__content-item-text">90 минут</h3>
                </div>
            </div>
        </section>
        <section class="moreInfo">
                <h3 class="moreInfo__title">Подробнее о курсе</h3>
                <p class="moreInfo__descr">На курсе ВЕБ ПРОГРАММИРОВАНИЕ вы изучите основные языки программирования, научитесь создавать современные сайты, познакомитесь с инструментами, которые используют успешные веб-разработчики. <br> <br> Всего за 80 уроков (10 месяцев) вы освоите все необходимые навыки для полноценной профессии.</p>
        </section>
        <section class="programm">
            <h2 class="programm__title">Программа Курса</h2>

            <div class="programm__tab">
                <div 
                class="programm__tab-item"
                v-for="item in tabItems"
                :key="item.id"
                :class="{ activeS: activeItem === item.id}"
                @click="setActive(item.id)"
                >{{ item.text }}</div>
            </div>

            <h3 class="programm__subtitle" v-if="activeItem == 1">1 месяц</h3>
            <p class="programm__descr" v-if="activeItem == 1">Основы верстки сайтов - HTML, CSS, Figma.</p>
            <h3 class="programm__subtitle" v-if="activeItem == 2">2-3 месяц</h3>
            <p class="programm__descr" v-if="activeItem == 2">Система контроля версиями Git и методология БЭМ</p>
            <h3 class="programm__subtitle" v-if="activeItem == 3">4-5 месяц</h3>
            <p class="programm__descr" v-if="activeItem == 3">Основы JavaScript.
                Взаимодействие с пользователем.</p>
            <h3 class="programm__subtitle" v-if="activeItem == 4">6-10 месяц</h3>
            <p class="programm__descr" v-if="activeItem == 4">Введение и основы библиотеки Vue.</p>

            <div class="demo-collapse programm__dropdown" v-if="activeItem == 1">
                <el-collapse class="programm__dropdown-content" v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="HTML" name="1">
                        <div class="programm__dropdown-text">
                            HTML - это стандартизированный язык разметки документов для просмотра веб-страниц в браузере. Мы будем изучать его, чтобы уметь размещать на веб-странице элементы: текст, картинки, таблицы и видео.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Css" name="2">
                        <div class="programm__dropdown-text">
                            (Cascading Style Sheets) - это код, который вы используете для стилизации вашей веб-страницы. Другими словами, формируете вид страницы: цвет фона и декоративных элементов, размер и стиль шрифтов.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Figma" name="3">
                        <div class="programm__dropdown-text">
                            Figma - это графический онлайн-редактор для создания макетов сайтов и приложений.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            С помощью Figma дизайнер создает внешний вид сайта. Знание этого инструмента крайне необходимо разработчику, чтобы работать в команде с дизайнером и кодить сайт.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="demo-collapse programm__dropdown" v-if="activeItem == 2">
                <el-collapse class="programm__dropdown-content" v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="БЭМ" name="1">
                        <div class="programm__dropdown-text">
                            Методология, созданная для разработки сайтов, которые необходимо делать быстро, а поддерживать долгие годы. Расшифровывается как «Блок, Элемент, Модификатор»
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Она позволяет создавать расширяемые и повторно используемые компоненты интерфейса.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Git" name="2">
                        <div class="programm__dropdown-text">
                            Git - это распределённая система управления версиями проекта. Она позволяет хранить их и оперативно возвращаться в любое сохранённое состояние.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Это помогает разработчикам справлять ситуации, когда при написании кода что-то сломалось и испортилось.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="GitHub" name="3">
                        <div class="programm__dropdown-text">
                            Github - крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Веб-сервис основан на системе контроля версий Git.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Здесь разработчики могут изучать проекты с примерами кода других людей, размещать свое портфолио и скачивать полезные в разработке инструменты.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="demo-collapse programm__dropdown" v-if="activeItem == 3">
                <el-collapse class="programm__dropdown-content" v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="JavaScript" name="1">
                        <div class="programm__dropdown-text">
                            JavaScript - это мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Front-end разработчики используют его для управления элементами сайта — создание анимаций, всплывающих форм и загрузка эффектов. И все это без перезагрузки страницы.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="demo-collapse programm__dropdown" v-if="activeItem == 4">
                <el-collapse class="programm__dropdown-content" v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="Vue" name="1">
                        <div class="programm__dropdown-text">
                            Vue - это декларативная, эффективная и гибкая JavaScript-библиотека для создания пользовательских интерфейсов.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Она позволяет вам собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами».
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="TypeScript" name="2">
                        <div class="programm__dropdown-text">
                            TypeScript - это язык программирования для веб-разработки, основанный на JavaScript.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Он делает код понятнее и надежнее, добавляет статическую типизацию, а также может быть скомпилирован в JavaScript.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="SASS" name="3">
                        <div class="programm__dropdown-text">
                            SASS - это препроцессор CSS, продвинутый тип написания CSS. Он имеет свой синтаксис, из которого генерирует CSS-код, понятный любому браузеру.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Его используют для упрощения кода CSS-кода, расширения функциональности и избегания частого повторения одинаковых фрагментов кода.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Api" name="3">
                        <div class="programm__dropdown-text">
                            (Application Programming Interface) - это набор правил, определений и инструментов, которые позволяют различным программам взаимодействовать друг с другом.
                        </div>
                        <br>
                        <div class="programm__dropdown-text">
                            Он обеспечивает способ обмена информацией между различными приложениями, службами или компонентами программного обеспечения.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </section>
        <Form/>
        <Advantages/>
        <Comfortable/>
        <Footer/>
    </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import Form from '@/components/Form/Form.vue'
import Footer from '@/components/Footer/Footer.vue'
import Advantages from '@/components/Advantages/Advantages.vue'
import Comfortable from '@/components/Comfortable/Comfortable.vue'

const activeItem = ref(1);
const setActive = (id) => {
      activeItem.value = id;
    };

const tabItems = reactive([
    {id: 1, text: 'Модуль №1'},
    {id: 2, text: 'Модуль №2'},
    {id: 3, text: 'Модуль №3-4'},
    {id: 4, text: 'Модуль №5'},
])
</script>

<style lang="scss">
.moreInfo {
    padding: 50px 185px;
    display: flex;
    // justify-content: center;
    gap: 300px;

    &__title {
        font-size: 45px;
        font-weight: 700;
        color: #fff;
        // margin-right: 150px;
    }

    &__descr {
        font-size: 30px;
        color: #fff;
    }
}

.activeS {
    background: blue !important;
    color: #fff !important;
}

.programm {
    padding: 50px 185px;

    &__subtitle {
        color: #8b8b8b;
        font-size: 25px;
    }

    &__descr {
        color: #fff;
        margin-top: 5px;
        margin-bottom: 50px;
        font-size: 25px;
    }

    &__tab {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        gap: 10px;

        &-item {
            color: black;
            background: #fff;
            font-size: 20px;
            padding: 10px 25px;
            cursor: pointer;
            transition: .4s;
        }
    }

    &__title {
        display: flex;
        justify-content: center;
        color: #fff;
        font-size: 40px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    &__dropdown {
    background: transparent;

    &-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &-text {
        color: #fff;
        font-size: 20px;
        background: transparent;
    }
}
}

.el-collapse-item__content {
    background: transparent;
}

.el-collapse {
    border-top: none;
}

.el-collapse-item__header {
    background: transparent;
    color: #fff;
    font-size: 25px;
    border-bottom: 1px solid grey;
}

.el-collapse-item__wrap {
    background: transparent;
}

el-collapse-item {
    background: transparent;
}

.el-collapse-item__arrow {
    margin: 0 0 0 10px;
}

.info {
    height: 30vh;
    padding: 10vh 0 10vh 0;
    // display: flex;
    // justify-content: center;

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 185px;

        &-item {
            &-title {
                color: #fff;
                font-size: 30px;
                margin-bottom: 10px;
            }

            &-text {
                color: #fff;
                font-size: 30px;
                font-weight: 700;
            }
        }
    }
}

.webdev {
    position: relative;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -10;
        filter: brightness(30%);
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    &__title {
        color: #fff;
        font-size: 40px;
        font-weight: 700;
        text-transform: uppercase;
    }

    &__descr {
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
    }

    &__btn {
        color: #fff;
        border: 1px solid white;
        padding: 10px 35px;
        transition: .4s;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 20px;

        &:hover {
            background: #fff;
            color: black;
        }
    }
}
</style>