<h1 style="text-align: center">go-mall意象商城后台管理系统</h1>


#### 项目简介
go-mall意象商城后台管理系统(目前版本v1.3)基于当前流行技术组合的前后端商城管理系统：Go1.15.x+Beego2.x+Jwt+Redis+Mysql8+Vue
的前后端分离电商管理系统，权限控制采用RBAC，支持商城多级分类，商品管理、商品sku、图片素材、数据字典与数据权限管理，支持动态路由等

**体验地址：**  [https://go.yixiang.co](https://go.yixiang.co)

**账号密码：** `admin / 123456`


#### 项目源码

|     |   后端源码  |   前端源码  |
|---  |--- | --- |
|  码云  |  https://gitee.com/guchengwuyue/go-mall   |  https://gitee.com/guchengwuyue/go-mall-vue   |
|  github   | https://github.com/guchengwuyue/go-mall  |  https://github.com/guchengwuyue/go-mall-vue |


####  系统功能
- 用户管理：提供用户的相关配置 
- 角色管理：对权限与菜单进行分配，可根据部门设置角色的数据权限 
- 菜单管理：已实现菜单动态路由，后端可配置化 
- 部门管理：可配置系统组织架构，树形表格展示 
- 岗位管理：配置各个部门的职位 
- 字典管理：可维护常用一些固定的数据，如：状态，性别等 
- 日志管理：用户操日志记录 
- 素材管理：图片素材库 <br>
- 分类管理：商品多级分类 <br>
- sku管理：商品sku规则管理 <br>
- 商品管理：可以添加单规格或者多规格商品含有百度编辑器 <br>

#### 详细结构

```
- common 公共模块
    - jwt jwt模块
    - redis redis模块
    - untils 工具模块
    - constant.go 常量
- conf 公共配置
- controllers 控制器模块
	- admin 管理后台
	- app app模块
    - shop 商城模块
    - base.go 公共控制器
- fiters 过滤器
- initialize 初始化
- logs 日志存放
- models 公共模型
	- dto dto模块
	- vo vo模块
    - xxx.go 公共model
- routers 路由
- static 上传图片资源目录
- swagger swagger
- tests tests
```
#### 配置、启动、部署
```
1、安装go>=1.15,这个可以https://studygolang.com/dl下载

2、开启mod： go env -w GO111MODULE=on

3、配置代理：go env -w GOPROXY=https://goproxy.cn,direct 这个让下载依赖速度更快

4。下载项目：git clone https://gitee.com/guchengwuyue/go-mall.git

5、go mod tidy 安装所需依赖

6、导入sql/yshop_go.sql,修改conf/app.conf 里数据库与redis配置

7、bee run 启动即可

8、线上部署： bee pack  -be GOOS=linux  打包然后上传服务器命令： nohup ./yshop & 

9、配置nginx 反向代理即可
```
#### 功能说明
0、素材库
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/111026_1317d805_477893.png "suicai.png") |
|--|

1、商品分类
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/110639_af31d4e3_477893.png "shop1.png") |
|--|
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/110741_52c0ec39_477893.png "fenlei2.png") |
|--|
2、商品sku
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/110820_ca7f0034_477893.png "guige1.png") |
|--|
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/110830_c5221dae_477893.png "guige2.png") |
3、商品管理
|  ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/110908_81785443_477893.png "shangpin1.png")|
|--|
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/110917_2dbcfe03_477893.png "shangpin2.png") |
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/110938_0aee30d6_477893.png "shangpin3.png") |
|--|

4、系统用户
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/111101_7cc3c7f0_477893.png "yonghu.png") |
|--|
5、系统角色
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/111136_bdc744be_477893.png "juese.png") |
|--|
6、系统菜单
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/1009/111202_9ffbd62a_477893.png "caidan1.png") |
|--|


7、其他

|  ![输入图片说明](https://images.gitee.com/uploads/images/2021/0324/091742_84ebf16e_477893.png "01.png") | ![输入图片说明](https://images.gitee.com/uploads/images/2021/0324/091938_e3408f92_477893.png "02.png")  |
|---|---|
|  ![输入图片说明](https://images.gitee.com/uploads/images/2021/0324/092327_601b2411_477893.png "03.png") |  ![输入图片说明](https://images.gitee.com/uploads/images/2021/0324/092343_9cadff96_477893.png "04.png") |


#### 技术选型
* 1 后端使用技术
    * 1.1 beego2.x
    * 1.2 jwt
    * 1.3 redis
    * 1.5 Mysql8
    * 1.6 Go1.15.x
    * 1.7 copier
    * 1.8 ksuid
    * 1.9 Redis
    * 1.10 swagger
        
* 前端使用技术
    * 2.1 Vue 全家桶
    * 2.2 Element

#### 特别鸣谢

- beego:https://github.com/beego/beego/
- vue:https://github.com/vuejs/vue
- element:https://github.com/ElemeFE/element
- eladmin-web:https://github.com/elunez/eladmin-web
