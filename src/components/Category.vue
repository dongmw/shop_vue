<template>
  <div id="wrapper">
    <div class="page-category" data-log="商品分类">

      <div class="page-category-wrap">

        <div class="list-wrap" id="m0" v-for="category in categories">
          <h3 class="list_title">{{category.name}}</h3>
          <ol class="list_category">

            <li v-for="c in category.children">
              <router-link :to="{ name: 'list', params:{ categoryId: c.id }}">
                <div class="img"><img :src="c.thumb"></div>
                <div class="name"><span>{{c.name}}</span></div>
              </router-link>
            </li>
          </ol>
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
  methods: {
    prepareComponent() {
      this.$http.get('http://localhost:8000/api/category').then((response) => {
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
