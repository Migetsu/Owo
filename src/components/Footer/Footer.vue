<template>
  <footer class="footer">
    <div class="container">
        <div class="footer__content">
            <div class="footer__content-block">
                <div class="footer__content-item">
                    <h2 class="footer__content-title">Курсы</h2>
                    <ul class="footer__content-list">
                        <li class="footer__content-list-li"><router-link to="/courses/web-development" class="footer__content-list-link">
                            Веб-программирование
                        </router-link></li>
                        <li class="footer__content-list-li"><router-link to="/courses/blender" class="footer__content-list-link">
                            Blender
                        </router-link></li>
                        <li class="footer__content-list-li"><router-link to="/courses/python" class="footer__content-list-link">
                            Python
                        </router-link></li>
                        <li class="footer__content-list-li"><router-link to="/courses/computers" class="footer__content-list-link">
                            Системный администратор
                        </router-link></li>
                    </ul>
                </div>
                <div class="footer__content-item">
                    <h2 class="footer__content-title">О центре OwO</h2>
                    <ul class="footer__content-list">
                        <li class="footer__content-list-li"><a href="" class="footer__content-list-link">Бесплатный открытый урок</a></li>
                        <li class="footer__content-list-li"><router-link to="contacts" class="footer__content-list-link">Контакты</router-link></li>
                        <li class="footer__content-list-li"><a href="" class="footer__content-list-link">Трудоустройство</a></li>
                        <li class="footer__content-list-li"><a href="" class="footer__content-list-link">Все бонусы</a></li>
                        <li class="footer__content-list-li"><a href="" class="footer__content-list-link">Вакансии</a></li>
                        <li class="footer__content-list-li"><a href="" class="footer__content-list-link">Офетра</a></li>
                    </ul>
                </div>
                <div class="footer__content-item">
                    <h3 class="footer__content-title">Наши адреса:</h3>
                    <div class="footer__content-links">
                        <div class="footer__content-desc">
                            <a href="https://maps.app.goo.gl/K2GEP8gM2Lr2G6hr8" class="footer__content-desc" target="blank">Адрес 1</a>
                            <a href="https://maps.app.goo.gl/NZyNkzSRZtTmSL3n6" class="footer__content-desc" target="blank">Адрес 2</a>
                            <a href="https://maps.app.goo.gl/DZmLLE6FcXPGMSME6" class="footer__content-desc" target="blank">Адрес 3</a>
                        </div>
                        <div class="footer__content-links">
                            <div class="footer__content-contact">
                                <ul>
                                    <li><a href="tel:+998332831530" title="998 33 283 15 30" class="footer__content-contact-link">
                                        <span class="icon-callphone"><fa icon="fa-phone"/></span>
                                        33 283 15 30
                                    </a></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__content-info">
        <div class="container">
            <div class="footer__content-info-block">
                <h3 class="footer__content-info-title">© OwO 2024</h3>
                <ul class="footer__content-info-list">
                    <li><a href=""><fa :icon="['fab', 'telegram']" class="footer__content-info-icon icon-telegram"/></a></li>
                    <li><a href=""><fa :icon="['fab', 'instagram']" class="footer__content-info-icon icon-instagram"/></a></li>
                    <li><a href=""><fa :icon="['fab', 'youtube']" class="footer__content-info-icon icon-youtube"/></a></li>
                </ul>
            </div>
        </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style>

</style>