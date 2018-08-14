<template>
    <div class="index" >
      <headerBack title="首页"></headerBack>
      <ul class="problem_list">
         <li class="problem_item" v-for="item in pageList" v-bind:key="item.id">
           <!--用户信息-->
           <div class="user-info">
             <div class="user-photo">
               <img v-bind:src="item.src" alt="用户头像">
             </div>
             <div class="user">
               <p class="user_name">{{item.name}}</p>
               <p class="user_time">{{item.time}}</p>
             </div>
           </div>
           <!--内容-->
           <div class="problem">
             <p class="con">{{item.con}}</p>
             <ul class="content_img clearfix">
               <li :class="imgStyle(item.conImg.length)" v-for="(imgItem,index) in item.conImg" :key="imgItem.index" v-show="index < 9" v-bind:data-id="index" @click="imgShow(item.conImg,index)" >
                 <div class="more" v-if="item.conImg.length >9 && index === 8"><span>更多</span></div>
                 <div v-if="item.conImg.length > 1" class="img_wrap" v-bind:style="{backgroundImage: 'url(' +imgItem+ ')'}"></div>
                 <img v-else :src="imgItem" alt="">
               </li>
             </ul>
           </div>
           <!--评论-->
           <div class="interaction_fn">
             <span @click="goods(item.id)" v-bind:class="{active:item.user.good}"><i class="iconfont" v-bind:class="{'icon-zan':item.user.good,'icon-zan1':!item.user.good}"></i>{{item.good_num}}</span>
             <span @click="comments(item.id)"><i class="iconfont icon-pinglun"></i>50</span>
           </div>
            <ul class="inferaction_list">
              <li v-for="comment in item.commentLis" v-bind:key="comment.id">
                <dl>
                  <dt><span>{{ comment.name }} </span>：{{ comment.content }}</dt>
                  <dd v-for="reply in comment.reply" v-bind:key="reply.id"><span>{{ reply.Qname }} </span> 回复 <span> {{ reply.Aname }}</span>：{{ reply.content }}</dd>
                </dl>
                <!--<p><span>vue</span>:这是一段评论</p>-->
                <!--<p><span>jQuery</span>回复<span>vue</span>:这是一段评论</p>-->
                <!--<p><span>vue</span>回复<span>jQuery</span>:这是一段评论</p>-->
              </li>
            </ul>
         </li>
      </ul>
      <div class="comment_wrap" v-if="commentWrap">
        <input v-model="connentText" class="comment_input" type="text" @focus="fouseCon(1,$event)" @blur="leaveCom()" placeholder="说点什么呢" v-focus>
        <input type="button" class="comment_btn" @click="commentText" value="发送">
      </div>
      <div>{{slide}}</div>
      <SwiperList v-show="look" class="look_img" v-bind:imgData="detailsImg" v-bind:active="lookIndex" v-on:imgHide='imgToogle' ></SwiperList>
    </div>
