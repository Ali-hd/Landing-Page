<template>
  <div class="Content-Wrapper">
      <div class="Content">
        <div class="Right-Content">
            <div class="title">Customer Stories</div>
            <h2 class="Header">
               <span class="balanced-text">
               Delivering solution
               <br/>
               analysis to more than
               <br/>
               1 billion people</span> 
            </h2>
            <p class="Sub-Header">10x Scale Improvement from norm Workers</p>
            <blockquote class="block-quote">
                <p>“We created aspernatur sem exercitationem anim, lectus sem aliquam varius exercitationem! Nec tellusnatoque viverra! Sociosqu viverra natoque sequi etiam repudiand.”</p>
                <span>— John Reacher, CTO</span>
            </blockquote>
            <a role="button" class="button-view" href="#">Read the Case Study</a>
        </div>
        <div class="Left-Content">
            <div class="inner">
                <div class="image-wrapper bg"><img class="image" src="/images/novus_bg.svg"></div>
                <div class="image-wrapper main"><img class="image" src="/images/novus_primary.png"></div>
                <div class="image-wrapper sub"><img class="image" src="/images/novus_secondary.jpg"></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "SplitSection",

}
</script>

<style lang="scss" scoped>
.Content-Wrapper{
    max-width: 1200px;
    padding: 100px;
    overflow-x: hidden;
    margin: 0 auto;
}
.Content{
    display: flex;
    justify-content: space-around;

}
.Right-Content{
    margin-left: 60px;
    margin-right: 0;
    max-width: 400px;

}
.Left-Content{
    order: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 450px;

}
.title{
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #4c4a57;
}
.Header{
    font-size: 30px;
    line-height: 36px;
    color: #1b1a21;
    margin-bottom: 20px;
}
.Sub-Header{
    font-size: 20px;
    line-height: 28px;
    color: #4c4a57;
    margin-bottom: 20px;
}
.block-quote{
    border-left: 6px solid rgba(21, 158, 189, 0.5);
    padding-left: 20px;
    margin-bottom: 20px;
    p{
        margin-bottom: 10px;
        font-size: 14px;
        font-style: italic;
        line-height: 24px;
        font-family: Merriweather,Georgia,Times New Roman,Times,serif;
        color: #4c4a57;
    }
    span{
        font-size: 12px;
        display: block;
        font-weight: 700;
        line-height: 16px;
        color: #4c4a57;
    }
}
.button-view{
    color: #4c4a57;
    background: #fff;
    border: 0.5px solid #c2c1c7;
    padding: 9px 18px;
    font-weight: 700;
    text-align: center;
    border-radius: 4px;
    transition: 0.15s ease-in-out;
    cursor: pointer;
    display: inline-block;
    margin: 6px 6px 6px 0;
    vertical-align: middle;
}
.button-view:hover{
    box-shadow: 0 1px 4px rgba(27,26,33,.25);
    transform: translateY(-1px);
    filter: brightness(1.1);
}
.inner{
    width: 450px;
    height: 470px;
    position: relative;
    box-sizing: inherit;
}
.image-wrapper{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
}
.bg{
    top: -20%;
    right: -20%;
    bottom: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
}
.main{
    top: 0;
    left: 0;
    width: 85%;
    max-height: 68%;
    box-shadow: 20px 20px 60px rgba(0,0,0,.3);
}
.sub{
    bottom: 0;
    right: 0;
    width: 58%;
    max-height: 47%;
    box-shadow: 8px 15px 35px rgba(0,0,0,.25);
}
.image{
    width: 100%;
    height: auto;
    overflow: visible;
}
@media only screen and (max-width: 1200px) {
    .Content-Wrapper{
        padding-right: 40px;
        padding-left: 40px;
        max-width: 100%;
    }
    .Content{
        justify-content: space-around;
    }
}
@media only screen and (max-width: 860px) {
  .Content{
        flex-direction: column;
        align-items: center;
    }
    .Right-Content{
        margin-top: 55px;
    }
}
</style>