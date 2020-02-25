<template>
    <div>
        <h1>{{ id ? '编辑' : '新建'}}英雄</h1>
        <!--     原生表单阻止默认提交跳转页面       -->
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="头像">
                <!--$http.defaults 表示 http 的默认参数-->
                <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL + '/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="model.avatar" :src="model.avatar" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "HeroEdit",
    props: {
      id: {}    // 这样写尽可能的和路由解耦合 相比 this.$route.params.id
    },
    data () {
      return {
        model: {
          // 如果不想用 this.$set 来触发数据监听，就提前把属性加上
          name: '',
          avatar: ''
        }
      }
    },
    methods: {
      async save () {
        console.log('save')
        let res
        if (this.id) {
          res = await this.$http.put('/rest/heros/' + this.id, this.model)
        } else {
          res = await this.$http.post('/rest/heros', this.model)
        }
        console.log(res)
        this.$router.push('/heros/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      },
      async fetch () {
        const res = await this.$http.get('/rest/heros/' + this.id)
        this.model = res.data
      },
      handleAvatarSuccess(res, file) {
        console.log('res: ', res)
        console.log('file: ', file)

        // model没有定义属性 这种赋值方式可能无法触发数据监听渲染
        // 提前在model里定义了属性 就可以触发了 建议使用这种方式
        this.model.avatar = res.url
        // 可以触发数据监听进而渲染
        // this.$set(this.model, 'avatar', res.url)
      },
      beforeAvatarUpload(file) {
        console.log('file: ', file)
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    created() {
      this.id && this.fetch()
    }
  }
</script>

<style lang="stylus" scoped>
    .avatar-uploader, .el-upload
        width 178px
        height 178px
        border: 1px dashed #d9d9d9
        border-radius: 6px
        cursor: pointer
        position: relative
        overflow: hidden
    .avatar-uploader, .el-upload:hover
        border-color: #409EFF
    .avatar-uploader-icon
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    .avatar
        width: 178px;
        height: 178px;
        display: block;
</style>