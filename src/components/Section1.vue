<template>
  <div style="margin-bottom:150px">
    <h2 class="title">
      Custom solutions
    </h2>
    <figure class="figure">
      <img class="figure-img" src="/images/fig_portfolio-dashboards.svg"/>
      <figcaption class="figure-cap">
        Aceat dictum phasellus voluptatem dignissimos gempor morbi repelle voluptatum tempor 
      </figcaption>
    </figure>
    <div class="info-container">
      <p class="info">
        This excepturi modi voluptates, et senectus lacus inventore eaque Corporis! Cupidatat consequat phasellus, netus Vulputate rem cursus quasi eleifend explicabo, magna. Omnis maecenas! Laboris ac aperiam, placeat totam Donec magni nostra wer
      </p>
      <p class="info">
        The sodales justo libero sit tortor. Sollicitudin, animi scelerisque, vitae magna netus, quis necessitatibus congue, mollitia tortor ex lobortis sodales habitant explicabo accumsan a laboriosam hendrerit montes temporibus
      </p>
    </div>
    <div class="item-container">
      <div class="item">
        <img class="item-img" src="/images/profile-query.png"/>
        <p class="item-title">
          Libero ultric drnare
        </p>
        <p class="item-info">
          Interactive ullam urna repellat neque, nibh facilisis hac volupt
        </p>
      </div>
      <div class="item">
        <img class="item-img" src="/images/profile-query.png"/>
        <p class="item-title">
          Libero ultric drnare
        </p>
        <p class="item-info">
          Interactive ullam urna repellat neque, nibh facilisis hac volupt
        </p>
      </div>
      <div class="item">
        <img class="item-img" src="/images/profile-query.png"/>
        <p class="item-title">
          Libero ultric drnare
        </p>
        <p class="item-info">
          Interactive ullam urna repellat neque, nibh facilisis hac volupt
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Section1',
}
</script>

<style scoped>
  .title{
    font-family: 'Lato', sans-serif;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 100px;
    margin-bottom: 60px;
    font-size: 29px;
  }

 .figure{
   margin-bottom: 40px;
 }

.figure-img{
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 590px;
}

 .figure-cap{
   text-align: center;
   margin-top: 20px;
   font-size: 0.75rem;
   line-height: 16px;
   font-family: 'Lato', sans-serif;
   color: #4c4a57;
 }

 .info{
   font-size: 18px;
   line-height: 28px;
   font-family: 'Lato', sans-serif;
   margin-bottom: 40px;
 }

.item-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.item{
  width: 290px;
  text-align: center;
  margin: 15px;
}
.item-img{
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: block;
}
.item-title{
  font-family: 'Lato', sans-serif;
  margin-bottom: 5px;
  font-weight: 700;
  line-height: 24px;
}
.item-info{
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 24px;
}
</style>