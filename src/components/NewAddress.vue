<template>

  <div id="wrapper">
    <div class="page-address-edit" data-log="地址">
    <form @submit.prevent.stop="onSubmit" method="POST">
      <div class="edit-box">
        <ul class="ui-list">
          <li class="ui-list-item">
            <div class="label">收  货  人：</div>
            <div class="ui-input"><input v-model="address.name" placeholder="真实姓名" name="name" maxlength="15" type="text"></div>
          </li>
          <li class="ui-list-item">
            <div class="label">手机号码：</div>
            <div class="ui-input"><input v-model="address.tel" placeholder="手机号" name="tel" maxlength="13" type="tel"></div>
          </li>
          <li class="ui-list-item">
            <div class="label">所在省份：</div>
            <div class="ui-input">
              <input v-model="address.province" placeholder="**省" name="province" maxlength="20" type="text"  value="">
            </div>
          </li>
          <li class="ui-list-item">
            <div class="label">所  在  市：</div>
            <div class="ui-input">
              <input v-model="address.city" placeholder="**市" name="city" maxlength="20" type="text"  value="">
            </div>
          </li>
          <li class="ui-list-item">
            <div class="label">所在区/县：</div>
            <div class="ui-input">
              <input v-model="address.area" placeholder="**区/县" name="area" maxlength="20" type="text"  value="">
            </div>
          </li>
          <li class="ui-list-item">
            <div class="label">街道（详细）地址：</div>
            <div class="ui-input"><input v-model="address.detail" placeholder="详细地址" name="detail" maxlength="120" type="text"></div>
          </li>
        </ul>
        <div class="save-button">
          <input class="ui-button" id="login-button" type="submit" value="保存地址">
          <span id="custom_display_8" class="sns-default-container sns_default_container"
                style="display: none;"></span>


        </div>
      </div>
    </form>




      <!--<div class="popup-risk-check"></div>-->
    </div>
  </div>

</template>

<script>


  export default {
    data() {
      return {
        address: {},
      }
    },
    mounted() {
      this.prepareComponent();
    },
    methods: {

      prepareComponent() {
      let token = localStorage.token
        this.address['customer_id'] = localStorage.customer_id
        if(!token) {
          this.$router.push({name: 'login'})
        }
        this.$http.post('http://localhost:8000/api/customer/check_token', {token: token}).then((response) => {
          let token = response.data;
          if(token.status == 0) {
            alert(token.msg);
            return false;
          }
        });
      },
      onSubmit () {
        this.$http.post('http://localhost:8000/api/address/store', this.address).then(response => {
          this.$router.push({name: 'address_list'})
          });
        },
    }
  }












</script>

