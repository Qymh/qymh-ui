// 构造全局样式
export default function createStyle(vm:any){
  let style:any={
    // 高
    height:vm.h===-1&&vm.row===-1?'auto':vm.h!==-1?`${(vm.h/10)}rem`:`${vm.row}%`,
    // 宽
    width:vm.w===-1&&vm.col===-1?'normal':vm.w!==-1?`${(vm.w/10)}rem`:`${vm.col}%`,
    // 定位
    position:vm.position,
    // top
    top:vm.t===-1?'auto':`${vm.t/10}rem`,
    // right
    right:vm.r===-1?'auto':`${vm.r/10}rem`,
    // bottom
    bottom:vm.b===-1?'auto':`${vm.b/10}rem`,
    // left
    left:vm.l===-1?'auto':`${vm.l/10}rem`,
  }

  for(let i in style){
    let item:string=style[i]
    if(item==='auto'||item==='static'||item==='normal'){
      delete style[i]
    }
  }
  
  return style
}