<template>
  <div id="votepage">
    <div id="cardcontain">
      <card
        v-for="(value,key,index) in test"
        :info="value"
        :key="index"
        :Player="Player"
        @goback="choose"
        @changePlayer="changePlayer"
        :ifCheck="ifCheck"
      >
        <!-- :btnsrc="btnsrc"  -->
      </card>
    </div>
    <div id="final-btn">
      <input type="submit" class="queren" id="final" value=" " @click="submit" :ifClick="ifClick" />
    </div>
    <div id="attention">{{errmsg}}</div>
    <div id="bottom2"></div>
  </div>
</template>
<script>
import card from "../components/card";
import { posturl, show, phpurl } from "../js/config"; //show,login,getinfo

export default {
  data() {
    return {
      // getinfo:[]
      test: [{}],
      index: 0,
      ifCheck: 0,
      // btnsrc:"../assets/img/void.png",
      // ifChecked:false
      ifClick: false,
      Player: 0,
      errmsg: ""
    };
  },
  components: {
    card
  },
  mounted() {
    this.axios(show)
      .then(res => {
        this.test = Object.values(res.data);
        sessionStorage.setItem("line1", "");
        sessionStorage.setItem("line2", "");
        // if (res.response.status == 401) {
        //   window.location.href = phpurl;
        // }
      })
      .catch(function(error) {
        // window.console.log(error);
        if (error.response.status === 401) {
          window.location.href = phpurl;
          return;
        }
        sessionStorage.setItem("line2", "似乎网络出错了");
        sessionStorage.setItem("line1", "请稍候再试");
        this.$router.push("/alert");
      });
  },
  computed: {},
  watch: {
    ifCheck: function() {
      this.errmsg = "你选择的是第" + this.ifCheck + "号选手";
      // if(this.Player!=this.ifCheck){
      // document.querySelector("#audio" + this.Player).pause();
      // }
    },immediate:true
  },
  methods: {
    changePlayer(newName){
      var oldName = this.Player;
      if(newName==oldName){
        newName=0;
      }
        this.Player = newName ;
        if(oldName!=0){
          document.querySelector("#audio" + oldName).pause();
          }
        if(oldName != newName){
          if(newName!=0){
          document.querySelector("#audio" + newName).play();
          }
          if(oldName!=0){
          document.querySelector("#audio" + oldName).currentTime = 0;
          }
        }
    },
    choose(value) {
      // document.querySelector("#audio" + this.Player).pause();
      this.ifCheck = value;
      // this.Player = value;
      //    for(var i=1;i<=document.getElementsByTagName('audio').length+1;i++){
      //document.querySelector("#audio" + i).pause();
      //
      this.ifClick = false;
    },
    submit() {
      this.errmsg = "";
      if ((this.ifCheck == 0)||(this.ifCheck == undefined)) {
        this.errmsg = "请选择选手！";
        return;
      }
      if (this.ifClick == true) {
        this.errmsg = "点太快啦！";
        return;
      }
      this.ifClick = true;
      if (this.ifCheck != 0) {
        const vote = {
          //提交索引
          method: "POST",
          data: this.ifCheck,
          transformRequest: [
            function(data) {
              data = JSON.stringify(data);
              return data;
            }
          ],
          url: posturl + this.ifCheck
        };
        this.axios(vote)
          .then(res => {
            window.console.log(res);
            // if (res.status===401) {
            //   window.location.href = phpurl;
            // }
            if (res.data.errcode == 3) {
              this.$router.push("/alert");
            } else if (res.data.errcode == 0) {
              this.ifClick = true;
              this.errmsg = "感谢投票！";
            } else {
              this.errmsg = res.data.errmsg;
            }
          })
          .catch(function(error) {
            if (error.response) {
              // 服务器返回正常的异常对象
              // window.console.log(error.response.data);
              this.errmsg = "请求中……";
              if (error.response.status === 401) {
                window.location.href = phpurl;
              }
              this.errmsg = error.response.data;
            } else {
              // 服务器发生未处理的异常
              this.errmsg = error.message;
            }
            window.console.log(error.config);
          });
      }
    }
  }
};
</script>
<style>
h1,h2,p{
  user-select:  none !important;
}
#votepage {
  /* padding-top: 10%; */
}
#cardcontain {
  height: 100vw;
  padding-top: 20vw;
  overflow-y: scroll;
  margin-bottom: 5vw;
  padding-bottom: 5vw;
  padding-left: 2%;
  padding-right: 2%;
}
#cardcontain::-webkit-scrollbar,
#attention::-webkit-scrollbar,
p.intro::-webkit-scrollbar {
  display: none;
}
#final {
  background: none;
  border: none;
  color: transparent;
  font-size: 8vw;
  outline: none;
}
#final-btn {
  background-image: url("../assets/img/final.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 9.5vw;
}
#attention {
  font-size: 3.2vw;
  margin-top: 4vw;
  font-family: "STYuanti";
  color: rgb(169, 60, 39);
  line-height: 1.667;
  white-space: normal;
  overflow-x: scroll;
  margin-left: 25%;
  width: 50%;
  white-space:pre;
}
#bottom2 {
  position: absolute;
  z-index: 1;
  background-image: url("../assets/img/bottom_less.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 40vw;
  width: 40vw;
  right: 0;
  bottom: 0;
}
</style>
