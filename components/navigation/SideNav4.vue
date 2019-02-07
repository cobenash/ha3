<template lang="pug">
  .sidenav-container
    transition(name="slide-fade")
      .sidenav(v-if="show")
        ul(class="nav-list" v-for="(menu, key) in menus")
          li.nav-item(:style="{backgroundColor:menu.backgroundColor,color:menu.color}" :key="key")
            a(@click="showDropdown") {{ menu.title }}
            ul.nav-dropdown(v-if="menu.menuItem")
              li.nav-dropdown-item(v-for="items in menu.menuItem" :key="items.id")
                  a(:href="items.link") {{ items.title }}
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // showDropdown: false
    };
  },
  methods: {
    showDropdown(event) {
      event.target.nextSibling.classList.toggle("active");
    }
  }
};
</script>


<style lang="scss" scoped>
.sidenav-container {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  z-index: 0;
}

.sidenav {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  border-radius: 0 0 2px 2px;
  box-shadow: 0px 4px 9px 0px rgba(154, 154, 154, 0.3);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  /* border-bottom: 1px dashed #ffffff61;   */
  /* text-align: center; */

  a {
    display: block;
    padding: 20px;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s;
    cursor: pointer;
  }
  .nav-dropdown {
    transition: All 0.6s;
    opacity: 0;
    height: 0;
    overflow: hidden;
    list-style-type: none;
    &.active {
      height: auto;
      opacity: 1;
    }
  }
}

/* .nav-item a:hover,
.nav-item a:active {
  color: #000;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
