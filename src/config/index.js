// q-cell
export const qcell = {
  bkColor: '',
  hasPadding: true,
  borderTop: false,
  borderBottom: false,
  borderColor: '#d6d7dc',
  leftIcon: '',
  leftIconColor: '',
  leftText: '',
  leftTextColor: '#333',
  leftWidth: '',
  title: '',
  titleColor: '',
  rightText: '',
  rightTextColor: '',
  rightArrow: false,
  rightArrowColor: '#a1a1a1',
  baseHeight: 1.2
}

// q-head-bar
export const qheadbar = {
  color: '',
  bkColor: '',
  bothWidth: 1,
  hasPadding: true,
  padding: 0.2,
  borderTop: false,
  borderBottom: false,
  borderColor: '#d6d7dc',
  leftEmpty: false,
  leftArrow: false,
  centerEmpty: false,
  centerText: '',
  centerTextColor: '',
  rightEmpty: false,
  rightArrow: false,
  rightText: '',
  rightTextColor: '',
  baseHeight: 1.2
}

// q-search-bar
export const qsearchbar = {
  color: '',
  bkColor: '',
  hasPadding: true,
  padding: 0.2,
  bothWidth: 1,
  borderTop: false,
  borderBottom: false,
  borderColor: '#d6d7dc',
  value: '',
  leftArrow: false,
  leftText: '',
  leftTextColor: '',
  searchBkColor: 'white',
  placeholder: '请输入...',
  clearable: false,
  rightText: '搜索',
  rightTextColor: '',
  baseHeight: 1.2
}

// q-tabbar
export const qtabbar = {
  bkColor: '',
  borderTop: '',
  borderBottom: '',
  borderColor: '#d6d7dc',
  baseHeight: 1.2
}

// q-text
export const qtext = {
  lines: 0
}

// q-tag
export const qtag = {
  bkColor: '#d6d7dc',
  color: 'white',
  fontSize: 12,
  value: '',
  hasBorder: false,
  hasRadius: true,
  borderColor: '#d6d7dc',
  active: false,
  activeBkColor: '',
  activeColor: 'white'
}

// q-input
export const qinput = {
  hasBorder: false,
  borderBottom: true,
  borderColor: '#d6d7dc',
  bkColor: '',
  color: '',
  type: 'text',
  fix: 4,
  placeholder: ''
}

// q-radio
export const qradio = {
  type: 'rect',
  hasBorder: true,
  borderColor: '#a1a1a1',
  activeColor: '',
  activeBkColor: '',
  activeBorderColor: 'transparent'
}

// q-stepper
export const qstepper = {
  color: '#F65A44',
  min: 0,
  max: '',
  fix: 4
}

// q-overlay
export const qoverlay = {
  position: '',
  opacity: 0.3,
  bkColor: 'white',
  minHeight: 10,
  maxHeight: 13,
  show: false
}

// q-files
export const qfiles = {
  multiple: true,
  maxCount: 3,
  maxSize: 4,
  value: '点击上传',
  hasBorder: true,
  borderColor: '#a1a1a1'
}

// q-image
export const qimage = {
  preLoad: 1.3,
  loading: '',
  attemp: 1,
  bkSize: 'contain',
  bkRepeat: 'no-repeat',
  bkPosition: '50%'
}

// q-scroll
export const qscroll = {
  // 下拉刷新
  down: (vm) => {
    return {
      // 是否启用
      use: true,
      // 是否初次调用
      auto: false,
      // 回调
      callback(mescroll) {
        vm.$emit('refresh')
      }
    }
  },
  // 上拉加载
  up: (vm) => {
    return {
      // 是否启用
      use: true,
      // 是否初次调用
      auto: true,
      // 是否启用滚动条
      scrollbar: {
        use: true
      },
      // 回调
      callback: (page, mescroll) => {
        vm.$emit('load', page)
      },
      // 无数据时的提示
      htmlNodata: '<p class="upwarp-nodata">-- 没有更多的数据 --</p>'
    }
  }
}

// $notice
export const $notice = {
  // 提醒
  toast: {
    position: 'bottom',
    timeout: 1500
  },
  // 弹窗
  confirm: {
    text: '请输入文字',
    btnLeft: '确定',
    btnRight: '取消'
  }
}

// $cookie
export const $cookie = {
  // 过期时间
  enpireDays: 7
}

// $axios
export const $axios = {
  // 是否输入日志
  log: true,
  // 超时
  timeout: 20000,
  // 请求拦截器
  requestFn: (config) => {
    return config
  },
  // 响应拦截器
  responseFn: (response) => {
    return response
  }
}

// 解析
export const toParse = (obj) => {
  for(let i in obj){
    let item=obj[i]
    if(typeof item === 'object'){
      toParse(item)
    }else if(typeof item === 'string'){
      if(item.indexOf('{')>-1){
        obj[i]=eval(`${item.trim()}`)
      }
    }
  }
}

// 深度拷贝
export const deepObjectMerge= (FirstOBJ, SecondOBJ) => {
  for (const key in SecondOBJ) {
      FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
          deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key]
  }
  return FirstOBJ
}