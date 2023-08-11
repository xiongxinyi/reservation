<template>
  <div id="application">
    <h1>西南物探研究院会议申请表</h1>
    <div class="son">
      <el-form :model="form">
        <header>
          <p><span class="width">主办科室(单位):</span><el-input v-model="form.department" placeholder="" /></p>
          <p class="timeInput">
            <span class="time">申请时间:</span><el-input v-model="form.year" placeholder="" />年<el-input
              v-model="form.month"
              placeholder="" />月<el-input v-model="form.day" placeholder="" />日
          </p>
        </header>
        <table>
          <tr>
            <td>会议名称</td>
            <td colspan="3" class="borderRight"><el-input v-model="form.title" placeholder="" /></td>
          </tr>
          <tr class="height">
            <td>主要内容</td>
            <td colspan="3" class="borderRight"><el-input v-model="form.content" placeholder="" /></td>
          </tr>
          <tr class="relative">
            <td style="width: 15%">会议时间</td>
            <td style="width: 28%"><el-input v-model="form.time" placeholder="" /></td>
            <td style="width: 15%">会议地点</td>
            <td style="width: 42%" class="borderRight"><el-input v-model="form.location" placeholder="" /></td>
            <span class="absolute">(综合办填写)</span>
          </tr>
          <tr>
            <td class="border">会议要求</td>
            <td class="center border borderRight" colspan="3">
              <el-checkbox v-model="form.checked1" label="视频" size="large" />
              <el-checkbox v-model="form.checked2" label="摄影" size="large" />
              <el-checkbox v-model="form.checked3" label="摄像" size="large" />
              <el-checkbox v-model="form.checked4" label="宣传" size="large" />
              <el-checkbox v-model="form.checked5" label="着装" size="large" />
              <span class="marginLeft">(是√,否×)</span>
            </td>
          </tr>
        </table>
        <table class="tables">
          <tr>
            <td class="short"><span class="middle">序号</span></td>
            <td class="unit">单位</td>
            <td class="name">姓名</td>
            <td class="short"><span class="middle">备注</span></td>
            <td class="short"><span class="middle">序号</span></td>
            <td class="unit">单位</td>
            <td class="name">姓名</td>
            <td class="short"><span class="middle">备注</span></td>
          </tr>
          <tr class="height">
            <td>1</td>
            <td><el-input v-model="form.unit" placeholder="" /></td>
            <td><el-input v-model="form.name" placeholder="" /></td>
            <td><el-input v-model="form.notes" placeholder="" /></td>
            <td>7</td>
            <td><el-input v-model="form.unitTwo" placeholder="" /></td>
            <td><el-input v-model="form.nameTwo" placeholder="" /></td>
            <td><el-input v-model="form.notesTwo" placeholder="" /></td>
          </tr>
          <tr class="height">
            <td>2</td>
            <td><el-input v-model="form.unitThree" placeholder="" /></td>
            <td><el-input v-model="form.nameThree" placeholder="" /></td>
            <td><el-input v-model="form.notesThree" placeholder="" /></td>
            <td>8</td>
            <td><el-input v-model="form.unitFour" placeholder="" /></td>
            <td><el-input v-model="form.nameFour" placeholder="" /></td>
            <td><el-input v-model="form.notesFour" placeholder="" /></td>
          </tr>
          <tr class="height">
            <td>3</td>
            <td><el-input v-model="form.unitFive" placeholder="" /></td>
            <td><el-input v-model="form.nameFive" placeholder="" /></td>
            <td><el-input v-model="form.notesFive" placeholder="" /></td>
            <td>9</td>
            <td><el-input v-model="form.unitSix" placeholder="" /></td>
            <td><el-input v-model="form.nameSix" placeholder="" /></td>
            <td><el-input v-model="form.notesSix" placeholder="" /></td>
          </tr>
          <tr class="height">
            <td>4</td>
            <td><el-input v-model="form.unitSeven" placeholder="" /></td>
            <td><el-input v-model="form.nameSeven" placeholder="" /></td>
            <td><el-input v-model="form.notesSeven" placeholder="" /></td>
            <td>10</td>
            <td><el-input v-model="form.unitTwoEight" placeholder="" /></td>
            <td><el-input v-model="form.nameTwoEight" placeholder="" /></td>
            <td><el-input v-model="form.notesTwoEight" placeholder="" /></td>
          </tr>
          <tr class="height">
            <td>5</td>
            <td><el-input v-model="form.unitNine" placeholder="" /></td>
            <td><el-input v-model="form.nameNine" placeholder="" /></td>
            <td><el-input v-model="form.notesNine" placeholder="" /></td>
            <td>11</td>
            <td><el-input v-model="form.unitTen" placeholder="" /></td>
            <td><el-input v-model="form.nameTen" placeholder="" /></td>
            <td><el-input v-model="form.notesTen" placeholder="" /></td>
          </tr>
          <tr class="height">
            <td>6</td>
            <td><el-input v-model="form.unitEleven" placeholder="" /></td>
            <td><el-input v-model="form.nameEleven" placeholder="" /></td>
            <td><el-input v-model="form.notesEleven" placeholder="" /></td>
            <td>12</td>
            <td><el-input v-model="form.unittwelve" placeholder="" /></td>
            <td><el-input v-model="form.nametwelve" placeholder="" /></td>
            <td><el-input v-model="form.notestwelve" placeholder="" /></td>
          </tr>
        </table>
        <table>
          <tr class="height">
            <td style="width: 15%" class="borderNone">申请人</td>
            <td class="borderNone"><el-input v-model="form.applicant" placeholder="" /></td>
          </tr>
          <tr class="height">
            <td style="width: 15%">
              <p class="margin">主办科室(单位)</p>
              <p class="margin">负责人意见</p>
            </td>
            <td><el-input v-model="form.opinion" placeholder="" /></td>
          </tr>
        </table>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
  let form = reactive({
  department: '', //主办科室
  year: '', //年
  month: '', //月
  day: '', //日
  title: '', //会议名称
  content: '', //主要内容
  time: '', //会议时间
  location: '', //会议地点
  checked1: '', //视频
  checked2: '', //摄影
  checked3: '', //摄像
  checked4: '', //宣传
  checked5: '', //着装
  unit: '',
  name: '',
  notes: '',
  unitTwo: '',
  nameTwo: '',
  notesTwo: '',
  unitThree: '',
  nameThree: '',
  notesThree: '',
  unitFour: '',
  nameFour: '',
  notesFour: '',
  unitFive: '',
  nameFive: '',
  notesFive: '',
  unitSix: '',
  nameSix: '',
  notesSix: '',
  unitSeven: '',
  nameSeven: '',
  notesSeven: '',
  unitTwoEight: '',
  nameTwoEight: '',
  notesTwoEight: '',
  unitNine: '',
  nameNine: '',
  notesNine: '',
  unitTen: '',
  nameTen: '',
  notesTen: '',
  unitEleven: '',
  nameEleven: '',
  notesEleven: '',
  unittwelve: '',
  nametwelve: '',
  notestwelve: '',
  applicant:'',//申请人
  opinion:''//负责人意见
})
</script>

<style lang="scss">
#application .el-checkbox.el-checkbox--large {
  height: auto !important;
}
#application .el-input__wrapper {
  box-shadow: none !important;
}
#application .el-input__inner {
  width: 100%;
  font-size: 16px;
  color: black;
}
#application header .timeInput .el-input__inner {
  text-align: center;
}
</style>
<style lang="scss" scoped>
#application {
  width: 1000px;
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
    .relative {
      position: relative;
    }
    .absolute {
      position: absolute;
      right: 2%;
      top: 50%;
      transform: translateY(-50%);
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
    .short {
      width: 7%;
      writing-mode: vertical-rl;
      letter-spacing: 8px;
    }
    .name {
      width: 15%;
    }
    .unit {
      width: 21%;
    }
    .kd {
      width: 15%;
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