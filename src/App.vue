<template>
  <div v-bind:style="navOpened ? {width: 'calc(100% - 17px)'} : { }" id="app">
    <Nav v-on:nav-open="navOpen" msg="Welcome to Your Vue.js App"/>
    <div class="hero-wrapper">
      <div class="hero-img"/>
      <!-- <img class="hero-img" src="/images/nasa-q1p7bh3shj8-unsplash.jpg"/> -->
      <div class="hero-content-wrapper">
        <div data-aos="fade-down" class="hero-content">
        <h1>ModSQL Cloud</h1>
        <p>
          Tupiditate asperiores eos varius facilis ultrici
          <br/>
          eos earum placerat voluptate etra rem venenat
        </p>
        <div class="hero-buttons">
          <span class="btn outlined">Learn More</span>
          <span class="btn filled">Free Trail <font-awesome-icon style="marginLeft:7px" :icon="['fas', 'arrow-right']"/></span>
        </div>
      </div>
      </div>
    </div>
    <WaveDivider position="10px" rotation="180deg"/>
    <Companies/>
    <div class="page-container">
      <Section1/>
    </div>
    <WaveDivider position="23px" rotation="0deg"/>
    <Showcase/>
    <WaveDivider position="10px" rotation="180deg"/>
    <SplitSection/>
    <div class="page-container">
      <hr class="hr" />
      <CardView/>
    </div>
    <WaveDivider position="23px" rotation="0deg"/>
    <Trynow/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Section1 from './components/Section1'
import CardView from './components/CardView'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer'
import Trynow from './components/Trynow'
import Showcase from './components/Showcase'
import WaveDivider from './components/WaveDivider'
import Companies from './components/Companies'
import SplitSection from './components/SplitSection'

AOS.init({
  once: true,
});
export default {
  name: 'App',
  components: {
    Nav,
    Section1,
    CardView,
    Footer,
    Trynow,
    Showcase,
    WaveDivider,
    Companies,
    SplitSection
  },
  data(){
    return{
      navOpened: false
    }
  },
  methods:{
    navOpen(isopen){
      this.navOpened = isopen
      document.getElementsByTagName("body")[0].style.overflow = isopen? "hidden" : "visible";
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
a{
    color: inherit;
    text-decoration: none;
}
.hero-wrapper{
  background-color: rgb(27, 26, 33);
  position: relative;
}
.hero-img{
  margin-top: -80px;
  overflow: hidden;
  width: 100%;
  height: 700px;
}
.page-container{
  padding: 0 30px;
  max-width: 1080px;
  margin: 0 auto;
} 
.hr{
  width: 100%;
  height: 0;
  border: 0;
  border-top: 1px solid #e6e5ea;
  margin: 80px auto;
}
.hero-content-wrapper{
  max-width: 690px;
  width: 100%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-content{
  position: relative;
  color: #fff;
}
.hero-content h1{
  text-align: center;
  font-size: 48px;
  line-height: 62px;
  margin-bottom: 20px;
}
.hero-content p{
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 30px;
}
.hero-buttons{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.btn{
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s ease-in-out;
  margin: 6px;
  cursor: pointer;
  border-radius: 4px;
  line-height: 1;
}
.outlined:hover{
    transform: translateY(-1px);
    background: hsla(0,0%,100%,.1);
}
.outlined{
  border: 2px solid #fff;
  padding: 10px 19px;
  margin-left: 0px;
}
.filled{
  padding: 12px 19px;
  background: linear-gradient(110deg,#f0f -44%,#1e0a78 157%);
  text-align: center;
}
.filled:hover{
    box-shadow: 0 1px 4px rgba(27,26,33,.25);
    transform: translateY(-1px);
    filter: brightness(1.1);
}
</style>
