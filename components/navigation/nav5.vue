<template lang="pug">
.menu-wrap
  .menu
    .navbar
        .navbar-brand(href='#' class="logo-wrapper")
            img(:src="logo")
        .navbar-toggle(:class="{'active':displaySidenav}" @click="displaySidenav = !displaySidenav")
          span
          span
          span
  SideNav4(:menus="menus" :logo="logo" :show="displaySidenav && deviceDetect == 'mobile'" @close="displaySidenav = false")

</template>

<script>
import SideNav4 from "@/components/navigation/SideNav4.vue";

export default {
  props: {
    menus: {
      type: Array,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    sidenavToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navActive: null,
      displaySidenav: false,
      deviceDetect: true,
      windowWidth: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.handleResize);
      window.addEventListener("resize", this.menuSwitch);
      this.handleResize();
      this.menuSwitch();
    }
  },
  methods: {
    onActive: function(index) {
      this.navActive = index;
    },
    handleResize() {
      this.windowWidth.width = window.innerWidth;
      this.windowWidth.height = window.innerHeight;
    },
    menuSwitch() {
      this.deviceDetect = "mobile";
    }
  },
  components: {
    SideNav4
  }
};
</script>

<style lang="scss" scoped>
.menu-wrap {
  position: relative;
}
.menu {
  position: relative;
  z-index: 2;
  background-color: #fece00;
  box-shadow: 0px 4px 9px 0px rgba(154, 154, 154, 0.3);
  .navbar {
    margin: 0 auto;
    justify-content: space-between;
    padding: 10px 34px;
    .logo-wrapper {
      max-width: 120px;
      margin: 0;
      img{
          width: 87px;
          height: auto;
      }

    }
    .navbar-menu {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
      ul.nav-item {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        li {
          &.active {
            a {
              color: #000;
            }
          }
          border-right: 1px solid #d3a6b1;
          border-left: 1px solid #fdf2f7;
        //   @include respond-to(pad) {
        //     padding: 0 10px;
        //   }
          &:first-child {
            border-left: 0px;
          }
          &:last-child {
            padding-right: 0px;
            border-right: 0px;
          }
          a {
            cursor: pointer;
            padding: 0px;
            color: #fff;
            &:hover {
              color: #ea609a;
            }
          }
        }
      }
    }
  }
}
// 漢堡
.navbar-toggle {
  position: absolute;
  right: 30px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-color: transparent;
  color: #fff;
  display: block;
  // @media (min-width: 768px) {
  //   display: none;
  // }
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 200px;
    background: #fff;
    transition: all 0.3s;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: calc(50% - 2px);
      opacity: 1;
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }
  &.active {
    span {
      cursor: pointer;
      background: #fff;
      &:nth-child(1) {
        transform: translateY(12px) rotate(-45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-12px) rotate(45deg);
      }
    }
  }
}
</style>

