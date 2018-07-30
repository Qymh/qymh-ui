const userConfig = process.env.UI_ENV
import {
  deepObjectMerge,
  toParse,
  qcell,
  qheadbar,
  qsearchbar,
  qtabbar,
  qtext,
  qtag,
  qinput,
  qradio,
  qstepper,
  qoverlay,
  qfiles,
  qimage,
  qscroll,
  $notice,
  $cookie
} from './config'

toParse(userConfig)

const baseConfig = {
  qcell,
  qheadbar,
  qsearchbar,
  qtabbar,
  qtext,
  qtag,
  qinput,
  qradio,
  qstepper,
  qoverlay,
  qfiles,
  qimage,
  qscroll,
  $notice,
  $cookie
}

const mergeConfig= deepObjectMerge(baseConfig,userConfig)

export default mergeConfig
