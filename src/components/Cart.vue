<template>

  <div id="wrapper">
    <div class="cart-index">
      <div class="cart-index-wrap">
        <div class="cart-list">
          <ul>
            <li class="item" v-for="cart in carts">
              <div class="ui-box">
                <div class="imgProduct"><a href="/1/#/product/view?product_id=1141700025">
                  <img :src="cart.product.thumb"></a></div>
                <div class="info ui-box-flex">
                  <div class="name">
                    <span>{{cart.product.name}}</span>
                  </div>
                  <div class="price">
                    <p>
                      <span>售价：</span><span>{{cart.product.price}}元</span>
                      <span>合计：</span><span>{{cart.num*cart.product.price}}元</span>
                    </p>
                    <div class="tip">
                      <span style="display: none;">请于2016/05/10 22:59前下单，逾期将失效。</span>
                    </div>
                  </div>
                  <div class="num">
                    <div class="xm-input-number">
                      <div :class="[cart.num > 1 ? 'active' : '', 'input-sub']" @click="sub(cart.id, cart.num)"></div>
                      <div class="input-num"><span>{{cart.num}}</span></div>
                      <div class="input-add active" @click="add(cart.id)"></div>
                    </div>
                    <div class="delete">
                      <a href="javascript:void 0;" @click="destroy(cart.id)">
                        <span class="icon-iconfontshanchu"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="append"></div>
            </li>
          </ul>
        </div>
        <div class="pointBox">
          <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
          <div class="point">
            <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
          </div>
        </div>

        <!-- Navbar -->
        <div class="bottom-submit ui-box">
          <div class="price"><span>共{{count.num}}件 金额：</span><br><strong>{{count.total_price}}</strong><span>元</span></div>
          <div class="btn">
            <router-link :to="{ name: 'category'}" class="ui-button ui-button-disable"><span>继续购物</span></router-link>
          </div>
          <div class="btn">
            <router-link :to="{ name: 'checkout'}" class="ui-button">
              <span>去结算</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


  export default {
    data() {
      return {
        carts: [],
        count: [],
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
        this.$http.get('http://localhost:8000/api/cart?customer_id='+this.customer_id).then((response) => {
        this.carts = response.body.carts
        this.count = response.body.count
      });
      },
      sub(id, num){
        if(num==1) {
          alert('最少需要保持一件商品，如果不需要请删除！！');
          return false;
        }

        let data = {
          type: 'sub',
          customer_id: this.customer_id,
          id: id
        }
        this.$http.post('http://localhost:8000/api/cart/change_num', data).then((response) => {
          this.refresh_cart()
        });
      },
      add(id){
        let data = {
        type: 'add',
        customer_id: this.customer_id,
        id: id
      }
      this.$http.post('http://localhost:8000/api/cart/change_num', data).then((response) => {
          this.refresh_cart()
        });
      },
      destroy(id){
      this.$http.delete('http://localhost:8000/api/cart/'+id).then((response) => {
          this.refresh_cart()
        });
      },
    }
  }












</script>

