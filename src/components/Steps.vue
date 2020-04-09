<template>
  <div class="container">
    <template v-for="(v,i) in itemList">
      <p :class="['index',{'active':i<=active}]" :key="i">
        {{i+1}}
        <span class="item">{{v}}</span>
      </p>
      <div :class="['line',{'active-line':i<active}]" v-if="i!=itemList.length-1" :key="'l'+i"></div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: ['', '', 'Add User', 'Add Class'],
      active: 2
    }
  }
}
</script>

<style lang="less">
@basic-color: #57b4e0;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.88rem;
  font-size: 0.4rem;
  position: relative;
  align-items: center;
  color: #767676;

  .index {
    margin: 0;
    position: relative;
    width: 0.76rem;
    text-align: center;
    .item {
      position: absolute;
      width: 3rem;
      left: 50%;
      top: 25%;
      transform: translate(-50%, 50%);
    }
  }
  .line {
    height: 0.16rem;
    width: 3.24rem;
    border-radius: 0.08rem;
    background-color: #e2e2e2;
  }
  .active {
    color: @basic-color;
  }
  .active-line {
    background-color: @basic-color;
  }
}
</style>
