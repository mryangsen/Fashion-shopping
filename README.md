## 配置
### pxtrem配置
+ 安装依赖
```shell
    npm install lib-flexible –-save
    npm install postocss-pxtorem -dev
```
+ 添加meta
```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

```

+ 引入文件

```
    main.js  import 'lib-flexible'
```

+ 配置postcss-pxtorem
```shell
   
    postcss
    module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      "rootValue": 75, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
      "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
   }
  }
}



```

### 配置别名

```shell
  const path = require('path');
  function resolve (dir) {
      return path.join(__dirname, dir)
  }
  console.log('vue.config.js ============>')
  module.exports = {
    chainWebpack: (config)=>{
      config.resolve.alias
          .set('@assets',resolve('src/assets'))
          .set('@components',resolve('src/components'))
          .set('@static',resolve('src/static'))
    }
  }

```

### icon
> https://justineo.github.io/vue-awesome/demo/



