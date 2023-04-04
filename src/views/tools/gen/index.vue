<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <div v-if="crud.props.searchToggle">
        <!-- 搜索 -->
        <el-input v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;" class="filter-item" @keyup.enter.native="crud.toQuery" />
        <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
          <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <rrOperation :crud="crud" />
      </div>
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <crudOperation :permission="permission" />
      <!--表单组件-->
      <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="60%">
      <cuser v-model="form.user"></cuser>
      </el-dialog>
      <!--表格渲染-->
      <el-table ref="table" v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
        <el-table-column type="selection" width="55" />
        <el-table-column v-if="columns.visible('tableId')" prop="tableId" label="id" width="55" />
        <el-table-column v-if="columns.visible('tableName')" prop="tableName" label="表名" />
        <el-table-column v-if="columns.visible('createTime')" prop="createTime" label="添加时间" >
          <template slot-scope="scope">
            <span>{{ formatTimeTwo(scope.row.createTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column v-permission="['admin']" label="操作" width="150px" align="center">
          <template slot-scope="scope">
          <el-button size="mini" style="margin-right: 2px" type="text">
            <router-link :to="'/sys-tools/gen/preview/' + scope.row.tableName">
              预览
            </router-link>
          </el-button>
          <el-button size="mini" style="margin-left: -1px;margin-right: 2px" type="text">
            <router-link :to="'/sys-tools/gen/config/' + scope.row.tableName">
              配置
            </router-link>
          </el-button>
          <el-button type="text" style="margin-left: -1px" size="mini" @click="toGen(scope.row.tableName)">生成</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <pagination />
    </div>
  </div>
</template>

<script>
import { generator } from '@/api/tools/gen'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
import cuser from '@/views/components/gen'
//import crudYxSystemStore from '@/api/yxSystemStore'
import { formatTimeTwo } from '@/utils/index'

// crud交由presenter持有
const defaultCrud = CRUD({ title: '门店店员', url: 'tools/gen/systables', sort: 'id,desc', crudMethod: { ...generator }, optShow: {
      add: true,
      edit: false,
      del: false,
      download: false
    },})
const defaultForm = { user: {uid: null,nickname: null,avatar: null}, id: null, uid: null, avatar: null, storeId: null, staffName: null, phone: null, verifyStatus: 1, status: null, addTime: null, nickname: null, storeName: null }
export default {
  name: 'YxSystemStoreStaff',
  components: { pagination, crudOperation, rrOperation, udOperation, cuser },
  mixins: [presenter(defaultCrud), header(), form(defaultForm), crud()],
  data() {
    return {
      mystores: [],
      permission: {
        add: ['admin', 'gen:add'],
        edit: ['admin', 'gen:edit'],
        del: ['admin', 'gen:del']
      },
      rules: {
        // uid: [
        //   { required: true, message: '微信用户id不能为空', trigger: 'blur' }
        // ],
        // avatar: [
        //   { required: true, message: '店员头像不能为空', trigger: 'blur' }
        // ],
        // storeId: [
        //   { required: true, message: '门店id不能为空', trigger: 'blur' }
        // ],
        // staffName: [
        //   { required: true, message: '店员名称不能为空', trigger: 'blur' }
        // ],
        // phone: [
        //   { required: true, message: '手机号码不能为空', trigger: 'blur' }
        // ],
        // verifyStatus: [
        //   { required: true, message: '核销开关不能为空', trigger: 'blur' }
        // ],
        // nickname: [
        //   { required: true, message: '微信昵称不能为空', trigger: 'blur' }
        // ]
      },
      queryTypeOptions: [
        { key: 'staffName', display_name: '店员名称' },
        { key: 'nickname', display_name: '微信昵称' }
      ]
    }
  },
  methods: {
    formatTimeTwo,
    // 获取数据前设置好接口地址
    [CRUD.HOOK.beforeRefresh]() {
      const query = this.query
      console.log('query:'+query.value)
      if (query.type && query.value) {
        this.crud.params[query.type] = query.value
      }else{
        delete this.crud.params.staffName
        delete this.crud.params.nickname
      }
      return true
    },
    //新增与编辑前做的操作
    [CRUD.HOOK.afterToCU](crud, form) {
      // crudYxSystemStore.getAll().then(res => {
      //    this.mystores= res
      // })
    },
    // 编辑前
    [CRUD.HOOK.beforeToEdit](crud, form) {
      this.form.user.uid = form.uid
      this.form.user.nickname = form.nickname
      this.form.user.avatar = form.avatar
    },
    [CRUD.HOOK.beforeSubmit]() {
      this.form.uid = this.form.user.uid
      this.form.nickname = this.form.user.nickname
      this.form.avatar = this.form.user.avatar
    },

    toGen(tableName) {
      // 生成代码
      generator(tableName, 0).then(data => {
        this.$notify({
          title: '代码已经成功生成在根目录template下',
          type: 'success',
          duration: 2500
        })
      })
    },

  }
}
</script>

<style scoped>

</style>
