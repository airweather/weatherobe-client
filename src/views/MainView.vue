<template>
  <main class="mt-5">
    <div>
      <h1>MonthlyCalendar</h1>
      <MonthlyCalendar/>
    </div>

    <div class="container bg-white">
      <div class="row g-3">
        <div class="col" :key="i" v-for="(look, i) in dailyLookList">
          <div class="card" style="width: 25rem; cursor: pointer;">
            <a @click="toInfoPage(look);"><img :src="`/download/${look.name}/${look.image}`" class="card-img" alt="..."></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MonthlyCalendar from '@/components/Calendar/MonthlyCalendar.vue'



export default {

  components: {
    MonthlyCalendar
  },
  data() {
    return {
      dailyLookList : [],
    }
  },
  created() {
    this.getDailyLook();
  },
  methods: {
    async getDailyLook() {
      let dailyLook = await this.$api("/api/getMain", {})
      this.dailyLookList = dailyLook
    },
    toInfoPage(look) {
      this.$router.push({path:'/info', query:{id:look.id, name:look.name, image:look.image}})
    }
  }
}
</script>