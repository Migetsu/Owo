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
        <section class="programm">
            <h2 class="programm__title">Программа Курса</h2>

            <div class="programm__tab">
                <div 
                class="programm__tab-item"
                v-for="item in tabItems"
                :key="item.id"
                :class="{ active: activeItem === item.id}"
                @click="setActive(item.id)"
                >{{ item.text }}</div>
                <!-- <div class="programm__tab-item">Модуль №2</div>
                <div class="programm__tab-item">Модуль №3-4</div>
                <div class="programm__tab-item">Модуль №5</div> -->
            </div>

            <div class="demo-collapse programm__dropdown">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="HTML" name="1">
                        <div class="programm__dropdown-text">
                            Consistent with real life: in line with the process and logic of real
                            life, and comply with languages and habits that the users are used to;
                        </div>
                        <div class="programm__dropdown-text">
                            Consistent within interface: all elements should be consistent, such
                            as: design style, icons and texts, position of elements, etc.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Css" name="2">
                        <div class="programm__dropdown-text">
                            Operation feedback: enable the users to clearly perceive their
                            operations by style updates and interactive effects;
                        </div>
                        <div class="programm__dropdown-text">
                            Visual feedback: reflect current state by updating or rearranging
                            elements of the page.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Figma" name="3">
                        <div class="programm__dropdown-text">
                            Simplify the process: keep operating process simple and intuitive;
                        </div>
                        <div class="programm__dropdown-text">
                            Definite and clear: enunciate your intentions clearly so that the
                            users can quickly understand and make decisions;
                        </div>
                        <div class="programm__dropdown-text">
                            Easy to identify: the interface should be straightforward, which helps
                            the users to identify and frees them from memorizing and recalling.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const activeItem = ref(null);
const setActive = (id) => {
      activeItem.value = id;
    };

const tabItems = reactive([
    {id: 1, text: 'Модуль №1'},
    {id: 2, text: 'Модуль №2'},
    {id: 3, text: 'Модуль №3-4'},
    {id: 4, text: 'Модуль №5'},
])

// const tabClick = (event) => {
//     event.target.classList.add('active')
// }
</script>

<style lang="scss">
.active {
    background: blue !important;
    color: #fff;
}

.programm {
    padding: 50px 185px;

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