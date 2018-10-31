## electron boilerplate
一个electron的react模板，现已经支持热加载。

#### how to use
```bash
yarn install # 安装依赖
yarn dev:render [--re-dll] # 开启热加载, re-dll: rebuild dll
yarn start # 启动electron
```

#### tips
如果修改了dll内容的话记得要删掉dist文件夹或者删掉里面的`vendor-manifest.json`文件，这样就会重新构建了

#### TODO
* [x] 添加ui库
* [x] 添加state库
* [x] 添加router库
* [x] 添加dll
* [x] 使用react.lazy特性，动态加载
* [x] 用node脚本代替shell