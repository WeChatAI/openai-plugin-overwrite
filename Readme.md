# 微信对话开放平台小程序插件复写示例


此项目为微信对话开放平台开源项目，用于微信开发者进行插件快速接入、 组件复写功能开发时的参考Demo。微信开发者可以参考项目中的代码来开发应用，也可以直接使用项目中的代码到自己的App中。

开发者可以自由使用并传播本代码，但需要保留原作者信息。

联系我们：wechatopenai@tencent.com


插件申请使用地址：

https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx8c631f7e9f2465e1

微信对话开放平台小程序插件复写示例提供了对插件的开放能力， 可以随意定制化。

> 请在 `project.config.json` 中配置自己小程序的appid或测试ID
> 此示例代码仅做为接入微信对话开放平台小程序插件的示例供开发者参考


![链接](./doc/one.jpg)
![链接](./doc/two.jpg)

## 1.普通文本组件复写示例

```json

{
  "usingComponents": {
    "customTextMessage": "../customTextMessage/customTextMessage"
  }
}

```

## 2.天气组件复写示例

```json

{
  "usingComponents": {
    "customWeatherMessage": "../customWeatherMessage/customWeatherMessage"
  }
}

```

## 3.图片组件复写示例

```json

{
  "usingComponents": {
    "customImageMessage": "../customImageMessage/customImageMessage"
  }
}

```

## 4.引导消息组件复写示例

```json

{
  "usingComponents": {
    "customGuideCard": "../customGuideCard/customGuideCard"
  }
}

```

## 5. 底部操作区域组件复写示例

```json

{
  "usingComponents": {
    "customOperateCard": "../customOperateCard/customOperateCard"
  }
}

```

## 6. query组件复写示例

```json

{
  "usingComponents": {
    "customQueryMessage": "../customQueryMessage/customQueryMessage"
  }
}

```

## 7. 音乐组件复写示例

```json

{
  "usingComponents": {
    "customMusicMessage": "../customMusicMessage/customMusicMessage"
  }
}

```

## 8. 新闻组件复写示例

```json

{
  "usingComponents": {
    "customNewsMessage": "../customNewsMessage/customNewsMessage"
  }
}

```

## 9. 暂不支持组件复写示例

```json

{
  "usingComponents": {
    "customUnsupportedMessage": "../customUnsupportedMessage/customUnsupportedMessage"
  }
}

```


## License Copyright (c) 2019 Tencent

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
