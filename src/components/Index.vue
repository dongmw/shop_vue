<template>
  <div id="wrapper">
    <div class="page-index" id="home" data-log="首页">
      <div class="index-header">
        <div class="search_bar">
          <a href="/1/#/search/index">
            <span class="icon icon-search"></span>
            <span class="text">搜索商品名称</span>
          </a>
        </div>
        <div class="search_bottom"></div>
      </div>

      <!--焦点图-->
      <section class="slider">
        <div class="flexslider">
          <ul class="slides">
            <li v-for="ad in index_ads">
              <a href=""><img :src="ad.thumb"/></a>
            </li>
          </ul>
        </div>
      </section>

      <!--推荐商品-->
      <div class="list">
        <div class="section">
          <div class="mcells_auto_fill">
            <div class="body">
              <div v-for="ad in banner_ads">
                <div class="items">
                  <img :src="ad.thumb"/>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div class="section" v-for="product in products">
          <div>
            <div class="item">
              <router-link :to="{ name: 'show', params:{ productId: product.id }}" >
              <div class="img">
                <img class="ico" :src="product.thumb"/>
                <img class="tag " src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">
              </div>
              </router-link>
              <div class="info">
                <div class="name"><p>{{product.name}}</p></div>
                <div class="brief"><p>{{product.desc}}</p></div>
                <div class="price"><p>{{product.price}}元 起</p></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Bottom></Bottom>
    </div>
  </div>
</template>

<script>
import Bottom from './Bottom'

export default {
  components: {
    Bottom
  },
  mounted() {
    this.prepareComponent()
  },
  updated() {
    this.slider()
  },
  methods: {
    prepareComponent() {
      this.$http.get('http://localhost:8000/api').then((response) => {
        console.log()
        this.index_ads = response.body.index_ads
        this.banner_ads = response.body.banner_ads
        this.products = response.body.products
      });
    },
    slider() {
      $(".flexslider").flexslider({
        animation: "slide",
        directionNav: false
      })
    }
  },
  data () {
    return {
      banner_ads: [],
      index_ads: [],
      products: [],
    }
  }
}















</script>
