import Vue from 'vue'
const Tools = Object.create(null)

Tools.install = (Vue: any) => {
  Vue.prototype.$tools = {
    /**
     * 是否在微信
     * @returns 返回布尔值
     */
    isInWx(): boolean {
      let dev = navigator.userAgent.toLowerCase()
      return dev.includes('micromessenger')
    },
    /**
     * 清除左右空格
     * @param {String} value
     * @returns 清除后的value
     */
    clearEmpty(value: any): boolean {
      value = value.replace(/\s+$/g, '')
      value = value.replace(/^\s+/g, '')
      return value
    },
    /**
     * 检查是不是emoji
     * @param {String} value 值
     * @returns 返回布尔值
     */
    isEmoji(value: any): boolean {
      let emojiRexExp = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g
      let bool = emojiRexExp.test(value)
      return bool
    },

    /**
     * 检查是不是正确的邮箱
     * @param {String} value 值
     * @returns 返回布尔值
     */
    isEmail(value: any): boolean {
      let emailRegExp = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      let bool = emailRegExp.test(value)
      return bool
    },

    /**
     * 检查是不是正确的手机电话
     * @param {String} value 值
     * @returns 返回布尔值
     */
    isMobile(value: any): boolean {
      let mobileRexExp = /^[1][3,4,5,7,8][0-9]{9}$/
      let bool = mobileRexExp.test(value)
      return bool
    }
  }
}

Vue.use(Tools)
