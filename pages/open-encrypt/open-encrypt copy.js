// pages/open-encrypt/open-encrypt.js
import polyv from '../../utils/polyv.js';

Page({
  data: {
    src: '',
    vid: '112233445566'
  },
  onLoad: function(options){
    this.setData({
      'vid': '112233445566'
    })
  },
  onReady: function() {
    let { vid } = this.data;
    /*获取视频数据*/
    let obj = {
      vid: vid,
      viewerInfo: {
        viewerId: 'polyv123456', // 播放观看日志学员ID
        viewerName: 'hello' // 播放观看日志学员昵称
      },
      callback: videoInfo => {
        if (videoInfo.type === 'error') {
          console.log('videoInfo', videoInfo);
          return;
        }

        this.setData({
          //src: videoInfo.src[0],
          src: 'https://demo.ipolyv.cn/tanglianghong/test/MP4/9fbd5960595916a87e662363b99b6678.mp4',
        });
      }
    };

    this.player = polyv.getVideo(obj);
    console.log(polyv);
    // setInterval(() => {
    //   const data = this.player.j2s_realPlayStatus();
    //   console.info(data, '---data---');
    // }, 3000);
  },

  timeupdate: function(e) {
    console.error(e)
    this.player.timeUpdate(e);
  },

  onUnload: function() {
    this.player.destroy();
  }
});


