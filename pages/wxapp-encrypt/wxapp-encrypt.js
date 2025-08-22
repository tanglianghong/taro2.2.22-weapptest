// pages/wxapp-encrypt/wxapp-encrypt.js
import polyv from '../../utils/polyv.js';

Page({
  data: {
    src: "",
    vid: '1b448be323eacc7102de4b25b87a80df_1',
    wxAppUrl: ''
  },
  onLoad: function(options){
    console.log(options);
    let { vid, wxAppUrl } = options;
    this.setData({
      'vid': vid,
      'wxAppUrl': wxAppUrl
    })
  },
  onReady: function(){
    let {vid, wxAppUrl} = this.data;
    /* 获取视频数据 */
    let obj = {
      vid: vid,
      wxApp: {
        wxAppUrl: wxAppUrl, // 服务端 php 示例 url
        isWx: true, // 判断是否为微信授权
        wxUserId: 'Dreamer', // 小程序用户 id，可以是小程序 openid
        expires: 3000 // 请求 token 视频播放有效时间
      },
      viewerInfo: {
        viewerId: '3116002084', // 播放观看日志学员 ID
        viewerName: 'Dreamer' // 播放观看日志学员昵称
      },
      callback: videoInfo => {
        if(videoInfo.type === 'error'){
          console.log('videoInfo', videoInfo);
          return;
        }
        console.error(videoInfo);

        this.setData({
          src: videoInfo.src[0],
        })
      }
    };

    this.player = polyv.getVideo(obj);
  },

  timeupdate: function(e){
    this.player.timeUpdate(e);
  },
  onUnload: function(){
    this.player.destroy();
  }
})