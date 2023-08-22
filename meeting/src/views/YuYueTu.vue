<template>
  <div id="MeetingRoom">
    <h1>{{ date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' }}会议室预约图</h1>
    <table>
      <tr>
          <td class="tds"></td>
          <td>8</td>
          <td></td>
          <td>9</td>
          <td></td>
          <td>10</td>
          <td></td>
          <td>11</td>
          <td></td>
          <td>12</td>
          <td></td>
          <td>13</td>
          <td></td>
          <td>14</td>
          <td></td>
          <td>15</td>
          <td></td>
          <td>16</td>
          <td></td>
          <td>17</td>
          <td></td>
      </tr>
      <tr>
        <span class="room">xxx项目质控会</span>
        <span class="room second">xxx交流会</span>
          <td class="tds">会议室1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td class="tds">会议室2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
        <span class="room third">xxx支部学习会</span>
          <td class="tds">会议室3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td class="tds">会议室4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td class="tds">会议室5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
const date = ref(new Date())
</script>

<style lang="scss" scoped>
  #MeetingRoom {
    text-align: center;
    width: 1800px;
    margin: 0 auto;
    position: relative;
    table {
      width: 100%;
    }
    table,tr,td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 10px;
      height: 50px;
      font-size: 24px;
    }
    td {
      width: 4%;
    }
    .tds {
      width: 6%;
      text-align: left;
    }
    .room {
      width: 17.5%;
      position: absolute;
      background: linear-gradient(to left,#F67C29,#F67C29);
      color: white;
      top: 29%;
      left: 21.5%;
      height: 55px;
      line-height: 55px;
      font-size: 24px;
    }
    .second {
      width: 13%;
      left: 72.5%;
    }
    .third {
      width: 27%;
      top: 58%;
    }
  }
</style>