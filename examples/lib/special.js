// 安卓原生浏览器不支持的属性

// 字符includes
String.prototype.includes=function(item){
  var str=this
  return str.indexOf(item)>-1
}

// 数组includes
Object.defineProperty(Array.prototype,'includes',{
  writable:true,
  // 强制不可枚举
  enumerable:false,
  configurable:true,
  value:function(item){
    var arr=this
    return arr.indexOf(item)>-1
  }
})