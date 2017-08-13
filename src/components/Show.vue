<template>

  <div id="wrapper" style="display: block">
    <div class="page-product-view" data-log="商品详情">

      <div class="header">
        <div class="left"><a
          onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-346f31c749f6e40d', '', 'pcpid']);history.go(-1)"
          class="home" data-stat-id="346f31c749f6e40d"><img src="http://s1.mi.com/m/images/m/icon_back_n.png"
                                                            class="ib"></a><!--vue-if--><!--vue-if--></div>
        <div class="tit"><!--vue-if--></div>
        <div class="right"><a href="javascript:;" data-event="30000000110001001" data-stat-id="6c93ea1c6bb6eb01"
                              onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-6c93ea1c6bb6eb01', 'javascript:;', 'pcpid']);">
          <div class="icon icon-search"></div>
        </a></div>
      </div>

      <div class="product-view">
        <div class="b1">
          <img :src="product.thumb">
        </div>
        <div class="b2">
          <div class="b21">
            <div class="b211">
              <div class="name"><p>{{product.name}} </p></div>
              <div class="price"><strong>{{product.price}}元</strong></div>
            </div>
            <div class="b212">
              <div class="icon-fenxiang"></div>
            </div>
          </div>
          <div class="b22">
            <!--去掉标签符号-->
              <div v-html="product.content"></div>
          </div>
        </div>
        <div class="mt20" style="display: none;"></div>

        <!--<ul class="b3">-->
        <!--<li><span class="on">白色</span></li>-->
        <!--</ul>-->

        <ul class="b3" style="display: none;">
          <li><span>通用</span></li>
        </ul>

        <div class="ui-b7">
          <h3>为您推荐</h3>
          <div class="ui-carousel-container">
            <div class="ui-carousel-viewport">
              <a href="/1/#/product/view?product_id=2392">
                <img src="http://i8.mifile.cn/v1/a1/T1NPx_BTZT1RXrhCrK.jpg?width=200&amp;height=200">
              </a>
              <a href="/1/#/product/view?product_id=2392">
                <img src="http://i8.mifile.cn/v1/a1/T1NPx_BTZT1RXrhCrK.jpg?width=200&amp;height=200">
              </a>
              <a href="/1/#/product/view?product_id=2392">
                <img src="http://i8.mifile.cn/v1/a1/T1NPx_BTZT1RXrhCrK.jpg?width=200&amp;height=200">
              </a>
            </div>
          </div>
        </div>
        <!--<div class="b5">-->
          <!--<div class="b51"></div>-->
          <!--<div class="b52">-->
            <!--<div class="blc">-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<div class="img">-->
                    <!--<img src="http://i1.mifile.cn/v1/a1/T1blVjBvJT1RXrhCrK.jpg?w=1080&amp;h=1920&amp;s=94.4">-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div class="img">-->
                    <!--<img src="http://i1.mifile.cn/v1/a1/T1blVjBvJT1RXrhCrK.jpg?w=1080&amp;h=1920&amp;s=94.4">-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div class="img">-->
                    <!--<img src="http://i1.mifile.cn/v1/a1/T1blVjBvJT1RXrhCrK.jpg?w=1080&amp;h=1920&amp;s=94.4">-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div class="img">-->
                    <!--<img src="http://i1.mifile.cn/v1/a1/T1blVjBvJT1RXrhCrK.jpg?w=1080&amp;h=1920&amp;s=94.4">-->
                  <!--</div>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <div class="b7">
          <div class="b70">
            <router-link :to="{ name: 'index' }">
                <div class="icon-home"></div>
            </router-link>
          </div>
          <div class="b72">
            <!--<a href="javascript:;" class="off">暂时缺货</a>-->
            <a href="javascript:;" @click="addCart">立即购买</a>
          </div>

          <div class="b73">
            <a href="/1/#/cart/index">
              <div class="icon-gouwuche"></div>
            </a>
          </div>
        </div>
        <a href="javascript:;" id="top" style="visibility: visible;">
          <img src="http://s1.mi.com/m/images/m/top.png">
        </a>
      </div>
      <div class="share-component"></div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.prepareComponent()
  },
  methods: {
    prepareComponent() {
    this.product_id = this.$route.params.productId

      this.$http.get('http://localhost:8000/api/show/'+this.product_id).then((response) => {
        console.log(response.body)
        this.product = response.body
      });
    },
    addCart() {
      let token = localStorage.token
      if(!token) {
        this.$router.push({name: 'login'})
      }

      this.$http.post('http://localhost:8000/api/customer/check_token', {token: token}).then((response) => {
        let token = response.data;
        if(token.status == 0) {
          alert(token.msg);
          return false;
        }


        let cart = {
          customer_id: localStorage.customer_id,
          product_id: this.product_id
        }
        this.$http.post('http://localhost:8000/api/cart', cart).then((response) => {
          this.$router.push({name: 'cart'})
        });

      });

    }
  },
  data () {
    return {
      product_id: '',
      product: {},
    }
  }
}
























</script>
