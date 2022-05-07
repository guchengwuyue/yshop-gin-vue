<template>
  <el-row :gutter="10" class="panel-group">
    <el-col :xs="16" :sm="16" :lg="24" class="card-panel-col">
      <div class="card-panel">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">项目信息</span>
          </div>
          <div class="text item">
            <span style="font-weight: bolder">yshop-gin基于当前流行技术组合的前后端商城管理系统：</span>
            yshop-gin意象商城后台管理系统(目前版本v1.2)基于当前流行技术组合的前后端商城管理系统：Gin+Gorm+Casbin+Jwt+Redis+Mysql8+Vue
的前后端分离电商管理系统，权限控制采用RBAC，支持商城商品加入购物车、下单、评价、支付（微信支付与余额支付）、搜索、地址管理、快递鸟查询、多级分类，商品管理、商品sku、图片素材、数据字典与数据权限管理，支持动态路由等
          </div>
          <div class="text item">
            <span style="font-weight: bolder">已经实现pc商城功能：</span><br>
            1、首页轮播图 <br>
            2、首页商品展示 <br>
            3、商品详情及其sku <br>
            4、商品加入购物车 <br>
            5、商品下单 <br>
            6、商品支付（微信与余额支付） <br>
            7、商品个人订单管理 <br>
            8、商品的收藏 <br>
            9、商品的地址管理 <br>
           10、商品的评价管理 <br>
           11、快递鸟快递查询 <br>
           12、商品分类等搜索 <br>
           13、个人中心图像上传等 <br>
          </div>
          <div class="text item">
            <span style="font-weight: bolder">已经实现商城后台系统功能：</span><br>
            1、用户管理：提供用户的相关配置 <br>
            2、角色管理：对权限与菜单进行分配，可根据部门设置角色的数据权限 <br>
            3、菜单管理：已实现菜单动态路由，后端可配置化 <br>
            4、部门管理：可配置系统组织架构，树形表格展示 <br>
            5、岗位管理：配置各个部门的职位 <br>
            6、字典管理：可维护常用一些固定的数据，如：状态，性别等 <br>
            7、素材管理：图片素材库 <br>
            8、分类管理：商品多级分类 <br>
            9、sku管理：商品sku规则管理 <br>
           10、商品管理：可以添加单规格或者多规格商品含有百度编辑器 <br>
           11、订单管理：对订单发货查看详情等操作 <br>
           12、物流快递：实现了快递鸟基本查询功能 <br>
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
