
# **乐七iOS命名规范**


## 证书和描述文件矩阵结构

|	  | 证书 .cer     | 推送证书.cer     | 描述文件 .mobileprovision
--------| -------- | ----------- | -----------
开发	| 开发证书     | 开发推送证书    | 开发描述文件  
发布	| 发布证书     | 发布推送证书     | 发布描述文件 


**说明**<br/>

-  开发证书和发布证书可对同一账号的多个应用进行使用 (**无需每次都下载**)<br/>
-  开发推送证书和发布推送证书只能对同一账号所选的一个应用进行使用<br/>
-  开发描述文件和发布描述文件只能对同一账号所选的一个应用进行使用<br/>

## 命名规则：

- [dev|pro]_帐号.cer(**无需每次都下载**)<br/>
- [dev|pro]_帐号.p12(**无需每次都导出**)<br/>
- [dev|pro]_包名.mobileprovision<br/>
- [dev|pro]_push_包名.cer<br/>
- 包名沙盒帐号.txt

**说明**<br/>

- dev为开发的涵义 <br/>
- pro为发布的涵义 <br/>
- p12由cer导出的带密码的文件
- push为推送的涵义 <br/>



**示例**<br/>
帐号为: 3497059616@qq.com
包名为: com.leqi.zgbhios<br/>

	dev_3497059616@qq.com.cer      
	pro_3497059616@qq.com.cer   
	dev_3497059616@qq.com.p12     
	pro_3497059616@qq.com.p12      
	dev_push_com.leqi.zgbhios.cer     
	pro_push_com.leqi.zgbhios.cer     
	dev_com.leqi.zgbhios.mobileprovision     
	pro_com.leqi.zgbhios.mobileprovision     
	com.leqi.zgbhios沙盒帐号.txt 


## 目录结构：  

### 本地目录结构
```
3497059616@qq.com
│   dev_3497059616@qq.cer      
│   pro_3497059616@qq.cer   
│   dev_3497059616@qq.p12     
│   pro_3497059616@qq.p12      
│	
└───主公别慌
│   │    dev_push_com.leqi.zgbhios.cer     
│   │    pro_push_com.leqi.zgbhios.cer 
│   │    dev_com.leqi.zgbhios.mobileprovision     
│   │    pro_com.leqi.zgbhios.mobileprovision     
│   │    com.leqi.zgbhios沙盒帐号.txt 
└───
```



### 导出给CP的目录结构
```
主公别慌
│    dev_3497059616@qq.p12     
│    pro_3497059616@qq.p12  
│    dev_push_com.leqi.zgbhios.cer     
│    pro_push_com.leqi.zgbhios.cer     
│    pro_com.leqi.zgbhios.mobileprovision     
│    com.leqi.zgbhios沙盒帐号.txt 
└───
```





## 附:关于证书和描述文件生成和应用相关配置
----

###  下载[请求文件](CertificateSigningRequest.certSigningRequest)
###  点击查看[**证书生成**](https://www.jianshu.com/p/8e73f7d31fab)
### 点击查看[**税务信息**](https://www.jianshu.com/p/c7cf65911bc1)
### 点击查看[**税务信息2**](https://www.jianshu.com/p/5ad7bfe1a836)
### 点击查看[**沙盒帐号**](https://www.jianshu.com/p/1ef61a785508)










  

