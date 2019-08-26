<template>
    <div class="episodes">
        <h3>Episodes</h3>
        <div class="row">
          <div class="col" v-for="e in $t('episode-list')" :key="e.id">
            <p>
              <star-rating :rating="e.rating" :max-rating="10" :star-size="25" :read-only="true" :increment="0.5"></star-rating>
              Season: {{ e.season }}
              <br>
              {{ e.name }}
            </p>
          </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  name: 'episodes'
}
</script>

<style lang="scss">
  .col {
    margin: 10px auto;
  }
</style>