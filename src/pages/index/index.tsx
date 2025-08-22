import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import polyv from './polyv-load';
// const polyv = require('./polyv');
// import { default as polyv } from './polyv';

export default class Index extends Component {

  componentWillMount () {
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  componentDidShow () {
    console.log('componentDidShow1:', polyv);

    // const vid = 'bf4d44114d719046fe2cfa60f6d4f933_b';
    
    // /*获取视频数据*/
    // let obj = {
    //   beta:false,
    //   vid: vid,
    //   viewerInfo: {
    //     viewerId: '1650320482723041281', // 播放观看日志学员ID
    //     viewerName: '导入学员30' // 播放观看日志学员昵称
    //   },
    //   callback: videoInfo => {
    //     console.log('videoInfo', videoInfo);
    //     if (videoInfo.type === 'error') {
    //       console.log('videoInfo', videoInfo);
    //       return;
    //     }
    
    //     // this.setData({
    //     //   src: videoInfo.src[0],
    //     //   keyFrames: videoInfo.videokeyframes.reduce((acc, item, index) => {
    //     //     acc.push({
    //     //       ...item,
    //     //       hours: this.formatTime(item.houts),
    //     //       minutes: this.formatTime(item.minutes),
    //     //       seconds: this.formatTime(item.seconds),
    //     //       startTime: index === 0 ? 0 : acc[index - 1].endTime,
    //     //       endTime: item.houts * 3600 + item.minutes * 60 + item.seconds,
    //     //       preHours: this.formatTime(acc[index - 1]?.houts || 0),
    //     //       preMinutes: this.formatTime(acc[index - 1]?.minutes || 0),
    //     //       preSeconds: this.formatTime(acc[index - 1]?.seconds || 0),
    //     //       nextStartTime: index < acc.length - 1 ? acc[index + 1].startTime : 0,
    //     //     });
    //     //     return acc;
    //     //   }, []),
    //     // });
    //     // console.log('videokeyframes', this.data.keyFrames);
    //   }  
    // };
    
    // polyv.getVideo(obj);
  }

  componentDidHide () {
    console.log('componentDidHide');
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!4</Text>
      </View>
    )
  }
}
