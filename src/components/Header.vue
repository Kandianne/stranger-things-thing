<template>
  <div class="header">
    <div class="site-name">{{ $t('heading') }}</div>
    <div>
      <button 
        v-for="entry in languages" 
        :key="entry.title" 
        @click="changeLocale(entry.language); selected = entry.language" 
        :class="{active:entry.language == selected}"
        title="Choose preferred language">
        <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}    
      </button>
    </div>
  </div>
</template>

<script>
import i18n from '../plugins/i18n';

export default {
  data() {
    return {
      selected: "en",
      languages: [
        { 
          flag: 'us', 
          language: 'en',
          title: 'EN'
        },            
        {
          flag: 'tt',
          language: 'la',
          title: 'PL' 
        }
      ],
      changeLocale: function(locale) {
        i18n.locale = locale;
      }
    };
  }
}
</script>

<style lang="scss">
.header {
    .site-name {
      text-transform: uppercase;
    }
    display: flex;
    justify-content: space-between;
    background: black;
    padding: 20px 10px;
}
</style>