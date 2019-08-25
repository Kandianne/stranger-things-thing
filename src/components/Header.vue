<template>
  <div class="header">
    <div>Bird Box Browser</div>
    <div>
      <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
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
      languages: [
        { 
          flag: 'us', 
          language: 'en',
          title: 'English'
        },            
        {
          flag: 'es',
          language: 'es',
          title: 'Español' 
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
    display: flex;
    justify-content: space-between;
    border-bottom: solid thin darkgreen;
    padding: 10px;
}
</style>