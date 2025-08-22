// components/menu-bar/menu-bar.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabTitle: {
      type: Array,
      value: []
    },
    positionTop: {
      type: String,
      value: "0"
    },
    paddingTop: {
      type: String,
      value: '80rpx'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0
  },
  lifetimes: {
    attached(){

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle(e){
      // let that = this;
      if(this.data.num == e.currentTarget.dataset.index){
        return false;
      }else{
        this.setData({
          num: e.currentTarget.dataset.index
        })
      }
    }
  }
})
