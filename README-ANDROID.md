
**乐七Android-SDK**
---
* [项目介绍](#项目介绍)
* [更新说明](#更新说明)
* [常见问题](#常见问题)
* [注意事项](#注意事项)
* [下载链接](#下载链接)

项目介绍
---
##### [乐七Android聚合SDK项目](https://github.com/feiyouAndroidTeam/sdk2pc/blob/master/%E4%B9%90%E4%B8%83-android-sdk-v2.3.1.zip)，整合渠道SDK，对cp提供回调接口。目前SDK中提供的接口有:初始化、登录、创建订单、显示和隐藏悬浮窗、退出登录、切换用户。

更新说明
---
**当前版本：v2.3.4**
1. ###### 登录成功返回增加isAuthenticated（是否实名认证）、birthday（生日）两个字段

**版本：v2.3.3**
1. ###### 增加今日头条统计功能
2. ###### 修复之前的一些小问题

**版本：v2.3.2**
1. ###### 增加微信复制功能

**版本：v2.3.1**
1. ###### 将sdk版本号改成最新的2.3.1
2. ###### 创建订单增加支付取消的回调接口
3. ###### 更新SDK文档说明，详细描述创建订单所需参数的含义



常见问题
---
##### 1. 开发工具选择，到底是eclipse还是Androidstudio？
##### 答 : 这是一个eclipse项目，所以在选择开发工具时最好选择eclipse作为开发工具。
##### 2. 导入Android开发工具失败，找不到依赖？
##### 答 : 聚合SDK只是一个library，在引入的时候需要先创建项目，然后通过SDK文档说明，一步一步将所需的依赖文件添加进来，切不能直接把它当成项目来导入
##### 3. 很多cp厂商的开发在接入SDK时感觉不太好接的问题？
##### 答 : 我们都知道在接入第三方SDK时，通读SDK文档是非常重要的。但实际上从一些cp提问的问题上来看，他们很可能没有认真读SDK说明，很多问题明明可以通过文档来解决，他们却不断的提问，严重影响接入的速度。针对这个问题，我在SDK包中加入demo，有需要的可以自行下载。
##### 4. 关于创建订单支付成功后的校验问题？
##### 答 : 这个问题经常有人问到，这里做下统一解答。创建订单支付成功后，通过SDK的回调接口会将订单信息，商品信息，签名信息等一并返回，cp技术在拿到这些信息后，使用之前已经提供的key对这些信息进行签名，字段顺序按照服务端文档拼接，然后将签名后的字符串与回调接口返回的签名字符串进行比对，相同即表示成功，不同表示支付失败，这个过程是cp在后台自行验证


注意事项
---
##### 1. 接入SDK一定要通读SDK文档说明

下载链接
---
[乐七Android-SDKv2.3.4下载](https://github.com/YangChengTeam/sdk2cp/blob/master/lqGamesdk2.3.4.zip)  
[乐七Android-SDKv2.3.3下载](https://github.com/YangChengTeam/sdk2cp/blob/master/%E4%B9%90%E4%B8%83-android-sdk-v2.3.3.zip)  
[乐七Android-SDKv2.3.2下载](https://github.com/feiyouAndroidTeam/sdk2pc/blob/master/%E4%B9%90%E4%B8%83-android-sdk-v2.3.2.zip)  
[乐七Android-SDKv2.3.1下载](https://github.com/feiyouAndroidTeam/sdk2pc/blob/master/%E4%B9%90%E4%B8%83-android-sdk-v2.3.1.zip)


