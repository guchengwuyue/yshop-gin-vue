<template>
  <div class="app-container">
    <el-row :gutter="15">
      <el-col style="margin-bottom: 10px">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span class="role-span">字段配置：{{ tableName }}</span>
            <el-button
              :loading="genLoading"
              icon="el-icon-s-promotion"
              size="mini"
              style="float: right; padding: 6px 9px;"
              type="success"
              @click="toGen"
            >保存&生成</el-button>
            <el-button
              :loading="columnLoading"
              icon="el-icon-check"
              size="mini"
              style="float: right; padding: 6px 9px;margin-right: 9px"
              type="primary"
              @click="saveColumnConfig"
            >保存</el-button>
        
          </div>
          <el-form size="small" label-width="90px">
            <el-table v-loading="loading" :data="data" :max-height="tableHeight" size="small" style="width: 100%;margin-bottom: 15px">
              <el-table-column prop="columnName" label="字段名称" />
              <el-table-column prop="columnType" label="字段类型" />
              <el-table-column  label="字段描述">
                <template slot-scope="scope">
                  <el-input v-model="data[scope.$index].columnComment" size="mini" class="edit-input" />
                </template>
              </el-table-column>
              <el-table-column align="center" label="必填" width="70px">
                <template slot-scope="scope">
                  <el-checkbox v-model="data[scope.$index].required" />
                </template>
              </el-table-column>
              <el-table-column align="center" label="列表" width="70px">
                <template slot-scope="scope">
                  <el-checkbox v-model="data[scope.$index].listShow" />
                </template>
              </el-table-column>
              <el-table-column align="center" label="表单" width="70px">
                <template slot-scope="scope">
                  <el-checkbox v-model="data[scope.$index].formShow" />
                </template>
              </el-table-column>
              <el-table-column label="表单类型">
                <template slot-scope="scope">
                  <el-select v-model="data[scope.$index].formType" filterable class="edit-input" clearable size="mini" placeholder="请选择">
                    <el-option
                      label="文本框"
                      value="Input"
                    />
                    <el-option
                      label="文本域"
                      value="Textarea"
                    />
                    <el-option
                      label="单选框"
                      value="Radio"
                    />
                    <el-option
                      label="下拉框"
                      value="Select"
                    />
                    <el-option
                      label="日期框"
                      value="Date"
                    />
                    <el-option
                      label="图片文件"
                      value="Imges"
                    />
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="查询方式">
                <template slot-scope="scope">
                  <el-select v-model="data[scope.$index].queryType" filterable class="edit-input" clearable size="mini" placeholder="请选择">
                    <el-option
                      label="="
                      value="="
                    />
                    <el-option
                      label="!="
                      value="!="
                    />
                    <el-option
                      label=">="
                      value=">="
                    />
                    <el-option
                      label="<="
                      value="<="
                    />
                    <el-option
                      label="Like"
                      value="Like"
                    />
                    <el-option
                      label="NotNull"
                      value="NotNull"
                    />
                    <el-option
                      label="BetWeen"
                      value="BetWeen"
                    />
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="关联字典">
                <template slot-scope="scope">
                  <el-select v-model="data[scope.$index].dictName" filterable class="edit-input" clearable size="mini" placeholder="请选择">
                    <el-option v-for="item in dicts" :key="item.id" :label="item.remark === '' ? item.name : item.remark" :value="item.name" />
                  </el-select>
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        </el-card>
      </el-col>
      <el-col>
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span class="role-span">生成配置</span>
            <el-button
              :loading="configLoading"
              icon="el-icon-check"
              size="mini"
              style="float: right; padding: 6px 9px"
              type="primary"
              @click="doSubmit"
            >保存</el-button>
          </div>
          <el-form ref="form" :model="form" :rules="rules" size="small" label-width="78px">
             <el-form-item label="数据表名" prop="tableName">
              <el-input v-model="form.tableName" style="width: 40%" />
              <span style="color: #C0C0C0;margin-left: 10px;">数据表名</span>
            </el-form-item>
            <el-form-item label="作者名称" prop="functionAuthor">
              <el-input v-model="form.functionAuthor" style="width: 40%" />
              <span style="color: #C0C0C0;margin-left: 10px;">作者名称</span>
            </el-form-item>
            <el-form-item label="模型名称" prop="className">
              <el-input v-model="form.className" style="width: 40%" />
              <span style="color: #C0C0C0;margin-left: 10px;">结构体模型名称</span>
            </el-form-item>
            <el-form-item label="包名" prop="packageName">
              <el-input v-model="form.packageName" style="width: 40%" />
              <span style="color: #C0C0C0;margin-left: 10px;">项目包的名称</span>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crud from '@/mixins/crud'
import { update, get } from '@/api/tools/genConfig'
import { save, sync, generator } from '@/api/tools/gen'
import { getDicts } from '@/api/system/dict'
export default {
  name: 'GeneratorConfig',
  components: {},
  mixins: [crud],
  data() {
    return {
      activeName: 'first', tableName: '', tableHeight: 550, columnLoading: false, configLoading: false, dicts: [], syncLoading: false, genLoading: false,
      form: { id: null, tableName: '', functionAuthor: '', className: '', packageName: '' },
      rules: {
        functionAuthor: [
          { required: true, message: '作者不能为空', trigger: 'blur' }
        ],
        packageName: [
          { required: true, message: '包路径不能为空', trigger: 'blur' }
        ],
        className: [
          { required: true, message: '包路径不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.tableHeight = document.documentElement.clientHeight - 385
    this.tableName = this.$route.params.tableName
    this.$nextTick(() => {
      this.init()
      get(this.tableName).then(data => {
        this.form = data.data.content
        //this.form.cover = this.form.cover.toString()
      })
      getDicts().then(data => {
        this.dicts = data.data.content
      })
    })
  },
  methods: {
    beforeInit() {
      this.url = 'tools/gen/columns'
      const tableName = this.tableName
      this.params = { tableName }
      return true
    },
    saveColumnConfig() {
      this.columnLoading = true
      save(this.data).then(res => {
        this.notify('保存成功', 'success')
        this.columnLoading = false
      }).catch(err => {
        this.columnLoading = false
        console.log(err.response.data.message)
      })
    },
    doSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.configLoading = true
          update(this.form).then(res => {
            this.notify('保存成功', 'success')
            this.form = res
            this.configLoading = false
          }).catch(err => {
            this.configLoading = false
            console.log(err.response.data.message)
          })
        }
      })
    },
    sync() {
      this.syncLoading = true
      sync([this.tableName]).then(() => {
        this.init()
        this.notify('同步成功', 'success')
        this.syncLoading = false
      }).then(() => {
        this.syncLoading = false
      })
    },
    toGen() {
      this.genLoading = true
      save(this.data).then(res => {
        this.notify('保存成功', 'success')
        // 生成代码
        generator(this.tableName, 0).then(data => {
          this.genLoading = false
          this.notify('生成成功', 'success')
        }).catch(err => {
          this.genLoading = false
          console.log(err.response.data.message)
        })
      }).catch(err => {
        this.genLoading = false
        console.log(err.response.data.message)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .edit-input {
    .el-input__inner {
      border: 1px solid #e5e6e7;
    }
  }
</style>

<style scoped>
  ::v-deep .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
