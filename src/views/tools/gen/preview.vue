<template>
  <el-tabs v-model="activeName" type="card">
     <el-tab-pane v-for="(value,key) in data" :key="key" :lazy="true" :label="key" :name="key">
      <Java :value="value" :height="height" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Java from '@/components/JavaEdit/index'
import { preview } from '@/api/tools/gen'
export default {
  name: 'Preview',
  components: { Java },
  data() {
    return {
      data: null, height: '', activeName: 'controller'
    }
  },
  created() {
    this.height = document.documentElement.clientHeight - 180 + 'px'
    const tableName = this.$route.params.tableName
    preview(tableName).then(data => {
      this.data = data.data
    }).catch(() => {
      this.$router.go(-1)
    })
  }
}
</script>
