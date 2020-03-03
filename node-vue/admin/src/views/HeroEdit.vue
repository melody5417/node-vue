<template>
    <div>
        <h1>{{ id ? '编辑' : '新建'}}英雄</h1>
        <!--     原生表单阻止默认提交跳转页面       -->
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-tabs type="border-card" value="first">
                <el-tab-pane label="基本信息" name="first">
                    <el-form-item label="名称">
                        <el-input v-model="model.name"></el-input>
                    </el-form-item>
                    <el-form-item label="称号">
                        <el-input v-model="model.title"></el-input>
                    </el-form-item>
                    <el-form-item label="分类">
                        <el-select v-model="model.categories" placeholder="请选择" multiple>
                            <el-option
                                    v-for="item in categories"
                                    :key="item._id"
                                    :label="item.name"
                                    :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="难度">
                        <el-rate style="margin-top: 0.6rem" :max="9" v-model="model.scores.difficult"></el-rate>
                    </el-form-item>
                    <el-form-item label="技能">
                        <el-rate style="margin-top: 0.6rem" :max="9" v-model="model.scores.skills"></el-rate>
                    </el-form-item>
                    <el-form-item label="攻击">
                        <el-rate style="margin-top: 0.6rem" :max="9" v-model="model.scores.attack"></el-rate>
                    </el-form-item>
                    <el-form-item label="生存">
                        <el-rate style="margin-top: 0.6rem" :max="9" v-model="model.scores.survive"></el-rate>
                    </el-form-item>
                    <el-form-item label="顺风出装">
                        <el-select v-model="model.items1" placeholder="请选择" multiple>
                            <el-option
                                    v-for="item in items"
                                    :key="item._id"
                                    :label="item.name"
                                    :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="逆风出装">
                        <el-select v-model="model.items2" placeholder="请选择" multiple>
                            <el-option
                                    v-for="item in items"
                                    :key="item._id"
                                    :label="item.name"
                                    :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="使用技巧">
                        <el-input v-model="model.usageTips"></el-input>
                    </el-form-item>
                    <el-form-item label="对抗技巧">
                        <el-input v-model="model.battleTips"></el-input>
                    </el-form-item>
                    <el-form-item label="团战思路">
                        <el-input v-model="model.teamTips"></el-input>
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
                </el-tab-pane>
                <el-tab-pane label="技能" name="second">
                    <el-button type="text" @click="model.skills.push({})">
                        <i class="el-icon-plus"></i>
                        添加技能
                    </el-button>
                    <el-row type="flex" style="flex-wrap: wrap">
                        <el-col :md="12" v-for="(item, index) of model.skills" :key="index">
                            <el-form-item label="名称">
                                <el-input v-model="item.name"></el-input>
                            </el-form-item>
                            <el-form-item label="图标">
                                <el-upload
                                        class="avatar-uploader"
                                        :action="$http.defaults.baseURL + '/upload'"
                                        :show-file-list="false"
                                        :on-success="res => $set(item, 'icon', res.url)"
                                        :before-upload="beforeAvatarUpload">
                                    <img v-if="item.icon" :src="item.icon" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="描述">
                                <el-input type="textarea" v-model="item.desc"></el-input>
                            </el-form-item>
                            <el-form-item label="注意">
                                <el-input type="textarea" v-model="item.tips"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <el-form-item>
                <el-button style="margin-top: 30px" type="primary" native-type="submit">保存</el-button>
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
          avatar: '',
          scores: {
            difficult: 0,
            skills: 0,
            attack:0,
            survive: 0
          },
          skills: []
        },
        categories: [],
        items: [],
      }
    },
    methods: {
      async save () {
        console.log('save', this.mode)
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
        console.log('fetch', res)
        // this.model = res.data // 这种赋值方式 遇到空的属性渲染时会报错
        this.mode = Object.assign(this.model, res.data) // 采用合并的方式赋值，若属性为null 不会赋值 影响到现有属性数据
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
      },
      async fetchCategories () {
        const res = await this.$http.get('/rest/categories')
        this.categories = res.data
      },
      async fetchItems () {
        const res = await this.$http.get('/rest/items')
        this.items = res.data
      }
    },
    created() {
      this.fetchCategories()
      this.fetchItems()
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