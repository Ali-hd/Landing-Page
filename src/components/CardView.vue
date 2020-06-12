<template>
<div class="cards-content">
      <div class="cards-box">
          <h3 class="section-title">Featured Content</h3>
      <div v-bind:style="{transform: activeLength}" class="card-container">
          <div v-bind:key="card.id" v-for="card in cards" class="card">
              <div class="img-container">
                <img class="card-img" v-bind:src="card.img" alt="thumbnail">
              </div>
              <div class="info-container">
               <p class="card-name">
                  {{card.name}}
              </p>
              <h3 class="card-title">
                  {{card.title}}
              </h3>
              <p class="more-info">
                  {{card.info}}
              </p>
              </div>
              <span class="watch-now">
                  {{card.link}}
              </span>   
          </div>
      </div>
  </div>
  <span v-on:click="goright" class="arrow-right"> <font-awesome-icon :icon="['fas', 'chevron-right']"/> </span> 
  <span v-on:click="goleft" class="arrow-left">  <font-awesome-icon :icon="['fas', 'chevron-left']"/> </span>
</div>
</template>

<script>
export default {
    name: "CardView",
    data() {
    return {
      cards: [
          {
              id: "1",
              img: "/images/img_resources_webinar.png",
              name: "Agility",
              title: "ModSQL modi donec odio distinctio cupidatat",
              info: "Fuga modi donec odio distinctio cupidatat netus dapibus neque occaecat suscipit, minima laoreet culpa. Massa congue! Provident eiusmod morbi tortor eleifend odio consecte aptent arcu. Amet fugit voluptate sociis assumenda tempora eu quibusdam convallis potenti, amet interdum proin..",
              link: "View More"
          },
          {   
              id: "2",
              img: "/images/img_resources_webinar.png",
              name: "Agility",
              title: "ModSQL modi donec odio distinctio cupidatat",
              info: "Fuga modi donec odio distinctio cupidatat netus dapibus neque occaecat suscipit, minima laoreet culpa. Massa congue! Provident eiusmod morbi tortor eleifend odio consecte aptent arcu. Amet fugit voluptate sociis assumenda tempora eu quibusdam convallis potenti, amet interdum proin..",
              link: "View More"
          },
          {   
              id: "3",
              img: "/images/img_resources_webinar.png",
              name: "Agility",
              title: "ModSQL modi donec odio distinctio cupidatat",
              info: "Fuga modi donec odio distinctio cupidatat netus dapibus neque occaecat suscipit, minima laoreet culpa. Massa congue! Provident eiusmod morbi tortor eleifend odio consecte aptent arcu. Amet fugit voluptate sociis assumenda tempora eu quibusdam convallis potenti, amet interdum proin..",
              link: "View More"
          },
      ],
      activeLength: 'translateX(0px)'
    }
  },
  methods:{
      goright(){
          this.activeLength = 'translateX(-635px)'
      },
      goleft(){
          this.activeLength = 'translateX(0px)'
      }
  }
}
</script>

<style scoped>
.cards-content{
    padding-bottom: 120px;
}
.card-container{
    display: flex;
    overflow: visible;
    transition: 0.5s ease-in-out 0s;
    width: 100%;
    overflow: hidden;
    will-change: transform;
}
.card{
    border: 1px solid #ccc;
    border-radius: 8px;
    min-width: 278px;
    max-width: 278px;
    height: 413px;
    overflow: hidden;
    cursor: pointer;
    margin-right: 40px;
}

.card-img{
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
    transition: .08s ease-in-out;
    will-change: opacity;
}
.img-container{
    border-radius: 8px 8px 0 0;
    height: 183px;
}
.card-name{
    font-size: 12px;
    color: rgb(119, 117, 130);
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.card-title{
    font-size: 20px;
    color: rgb(76, 74, 87);
    margin-bottom: 5px;
}
.info-container{
    padding: 20px;
    min-height: 183px;
    transition: .15s ease-in-out;
    background-color: #fff;
    will-change: transform;
}

.card:hover .info-container{
    transform: translateY(-183px);
}
.card:hover .more-info{
    opacity: 1;
    transition-delay: .08s;
}

.more-info{
    font-size: 13px;
    line-height: 24px;
    color: #777582;
    opacity: 0;
    transition: .08s ease-in-out;
    will-change: opacity;
}
.watch-now{
    display: block;
    font-weight: 600;
    color: blueviolet;
    transition: .08s ease-in-out;
    position: relative;
    transform: translate(20px, -128px);
}
.arrow-right, .arrow-left{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(58, 58, 58);
    border: 1px solid rgb(180, 180, 180);
}
.arrow-right, .arrow-left svg{
    margin-right: 2px;
}
.arrow-right:hover, .arrow-left:hover{
    background-color: rgba(241, 241, 241,0.5);
}
.arrow-right{
    top: 0px;
    right: 25px;
    position: absolute;
}
.arrow-left{
    top: 0px;
    right: 60px;
    position: absolute;
}
.section-title{
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    color: #1b1a21;
    margin-bottom: 20px;
}
@media only screen and (max-width: 1000px) and (min-width: 706px) {
    .cards-box{
        position: relative;
        width: 624px;
        overflow: hidden;
    }
    .cards-content{
        position: relative;
        width: 624px;
    }
    .card-container{
        overflow-x: scroll;
        overflow: visible;
    }
}
@media only screen and (min-width: 1000px){
    .arrow-right, .arrow-left{
        display: none;
    }
}
@media only screen and (max-width: 704px) {
    .arrow-left, .arrow-right{
        display: none;
    }
    .card-container{
        overflow-x: scroll;
    }
    .card-container::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
}
    
}
</style>