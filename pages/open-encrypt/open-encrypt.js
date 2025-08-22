// pages/open-encrypt/open-encrypt.js
import polyv from '../../utils/polyv.js';

Page({
  data: {
    src: '',
    vid: '1b448be3234f9a3426febd108a329cc7_1'
  },
  onLoad: function(options){
    this.setData({
      'vid': options.vid
    })
  },
  onReady: function() {
    let { vid } = this.data;
    /*获取视频数据*/
    let obj = {
      vid: vid,
      viewerInfo: {
        viewerId: '38770077709', // 播放观看日志学员ID
        viewerName: 'polyv' // 播放观看日志学员昵称
      },
      callback: videoInfo => {
        if (videoInfo.type === 'error') {
          console.log('videoInfo', videoInfo);
          return;
        }

        this.setData({
          src: videoInfo.src[0],
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


