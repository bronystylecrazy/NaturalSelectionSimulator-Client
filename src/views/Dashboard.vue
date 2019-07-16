<template>
  <div class="dashboard">
    <v-container>
      <v-layout row>
        <v-flex md6>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">Overview</div>
                <span>สิ่งมีชีวิตตัวจ้อยกำลังวิวัฒนาการอย่างช้าๆ</span><br>
                <span>food: <b>{{ ENVIRONMENT.DEFAULT_FOOD_COUNT.value }}</b></span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="red" @click="RestartSimulator">Restart Simulator</v-btn>
              <v-btn color="teal" @click="ExportExcel">Export Excel</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex md6>
          <v-card color="blue-grey darken-2" class="ml-2 white--text align-center">
            <v-card-title primary-title>
              <v-layout>
                <v-flex md6>
                  <div class="display-1 mt-2 font-weight-light">
                    Generation
                    <b>{{Generation}}</b>
                    Creature
                    <b>{{ Creature }}</b>
                  </div>
                </v-flex>
                <v-flex md6>
                  <div class="headline">Average</div>
                  <div class="subheading font-weight-light">speed <b>{{ Average().speed }}</b></div>
                  <div class="subheading font-weight-light">size <b>{{ Average().size }}</b></div>
                  <div class="subheading font-weight-light">sense <b>{{ Average().sense }}</b></div>
                </v-flex>
                <v-flex justify-center>
                  <v-btn exact to="environment">Setting model</v-btn>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-4">
        <GChart
          style="width: 100%; height: 400px; border-radius: 10px;"
          :data="DayCreatureChart"
          :options="DayCreatureChartOptions.chart"
          type="LineChart"
          :settings="{packages:['corechart']}"
        />
      </v-layout>
      <!-- <v-layout row class="mt-4">
        <GChart
          style="width: 100%; height: 400px; border-radius: 10px;"
          :data="VariationCreatureChart"
          :options="VariationCreatureChartOptions.chart"
          type="LineChart"
          :settings="{packages:['corechart']}"
        />
      </v-layout> -->
      <v-layout row justify-center class="mt-4">
        <v-flex md2>
        <v-text-field
            label="Food Count"
            box
            @change="FoodCountChange"
            v-model="ENVIRONMENT.DEFAULT_FOOD_COUNT.value"
          ></v-text-field></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import io from "socket.io-client";
const socket = io("ictp.bj.ac.th:8081");

