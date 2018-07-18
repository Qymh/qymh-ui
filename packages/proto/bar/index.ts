// 构造全局样式
export default function createStyle(vm: any) {
  const style: any = {
    // 选属性为auto

    // 高
    height:
      vm.h === -1 && vm.row === -1
        ? 'auto'
        : vm.h !== -1
          ? `${vm.h / 10}rem`
          : `${vm.row}%`,
    // 行高
    lineHeight: vm.lh === -1 ? 'auto' : `${vm.lh / 10}rem`,
    // 宽
    width:
      vm.w === -1 && vm.col === -1
        ? 'normal'
        : vm.w !== -1
          ? `${vm.w / 10}rem`
          : `${vm.col}%`,
    // 字体
    fontSize: vm.fontSize === -1 ? 'inherit' : `${vm.fontSize}px`,

    // 可选属性为空

    // margin-top
    marginTop: vm.mt === 0 ? '' : `${vm.mt / 10}rem`,
    // margin-right
    marginRight: vm.mr === 0 ? '' : `${vm.mr / 10}rem`,
    // margin-bottom
    marginBottom: vm.mb === 0 ? '' : `${vm.mb / 10}rem`,
    // margin-left
    marginLeft: vm.ml === 0 ? '' : `${vm.ml / 10}rem`,
    // padding-top
    paddingTop: vm.pt === 0 ? '' : `${vm.pt / 10}rem`,
    // padding-right
    paddingRight: vm.pr === 0 ? '' : `${vm.pr / 10}rem`,
    // padding-bottom
    paddingBottom: vm.pb === 0 ? '' : `${vm.pb / 10}rem`,
    // padding-left
    paddingLeft: vm.pl === 0 ? '' : `${vm.pl / 10}rem`,
    // border-radius
    borderRadius: vm.radius === 0 ? '' : `${vm.radius / 10}rem`
  }

  for (const i in style) {
    if (style.hasOwnProperty(i)) {
      const item: string = style[i]
      if (item === 'auto' || item === 'inherit' || item === 'normal') {
        delete style[i]
      }
    }
  }
  return style
}
