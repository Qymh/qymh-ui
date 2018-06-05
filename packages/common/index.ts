// 构造全局样式
export function createStyle(vm:any){
  let style:any={
    /** 可选属性为auto **/

    // 高
    height:vm.h===-1&&vm.row===-1?'auto':vm.h!==-1?`${(vm.h/10)}rem`:`${vm.row}%`,
    // 行高
    lineHeight:vm.lh===-1?'auto':`${vm.lh/10}rem`,
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
    // 字体
    fontSize:vm.l===-1?'inherit':`${vm.fontSize}px`,

    /** 可选属性为空 **/

    // margin-top
    marginTop:vm.mt===0?'':`${vm.mt/10}rem`,
    // margin-right
    marginRight:vm.mr===0?'':`${vm.mr/10}rem`,
    // margin-bottom
    marginBottom:vm.mb===0?'':`${vm.mb/10}rem`,
    // margin-left
    marginLeft:vm.ml===0?'':`${vm.ml/10}rem`,
    // padding-top
    paddingTop:vm.pt===0?'':`${vm.pt/10}rem`,
    // padding-right
    paddingRight:vm.pr===0?'':`${vm.pr/10}rem`,
    // padding-bottom
    paddingBottom:vm.pb===0?'':`${vm.pb/10}rem`,
    // padding-left
    paddingLeft:vm.pl===0?'':`${vm.pl/10}rem`,

    // color
    color:vm.color,
    // 背景颜色
    backgroundColor:vm.bkColor,
    // text-align
    textAlign:vm.textAlign
  }

  for(let i in style){
    let item:string=style[i]
    if(item==='auto'||item==='inherit'||item==='static'||item==='normal'){
      delete style[i]
    }
  }
  
  return style
}

// 构造尺寸样式
export function createSize(vm:any){
  let style:any={
    // 高
    height:vm.h===-1&&vm.row===-1?'auto':vm.h!==-1?`${(vm.h/10)}rem`:`${vm.row}%`,
    // 行高
    lineHeight:vm.lh===-1?'auto':`${vm.lh/10}rem`,
    // 宽
    width:vm.w===-1&&vm.col===-1?'normal':vm.w!==-1?`${(vm.w/10)}rem`:`${vm.col}%`,

  }

  for(let i in style){
    let item:string=style[i]
    if(item==='auto'||item==='normal'){
      delete style[i]
    }
  }
  
  return style
}

// 构造边距样式
export function createDistance(vm:any){
  let style:any={
    // margin-top
    marginTop:vm.mt===0?'':`${vm.mt/10}rem`,
    // margin-right
    marginRight:vm.mr===0?'':`${vm.mr/10}rem`,
    // margin-bottom
    marginBottom:vm.mb===0?'':`${vm.mb/10}rem`,
    // margin-left
    marginLeft:vm.ml===0?'':`${vm.ml/10}rem`,
    // padding-top
    paddingTop:vm.pt===0?'':`${vm.pt/10}rem`,
    // padding-right
    paddingRight:vm.pr===0?'':`${vm.pr/10}rem`,
    // padding-bottom
    paddingBottom:vm.pb===0?'':`${vm.pb/10}rem`,
    // padding-left
    paddingLeft:vm.pl===0?'':`${vm.pl/10}rem`,
  }

  for(let i in style){
    let item:string=style[i]
    if(item===''){
      delete style[i]
    }
  }
  
  return style
}

// 构造定位样式
export function createPosition(vm:any){
  let style:any={
    // 定位
    position:vm.position,
    // top
    top:vm.t===-1?'auto':`${vm.t/10}rem`,
    // right
    right:vm.r===-1?'auto':`${vm.r/10}rem`,
    // bottom
    bottom:vm.b===-1?'auto':`${vm.b/10}rem`,
    // left
    left:vm.l===-1?'auto':`${vm.l/10}rem`
  }

  for(let i in style){
    let item:string=style[i]
    if(item==='auto'){
      delete style[i]
    }
  }
  
  return style
}

// 其余样式
export function createDetails(vm:any){
  let style:any={
    // 字体
    fontSize:vm.l===-1?'inherit':`${vm.fontSize}px`,
    // color
    color:vm.color,
    // 背景颜色
    backgroundColor:vm.bkColor
  }

  for(let i in style){
    let item:string=style[i]
    if(item==='inherit'){
      delete style[i]
    }
  }
  
  return style
}