<template lang="pug">
    #page
        header(class="fixed-top")
            nav5(:menus="LoadedMenu" :logo="WebsiteLogo")
        nuxt
        footer
            FooterVue(:data="footer")
</template>

<script>
import nav5 from "@/components/navigation/nav5.vue";
import FooterVue from "@/components/footer/HSFooter3.vue";

export default {
  data() {
    return {
      LoadedMenu: [
        {
          title: "雀巢幼兒成長配方",
          link: "#featured-wrap",
          backgroundColor: '#eeeeee',
          color: '#000',
          menuItem: [{
            title: '雀巢首頁',
            link: '#'
          }, {
            title: '你所不知道的雀巢',
            link: '#'
          }],
        },
        {
          title: "能恩全護成長配方",
          link: "#service-wrap",
          backgroundColor: '#371854',
          color: '#fff',
          menuItem: [{
            title: '關於全護3',
            link: '#'
          }, {
            title: '能恩全護3',
            link: '#'
          }],
        },
        {
          title: "能恩水解成長配方",
          link: "#panel-wrap",
          backgroundColor: '#fff4ce',
          color: '#000',
          menuItem: [{
            title: '首頁',
            link: '#'
          }, {
            title: '兒科醫師爸媽給小孩的選擇',
            link: '#'
          }],
        },
        {
          title: "能恩成長配方",
          link: "#team-wrap",
          backgroundColor: '#d4e5f5',
          color: '#000',
          menuItem: [{
            title: '首頁',
            link: '#'
          }, {
            title: '消化再升級的秘密',
            link: '#'
          }],
        }
      ],
      WebsiteLogo: "/logo.png",
      footer: {
        company: "台灣雀巢股份有限公司版權所有",
        copyrigth: "ⓒ2018Nestle Taiwan Ltd. All Rights Reserved",
        phone: "營養諮詢專線 : 0800-000-339"
      }
    };
  },
  components: {
    nav5,
    FooterVue
  }
};
</script>
<style lang="scss" scope>
html {
  font-family: MicrosoftJhengHei;
}
#page {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
</style>