</template>
<script>
/* eslint-disable func-call-spacing,no-unused-expressions */
import headerBack from '../../components/headerBack'
import SwiperList from '../../components/swiper'
export default {
  name: 'index',
  components: {
    'headerBack': headerBack,
    'SwiperList': SwiperList
  },
  data () {
    return {
      pageList: [
        {
          src: require('../../assets/img/user.jpg'),
          name: 'vue',
          con: '举步之明，光明立现',
          id: 0,
          href: '/detail/1008',
          time: '2018-05-09',
          good_num: 99,
          conImg: [
            require('../../assets/img/user.jpg'),
            require('../../assets/img/1.jpg'),
            require('../../assets/img/2.jpg'),
            require('../../assets/img/3.jpg'),
            require('../../assets/img/4.jpg'),
            require('../../assets/img/user.jpg'),
            require('../../assets/img/user.jpg'),
            require('../../assets/img/user.jpg'),
            require('../../assets/img/user.jpg'),
            require('../../assets/img/user.jpg'),
            require('../../assets/img/user.jpg')
          ],
          commentLis: [
            {
              id: 0,
              name: 'JQuery',
              content: '我是jq，我为自己带盐。',
              reply: [
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'JQuery', Aname: 'vue', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'JQuery', Aname: 'vue', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'}
              ]
            }
          ],
          user: {
            good: 0
          }
        },
        {
          src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          name: '米家感应灯',
          con: '举步之明，光明立现',
          id: 1,
          href: '/detail/1008',
          time: '2018-05-09',
          good_num: 15,
          conImg: [
            require('../../assets/img/user.jpg'),
            require('../../assets/img/user.jpg'),
            require('../../assets/img/user.jpg'),
            require('../../assets/img/1.jpg')
          ],
          commentLis: [
            {
              id: 0,
              name: 'JQuery',
              content: '我是jq，我为自己带盐。',
              reply: [
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'JQuery', Aname: 'vue', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'JQuery', Aname: 'vue', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'}
              ]
            }
          ],
          user: {
            good: 1
          }
        },
        {
          src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          name: '米家感应灯',
          con: '举步之明，光明立现',
          id: 2,
          href: '/detail/1008',
          time: '2018-05-09',
          good_num: 20,
          conImg: [
            require('../../assets/img/1.jpg')
          ],
          commentLis: [
            {
              id: 0,
              name: 'JQuery',
              content: '我是jq，我为自己带盐。',
              reply: [
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'JQuery', Aname: 'vue', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'JQuery', Aname: 'vue', content: '伙计有点咸啊，齁得慌。'},
                {Qname: 'vue', Aname: 'JQuery', content: '伙计有点咸啊，齁得慌。'}
              ]
            }
          ],
          user: {
            good: 1
          }
        }
      ],
      commentWrap: false,
      connentText: '',
      focusState: false,
      detailsImg: [
        require('../../assets/img/1.jpg')
      ],
      slide: '',
      look: false,
      lookIndex: 0,
      commentId: 0
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mounted () {},
  methods: {
    /*
    *图片个数判断样式
    */
    imgStyle (imgNum) {
      if (imgNum === 1) {
        return 'img-item1'
      } else if (imgNum === 2 || imgNum === 4) {
        return 'img-item2'
      } else if ((imgNum > 2 && imgNum < 4) || (imgNum > 4 && imgNum < 10)) {
        return 'img-item3'
      } else {
        return 'img-item-more'
      }
    },
    imgShow (imgList, d) {
      this.detailsImg = imgList
      this.lookIndex = d
      // console.log(imgList)
      this.look = true
    },
    imgToogle (result, num) {
      this.look = result
      this.lookIndex = num
    },
    /*
    *点赞
    */
    goods (id) {
      if (this.pageList[id].user.good === 1) {
        this.pageList[id].user.good = 0
        this.pageList[id].good_num = this.pageList[id].good_num - 1
      } else {
        this.pageList[id].user.good = 1
        this.pageList[id].good_num = this.pageList[id].good_num + 1
      }
    },
    /*
    评论
     */
    comments (e) {
      this.focusState = true
      console.log(e)
      this.commentWrap = true
      this.commentId = e
    },
    fouseCon (o, e) {
      e.path[0].scrollIntoViewIfNeeded()
    },
    leaveCom () {
      this.commentWrap = false
      this.focusState = false
    },
    commentText (e) {
      console.log(this.pageList[this.commentId].commentLis.push({content: this.connentText, name: 'JQuery'}))
      this.connentText = ''
    }
  }
}
</script>

<style scoped>
  .inferaction_list{
    border-top: 1px solid #EEEEEE;
    padding: 5px ;
  }
  .inferaction_list li{
    font-size: 14px;
  }
  .inferaction_list li span{
    color: #076696;
  }
  .index{
    background: #f6f6f6;
  }
  .problem_list{
    overflow: hidden;
  }
  .problem_item{
    background: #ffffff;
    margin: 0 0 8px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  }
  .user-info{
    position: relative;
    padding-left: 40px;
  }
  .user-photo{
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  .user-photo img{
    width: 100%;
  }
  .user{
    font-size: 13px;
  }
  .user_time{
    color: #999999;
  }
  .con{
    padding: 10px 0;
  }
  .content_img li{
    padding: 1px;
    box-sizing: border-box;
    float: left;
    position: relative;
  }
  .content_img li img{
    display: block;
    border: none;
    margin: 0;
    width: 100%;
  }
  .content_img .img-item1{
    width: 100%;
  }
  .content_img .img-item2{
    width: 50%;
  }
  .content_img .img-item3{
    width: 33.3%;
  }
  .content_img .img-item-more{
    width: 33.3%;
  }
  .img_wrap{
    background-size: cover;
    background-position: center;
  }
  .content_img .img-item3 .img_wrap,
  .content_img .img-item-more .img_wrap{
    height: 30vw;
  }
  .content_img .img-item2 .img_wrap{
    height: 50vw;
  }
  .content_img li .more{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    color: #ffffff;
    text-align: center;
    z-index: 1;
  }
  .content_img .more span{
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    line-height: 40px;
    top: 50%;
    margin-top:-20px;
  }
  /*互动区*/
  .interaction_fn{
    color: #9c9c9c;
    font-size: 13px;
    padding: 10px 0 5px;
    text-align: right;
  }
  .interaction_fn span{
    margin: 0 3px;
  }
  .interaction_fn span.active{
    color: #10AEFF;
  }
  /*评论框*/
  .comment_wrap{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
    background: #ffffff;
    padding: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .comment_wrap .comment_input{
    outline: 0;
    border: 1px solid #cccccc;
    padding: 0 5px;
    border-radius: 5px;
    line-height: 30px;
    height: 30px;
    width: 70%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #666666;
  }
  .comment_btn{
    width: 28%;
    float: right;
    border-radius: 5px;
    line-height: 30px;
    height: 30px;
    text-align: center;
    background: #10AEFF;
    color: #ffffff;
  }

</style>
