<template>
    <div>
        <h1>{{ id ? '编辑' : '新建'}}文章</h1>
        <!--     原生表单阻止默认提交跳转页面       -->
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="所属分类">
                <el-select v-model="model.categories" placeholder="请选择" multiple>
                    <el-option
                            v-for="item in categories"
                            :key="item._id"
                            :label="item.name"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <vue-editor v-model="model.body" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'ArticleEdit',
  components: {
    VueEditor
  },
  props: {
    id: {} // 这样写尽可能的和路由解耦合 相比 this.$route.params.id
  },
  data () {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    async save () {
      console.log('save', this.model)
      let res
      if (this.id) {
        res = await this.$http.put('/rest/articles/' + this.id, this.model)
      } else {
        res = await this.$http.post('/rest/articles', this.model)
      }
      console.log(res)
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get('/rest/articles/' + this.id)
      console.log('fetch: ', res.data)
      this.model = res.data
    },
    async fetchCatigories () {
      const res = await this.$http.get('/rest/categories/')
      this.categories = res.data
    }
  },
  created () {
    this.fetchCatigories()
    this.id && this.fetch()
  }
}
</script>

<style scoped>

</style>
