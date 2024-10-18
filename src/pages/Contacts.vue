<template>
    <main class="contacts">
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
                            <span class="contacts_telegram-icon"><fa :icon="['fab', 'telegram-plane']"/></span>
                            <span class="contacts_telegram-button">Написать в telegram</span>
                        </a>
                    </div>
                    <div class="contacts__content-item">
                        <span class="call">
                            <fa :icon="['fas', 'phone-alt']" />
                        </span>
                        <a href="" class="call-title">66 666 66 66</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss">
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
        text-align: center;

        &-title {
            color: #fff;
            font-size: 50px;
            font-weight: 700;
        }

        &-item {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 30px;
            gap: 20px;
        }
    }
}

.contacts_button {
    background: transparent;
    
    &-link {
        padding: 10px 20px;
        border: 1px solid white;
    }
}

.contacts_telegram {
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    &-icon {
        background: white;
        padding: 10px 20px;
    }

    &-button {
        // margin-left: 65px;
        padding: 10px 20px;
        // background: #fff;
    }
}
</style>