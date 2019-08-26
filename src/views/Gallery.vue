<template>
    <div class="gallery">
        <h3>Gallery</h3>
        <div class="row">
          <div class="col">
            <p v-for="(g, index) in $t('gallery')" :key="g">{{ index + 1 }} - {{ g.text }}</p>
          </div>
          <div class="col">
            <carousel-3d  :controls-visible="true">
              <slide v-for="(slide, i) in slides" :key="slide.id" :index="i">
                <figcaption>
                  {{ i + 1 }}
                </figcaption>
                <img :src="slide">
              </slide>
            </carousel-3d>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gallery',
  data() {
    return {
      slides:  [
        "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6b/The_Vanishing_of_Will_Byers_S01-E01_SS_005.png/revision/latest/scale-to-width-down/820",
        "https://www.newsobserver.com/news/local/rjhbpb/picture182497786/alternates/FREE_768/IMG_DISPLAY-ST_201-202_U_2_1_C9CM2NMI_L350297312",
        "https://nationalpostcom.files.wordpress.com/2017/11/st5.jpg?quality=80&strip=all&w=780&zoom=1",
        "https://vignette.wikia.nocookie.net/strangerthings8338/images/1/1d/ST-Hawkins-Map.png",
      ],
    } 
  }
}
</script>

<style lang="scss">
.gallery {
  img {
    height: 100%;
  }
}
</style>