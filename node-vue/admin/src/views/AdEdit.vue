<template>
    <div>
        <h1>{{ id ? '编辑' : '新建'}}广告位</h1>
        <!--     原生表单阻止默认提交跳转页面       -->
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="广告">
                <el-button type="text" @click="model.items.push({})">
                    <i class="el-icon-plus"></i>
                    添加广告
                </el-button>
                <el-row type="flex" style="flex-wrap: wrap">
                    <el-col :md="24" v-for="(item, index) of model.items" :key="index">
                        <el-form-item label="跳转链接">
                            <el-input v-model="item.url"></el-input>
                        </el-form-item>
                        <el-form-item label="图片" style="margin-top: 0.5rem">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL + '/upload'"
                                    :show-file-list="false"
                                    :on-success="res => $set(item, 'image', res.url)"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="item.image" :src="item.image" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                    size="small"
                                    type="danger"
                                    @click="model.items.splice(i, 1)"
                            >
                                删除
                            </el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'AdEdit',
  props: {
    id: {} // 这样写尽可能的和路由解耦合 相比 this.$route.params.id
  },
  data () {
    return {
      model: {
        items: []
      }
    }
  },
  methods: {
    async save () {
      console.log('save', this.model)
      let res
      if (this.id) {
        res = await this.$http.put('/rest/ads/' + this.id, this.model)
      } else {
        res = await this.$http.post('/rest/ads', this.model)
      }
      console.log(res)
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get('/rest/ads/' + this.id)
      console.log('fetch: ', res.data)
      // 赋值注意 次序很重要
      this.model = Object.assign({}, this.model, res.data)
    },
    beforeAvatarUpload (file) {
      console.log('file: ', file)
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>

<style scoped>

</style>
