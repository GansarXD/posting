import ja from "@/lib/i18n/ja";
import en from "@/lib/i18n/en";
import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

const messages = {
  ja,
  en
};

const i18n = new VueI18n({
  locale: ja,
  fallbackLocale: en,
  messages
});

export default i18n;
