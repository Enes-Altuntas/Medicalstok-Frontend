<template>
  <div class="main">
    <v-dialog width="400px" v-model="showDialog">
      <v-card>
        <v-card-title>Teklif Bilgileri</v-card-title>
        <v-card-text>
          <v-form ref="quotForm" v-model="validation">
            <v-text-field
              type="text"
              label="Teklif Fiyatı"
              suffix="TRY (KDV Dahil)"
              v-model="quotInfo.price"
              clearable
            ></v-text-field>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="quotInfo.date"
                  label="Teslim Edilebilecek Tarih"
                  prepend-icon="mdi-calendar"
                  readonly
                  clearable
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="quotInfo.date"
                @input="menu = false"
                locale="tr-TR"
              ></v-date-picker>
            </v-menu>
            <v-card-actions>
              <v-btn color="primary" @click="sendQuot">Gönder</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-overlay :value="getOverlayStatus"
      ><v-progress-circular indeterminate size="64"></v-progress-circular
    ></v-overlay>
    <div class="toolbar">
      <h3>Talep Görüntüleme Ekranı</h3>
      <v-spacer></v-spacer>
      <v-btn class="toolbar__filter" text
        ><v-icon>mdi-dots-vertical</v-icon></v-btn
      >
    </div>
    <v-container>
      <v-card class="mt-5" v-for="item in getRequisitions" :key="item.id">
        <v-card-title
          >{{ item.category }}-{{ item.group }}-{{ item.product }}
          <v-spacer></v-spacer>
          <v-icon color="warning">{{
            item.favourite ? 'mdi-star' : ''
          }}</v-icon>
        </v-card-title>
        <v-card-subtitle
          ><div><strong>Talep Türü: </strong>{{ item.req_type }}</div>
          <div>
            <strong>Miktar: </strong>{{ item.quantity }} {{ item.unit }}
          </div>
          <div><strong>Talep Açıklaması: </strong>{{ item.desc }}</div>
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="showDetailsOfItem(item)">
            <v-icon>{{
              item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
            }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="item.show">
            <v-divider></v-divider>
            <v-container>
              <v-card-text>
                <v-row class="mb-3"
                  ><strong>Kategori:</strong> {{ item.category }}
                </v-row>
                <v-row class="mb-3"
                  ><strong>Mal Grubu:</strong> {{ item.group }}
                </v-row>
                <v-row class="mb-3"
                  ><strong>Ürün Tanımı:</strong> {{ item.product }}
                </v-row>
                <v-row class="mb-3"
                  ><strong>Talep Türü:</strong> {{ item.req_type }}
                </v-row>
                <v-row class="mb-3"
                  ><strong>Tercih Edilen Marka:</strong> {{ item.brand }} (Marka
                  zorunlu değildir !)</v-row
                >
                <v-row class="mb-3"
                  ><strong>Lokasyon: </strong>{{ item.location }}</v-row
                >
                <v-row class="mb-3"
                  ><strong>Miktar: </strong>{{ item.quantity }}
                  {{ item.unit }}</v-row
                >
                <v-row class="mb-3"
                  ><strong>Teklif Geçerlilik Tarihi Sonu: </strong
                  >{{ item.endDate }}</v-row
                >
                <v-row class="mb-3"
                  ><strong>Talep Sahibi: </strong>{{ item.company }}</v-row
                >
              </v-card-text>
              <v-card-actions>
                <v-btn color="success" @click="openDialog(item)"
                  >Teklif Ver</v-btn
                >
                <v-btn color="primary" @click="markItemFav(item)"
                  >Favorilere Ekle</v-btn
                >
              </v-card-actions>
            </v-container>
          </div>
        </v-expand-transition>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      show: false,
      validation: false,
      showDialog: false,
      selectedRequisitionId: undefined,
      menu: false,
      quotInfo: {
        price: '',
        date: '',
      },
    }
  },

  computed: {
    ...mapGetters({
      getRequisitions: 'requisitions/getRequisitions',
      getRequisitionById: 'requisitions/getRequisitionById',
      getOverlayStatus: 'requisitions/getOverlayStatus',
    }),
  },

  methods: {
    ...mapMutations({
      setOverlay: 'requisitions/setOverlay',
      setShowItem: 'requisitions/setShowItemById',
      setFavItem: 'requisitions/setFavItemById',
    }),

    ...mapActions({
      postQuotation: 'requisitions/postQuotation',
      postFavReq: 'requisitions/postFavReq',
    }),

    showDetailsOfItem(item) {
      var payload = { id: item.id, show: !item.show }
      this.setShowItem(payload)
    },

    openDialog(item) {
      this.showDialog = true
      this.selectedRequisitionId = item.id
    },

    markItemFav(item) {
      this.setOverlay(true)
      debugger
      var payload = { id: item.id, favourite: !item.favourite }
      this.postFavReq(payload)
    },

    sendQuot() {
      this.setOverlay(true)
      var data = {
        ...this.getRequisitionById(this.selectedRequisitionId),
        quot: this.quotInfo,
      }

      this.postQuotation(data)
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Roboto+Condensed:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

.main {
  height: 100%;
  background-image: url('../static/article.jpg'),
    radial-gradient(rgb(110, 110, 110), rgb(37, 37, 37));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-attachment: fixed;
}

.toolbar {
  display: flex;
  background-color: $blue_hover;
  height: 4em;
  text-align: center;
  color: white;
  align-items: center;
  box-shadow: 5px 5px 20px black;

  & > h3 {
    font-family: 'Roboto Condensed', serif;
    margin-left: 2.5em;
  }

  &__filter {
    margin-right: 3em;
    color: white;
  }
}
</style>