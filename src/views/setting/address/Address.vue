<template>
  <div class="address-main">
    <TopBar>我的收货地址</TopBar>
    <ul class="address-list">
      <li @click="checkOne(add.id)" class="item" v-for="add in addressList" :key="add.id">
        <div class="left-info">
          <p class="name-tel">
            <span class="name">{{add.name}}</span>
            <span class="tel">{{add.tel}}</span>
          </p>
          <p class="address-text">
            <span v-if="add.checked" class="checked">默认</span>
            <span class="text">{{add.address}}</span>
          </p>
        </div>
        <div class="right-info">
          <img class="icon icon-edit" :src="require('@/assets/imgs/icons/icon-edit.png')" alt />
          <span class="text">编辑</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TopBar from "../coms/TopBar";
export default {
  name: "Address",
  components: {
    TopBar
  },
  data() {
    return {
      addressList: [
        {
          id: 1,
          name: "不凡君",
          tel: "13598822222",
          address: "河南省郑州市金水区绿地新都会不凡学院",
          checked: true
        },
        {
          id: 2,
          name: "不凡酱",
          tel: "13598822222",
          address: "河南省郑州市金水区绿地新都会不凡学院",
          checked: false
        },
        {
          id: 3,
          name: "不凡猫",
          tel: "13598822222",
          address: "河南省郑州市金水区绿地新都会不凡学院",
          checked: false
        }
      ]
    };
  },

  methods: {
    checkOne(id) {
      this.addressList.map(item => {
        item.checked = false;
        if (item.id == id) {
          item.checked = true;
        }
        return item;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.address-main {
  .address-list {
    width: 100%;
    margin-top: 44px;
    .item {
      width: 100%;
      box-sizing: border-box;
      height: 70px;
      display: flex;
      padding: 16px 20px;
      color: #999;
      border-bottom: 1px solid #e5e5e5;
      justify-content: space-between;
      background-color: #fff;
      .left-info {
        display: flex;
        text-align: left;
        flex-direction: column;
        justify-content: space-around;
        .name {
          font-size: 15px;
          margin-right: 16px;
          color: #494949;
        }
        .checked {
          padding: 2px 2px;
          color: #fff;
          font-size: 12px;
          background-color: #034c46;
          text-align: center;
          border-radius: 2px;
          margin-right: 4px;
        }
      }
      .right-info {
        display: flex;
        flex-direction: column;
        border-left: 1px solid #e5e5e5;
        padding-left: 20px;
        justify-content: space-around;
        align-items: center;
        .icon {
          width: 18px;
          height: 18px;
          mask-border: 2px;
        }
      }
    }
  }
}
</style>
