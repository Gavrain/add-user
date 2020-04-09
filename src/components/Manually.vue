<template>
  <div class="contain">
    <div class="main">
      <div>
        UserName：
        <input type="text" :value="uname" @input="changeName" />
        <a class="delete" href="javascript:0" @click="deleteUser">Delete</a>
      </div>
      <div>
        <span>职位</span>
        <span class="no-job" v-if="jobs.length==0">！请添加职位</span>
        <span class="jobs" v-else>{{selectedJobs}}</span>
        <a class="edit" href="javascript:0" @click="showModal">编辑职位</a>
      </div>
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
    },
    deleteUser() {
      this.$emit('delete-user', this.index)
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
  padding: 0.3rem 0.5rem 0.3rem 0.8rem;
  margin: 0 auto;
  color: #373737;
  border-bottom: 2px solid #e2e2e2;

  .main {
    width: 100%;
    > div {
      line-height: 1rem;
      > span {
        float: left;
      }
    }

    .no-job {
      padding-left: 0.2rem;
      display: inline-block;
      color: #d45b5b;
      width: 10rem;
    }

    .jobs {
      padding-left: 0.2rem;
      display: inline-block;
      color: #9b9b9b;
      width: 10.6rem;
    }

    a {
      float: right;
      color: #57b4e0;
    }
    .delete {
      top: 10%;
      color: #d45b5b;
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
