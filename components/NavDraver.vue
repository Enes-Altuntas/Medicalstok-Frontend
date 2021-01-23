<template>
  <div>
    <v-card>
      <v-navigation-drawer permanent app clipped light expand-on-hover>
        <v-list>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ UserInfo.name }} {{ UserInfo.surname }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ UserInfo.mail }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ UserInfo.phone }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ UserInfo.role }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item
            v-for="item in UserInfo.DrawerItems"
            :key="item.id"
            :to="item.url"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserInfo: {
        name: 'Enes',
        surname: 'Altuntaş',
        mail: 'enesaltuntas92@gmail.com',
        phone: '+90 553 673 92 61',
        title: 'Bey',
        role: 'Tedarikçi',
        DrawerItems: [
          {
            id: '0',
            icon: 'mdi-home',
            title: 'Ana Sayfa',
            url: '/main',
          },
          {
            id: '1',
            icon: 'mdi-account',
            title: 'Profil',
            url: '/profile',
          },
          {
            id: '2',
            icon: 'mdi-gmail',
            title: 'Mesajlar',
            url: '/messages',
          },
          {
            id: '3',
            icon: 'mdi-arrow-down-bold-box',
            title: 'Kampanyalarım',
            url: '/discounts',
          },
          {
            id: '4',
            icon: 'mdi-folder-star',
            title: 'Talep Görüntüle',
            url: '/requisitions',
          },
          {
            id: '5',
            icon: 'mdi-folder-plus',
            title: 'Verilmiş Teklifler',
            url: '/quotations',
          },
          {
            id: '6',
            icon: 'mdi-alarm-light',
            title: 'Duyurular',
            url: '/anounces',
          },
          {
            id: '7',
            icon: 'mdi-logout',
            title: 'Çıkış Yap',
            url: '/',
          },
        ],
      },
    }
    computed: {
    }
    methods: {
    }
  },
}
</script>

<style lang="scss" scoped>
</style>