<template>
    <div class="calendar-container">

      <div class="calendar-header">

        <div class="calendar-header-button" @click="moveToPrevMonth">&lt;</div>
        <div>
          {{ anchorDate.getFullYear() }}년 {{ anchorDate.getMonth() + 1 }}월
        </div>
        <div class="calendar-header-button" @click="moveToNextMonth">></div>
      </div>

      <div class="calendar-body">

        <div v-for="(item, i) in days" :key="i" class="days">
          <div>{{ item }}</div>
        </div>
  
        <div v-for="(item, i) in calendar" :key="i">
          <div v-if="item">

            <div>
              {{ item?.date.getDate()}}
            </div>
            <div class="weather-data">
              <div>
                {{ item?.weatherInfo  }}
              </div>
              <div>
                <span> {{ item?.lowestTemp }}</span> / 
                <span> {{ item?.highestTemp }}</span>
              </div>
  
  
            </div>
          </div>
  
        </div>

      

    </div>
    
    
    

  </div>
</template>

<script>
export default {

// 달력 + 날씨

// 달력을 만듬
// 오늘을 표시
// 과거의 날씨는 컬러를 회색으로 표시
// 날씨 api를 활용해서 온도, 특이기상 표시

created() {
  this.makeCalendar();
},
data() {
  return {
    test:'weather calendar',
    calendar: [],
    anchorDate: new Date(),
    days: ['일', '월', '화', '수', '목', '금', '토'],
    
  }
},

methods: {
  renderDate(date) {
    return date.getDate();
  },
  moveToNextMonth() {
    this.anchorDate = new Date(this.anchorDate.getFullYear(), this.anchorDate.getMonth() + 1, 1);
    this.makeCalendar();
  },
  
  moveToPrevMonth() {
    this.anchorDate = new Date(this.anchorDate.getFullYear(), this.anchorDate.getMonth() - 1, 1);
    this.makeCalendar();
  },
  makeCalendar() {

    const firstDay = new Date(this.anchorDate.getFullYear(), this.anchorDate.getMonth(), 1);
    const firstDayOfMonth = firstDay.getDay();


    const calendar = Array.from({length: 42}, (_, i) => 
      {
        if( i < firstDayOfMonth || i >= firstDayOfMonth + new Date(this.anchorDate.getFullYear(), this.anchorDate.getMonth() + 1, 0).getDate()) {
          return;
        }

        const date = new Date(firstDay.getFullYear(), firstDay.getMonth(), i - firstDayOfMonth+1);

        const dateObject = {
          date,
          weatherInfo : "맑음",
          lowestTemp : 0,
          highestTemp : 0,
        }
        
        return dateObject;
      });


    this.calendar = calendar;

  },

}
}
</script>

<style>
.calendar-container{
  width: 1200px;
}

.calendar-body{
  display: grid;
  grid-template-columns: repeat(7, 1fr);

}

.calendar-header{
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendar-header-button{
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

</style>