<template>
  <div class="hero">
    <h1 class="hero__brand">Medicalstok</h1>
    <h2 class="hero__desc">
      Medicalstok'a hoş geldiniz , {{ UserInfo.name }} {{ UserInfo.title }}
    </h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      UserInfo: {
        name: 'Enes',
        surname: 'Altuntaş',
        mail: 'enesaltuntas92@gmail.com',
        phone: '+90 553 673 92 61',
        title: 'Bey',
      },
    }
  },

  mounted() {
    this.getMain()
  },

  computed: {},

  methods: {
    ...mapActions({
      getMain: 'main',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Roboto+Condensed:wght@300&display=swap');

.hero {
  margin: 0 auto;
  text-align: center;
  height: 100%;
  padding: 17em 0;
  background-image: url('../static/article.jpg'),
    radial-gradient(rgb(110, 110, 110), rgb(37, 37, 37));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-attachment: fixed;

  &__brand {
    color: azure;
    font-family: 'Oswald', serif;
    font-size: 7em;
    text-shadow: 5px 5px 10px $blue;
  }

  &__desc {
    color: azure;
    font-family: 'Oswald', cursive;
    font-size: 40px;
    margin-bottom: 1em;
    text-shadow: 5px 5px 10px $green;
  }
}
</style>