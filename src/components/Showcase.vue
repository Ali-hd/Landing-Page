<template>
<div class="container-wrap">
<div class="container">
    <div class="header">
      <p>HOW MODSQL WORKS</p>
      <h2>A Possimus explicabo alias ipsum Dictum reaswel</h2>
    </div>
    <div data-aos="fade-up" class="split-section">
      <div style="margin-right:40px" class="split-side">
        <p class="split-title">
          Fast
        </p>
        <p class="split-info">
          Recusandae do senectus, rhoncus, occaecat impedit eveniet interdum aliqua, ipsa facere  rhoncus, occae.
        </p>
      </div>
      <div class="img-container">
         <img class="split-img" src="/images/data-exploration_inverted.png"/>
      </div>
    </div>
    <div data-aos="fade-up" class="split-section">
      <div style="margin-left:40px" class="split-side">
        <p class="split-title">
          Scale
        </p>
        <p class="split-info">
          Recusandae do senectus, rhoncus, occaecat impedit eveniet interdum aliqua, ipsa facere  rhoncus, occae.
        </p>
      </div>
      <div class="img-container order">
        <img class="split-img" src="/images/data-exploration_inverted.png"/>
      </div>
    </div>
    <div data-aos="fade-up" class="split-section">
      <div style="margin-right:40px" class="split-side">
        <p class="split-title">
          Present
        </p>
        <p class="split-info">
          Recusandae do senectus, rhoncus, occaecat impedit eveniet interdum aliqua, ipsa facere  rhoncus, occae.
        </p>
      </div>
      <div class="img-container">
         <img class="split-img" src="/images/data-exploration_inverted.png"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "Showcase",
}
</script>

<style scoped>
.container-wrap{
  background-color: rgb(27, 26, 33);
}
.container{
  padding: 20px 30px 100px 30px;
  max-width: 1080px;
  margin: 0 auto;
}
.split-section{
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
}
.img-container{
  max-width: 500px;
  /* margin-right: 40px; */

}
.split-side{
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

}
.split-title{
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  display: block;
  color: rgb(197, 80, 255);
}
.split-info{
  font-family: 'Lato', sans-serif;
  display: block;
  font-size: 20px;
  line-height: 28px;
}
.split-img{
  width: 100%;
}
.img-container.order{
  order: -1;
}

@media only screen and (max-width: 800px) {
  .split-section{
    flex-direction: column;
  }
  .split-side{
    align-self: flex-start;
    margin-left: 0 !important;
  }
  .img-container{
    align-self: flex-end;
    margin-top: 30px;
    margin-right: 0;
  }
  .img-container.order{
  order: 1;
}
}
.header{
  text-align: center;
}
.header p{
  color: #ff00ff;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  margin-top: 80px;
}
.header h2{
  color: #fff;
  font-size: 30px;
}

@media only screen and (max-width: 860px){
.header h2{ 
  font-size: 24px;
}
}
</style>