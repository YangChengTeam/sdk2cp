**游戏对接基本流程**
----

**基本信息提供**
----
一般如下信息由：渠道对接**统一打包**提供给cp对接方<br/>

- **渠道后台**
	**根据【游戏名称】将游戏信息录入后台生成相关参数** <br/>
	&nbsp;&nbsp;&nbsp;&nbsp;1. appid=编号<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;2. gameid=编号<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;3. appkey=秘钥<br/>

- **客户端**
	**提供SDK相关的文件**<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;1.SDK<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;2.SDK文档<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;3.SDK Demo<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;4.说明文档<br/>

- **后台**<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;服务器对接文档<br/>

- **cp**<br />
  **支付回调地址**
  **如果是iOS还需提供**<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;a.iap相关信息<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;b.测试设备id信息<br/>

附加信息提供
---

- **iOS 渠道提供相关信息**<br/>
	1.提供appid<br/>
	2.提供证书 在钥匙串中进行安装<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.开发证书p12(从苹果开发者后台下载后 由Mac 钥匙串或Window下相关软件导出 需设置密码)<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.发布证书p12(从苹果后台下载后 由Mac 钥匙串或Window下相关软件导出 需设置密码)<br/>
	3.推送证书<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.开发推送证书(从苹果后台下载)<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.发布推送证书(从苹果后台下载)<br/>
	4.描述文件<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.开发描述文件（从苹果后台下载）<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.发布描述文件（从苹果后台下载）<br/>
	5.iap测试帐号<br/>

- **android 渠道确认相关信息**<br/>
	1.包名的要求<br/>
	2.是否需要二次签名<br/>
	3.开屏图片<br/>


对接过程中通常有如下问题：
----

SDK对接问题
----
**一般来说对接问题通常为二部分** <br/>

- cp对接程序员对sdk的不理解导致不会对接， 此时需要渠道SDK开发程序员协调对接。<br/>
- sdk的不完善或者存bug导致，此时需要渠道SDK开发程序员定位SDK问题协调对接</br>

支付回调问题
----

**一般出现问题需要渠道服务端和cp对接方协调对接**<br/>

游戏测试
----
cp对接方对接完游戏后<br/>
 **需提供游戏包给渠道进行测试**


上线
----
**测试没有问题后**<br/>
iOS: **上传到app Store 发布审核**<br/>
android: **上传到渠道后台进行打包分发**










  

