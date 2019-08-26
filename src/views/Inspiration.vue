<template>
    <div class="inspiration">
        <h3>Inspiration</h3>
        <div class="row">
          <div class="col">
            <img src="../assets/st-logo.png">
            <div class="sub-title">- IN RTP -</div>
          </div>
          <div class="col">
            <p>
              {{ $t('description') }}
            </p>
            <p>
              Locations mentioned were 
              <span v-for="(l, index) in $t('locations')" :key="l">
                <span>{{ l }}</span><span v-if="index+1 < $t('locations').length">, </span>
              </span>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>Snippets</label>
            <p v-for="s in $t('snippets')" :key="s">{{ s }}</p>
          </div>
          <div class="col">
            <iframe width="auto" height="205" src="https://www.newsobserver.com/news/local/article182498126.html/video-embed">
            </iframe>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'inspiration',
}
</script>

<style lang="scss">
.inspiration {
  img {
    width: 230px;
    margin: auto;
  }
  iframe {
    justify-content: center;
  }
  .sub-title {
    color: #eb272e;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
}
</style>