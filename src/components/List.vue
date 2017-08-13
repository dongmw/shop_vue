<template>

  <div id="wrapper">
    <div class="page-list" data-log="商品列表">
      <!--
      <div class="header">
          <div class="left">
              <a class="home"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></a>
          </div>
          <div class="tit"><h2 data-log="HEAD-标题-商品列表"><span class="title">商品列表</span></h2></div>

          <div class="right">
              <a href="/1/#/search/index">
                  <div class="icon icon-search"></div>
              </a>
          </div>
      </div>
      -->
      <ol class="version">
        <li v-for="product in categories.products">
          <router-link :to="{ name: 'show', params:{ productId: product.id }}" class="version-item" >
            <div class="version-item-img">
              <img :src="product.thumb">
            </div>
            <div class="version-item-intro">
              <div class="version-item-name"><p>{{product.name}}</p></div>
              <div class="version-item-intro-price"><span>{{product.price}}元</span></div>
            </div>
          </router-link>
        </li>

      </ol>

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
  methods: {
    prepareComponent() {
    var categoryId = this.$route.params.categoryId
    console.log(categoryId)
      this.$http.get('http://localhost:8000/api/list/'+categoryId).then((response) => {
        console.log(response.body)
        this.categories = response.body


      });
    }
  },
  data () {
    return {
      categories: [],
    }
  }
}























</script>
