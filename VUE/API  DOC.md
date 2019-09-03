# API  DOC

根据接口注释生成接口文档

- 第三方插件   

- <http://apidocjs.com/>

- npm  install apidoc -g    全局安装

- apidoc  -i(input)  你要把哪一个文件夹里的注释  变成接口文档 -o(output)   把生成的接口文件放到哪里去

- 在但钱文件夹下创建一个apidoc.json文件

- ```javascript
  {
      "name": "食品",
      "version": "12.13.8",
      "description": "那就这样吧的文档",
      "title": "玲珑骰子安红豆",
      "url" : "http://localhost:3000"
    }
  ```

- ```javascript
   * @api {post} /admin/food/findByKw   通过关键字查询商品信息
   * @apiName findByKw
   * @apiGroup /admin/food
   *
   * @apiParam {String}  kw  关键字
   *
   * @apiSuccess {Number} err  错误码
   * @apiSuccess {String} msg  错误信息
   * @apiSuccess {Array} list  查询的数据
  ```

- 

apidoc  -i(input)  将注释  变成接口文件    的目录   -g( output )   生成的接口文件将要放到那里去

apidoc.json

创建apidoc.json    文档的基本配置

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */



layer_close()

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6InpoYW5nc2FuIiwicHMiOiIxMjEzOCIsImlhdCI6MTU2NTQzODUzMiwiZXhwIjoxNTY1NDQyMTMyfQ.gybz2N3XKP1DEEm0hdCY0nNgV4Hmim183IZYWnfR97o