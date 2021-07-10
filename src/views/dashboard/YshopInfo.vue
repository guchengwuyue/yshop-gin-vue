<template>
  <el-row :gutter="10" class="panel-group">
    <el-col :xs="16" :sm="16" :lg="24" class="card-panel-col">
      <div class="card-panel">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">项目信息</span>
          </div>
          <div class="text item">
            <span style="font-weight: bolder">Beego-Vue-Go基于当前流行技术组合的前后端RBAC管理系统：</span>
            Go1.15.x+Beego2.x+Jwt+Redis+Mysql8+Vue
            的前后端分离系统，权限控制采用 RBAC，支持数据字典与数据权限管理，支持动态路由等
          </div>
          <div class="text item">
            <span style="font-weight: bolder">系统功能：</span><br>
            1、用户管理：提供用户的相关配置 <br>
            2、角色管理：对权限与菜单进行分配，可根据部门设置角色的数据权限 <br>
            3、菜单管理：已实现菜单动态路由，后端可配置化 <br>
            4、部门管理：可配置系统组织架构，树形表格展示 <br>
            5、岗位管理：配置各个部门的职位 <br>
            6、字典管理：可维护常用一些固定的数据，如：状态，性别等 <br>
          </div>
      
    
        </el-card>
      </div>
    </el-col>

  </el-row>
</template>
<script>

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .text {
    font-size: 16px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: auto;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
