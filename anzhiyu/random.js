var posts=["2023/08/21/慎独/","2023/08/23/给小程序页面加侧边栏点击搜索对应内容111/","2023/08/22/若无闲事落心头，便是人间好时节/","2023/08/22/比“你好”更美的20个开场白/","2023/09/02/靡不有初/","2023/09/02/调用后端接口获取数据/","2023/08/29/页面跳转/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};