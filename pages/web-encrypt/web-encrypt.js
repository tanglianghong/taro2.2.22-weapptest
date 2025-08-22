// pages/web-encrypt/web-encrypt.js
import polyv from '../../utils/polyv.js';
const MD5 = require('../../utils/md5.js');

Page({
  data: {
    src: "",
    vid: '',
    secretkey: ''
  },
  onLoad: function(options){
    console.log(options);
    let { vid, secretkey } = options;
    this.setData({
      'vid': vid,
      'secretkey': secretkey
    })
  },
  onReady: function(){
    let { vid, secretkey } = this.data;
    let ts = new Date().getTime();
    let sign = MD5.md5(secretkey + vid + ts);

    /* 获取视频数据 */
    let obj = {
      vid: vid,
      ts,
      sign,
      viewerInfo: {
        viewerId: '3116002084', // 播放观看日志学员 ID
        viewerName: 'Dreamer' // 播放观看日志学员昵称
      },
      callback: videoInfo => {
        console.log('videoInfo', videoInfo);
        if(videoInfo.type === 'error'){
          console.log('videoInfo', videoInfo);
          return;
        }

        this.setData({
          src: videoInfo.src[0],
        })
      }
    };

    this.player = polyv.getVideo(obj);
    console.log(polyv);
  },

  timeupdate: function(e){
    this.player.timeUpdate(e);
  },
  onUnload: function(){
    this.player.destroy();
  }
})