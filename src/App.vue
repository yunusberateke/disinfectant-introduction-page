<template>
  <v-app>
    <v-app-bar
      app
      color="grey lighten-5"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon class="blue-grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <span class="text-uppercase text-h7 text-center  blue-grey--text">
          DEZENFEKTANSS SAN VE TİC. LTD. ŞTİ
        </span>
      </div>

      <v-spacer class="hidden-md-and-down"></v-spacer>

      <v-btn

          href="tel:5121234567"
        target="_blank"
        text
        class="hidden-md-and-down mr-15 text-capitalize"
      >
        <v-icon color="blue-grey">mdi-phone</v-icon>
        <span class="ml-3 text-h7 blue-grey--text">Hemen Ara</span>
      </v-btn>
      <v-btn

          href="tel:55555555"
          target="_blank"
          text
          class="hidden-md-and-down mr-15 text-capitalize"
      >
        <v-icon color="blue-grey">mdi-map</v-icon>
        <span class="ml-3 text-h7 blue-grey--text">Yol Tarifi Al</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"

        width="400"
        temporary
        style="height: 100vh"
        fixed
    >
      <v-list
          nav
          dense
          class="my-10"
      >

        <v-list-item link @click="goToArea('#posts')">
          <v-list-item-title class="ml-15 my-5">Güncellemeler</v-list-item-title>
        </v-list-item>

        <v-list-item link  @click="goToArea('#comments')">
          <v-list-item-title class="ml-15 my-5">Yorumlar</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="goToArea('#about')">
          <v-list-item-title class="ml-15 my-5">Hakkımızda</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToArea('#galery')">
          <v-list-item-title class="ml-15 my-5">Galeri</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToArea('#contact')">
          <v-list-item-title class="ml-15 my-5">İletişim</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>

      <Home/>
    </v-main>
    <v-footer
        fixed
        padless
        class="hidden-md-and-up elevation-5"

    >
      <v-card
          flat
          tile
          width="100%"
          class="elevation-5"
      >
        <v-card-text style="padding: 0px; margin: 0px;" class="my-auto col-10 mx-auto">
          <v-row class="my-auto py-1">
            <div class="col-6 my-auto" style="padding: 0px">
              <div class="d-flex flex-column align-center">
                <v-btn icon height="30"
                       href="tel:5121234567"
                >
                  <v-icon color="blue-grey">mdi-phone</v-icon>
                </v-btn>
                <p class="mb-0 blue-grey--text">Hemen Ara</p>
              </div>
            </div>
            <div class="col-6" style="padding: 0px">
              <div class="d-flex flex-column align-center">
                <v-btn icon height="30"
                       href="https://www.google.com/maps/dir//rota+s%C3%BCr%C3%BCc%C3%BC+kursu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14caa733d4c45407:0x8e5bfae201fee4b6?sa=X&ved=2ahUKEwjevP_ykOHtAhWOH-wKHZCjAmwQ9RcwDXoECB4QBQ"
                >
                  <v-icon color="blue-grey">mdi-map</v-icon>
                </v-btn>
                <p class="mb-0 blue-grey--text">Yol Tarifi</p>
              </div>

            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

import Home from "@/views/Home";
export default {
  name: 'App',
  components: {Home},
  methods:{
    goToArea(areaId){
      this.drawer = false;
      this.$vuetify.goTo(areaId)
    }
  },


  data: () => ({
    drawer:false
  }),
  created() {
    window.document.title = "DEZENFEKTANSS SAN VE TİC. LTD. ŞTİ"
  }
};
</script>
<style scoped>

</style>
