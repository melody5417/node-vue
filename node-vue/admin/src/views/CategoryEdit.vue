<template>
    <div>
        <h1>创建分类</h1>
        <el-form>
            <!--     原生表单阻止默认提交跳转页面       -->
            <el-form-item label="名称" label-width="120px" @submit.native.prevent="save">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "CategoryEdit",
    data () {
      return {
        model: {}
      }
    },
    methods: {
      async save () {
        console.log('save')
        const res = await this.$http.post('categories', this.model)
        console.log(res)
        this.$router.push('/categories/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
    }
  }
</script>

<style scoped>

</style>