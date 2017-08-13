<template>

  <div class="wrap">
    <form @submit.prevent.stop="onSubmit" method="POST">
    <div class="page-order-checkout">
      <div class="page-order-checkout-wrap">
        <div class="b1 icon_arrow">
          <router-link :to="{ name: 'address_list'}">

            <template v-if="address==null">
              <div class="b11"><p><span>没有收货地址!</span></p></div>
              <div class="b13">
                <p id="address" data-id="">
                  <span style="color:#FF5722;">亲, 请先填写一个收货地址~</span>
                </p>
              </div>
            </template>
            <template v-else>
              <div class="b11"><p><span>{{address.name}}</span><span>{{address.tel}}</span></p></div>
              <div class="b13">
                <p id="address" :data-id="address.id">
                  {{address.province}} {{address.city}} {{address.area}} {{address.detail}}
                </p>
              </div>
            </template>


          </router-link>
        </div>
        <div class="ui_line"></div>
        <div class="b2">
          <ul>
            <li class="on"><a href="javascript:;" class="alipaywap">微信支付</a></li>
            <li class=""><a href="javascript:;" class="">货到付款</a></li>
          </ul>
        </div>
        <div class="ui_line"></div>

        <div class="b8">

          <div class="b8w" v-for="cart in carts">
            <div class="b81">
              <div class="img"><img :src="cart.product.thumb">
              </div>
            </div>
            <div class="b82">
              <div class="name"><p>
                <span>{{cart.product.name}}</span></p></div>
            </div>
            <div class="b83">
              <div class="price num"><strong>{{cart.num}}件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{cart.product.price}}元</strong></div>
            </div>
          </div>


        </div>
        <div class="ui_line"></div>
        <div class="b5">
          <div class="b51"><p><strong>商品价格：</strong><span>{{count.total_price}}元</span></p></div>
          <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
        </div>
        <div class="b7">
          <div class="b71"><span>共{{count.num}}件 合计: </span><strong>{{count.total_price}}元</strong></div>

          <div class="b72">

            <input href="" class="ui-button" type="submit" value="去付款"></div>
          <input id="custom_display_8" class="sns-default-container sns_default_container"
                style="display: none;">
        </div>
      </div>
    </div>
    </form>
  </div>

</template>

<script>


  export default {
    data() {
      return {
        carts: [],
        count: [],
        address: [],
        customer_id: '',
      }
    },
    mounted() {
      this.prepareComponent();
    },
    methods: {
      /**
       * Prepare the component.
       */
      prepareComponent() {
      let token = localStorage.token
        this.customer_id = localStorage.customer_id

        if(!token) {
          this.$router.push({name: 'login'})
        }

        this.$http.post('http://localhost:8000/api/customer/check_token', {token: token}).then((response) => {
          let token = response.data;
          if(token.status == 0) {
            alert(token.msg);
            return false;
          }
          this.refresh_cart()
        });
      },
      refresh_cart(){
        this.$http.get('http://localhost:8000/api/order/checkout/?customer_id='+this.customer_id).then((response) => {
        this.carts = response.body.carts
        this.count = response.body.count
        this.address = response.body.address
      });
      },
      onSubmit () {
        this.$http.post('http://localhost:8000/api/order/store', this.customer_id).then(response => {
        this.$router.push({name: 'cart'})
          });
        },
    }
  }












</script>

