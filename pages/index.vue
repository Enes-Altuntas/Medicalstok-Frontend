<template>
  <div>
    <div class="navbar">
      <div class="navbar__banner">Medicalstok</div>
    </div>
    <div class="hero">
      <h1 class="hero__brand">Medicalstok</h1>
      <h2 class="hero__desc">Medikal Satınalmanın Doğru Adresi</h2>
      <div class="hero__buttons">
        <div class="hero__buttons__button">
          <NuxtLink class="link" to="/registersup">Tedarikçi Kaydı</NuxtLink>
        </div>
        <div class="hero__buttons__button">
          <NuxtLink class="link" to="/register"
            >Satınalma Personel Kaydı</NuxtLink
          >
        </div>
        <div class="hero__buttons__enter">
          <NuxtLink class="link" to="/login">Giriş Yap</NuxtLink>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="description__container">
        <div class="description__mission">
          <h2>Misyonumuz</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et nisl erat. Nam ultrices ex eget risus aliquet pellentesque. Morbi
            scelerisque, neque quis sodales imperdiet, enim libero interdum
            massa, sit amet ultricies dolor ligula et enim. Nunc fermentum urna
            sed felis molestie, nec laoreet lorem commodo. Sed tristique erat ac
            odio ultrices tempus. Phasellus augue tortor, hendrerit convallis
            nibh in, interdum gravida enim. Aliquam mollis tortor justo, at
            scelerisque felis rhoncus quis. Nam elementum augue a quam malesuada
            lacinia. Proin et ipsum urna. Suspendisse efficitur quam in erat
            porttitor laoreet. Integer eget eleifend eros. Duis commodo, purus
            eu faucibus porttitor, tortor dui mattis lorem, ac consequat velit
            quam nec est. In faucibus at magna et tempus. Proin placerat aliquam
            dui, in pretium lectus rhoncus nec. Donec vestibulum odio vitae
            tellus dictum congue.
          </p>
        </div>
        <div class="description__vision">
          <h2>Vizyonumuz</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et nisl erat. Nam ultrices ex eget risus aliquet pellentesque. Morbi
            scelerisque, neque quis sodales imperdiet, enim libero interdum
            massa, sit amet ultricies dolor ligula et enim. Nunc fermentum urna
            sed felis molestie, nec laoreet lorem commodo. Sed tristique erat ac
            odio ultrices tempus. Phasellus augue tortor, hendrerit convallis
            nibh in, interdum gravida enim. Aliquam mollis tortor justo, at
            scelerisque felis rhoncus quis. Nam elementum augue a quam malesuada
            lacinia. Proin et ipsum urna. Suspendisse efficitur quam in erat
            porttitor laoreet. Integer eget eleifend eros. Duis commodo, purus
            eu faucibus porttitor, tortor dui mattis lorem, ac consequat velit
            quam nec est. In faucibus at magna et tempus. Proin placerat aliquam
            dui, in pretium lectus rhoncus nec. Donec vestibulum odio vitae
            tellus dictum congue.
          </p>
        </div>
      </div>
    </div>
    <div class="profile">
      <div class="profile__container">
        <div class="profile__container__grid">
          <h3>Deneme</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula a leo at facilisis. Cras id bibendum urna. Integer sit amet
            velit iaculis, pharetra orci congue, pulvinar ante.
          </p>
        </div>
        <div class="profile__container__grid">
          <h3>Deneme</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula a leo at facilisis. Cras id bibendum urna. Integer sit amet
            velit iaculis, pharetra orci congue, pulvinar ante.
          </p>
        </div>
        <div class="profile__container__grid">
          <h3>Deneme</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula a leo at facilisis. Cras id bibendum urna. Integer sit amet
            velit iaculis, pharetra orci congue, pulvinar ante.
          </p>
        </div>
      </div>
    </div>
    <div class="contacts">İletişim</div>
  </div>
</template>

<script>
export default {
  layout: 'landing',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Roboto+Condensed:wght@300&display=swap');

.navbar {
  background-color: $blue;
  position: sticky;
  box-shadow: 0 10px 30px 20px rgba(0, 0, 0, 0.5);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5em;
  width: 100%;
  z-index: 1000;

  &__banner {
    color: azure;
    font-size: 30px;
    font-family: 'Oswald', serif;
  }
}

.profile {
  background-image: url('../static/b1.jpg'),
    radial-gradient(rgb(221, 221, 221), rgb(37, 37, 37));
  height: 49em;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  background-attachment: fixed;
}

.description {
  box-shadow: 0 5px 30px 40px rgba(0, 0, 0, 0.5);
  background-image: url('../static/article.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 7em 0;

  &__container {
    margin: 0 auto;
    width: 90%;
  }

  &__mission {
    margin: 0 auto;
    padding: 0 3em;
    text-align: left;
    padding-bottom: 3em;

    & > h2 {
      font-size: 3em;
      font-family: 'Oswald', serif;
      color: $blue;
      opacity: 0.9;
    }

    & > p {
      margin-top: 1em;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 1.3em;
      font-weight: bold;
      opacity: 0.8;
    }
  }

  &__vision {
    margin: 0 auto;
    padding: 0 3em;
    text-align: right;
    padding-top: 3em;

    & > h2 {
      font-size: 3em;
      font-family: 'Oswald', serif;
      color: $blue;
      opacity: 0.9;
    }

    & > p {
      margin-top: 1em;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 1.3em;
      font-weight: bold;
      opacity: 0.8;
    }
  }
}

.contacts {
  background-color: $blue;
  height: 5em;
  box-shadow: 0 5px 30px 40px rgba(0, 0, 0, 0.5);
}

.hero {
  margin: 0 auto;
  text-align: center;
  justify-self: center;
  padding: 17em 0;
  background-image: url('../static/hero.jpg'),
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

    @include tablet {
      font-size: 3em;
    }
  }

  &__desc {
    color: azure;
    font-family: 'Dancing Script', cursive;
    font-size: 40px;
    margin-bottom: 1em;
    text-shadow: 5px 5px 10px $green;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto Condensed', sans-serif;
    width: 80%;
    margin: auto;
    justify-content: center;

    &__button {
      box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
      background-color: $blue;
      padding: 1em 3em;
      margin: 0 1em 1em 1em;
      border-radius: 0.5em;
      transition: transform 250ms ease-in-out,
        background-color 250ms ease-in-out, opacity 250ms linear;

      & > a {
        text-decoration: none;
        color: azure;
      }

      &:hover {
        transform: scale(1.1);
        background-color: $blue_hover;
      }
    }

    &__link {
      text-decoration: none;
    }

    &__enter {
      background-color: $green;
      box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
      padding: 1em 3em;
      margin: 0 1em 1em 1em;
      border-radius: 0.5em;
      transition: transform 250ms ease-in-out,
        background-color 250ms ease-in-out, opacity 250ms linear;

      & > a {
        text-decoration: none;
        color: azure;
      }

      &:hover {
        transform: scale(1.1);
        background-color: $green_hover;
      }
    }
  }
}

.link {
  text-decoration: none;
  color: white;
}
</style>