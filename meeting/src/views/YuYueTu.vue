<template>
  <div id="appointment">
    <h1>会议室预约图</h1>
    <div class="son">
      <el-form :model="form">
        <table class="tables">
          <tr>
            <td class="long"><span class="middle"> </span></td>
            <td class="short">8</td>
            <td class="short"> </td>
            <td class="short">9</td>
            <td class="short"> </td>
            <td class="short">10</td>
            <td class="short"> </td>
            <td class="short">11</td>
            <td class="short"> </td>
            <td class="short">12</td>
            <td class="short"> </td>
            <td class="short">13</td>
            <td class="short"> </td>
            <td class="short">14</td>
            <td class="short"> </td>
            <td class="short">15</td>
            <td class="short"> </td>
            <td class="short">16</td>
            <td class="short"> </td>
            <td class="short">17</td>
            <td class="short"> </td>
            <td class="short">18</td>
            <td class="short"> </td>
          </tr>
          <tr class="height">
            <td class="long"><span class="middle">会议室1</span></td>
            <!-- <td class="short4">
                xx项目质控会
            </td> -->
            <td class="short">8</td>
            <td class="short"> </td>
            <td class="short">9</td>
            <td class="short"> </td>
            <td class="short">10</td>
            <td class="short"> </td>
            <td class="short">11</td>
            <td class="short"> </td>
            <td class="short">12</td>
            <td class="short"> </td>
            <td class="short">13</td>
            <td class="short"> </td>
            <td class="short">14</td>
            <td class="short"> </td>
            <td class="short">15</td>
            <td class="short"> </td>
            <td class="short">16</td>
            <td class="short"> </td>
            <td class="short">17</td>
            <td class="short"> </td>
            <td class="short">18</td>
            <td class="short"> </td>
          </tr>
          <tr class="height">
            <td class="long"><span class="middle">会议室2</span></td>
            <td class="short">8</td>
            <td class="short"> </td>
            <td class="short">9</td>
            <td class="short"> </td>
            <td class="short">10</td>
            <td class="short"> </td>
            <td class="short">11</td>
            <td class="short"> </td>
            <td class="short">12</td>
            <td class="short"> </td>
            <td class="short">13</td>
            <td class="short"> </td>
            <td class="short">14</td>
            <td class="short"> </td>
            <td class="short">15</td>
            <td class="short"> </td>
            <td class="short">16</td>
            <td class="short"> </td>
            <td class="short">17</td>
            <td class="short"> </td>
            <td class="short">18</td>
            <td class="short"> </td>
          </tr>
          <tr class="height">
            <td class="long"><span class="middle">会议室3</span></td>
            <td class="short">8</td>
            <td class="short"> </td>
            <td class="short">9</td>
            <td class="short"> </td>
            <td class="short">10</td>
            <td class="short"> </td>
            <td class="short">11</td>
            <td class="short"> </td>
            <td class="short">12</td>
            <td class="short"> </td>
            <td class="short">13</td>
            <td class="short"> </td>
            <td class="short">14</td>
            <td class="short"> </td>
            <td class="short">15</td>
            <td class="short"> </td>
            <td class="short">16</td>
            <td class="short"> </td>
            <td class="short">17</td>
            <td class="short"> </td>
            <td class="short">18</td>
            <td class="short"> </td>
          </tr>
          <tr class="height">
            <td class="long"><span class="middle">会议室4</span></td>
            <td class="short">8</td>
            <td class="short"> </td>
            <td class="short">9</td>
            <td class="short"> </td>
            <td class="short">10</td>
            <td class="short"> </td>
            <td class="short">11</td>
            <td class="short"> </td>
            <td class="short">12</td>
            <td class="short"> </td>
            <td class="short">13</td>
            <td class="short"> </td>
            <td class="short">14</td>
            <td class="short"> </td>
            <td class="short">15</td>
            <td class="short"> </td>
            <td class="short">16</td>
            <td class="short"> </td>
            <td class="short">17</td>
            <td class="short"> </td>
            <td class="short">18</td>
            <td class="short"> </td>
          </tr>
          <tr class="height">
            <td class="long"><span class="middle">会议室5</span></td>
            <td class="short">8</td>
            <td class="short"> </td>
            <td class="short">9</td>
            <td class="short"> </td>
            <td class="short">10</td>
            <td class="short"> </td>
            <td class="short">11</td>
            <td class="short"> </td>
            <td class="short">12</td>
            <td class="short"> </td>
            <td class="short">13</td>
            <td class="short"> </td>
            <td class="short">14</td>
            <td class="short"> </td>
            <td class="short">15</td>
            <td class="short"> </td>
            <td class="short">16</td>
            <td class="short"> </td>
            <td class="short">17</td>
            <td class="short"> </td>
            <td class="short">18</td>
            <td class="short"> </td>
          </tr>
        </table>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
  let form = reactive({
  short: '',
})
</script>

<style lang="scss">
#appointment .el-checkbox.el-checkbox--large {
  height: auto !important;
}
#appointment .el-input__wrapper {
  box-shadow: none !important;
}
#appointment .el-input__inner {
  width: 100%;
  font-size: 16px;
  color: black;
}
#appointment header .timeInput .el-input__inner {
  text-align: center;
}
</style>
<style lang="scss" scoped>
#appointment {
  width: 1800px;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-size: 30px;
  }
  .son {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 30px;
      p {
        width: 45%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .width {
          display: inline-block;
          width: 180px;
        }
        .time {
          display: inline-block;
          width: 80px;
        }
      }
      .timeInput {
        .el-input {
          width: 80px;
        }
      }
    }
    table {
      width: 100%;
    }
    table,
    tr,
    td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 10px;
      text-align: center;
    }
    .center {
      text-align: center;
    }
    .height {
      height: 100px;
    }
    .margin {
      margin: 0;
    }
    .long {
      width: 5%;
    }
    .short {
      width: 4%;
    }
    .short4 {
      width: 16%;
      background-color: coral;
    }
    .height {
      height: 60px;
    }
    .tables tr {
      height: 80px;
    }
    .marginLeft {
      margin-left: 20px;
    }
    .border {
      border-bottom: 0.1px solid white;
    }
    .borderNone {
      border-top: 0.1px solid white;
    }
    .borderRight {
      border-right: 0;
    }
    .middle {
      margin-top: 10px;
    }
  }
}
</style>