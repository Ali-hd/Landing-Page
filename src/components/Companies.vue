<template>
  <div class="content-wrapper">
      <h1>Trusted by many Companies</h1>
      <div class="companies">
          <div class="top-content">
            <img src="/images/companies.PNG" alt="top">
            <img src="/images/companies.PNG" alt="top">
          </div>
          <div class="bottom-content">
            <img src="/images/companies.PNG" alt="bottom">
            <img src="/images/companies.PNG" alt="bottom">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Companies",
}
</script>

<style lang="scss" scoped>
    .content-wrapper{
        background: linear-gradient(#ffffff, #f3f3f5);
        padding-top: 120px;
        padding-bottom: 80px;
        text-align: center;
    }
    .content-wrapper h1{
        color: #4c4a57;
        font-size: 13px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 40px;
    }
    .companies{
        max-width: 1200px;
        padding-top: 60px;
        margin: 0 auto;
        overflow: hidden;
    }
    .top-content, .bottom-content{
        display: flex;
        img{
            height: 80px;
            width: 1200px;
            margin-bottom: 20px;
        }
        margin-bottom: 20px
    }
    .top-content{
        animation: driftLeft 70s linear infinite;
    }
    .bottom-content{
        animation: driftRight 70s linear infinite;
    }

    @keyframes driftLeft{
        from{ transform: translate(0) }
        to{ transform: translate(-1200px);}
    }

    @keyframes driftRight {
        from{ transform: translate(-1200px);}
        to{ transform: translate(0);}
    }

</style>