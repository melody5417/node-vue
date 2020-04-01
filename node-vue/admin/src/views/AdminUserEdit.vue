<template>
    <div>
        <h1>{{ id ? '编辑' : '新建'}}管理员</h1>
        <!--     原生表单阻止默认提交跳转页面       -->
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "AdminUserEdit",
    props: {
      id: {}    // 这样写尽可能的和路由解耦合 相比 this.$route.params.id
    },
    data () {
      return {
        model: {}
      }
    },
    methods: {
      async save () {
        console.log('save', this.model)
        let res
        if (this.id) {
          res = await this.$http.put('/rest/admin_users/' + this.id, this.model)
        } else {
          res = await this.$http.post('/rest/admin_users', this.model)
        }
        console.log(res)
        this.$router.push('/admin_users/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      },
      async fetch () {
        const res = await this.$http.get('/rest/admin_users/' + this.id)
        console.log('fetch: ', res.data)
        this.model = res.data
      }
    },
    created() {
      this.id && this.fetch()
    }
  }
</script>

<style scoped>

</style>