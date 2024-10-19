<template>
    <main class="main">
        <section class="contacts">
            <img src="https://raw.githubusercontent.com/M1getsu/OwoFiles/refs/heads/main/contacts-bg.webp" alt=""
                class="contacts__bg">
            <div class="container">
                <div class="contacts__content">
                    <h1 class="contacts__content-title">Контакты</h1>
                    <div class="contacts__content-box">
                        <div class="contacts__content-item">
                            <button class="contacts_button">
                                <span class="contacts_button-link">Бесплатная консультация</span>
                            </button>
                            <a href="" class="contacts_telegram">
                                <span class="contacts_telegram-icon"><img src="@/assets/images/telegram.webp" alt=""
                                        class="tg-img"></span>
                                <span class="contacts_telegram-button">Написать в telegram</span>
                            </a>
                        </div>
                        <div class="contacts__content-item">
                            <span class="call">
                                <fa :icon="['fas', 'phone']" />
                            </span>
                            <a href="" class="call-title">66 666 66 66</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="information">
            <div class="container">
                <div class="information_content">
                    <div class="information_content-title">Социальные сети</div>
                    <div class="information_content-descr">
                        <p class="contacts__socual-txt">Подписывайтесь на наши социальные сети и будьте в курсе всех
                            событий
                            центра PROWEB.</p>
                        <div class="information_content-info">
                            <ul class="information_content-info-list">
                                <li>
                                    <a href="" class="icon-instagram" target="blank">
                                        <fa :icon="['fab', 'instagram']" />
                                    </a>
                                    <a href="" class="icon-telegram" target="blank">
                                        <fa :icon="['fab', 'telegram']" />
                                    </a>
                                    <a href="" class="icon-youtube" target="blank">
                                        <fa :icon="['fab', 'youtube']" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="location">
            <div class="container">
                <div class="location__title">Наши Адреса</div>
                <div class="location__content">
                    <div class="location__content-item">
                        <div class="location__content-item-descr">
                            <p>
                                г. Ташкент, Чиланзарский район, проспект Бунёдкор, ул. Наккошлык, дом 41.
                                <br>
                                <br>
                                Ориентиры: городская таможня, сингапурский институт (MDIS), Мевазор махалля, Fabienne.
                            </p>
                        </div>
                        <div class="location__content-item-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2521.797379046512!2d69.20005517057871!3d41.266655656155564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3511f2fd%3A0x48a8167455ed944a!2z0JrQsNGE0LUgIkRJRVQiIC0g0JLQutGD0YHQvdCw0Y8g0LXQtNCwINCyINCi0LDRiNC60LXQvdGC0LU!5e0!3m2!1sru!2sus!4v1729364986145!5m2!1sru!2sus"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div class="location__content-item-map-name"><span>Чиланзар</span></div>
                        </div>
                    </div>
                    <div class="location__content-item">
                        <div class="location__content-item-descr">
                            <p>
                                г. Ташкент, Мирабадский район, улица Айбека, дом 16. Трёхэтажное здание возле дороги.
                                Приёмная на первом этаже.
                                <br>
                                <br>
                                Ориентиры: метро Айбек, офис Huawei Tech, Joy Bowling, Les Ailes
                            </p>
                        </div>
                        <div class="location__content-item-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2997.5523728452945!2d69.27177282134562!3d41.29684561312473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b442ddee7%3A0x49dc1f971760f653!2sKorzinka%20%E2%80%94%20Oybek!5e0!3m2!1sru!2sus!4v1729364564199!5m2!1sru!2sus"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div class="location__content-item-map-name"><span>Чиланзар</span></div>
                        </div>
                    </div>
                    <div class="location__content-item">
                        <div class="location__content-item-descr">
                            <p>
                                г. Ташкент, Мирабадский район, улица Айбека, дом 16. Трёхэтажное здание возле дороги.
                                Приёмная на первом этаже.
                                <br>
                                <br>
                                Ориентиры: метро Айбек, офис Huawei Tech, Joy Bowling, Les Ailes
                            </p>
                        </div>
                        <div class="location__content-item-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2119.544512779723!2d69.27207490985525!3d41.29823335457916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8adb1b5ad333%3A0xe3d72e38a99a023b!2sLes%20Ailes!5e0!3m2!1sru!2sus!4v1729364602998!5m2!1sru!2sus"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div class="location__content-item-map-name"><span>Чиланзар</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer/Footer.vue'
</script>

<style lang="scss">
.tg-img {
    width: 25px;
}

.contacts {
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

        &-title {
            color: #fff;
            font-size: 50px;
            font-weight: 700;
        }

        &-item {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            gap: 20px;
            width: 100%;
        }
    }
}

.contacts_button {
    background: transparent;
    padding: 7px 4.93px;
    border: 1px solid white;
    transition: .6s;

    &:hover {
        background: white;
    }

    &:hover .contacts_button-link {
        color: black;
    }

    &-link {
        font-size: 20px;
        color: #fff;
    }
}

.contacts_telegram {
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .6s;

    &:hover {
        background: white;
    }

    &:hover .contacts_telegram-button {
        color: black;
    }

    &-icon {
        background: white;
        padding: 4.5px 5px;
        // font-size: 30px;
    }

    &-button {
        padding: 4.5px 15px;
        font-size: 20px;
        color: #fff;
    }
}

.call {
    color: #fff;
    font-size: 25px;
}

.call-title {
    color: #fff;
    font-size: 25px;
}

.information {
    height: 30vh;
    display: flex;
    align-items: center;

    &_content {
        display: flex;
        justify-content: space-between;

        &-descr {
            width: 65%;
            line-height: 40px;
            color: #fff;
            font-size: 25px;
        }

        &-title {
            width: 35%;
            color: #fff;
            font-size: 50px;
            font-weight: 700;
            text-transform: uppercase;
        }

        &-info {
            &-list li {
                display: flex;
                gap: 60px;
                margin-top: 20px;
                color: #fff;

                & .icon-instagram {
                    color: #c1c1c1;
                }

                & .icon-telegram {
                    color: #c1c1c1;
                }

                & .icon-youtube {
                    color: #c1c1c1;
                }
            }
        }
    }
}

.location {
    padding: 50px 0;
    max-width: 1920px;
    margin: 0 auto;

    &__title {
        color: #fff;
        font-size: 40px;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 20px;
    }

    &__content {
        &-item {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            &-descr {
                border-left: 1px solid white;

                & p {
                    color: #fff;
                    font-size: 30px;
                    padding-left: 25px;
                }
            }

            &-map {
                width: 40%;
                display: flex;

                &-name {
                    width: 10%;
                    min-height: 100%;
                    background: #646464;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    & span {
                        display: flex;
                        color: #fff;
                        transform: rotate(270deg);
                        font-size: 25px;
                        font-weight: 700;
                    }
                }
            }
        }
    }
}
</style>