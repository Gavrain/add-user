<template>
  <div class="box">
    <div id="title">
      <h1>{{ title }}</h1>
    </div>
    <steps id="steps"></steps>
    <b-tabs nav-class="nav" active-nav-item-class="active-nav" no-nav-style justified>
      <b-tab class="tab" title="Scan to add" active>
        <scan
          v-for="(v,i) in Users"
          :key="v.uid"
          v-bind="v"
          :index="i"
          :jobList="jobList"
          @change-name="changeName"
          @show-modal="showModal"
        ></scan>
        <b-modal v-model="modalShow" title="编辑职位">
          <b-form-checkbox-group
            v-model="Users[index].jobs"
            :options="jobList"
            name="flavour-2a"
            stacked
          ></b-form-checkbox-group>
        </b-modal>
      </b-tab>
      <b-tab class="tab" title="Add user manually">
        <manually
          v-for="(v,i) in Users"
          :key="v.uid"
          v-bind="v"
          :index="i"
          :jobList="jobList"
          @change-name="changeName"
          @show-modal="showModal"
          @delete-user="deleteUser"
        ></manually>
        <b-button class="addBtn" @click="addUser">+ Add</b-button>
      </b-tab>
    </b-tabs>
    <div id="footer">
      <div id="qr_code">
        <img src="../assets/img/qr_code.png" />
      </div>
      <div id="btns">
        <b-button class="save">Save</b-button>
        <b-button class="next">Next</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Scan from '../components/Scan'
import Manually from '../components/Manually'
import Steps from '../components/Steps'

export default {
  data() {
    return {
      title: 'AddUser',
      modalShow: false,
      index: 0,
      Users: [
        { uname: 'Bob', jobs: [], uid: '00001' },
        { uname: 'Cart', jobs: [0, 1, 2, 3], uid: '00002' },
        { uname: 'Dane', jobs: [0, 1, 2, 3], uid: '00003' }
      ],
      jobList: [
        { text: 'Reception', value: 0 },
        { text: 'Admin', value: 1 },
        { text: '高级员工', value: 2 },
        { text: 'Finance', value: 3 },
        { text: '确认人员', value: 4 },
        { text: 'Sales', value: 5 },
        { text: 'Teacher', value: 6 }
      ]
    }
  },
  components: {
    Scan,
    Manually,
    Steps
  },
  methods: {
    changeName(e) {
      this.Users[e.index].uname = e.uname
    },
    showModal(e) {
      this.modalShow = true
      this.index = e
    },
    deleteUser(e) {
      if (this.Users.length <= 1) return alert('不能全部删除')
      this.Users.splice(e, 1)
    },
    addUser() {
      this.Users.push({ uname: '', jobs: [0, 1, 2, 3], uid: '' + Math.random() })
    }
  }
}
</script>

<style lang="less">
@basic-color: #57b4e0;
@title-hight: 1.84rem;

.box {
  padding-top: @title-hight;
}

#title {
  position: fixed;
  top: 0;
  width: 100%;
  height: @title-hight;
  z-index: 10;
  text-align: center;
  background-color: @basic-color;
  h1 {
    font-size: 0.6rem;
    line-height: 1.84rem;
    color: white;
  }
}
#steps {
  box-shadow: 0 0.08rem 0.04rem 0px #f2f2f2;
}

.tabs {
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.56rem;
  .nav-link {
    height: 1.68rem;
    color: @basic-color;
    border-bottom: 0.08rem solid #f1f1f1;
  }
  .active-nav {
    border-bottom: 0.16rem solid @basic-color;
  }
  .addBtn {
    height: 1.2rem;
    line-height: 0.64rem;
    font-size: 0.64rem;
    width: 3.24rem;
    margin-top: 0.24rem;
    margin-left: 1.24rem;
    padding: 0;
    border: 0.08rem solid @basic-color;
    border-radius: 0.2rem;
    color: @basic-color;
    background-color: #fff;
    &:hover {
      color: white;
      border: 0.08rem solid @basic-color;
      background-color: @basic-color;
    }
  }
}

#footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 9.84rem;
  width: 100%;
  padding: 0.4rem 0 0.92rem;

  #qr_code {
    height: 5.6rem;
    width: 5.6rem;
  }
  #btns {
    display: flex;
    padding: 0 1.2rem;
    justify-content: space-between;
    width: 100%;
    .btn {
      height: 1.2rem;
      width: 3.32rem;
      line-height: 0.34rem;
      border: none;
      border-radius: 0.2rem;
      font-size: 0.68rem;
    }
    .save {
      background-color: @basic-color;
    }
    .next {
      background-color: #f5a623;
    }
  }
}
</style>
