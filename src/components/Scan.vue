<template>
  <div class="contain">
    <div class="avatar"></div>
    <div class="main">
      <div class="wechat">WeChat name</div>
      <div>
        职位：
        <span class="no-job" v-if="jobs.length==0">！请添加职位</span>
        <span class="jobs" v-else>{{selectedJobs}}</span>
      </div>
      <div>
        姓名：
        <input type="text" :value="uname" @input="changeName" />
      </div>
      <a href="javascript:0" @click="showModal">编辑职位</a>
    </div>
  </div>
</template>

<script>
export default {
  props: { uname: String, jobs: Array, uid: String, index: Number, jobList: Array },
  data() {
    return {}
  },
  methods: {
    changeName({ target }) {
      this.$emit('change-name', { uname: target.value, index: this.index })
    },
    showModal() {
      this.$emit('show-modal', this.index)
    }
  },
  computed: {
    selectedJobs() {
      var arr = []
      for (let i = 0; i < this.jobList.length; i++) {
        if (this.jobs.includes(this.jobList[i].value)) arr.push(this.jobList[i].text)
      }
      console.log(this.jobList)

      return arr.join('，')
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  width: 13.68rem;
  padding: 0.3rem 0.2rem;
  margin: 0 auto;
  color: #373737;
  border-bottom: 2px solid #e2e2e2;

  .avatar {
    height: 1.68rem;
    width: 1.68rem;
    margin-left: 0.44rem;
    margin-right: 0.44rem;
    background-color: #e5e5e5;
    border-radius: 50%;
    transform: translate(0, -20%);
  }

  .main {
    div {
      line-height: 1rem;
    }

    .no-job {
      color: #d45b5b;
    }

    .jobs {
      color: #9b9b9b;
    }

    a {
      position: absolute;
      right: 0;
      top: 10%;
      color: #57b4e0;
    }
  }

  .wechat {
    font-weight: bold;
  }

  input {
    width: 4.64rem;
    height: 0.96rem;
    padding: 0 0.24rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #ededed;
  }
}
</style>
