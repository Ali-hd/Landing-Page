<template>
  <div class="footer-section">
      <div class="content-wrapper">
          <ul>
              <li> <h3 class="list-title">PRODUCT</h3></li>
              <li> <a class="list-item" href="#">tae suscipit</a></li>
              <li> <a class="list-item" href="#">stincti</a></li>
              <li> <a class="list-item" href="#">placerat</a></li>
              <li> <a class="list-item" href="#">dignissim</a></li>
              <li> <a class="list-item" href="#">tenetur</a></li>
              <li> <a class="list-item" href="#">vehicula</a></li>
          </ul>
          <ul>
              <li> <h3 class="list-title">ABOUT</h3></li>
              <li> <a class="list-item" href="#">tae suscipit</a></li>
              <li> <a class="list-item" href="#">stincti</a></li>
              <li> <a class="list-item" href="#">placerat</a></li>
              <li> <a class="list-item" href="#">dignissim</a></li>
              <li> <a class="list-item" href="#">tenetur</a></li>
              <li> <a class="list-item" href="#">vehicula</a></li>
          </ul>
          <ul>
              <li> <h3 class="list-title">TECH</h3></li>
              <li> <a class="list-item" href="#">tae suscipit</a></li>
              <li> <a class="list-item" href="#">stincti</a></li>
              <li> <a class="list-item" href="#">placerat</a></li>
              <li> <a class="list-item" href="#">dignissim</a></li>
              <li> <a class="list-item" href="#">tenetur</a></li>
              <li> <a class="list-item" href="#">vehicula</a></li>
          </ul>
          <ul>
              <li> <h3 class="list-title">SUPPORT</h3></li>
              <li> <a class="list-item" href="#">tae suscipit</a></li>
              <li> <a class="list-item" href="#">stincti</a></li>
              <li> <a class="list-item" href="#">placerat</a></li>
              <li> <a class="list-item" href="#">dignissim</a></li>
              <li> <a class="list-item" href="#">tenetur</a></li>
              <li> <a class="list-item" href="#">vehicula</a></li>
          </ul>
      </div>
      <div class="social-links">
          <a href="#">
            <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']"/>
          </a>
          <a href="#">
             <font-awesome-icon class="social-icon" :icon="['fab', 'facebook']"/> 
          </a>
          <a href="#">
              <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin-in']"/>
          </a>
          <a href="#">
              <font-awesome-icon class="social-icon" :icon="['fab', 'youtube']"/>
          </a>
          <a href="#">
              <font-awesome-icon class="social-icon" :icon="['fab', 'github']"/>
          </a>
      </div>
      <div class="copyright">
          <span>
              © {{new Date().getFullYear()}} Company Inc. | 
          </span>
          <a href="#"> Privacy Policy |</a>
          <a href="#"> Terms of Service |</a>
          <a href="#"> Legal Policies</a>
      </div>
  </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
.footer-section{
    padding-top: 100px;
    padding-bottom: 80px;
    background-color: rgb(27, 26, 33);
    color: #fff;
}
.content-wrapper{
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto 40px auto;
    
}
.content-wrapper ul{
    list-style: none;
    min-width: 160px;
    line-height: 1.9;
    margin-bottom: 30px;
    /* flex-basis: 25%; */
}
.content-wrapper ul li{
    margin-right: 25px;
    border-radius: 4px;
    /* padding: 5px 30px 5px 8px; */
}
.list-title{
    font-size: 16px;
    padding: 5px 30px 5px 8px;
}
.list-item{
    padding: 5px 30px 5px 8px;
    color: inherit;
    text-decoration: none;
    border-radius: 4px;
    transition: 0.15s ease-in-out;
}
.list-item:hover{
     background: hsla(0,0%,100%,0.1);
}
.social-links{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.social-links a{
    color: #c2c1c7;
    padding: 10px 16px;
    transition: 0.2s ease-in-out;
}
.social-links a:hover{
    color: #fff; 
    transform: translateY(-1px);
}
.social-icon{
    font-size: 26px;
}
.copyright{
    font-size: 14px;
    text-align: center;
    color: #c2c1c7;
}
.copyright a{
    color: inherit;
    text-decoration: none;
}
.copyright a:hover, span:hover{
    color: #fff; 
    cursor: pointer;
}
@media only screen and (max-width: 419px){
    .content-wrapper{
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>