export default {
  components: {
    GChart
  },
  data: () => ({
    DayCreatureChart: [["Generation", "Creature amount"], [1, 2]],
    DayCreatureChartOptions: {
      chart: {
        title: "Relativity between Generation and Creatures",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
        min: 0,
        curveType: "function",
        hAxis: {
          title: "Generation(s)"
        },
        vAxis: {
          title: "Creatures"
        }
      }
    },
    VariationCreatureChart: [["Generation","speed","size","sense"]],
    VariationCreatureChartOptions: {
      chart:{
        title: "Relativity between Generation and Speed , Size , Sense",
        min: 0,
        curveType: "function",
      }
    },
    Creature: 0,
    Generation: 0,
    Creatures: [],
    ENVIRONMENT: {
      TIME_SPEED: {
        value: 1,
        desc: "สัดส่วนเวลาที่ใช้ในการดำเนิน(%)"
      },
      FOOD_PER_ROUND: {
        value: 100,
        desc: "อาหารในหนึ่งรอบ(ชิ้น)"
      },
      MUTATION_LIMIT: {
        value: 5,
        desc: "ค่าการกลายพันธุ์สูงสุด(ยูนิท)"
      },
      DEFAULT_CHASE_TIME: {
        value: 1,
        desc: "เวลาที่นักล่าใช้ในการวิ่งไล่(วินาที)"
      },
      DEFAULT_LIFT_TIME: {
        value: 999,
        desc: "อายุขัยของสัตว์จำลอง(วัน)"
      },
      PREDATOR_RATIO: {
        value: 1.2,
        desc: "อัตราส่วนระหว่างนักล่ากับเหยื่อ(%)"
      },
      HEADING_TARGET_VARIATION: {
        value: 60,
        desc: "ความกว้างในการเลี้ยว(deg)"
      },
      CREATURE_PER_FOOD: {
        value: 0.25,
        desc: "สัดส่วนอาหารเมื่อไม่กำหนดจำนวนสัตว์จำลอง(%)"
      },
      CREATURE_HEIGHT: {
        value: 1,
        desc: "ความสูงปกติของสัตว์จำลอง(%)"
      },
      MUTATION_CHANCE: {
        value: 0.1,
        desc: "โอกาสในการกลายพันธุ์ของสัตว์จำลอง(%)"
      },
      MUTATION_VARIATION: {
        value: 0.1,
        desc: "ระดับการเปลี่ยนแปลงเมื่อกลายพันธุ์(ยูนิท)"
      },
      EAT_DISTANCE: {
        value: 1,
        desc: "ระยะการกินเริ่มต้น(ยูนิท)"
      },
      BASE_SENSE_DISTANCE: {
        value: 1,
        desc: "ระยะการสังเกตเริ่มต้น(ยูนิท)"
      },
      STARTING_ENERGY: {
        value: 300,
        desc: "พลังงานเริ่มต้น(จูล)"
      },
      DEFAULT_FOOD_COUNT: {
        value: 30,
        desc: "ค่าอาหารเริ่มต้นในรอบแรก(ชิ้น)"
      },
      SPEED_ADJUST_FACTOR: {
        value: 1,
        desc: "อัตราส่วนความเร็วพื้นฐาน(ยูนิท)"
      },
      SIZE_ADJUST_FACTOR: {
        value: 1,
        desc: "อัตราส่วนขนาดพื้นฐาน(ยูนิท)"
      }
    }
  }),
  methods: {
    RestartSimulator() {
      socket.emit("RestartNSS");
      console.log("restarting...");
    },
    ExportExcel(){
      var fileName = prompt("ต้องการตั้งชื่อไฟล์ว่าอะไร!");
      socket.emit('ExportExcelNSS',{
        fileName: fileName
      });
    },
    FoodCountChange(){
      socket.emit("SetEnvironmentNSS", this.ENVIRONMENT);
    },
    Average() {
      var speed = 0;
      var size = 0;
      var sense = 0;
      var count = 0;
      for (var creature in this.Creatures) {
        speed += this.Creatures[creature].speed;
        size += this.Creatures[creature].size;
        sense += this.Creatures[creature].sense;
        count++;
      }
      //this.VariationCreatureChart.push([count,(speed/count).toFixed(3),(size/count).toFixed(3),(sense/count).toFixed(3)]);
      return { speed: (speed/count).toFixed(3) , size: (size/count).toFixed(3) , sense: (sense/count).toFixed(3)};
      //return {speed,size,sense};
    }
  },
  computed: {
    
  },
  mounted() {
    var App = this;
    var DayAndCreatureChart = [];
    socket.on("connect", function() {
      socket.on("GetEnvironmentNSS", function(ENVIRONMENT) {
        App.ENVIRONMENT = ENVIRONMENT;
        console.log('config data..',App.ENVIRONMENT)
      });
      socket.on("RecieveRawCurrentInformation", function(data) {
        App.Creatures = data.value.creatures;
        App.Creature = data.value.creature;
        App.Generation = data.value.date;
        socket.emit("GetRawInformation");
      });
      socket.on("RecieveRawInformation", function(data) {
        DayAndCreatureChart = data.value.map(function(e) {
          return [e.date.toString(), e.creature];
        });
        DayAndCreatureChart.unshift(["Generation", "Creature amount"]);
        App.DayCreatureChart = DayAndCreatureChart;
      });
    });
  }
};
</script>
