<template>
  <div>
      <div class="app-container">
      <!--工具栏-->
      <div class="head-container">
        <!-- 搜索 -->
        <el-input v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery" />
        <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
          <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
        <!-- 新增 -->
        <el-button
          type="danger"
          class="filter-item"
          size="mini"
          icon="el-icon-refresh"
          @click="toQuery"
        >刷新</el-button>
      </div>

      <!--表格渲染-->
      <el-table  :data="data" size="small" style="width: 100%;">
        <el-table-column prop="tableName" label="表名称" />
        <el-table-column prop="engine" label="表引擎" />
        <el-table-column prop="tableComment" label="表描述" />
        <el-table-column  label="操作" width="185" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="doSelect(scope.row)"
            >选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <el-pagination
        :total="total"
        :current-page="page + 1"
        style="margin-top: 8px;"
        layout="total, prev, pager, next, sizes"
        @size-change="sizeChange"
        @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
import checkPermission from '@/utils/permission'
import initData from '@/mixins/crud'
import { crud } from '@crud/crud'
import { importTable } from '@/api/tools/gen'
export default {
  components: {},
  mixins: [initData,crud()],
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      myValue: this.value,
      delLoading: false, dialog: false,
      userType: '',
      queryTypeOptions: [
        { key: 'blurry', display_name: '表名' },
        // { key: 'phone', display_name: '手机号码' }
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    checkPermission,
    beforeInit() {
      this.url = 'tools/gen/tables'
      const sort = 'uid,desc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const type = query.type
      const value = query.value
      if (type && value) { this.params[type] = value }
      return true
    },
    deleteUser() {
      const that = this
      this.$confirm('是否确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        //that.myValue = {uid: null,nickname: null,avatar: null}
        that.$set(that.value,"uid", null)
        that.$set(that.value,"nickname", null)
        that.$set(that.value,"avatar", null)
      })
    },
    toSelete() {
      this.dialog = true
    },
    doSelect(data) {
      importTable({ tableName: data.tableName }).then(res => {
        console.log("55555")
        //this.crud.cancelDelete()
        this.crud.cancelCU()
        this.crud.refresh()
        //this.$message.success('导入成功！');
        //cancelCU
        //this.dialog = false
      
      })
      //this.$set(this.value,"uid", data.uid)
     // this.$set(this.value,"nickname", data.nickname)
     // this.$set(this.value,"avatar", data.avatar)

      
    }

  }
}
</script>

<style scoped>
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
</style>
