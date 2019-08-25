import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enUsJson from '@/json/en_US.json'
import laPgJson from '@/json/la_PG.json'

Vue.use(VueI18n);

const messages = {
    'en': enUsJson,
    'es': laPgJson
};

export default new VueI18n({
    locale: 'en', // default
    fallbackLocale: 'es',
    messages,
});