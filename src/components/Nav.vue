<template>
  <div>
    <div
      v-bind:style="sideNav ? {width: 'calc(100% - 17px)'} : {width: '100%'}"
      id="Nav"
      class="nav-cont"
    >
      <div class="left-cont">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="76" height="76"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><defs><linearGradient x1="86" y1="37.625" x2="86" y2="131.6875" gradientUnits="userSpaceOnUse" id="color-1_69491_gr1"><stop offset="0" stop-color="#ab7070"></stop><stop offset="1" stop-color="#c6117c"></stop></linearGradient><linearGradient x1="86" y1="34.9375" x2="86" y2="134.375" gradientUnits="userSpaceOnUse" id="color-2_69491_gr2"><stop offset="0" stop-color="#6b3f3f"></stop><stop offset="1" stop-color="#5f083c"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1"></path><g><path d="M75.73106,47.05006c-1.06694,1.14487 0.00269,2.9885 1.51306,2.58537c4.71388,-1.26044 7.267,-1.26044 11.44338,-1.26044c19.23713,0 32.1425,16.24325 32.1425,36.28125c0,0.23919 -0.00538,0.48106 -0.01344,0.72025c-0.15319,4.27313 4.24088,7.62175 7.8475,5.32662c3.69531,-2.35156 8.98163,-2.50475 12.92419,-1.68506c5.58731,1.16369 10.105,5.68137 11.26869,11.26869c1.98875,9.55406 -5.04444,17.96325 -14.11475,17.96325c-2.35156,0 -10.75,1.34375 -20.49219,-8.0625c-10.93812,-10.55919 -17.84231,-19.264 -24.1875,-26.20312c-2.28169,-2.49669 -11.08594,-11.42187 -11.08594,-11.42187c-8.41725,-8.0625 -21.16406,-16.125 -37.28906,-16.125c-23.74944,0 -40.3125,16.84525 -40.3125,37.625c0,24.1875 16.56306,37.625 40.3125,37.625c16.12769,0 27.2405,-5.30244 37.18156,-15.90731c1.36794,-1.45931 -0.47031,-3.67113 -2.17956,-2.63644c-10.07544,6.09525 -19.49781,7.79375 -32.3145,7.79375c-18.8125,0 -29.5625,-11.42994 -29.5625,-25.53125c0,-14.10131 9.34444,-25.53125 24.1875,-25.53125c10.75,0 16.49856,2.72512 21.16406,5.71094c8.39844,5.375 15.45313,13.10156 15.45313,13.10156l17.13281,18.8125c11.87606,14.84575 26.78631,26.41006 45.54775,23.82469c13.39181,-1.84631 24.19287,-12.99406 24.32456,-26.51219c0.16125,-16.46362 -10.44631,-29.5625 -26.87231,-29.5625h-5.375c0,-19.94663 -15.66275,-37.25144 -35.60937,-37.61962c-9.675,-0.17737 -17.51175,3.49912 -23.03456,9.41969z" fill="url(#color-1_69491_gr1)" stroke="none" stroke-width="1"></path><path d="M75.73106,47.05006c-1.06694,1.14487 0.00269,2.9885 1.51306,2.58537c4.71388,-1.26044 7.267,-1.26044 11.44338,-1.26044c19.23713,0 32.1425,16.24325 32.1425,36.28125c0,0.23919 -0.00538,0.48106 -0.01344,0.72025c-0.15319,4.27313 4.24088,7.62175 7.8475,5.32662c3.69531,-2.35156 8.98163,-2.50475 12.92419,-1.68506c5.58731,1.16369 10.105,5.68137 11.26869,11.26869c1.98875,9.55406 -5.04444,17.96325 -14.11475,17.96325c-2.35156,0 -10.75,1.34375 -20.49219,-8.0625c-10.93812,-10.55919 -17.84231,-19.264 -24.1875,-26.20312c-2.28169,-2.49669 -11.08594,-11.42187 -11.08594,-11.42187c-8.41725,-8.0625 -21.16406,-16.125 -37.28906,-16.125c-23.74944,0 -40.3125,16.84525 -40.3125,37.625c0,24.1875 16.56306,37.625 40.3125,37.625c16.12769,0 27.2405,-5.30244 37.18156,-15.90731c1.36794,-1.45931 -0.47031,-3.67113 -2.17956,-2.63644c-10.07544,6.09525 -19.49781,7.79375 -32.3145,7.79375c-18.8125,0 -29.5625,-11.42994 -29.5625,-25.53125c0,-14.10131 9.34444,-25.53125 24.1875,-25.53125c10.75,0 16.49856,2.72512 21.16406,5.71094c8.39844,5.375 15.45313,13.10156 15.45313,13.10156l17.13281,18.8125c11.87606,14.84575 26.78631,26.41006 45.54775,23.82469c13.39181,-1.84631 24.19287,-12.99406 24.32456,-26.51219c0.16125,-16.46362 -10.44631,-29.5625 -26.87231,-29.5625h-5.375c0,-19.94663 -15.66275,-37.25144 -35.60937,-37.61962c-9.675,-0.17737 -17.51175,3.49912 -23.03456,9.41969z" fill="none" stroke="url(#color-2)" stroke-width="5.375"></path></g></g></svg>
      </div>
      <div class="center-cont">
        <p class="center-item">Product</p>
        <p class="center-item">Solutions</p>
        <p class="center-item">Docs</p>
        <p class="center-item">Resources</p>
        <p class="center-item">Contact Us</p>
      </div>
      <div class="right-cont">
        <div class="login-fields">
          <div class="button center-item">
            <p><font-awesome-icon class="signin-icon" :icon="['far', 'user-circle']"/> Sign in</p>
          </div>
          <div class="button outline">
            <p>Sign up <font-awesome-icon style="marginLeft:7px" :icon="['fas', 'arrow-right']"/> </p>
          </div>
        </div>
        <div class="side-nav-btn">
          <font-awesome-icon v-on:click="openNav" icon="bars" />
        </div>
      </div>
    </div>
    <div v-bind:style="{transform: sideNav ? 'translateX(350px)' : 'translateX(0px)'}" class="sideNav" >
      <div class="sideNav-header">
        Hello world this logo
        <font-awesome-icon v-on:click="openNav" class="close-icon" :icon="['fas', 'times']"/>
      </div>
      <ul class="sideNav-items">
        <li class="sideNav-item">Product</li>
        <li class="sideNav-item">Solutions</li>
        <li class="sideNav-item">Docs</li>
        <li class="sideNav-item">Resources</li>
        <li class="sideNav-item">Contact Us</li>
      </ul>
    </div>
    <div v-on:click="openNav" v-bind:class="sideNav ? 'outside-Nav' : 'outside-Nav close'"></div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      sideNav: false
    };
  },
  mounted() {
    var nav = document.getElementById("Nav");
    window.onscroll = function() {
      "use strict";
      if (
        document.body.scrollTop >= 130 ||
        document.documentElement.scrollTop >= 130
      ) {
        nav.classList.add("nav-background");
      } else {
        nav.classList.remove("nav-background");
      }
    };
  },
  methods: {
    openNav() {
      this.sideNav = !this.sideNav;
      this.$emit("nav-open", this.sideNav);
    }
  }
};
</script>

