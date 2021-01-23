<template>
  <v-main class="login">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-card width="600px">
          <div class="login__brand">
            <div class="login__brand__title">Medicalstok</div>
          </div>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <v-form v-model="validation1" ref="confCodeForm">
                  <v-text-field
                    label="Doğrulama Kodu"
                    type="text"
                    v-model="confCode"
                    :rules="confRules"
                    required
                    counter="20"
                    clearable
                  ></v-text-field>
                  <v-btn
                    color="success"
                    block
                    class="mt-5"
                    @click="sendConfCode"
                    >Kodu Gönder
                  </v-btn>
                  <v-btn color="primary" block class="mt-5"
                    ><NuxtLink to="/" class="link"
                      >Ana Sayfaya Dön</NuxtLink
                    ></v-btn
                  >
                </v-form>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="2">
              <v-card-text>
                <v-form v-model="validation2" ref="loginForm">
                  <v-text-field
                    label="Şifre"
                    prepend-icon="mdi-key"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                    v-model="passInfo.password"
                    :rules="passRules"
                    required
                    clearable
                    counter="12"
                  ></v-text-field>
                  <v-text-field
                    label="Şifre (Tekrar)"
                    prepend-icon="mdi-key"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                    v-model="passInfo.confPassword"
                    :rules="confPassRules"
                    required
                    clearable
                    counter="12"
                  ></v-text-field>
                  <v-btn color="primary" block class="mt-5" @click="savePass"
                    >Kaydet</v-btn
                  >
                  <v-btn color="success" block class="mt-5" @click="back"
                    >Geri Dön</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      step: 1,
      validation1: true,
      validation2: true,
      show: false,
      confCode: undefined,
      passInfo: { password: '', confPassword: '' },
      confRules: [(v) => !!v || 'Doğrulama kodu gereklidir !'],
      passRules: [
        (v) => !!v || 'Şifre gereklidir',
        (v) => (v && v.length == 12) || 'Şifre 12 karakter olmalıdır !',
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{12}$/.test(
            v
          ) ||
          'Şifreniz en az bir küçük harf , bir büyük harf , bir nümerik karakter ve birde noktalama işareti içermelidir !',
      ],
      confPassRules: [
        () =>
          this.passInfo.password === this.passInfo.confPassword ||
          'Şifreler eşleşmelidir !',
        (v) => !!v || 'Şifre (Tekrar) gereklidir',
        (v) => (v && v.length == 12) || 'Şifre 12 karakter olmalıdır !',
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{12}$/.test(
            v
          ) ||
          'Şifreniz en az bir küçük harf , bir büyük harf , bir nümerik karakter ve birde noktalama işareti içermelidir !',
      ],
    }
  },
  methods: {
    sendConfCode() {
      if (this.validation1) {
        this.step = this.step + 1
      }
    },

    back() {
      this.step = this.step - 1
    },

    savePass() {
      if (this.validation2) {
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Roboto+Condensed:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

.login {
  height: 100%;
  background-image: url('../static/article.jpg'),
    radial-gradient(rgb(110, 110, 110), rgb(37, 37, 37));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-attachment: fixed;

  &__brand {
    display: flex;
    background-color: $blue;
    height: 8em;
    text-align: center;
    justify-content: center;
    align-items: center;

    &__title {
      color: aliceblue;
      font-family: 'Oswald', serif;
      font-size: 3em;
    }
  }

  &__forget {
    text-decoration: none;
  }
}

.link {
  color: white;
  text-decoration: none;
}
</style>