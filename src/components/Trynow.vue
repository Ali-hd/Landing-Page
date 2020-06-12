<template>
  <div class="content-wrapper">
      <div class="content">
          <div class="left-box">
              <h2 class="title">Try Product for Free Today</h2>
              <div class="buttons-wrapper">
                  <a class="button outlined">
                      Talk to a Specialist
              </a>
              <a class="button filled">
                  Try Product
              </a>
              </div>
          </div>
          <div class="right-box">
              <div class="sub-content">
                  <span class="icon-wrapper">
                    <font-awesome-icon class="icon" :icon="['fas', 'comments-dollar']"/>
                  </span>
                  <span class="sub-title"> Request a Quote <font-awesome-icon class="icon" :icon="['fas', 'angle-right']"/></span>
              </div>
              <div class="sub-content">
                  <span class="icon-wrapper">
                    <font-awesome-icon class="icon" :icon="['fas', 'handshake']"/>
                  </span>
                  <span class="sub-title"> Become a Partner Now <font-awesome-icon class="icon" :icon="['fas', 'angle-right']"/></span>
              </div>
              <div class="sub-content">
                  <span class="icon-wrapper">
                    <font-awesome-icon class="icon" :icon="['fas', 'question']"/>
                  </span>
                  <span class="sub-title"> Get Technical Support <font-awesome-icon class="icon" :icon="['fas', 'angle-right']"/></span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Trynow",
}
</script>

<style scoped>
.content-wrapper{
    padding: 80px 0;
    background: linear-gradient(180deg,#261a59 -40%,#1b1a21 100%);
}
.content{
    max-width: 1080px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    color: #fff
}
.left-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 40px;
}
.right-box{
    padding: 20px 0 20px 60px;
    border-left: 1px solid #c2c1c7;
}
.title{
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 40px;
}
.buttons-wrapper{
    display: flex;
}
.button{
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s ease-in-out;
  margin: 6px;
  cursor: pointer;
  border-radius: 4px;
}
.outlined:hover{
    transform: translateY(-1px);
    background: hsla(0,0%,100%,.1);
}
.outlined{
  border: 2px solid #fff;
  padding: 8px 18px;
}
.filled{
  padding: 10px 18px;
  background: linear-gradient(110deg,#f0f -44%,#1e0a78 157%);;
}
.filled:hover{
    box-shadow: 0 1px 4px rgba(27,26,33,.25);
    transform: translateY(-1px);
    filter: brightness(1.1);
}
.sub-content{
    display: flex;
    margin-bottom: 40px;
}
.sub-title{
    color: #c550ff;
    padding-bottom: 2px;
    line-height: 24px;
    cursor: pointer;
    background-image: linear-gradient(transparent calc(100% - 2px),#c550ff 2px);
    background-size: 0 100%;
    background-position: 100% 100%;
    transition: background-size .15s;
    background-repeat: no-repeat;
}
.sub-title:hover{
    background-size: 100% 100%;
    background-position: 0 100%;
}
/* .sub-title:after{
	content: '';
	display: block;
    margin: auto;
	height: 2px;
	width: 0px;
	background: transparent;
	transition: width .2s ease, background-color .2s ease;
} */
/* .sub-title:hover:after{
    width:100%;
    background: #c550ff
} */
.icon{
    color: #fff;
}
.icon-wrapper{
    min-width: 35px;
}
.sub-title svg{
    margin-left: 3px;
    color: #c550ff;
}
@media only screen and (max-width: 770px) {
    .content{
        flex-direction: column;
    }
    .right-box{
        border-left: 0;
        padding: 40px 0;
    }
    .title{
        font-size: 24px;
        line-height: 30px;
    }
}
</style>