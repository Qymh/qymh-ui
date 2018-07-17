// 构造全局样式
export default function createStyle(vm: any) {
  let style: any = {
    /** 可选属性为auto **/

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
    // 定位
    position: vm.position,
    // top
    top:
      vm.t === -1
        ? 'auto'
        : typeof vm.t === 'number'
          ? `${vm.t / 10}rem`
          : `${vm.t}%`,
    // right
    right:
      vm.r === -1
        ? 'auto'
        : typeof vm.r === 'number'
          ? `${vm.r / 10}rem`
          : `${vm.r}%`,
    // bottom
    bottom:
      vm.b === -1
        ? 'auto'
        : typeof vm.b === 'number'
          ? `${vm.b / 10}rem`
          : `${vm.b}%`,
    // left
    left:
      vm.l === -1
        ? 'auto'
        : typeof vm.l === 'number'
          ? `${vm.l / 10}rem`
          : `${vm.l}%`,
    // 字体
    fontSize: vm.fontSize === -1 ? 'inherit' : `${vm.fontSize}px`,

    /** 可选属性为空 **/

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
    borderRadius:
      vm.radius === -1
        ? ''
        : typeof vm.radius === 'number'
          ? `${vm.radius / 10}rem`
          : `${vm.radius}%`,

    // color
    color: vm.color,
    // 背景颜色
    backgroundColor: vm.bkColor,
    // text-align
    textAlign: vm.textAlign,
    // z-index
    zIndex: vm.zIndex,
    // display
    display: vm.display,
    // vertical-align
    verticalAlign: vm.vertical,
    // overflow
    overflow: vm.overflow,
    // word-break
    wordBreak: vm.wordBreak,
    // text-indent
    textIndent: vm.indent === -1 ? '' : `${vm.indent / 10}rem`,
    // text-decoration
    textDecoration: vm.decoration === 'none' ? '' : vm.decoration,
    // border
    border: vm.border || '',
    // border-top
    borderTop: vm.borderTop || '',
    // border-right
    borderRight: vm.borderRight || '',
    // border-bottom
    borderBottom: vm.borderBottom || '',
    // border-left
    borderLeft: vm.borderLeft || ''
  }

  for (let i in style) {
    let item: string = style[i]
    if (
      item === '' ||
      (item === 'auto' && i !== 'overflow') ||
      item === 'inherit' ||
      item === 'static' ||
      item === 'normal' ||
      item === 'baseline' ||
      item === 'visible' ||
      (item === 'none' && i === 'textDecoration')
    ) {
      delete style[i]
    }
    // 更符合移动端overflow auto的标准
    if (i === 'overflow' && (item === 'auto' || item === 'scroll')) {
      style['-webkit-overflow-scrolling'] = 'touch'
    }
  }

  return style
}
