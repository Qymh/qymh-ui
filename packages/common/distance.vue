<script lang="tsx">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class Distance extends Vue{
    // margin-top
    @Prop({default:0})
    mt:number

    // margin-right
    @Prop({default:0})
    mr:number

    // margin-bottom
    @Prop({default:0})
    mb:number

    // margin-left
    @Prop({default:0})
    ml:number

    // padding-top
    @Prop({default:0})
    pt:number

    // padding-right
    @Prop({default:0})
    pr:number

    // padding-bottom
    @Prop({default:0})
    pb:number

    // padding-left
    @Prop({default:0})
    pl:number
  }
</script>