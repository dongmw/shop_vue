<template>

  <div id="wrapper">
    <div class="page-address-list" data-log="地址列表">
      <div class="address-choose">
        <ul class="ui-list">

          <li v-for="address in addresses" class="ui-list-item" @click="defaultAddress(address.id)"><p class="ui_fz30"><span class="consignee">{{address.name}}</span><span>{{address.tel}}</span>
          </p>
            <p>{{address.province}} {{address.city}} {{address.area}}</p>
            <p>{{address.detail}}</p>
          </li>
        </ul>
      </div>
      <div class="add">
        <router-link :to="{ name: 'new_address'}" class="ui-button ui-button-active">
        <span>新建地址</span>
        </router-link>
      </div>
      <div class="popup-risk-check"></div>
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

        this.$http.get('http://localhost:8000/api/address?customer_id=' + this.customer_id).then((response) => {
          this.addresses = response.body
        });


      });

    },
    defaultAddress(address_id){
      this.$http.patch('http://localhost:8000/api/address/default_address', {customer_id: this.customer_id, address_id: address_id}).then((response) => {
        this.$router.push({name: 'checkout'})
      });
    }
  },
  data () {
    return {
      addresses: []
    }
  }
}












</script>

