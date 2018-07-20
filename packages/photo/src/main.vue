<template>
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter"></div>
          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div> 
        </div>
        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
        </button>
        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
        </button>
        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

@Component({})
export default class QPhoto extends Vue {
  // 传入的图片
  @Prop({ default: [] })
  private images: string[]

  // 是否正在读取图片
  private isLoading: boolean = false

  // 加载图片
  private loadImage(img: any) {
    return new Promise(resolve => {
      img.onload = function(e: any) {
        resolve()
      }
      img.onerror = function(e: any) {
        resolve()
      }
    })
  }

  // 观察图片改变
  @Watch('images')
  async onImagesChange(val: any) {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    let computedImages: any[] = []
    for (let item of val) {
      let image = new Image()
      image.src = item
      await this.loadImage(image)
      computedImages.push({
        src: item,
        w: image.width,
        h: image.height
      })
    }
    let elm = document.querySelectorAll('.pswp')[0]
    let options = {
      index: 0
    }
    let gallery = new PhotoSwipe(
      elm,
      PhotoSwipeUI_Default,
      computedImages,
      options
    )
    gallery.init()
    this.isLoading = false
  }
}
</script>

<style lang="scss" scoped>
.counter {
  position: relative;
  text-align: center;
  color: #fff;
  top: 1rem;
  z-index: 9;
}
.pswp {
  z-index: 8 !important;
}
</style>