<style scoped>
.nav-background {
  background-color: rgba(27, 26, 33, 0.9);
}
.nav-cont {
  top: 0;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 10;
}

.left-cont {
  display: flex;
  padding-left: 2rem;
  color: #fff;
  min-width: 244px;
}

.center-cont {
  display: flex;
  justify-content: center;
}

.right-cont {
  display: flex;
  padding-right: 1rem;
}
.login-fields {
  display: flex;
}
.center-item {
  padding: 10px 18px;
  font-weight: 700;
  color: #fff;
}
.center-item:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  transition: 0.15s ease-in-out;
}

.button {
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
}
.button p{
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s ease-in-out;
  line-height: 1;
}

.outline{
  border: 2px solid #fff;
  padding: 8px 18px;
}
.outline:hover{
  background-color: rgba(255, 255, 255, 0.1);
}

.fill-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  transition: 0.15s ease-in-out;
  background-color: rgb(156, 177, 62);
  font-weight: 700;
  color: #fff;

  border-radius: 4px;
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .center-cont,
  .login-fields {
    display: none;
  }
  .side-nav-btn {
    display: block !important;
  }
}

.side-nav-btn {
  display: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}
.sideNav {
  display: flex;
  flex-direction: column;
  color: black;
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 350px;
  left: -350px;
  background-color:#fff;
  transition: 0.15s ease-in-out;
  will-change: transform;
}
.outside-Nav {
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 50;
  position: fixed;
  transition: 0.15s ease-in-out;
  will-change: background-color;
  background-color: rgba(0, 0, 0, 0.35);
  overflow: hidden;
}
.outside-Nav.close {
  opacity: 0;
  user-select: none;
  pointer-events: none;
}
.sideNav-header{
  height: 80px;
  display: flex;
  color: #fff;
  background-color: rgb(27, 26, 33);
  justify-content: center;
  align-items: center;
}
.sideNav-items{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 30px;
}
.sideNav-item{
  font-size: 17px;
  color: #1b1a21;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 24px;
  cursor: pointer;
}
.signin-icon{
  margin-right: 7px;
}
.close-icon{
  position: absolute;
  right: 30px;
  cursor: pointer;
}
</style>