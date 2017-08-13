<template>
  <div id="wrapper" style="display: block">
    <div class="layout" id="layout">
      <!--表单输入登录-->
      <div class="mainbox" id="login-main">
        <!-- header s -->
        <div class="lgnheader">
          <div class="header_tit t_c">
            <em id="custom_display_1" class="milogo"></em>
            <h4 class="header_tit_txt" id="login-title">长乐帐号登录</h4>
            <div class=" site_info"></div>
          </div>
        </div>
        <!-- header e -->
        <div>
          <div class="login_area">
            <form @submit.prevent.stop="onSubmit" method="POST" id="login-main-form">
              <div class="loginbox c_b">
                <!-- 输入框 -->
                <div class="lgn_inputbg c_b">
                  <!--验证用户名-->
                  <div class="single_imgarea" id="account-info">
                    <div class="na-img-area" id="account-avator" style="display:none">
                      <div class="na-img-bg-area" id="account-avator-con"></div>
                    </div>
                    <p class="us_name" id="account-displayname"></p>
                    <p class="us_id"></p>
                  </div>
                  <label id="region-code" class="labelbox login_user c_b" for="">

                    <input class="item_account" autocomplete="off" type="text" placeholder="邮箱" v-model="user.email">
                  </label>
                  <div class="country-container" id="countrycode_container" style="display: none;">
                    <div class="country_container_con" id="countrycode_container_con"></div>
                  </div>
                  <label class="labelbox pwd_panel c_b">
                    <div class="eye_panel pwd-visiable">
                      <i class="eye pwd-eye">
                        <svg width="100%" height="100%" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                          <path class="eye_outer"
                                d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"></path>
                          <circle class="eye_inner" cx="10" cy="8" r="3"></circle>
                        </svg>
                      </i>
                    </div>
                    <input type="password" placeholder="密码" autocomplete="off" v-model="user.password">
                    <input type="text" placeholder="密码" autocomplete="off" id="visiablePwd"
                           style="display:none">
                  </label>
                </div>


                <div class="btns_bg">
                  <input class="btnadpt btn_orange" id="login-button" type="submit" value="立即登录">
                  <span id="custom_display_8" class="sns-default-container sns_default_container"
                        style="display: none;">
                          </span>
                </div>

              </div>
            </form>
          </div>
        </div>


        <div class="n_links_area" id="custom_display_64">
          <router-link :to="{ name: 'register'}">注册长乐帐号</router-link>
        </div>
      </div>


    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    mounted() {
    },
    methods: {
      onSubmit() {
        this.$http.post('http://localhost:8000/api/customer/login', this.user)
          .then(response => {
            let customer = response.data;

            if (customer.status == 0) {
              alert(customer.msg);
              return false;
            }

            localStorage.customer_id = customer.msg.id;
            localStorage.token = customer.msg.remember_token;
            this.$router.go(-1)
          });
      }
    }
  }


</script>

