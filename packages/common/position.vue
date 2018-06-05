<script lang="tsx">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class Common extends Vue{
    // 定位
    @Prop({default:'static'})
    public position:common.position

    // top
    @Prop({default:-1})
    public t:number

    // right
    @Prop({default:-1})
    public r:number

    // bottom
    @Prop({default:-1})
    public b:number

    // left
    @Prop({default:-1})
    public l:number
  }
</script>