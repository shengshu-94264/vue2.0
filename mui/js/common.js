// $(function () {
//     // 监听tap事件，解决 a标签 不能跳转页面问题
//     mui('body').on('tap', 'a', function () {
//         document.location.href = this.href;
//     });
// })
// function getPa(name) {
//     // location.search ?isEdit=1
//     // substr 切割字符串 isEdit=1
//     // split('&') 按照&分割成数组 ["isEdit=1"]
//     var params = location.search.substr(1).split('&');

//     for (var i = 0; i < params.length; i++) {
//         // "isEdit=1" 按照&分割成数组 ["isEdit",1]
//         var param = params[i].split('=');

//         if (param[0] == name) {

//             return param[1];

//         }

//     }

//     return null;

// }
mui('body').on('tap', 'a', function () {
  document.location.href = this.href;
});