<template>
    <div class="gallery">
        <h3>Gallery</h3>
        <div class="row">
          <div class="col">
            <p v-for="(g, index) in $t('gallery')" :key="g">{{ index + 1 }} - {{ g.text }}</p>
          </div>
          <div class="col">
            <carousel-3d  :controls-visible="true">
              <slide v-for="(slide, i) in $t('gallery')" :key="slide.id" :index="i">
                <figcaption>
                  {{ i + 1 }}
                </figcaption>
                <img :src="slide.src">
              </slide>
            </carousel-3d>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gallery'
}
</script>

<style lang="scss">
.gallery {
  img {
    height: 100%;
  }
}
</style>