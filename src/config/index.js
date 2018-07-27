import errorImage from '../images/default.png'


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
  bothWidth: true,
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

export const qradio = {
  type: 'rect',
  hasBorder: true,
  borderColor: '#a1a1a1',
  activeColor: '',
  activeBkColor: '',
  activeBorderColor: 'transparent'
}

export const qstepper = {
  color: '#F65A44',
  min: 0,
  max: '',
  fix: 4
}

export const qoverlay = {
  position: '',
  opacity: 0.3,
  bkColor: 'white',
  minHeight: 10,
  maxHeight: 13,
  show: false
}

export const qfiles = {
  multiple: true,
  maxCount: 3,
  maxSize: 4,
  value: '点击上传',
  hasBorder: true,
  borderColor: '#a1a1a1'
}

export const qimage = {
  preLoad: 1.3,
  loading: '',
  error: errorImage,
  attemp: 1
}

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

export const deepObjectMerge= (FirstOBJ, SecondOBJ) => {
  for (const key in SecondOBJ) {
      FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
          deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key]
  }
  return FirstOBJ
}