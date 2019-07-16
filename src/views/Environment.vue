<template>
  <div>
    <v-layout row justify-center wrap>
      <v-flex md8>
        <v-subheader class="mt-2">Time Scale</v-subheader>
        <v-list two-line style="border-radius: 5px;">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Time Speed</v-list-tile-title>
              <v-list-tile-sub-title>
                {{ ENVIRONMENT.TIME_SPEED.desc }}
                <span
                  v-if="ENVIRONMENT.TIME_SPEED.value >= 2"
                  class="red--text"
                >
                  ** อาจทำให้
                  CPU ทำงานหนัก
                </span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label v-model="ENVIRONMENT.TIME_SPEED.value" min="0.1" max="4" step="0.01"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.TIME_SPEED.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="0.1"
                    max="4"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex md8>
        <v-subheader class="mt-2">Mutation</v-subheader>
        <v-list two-line style="border-radius: 5px;">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Mutation Chance</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.MUTATION_CHANCE.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label v-model="ENVIRONMENT.MUTATION_CHANCE.value" min="0" max="1" step="0.01"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.MUTATION_CHANCE.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="0"
                    max="1"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list two-line style="border-radius: 5px;" class="mt-2">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Mutation Variation</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.MUTATION_VARIATION.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label
                    v-model="ENVIRONMENT.MUTATION_VARIATION.value"
                    min="0"
                    max="1"
                    step="0.01"
                  ></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.MUTATION_VARIATION.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="0"
                    max="1"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list two-line style="border-radius: 5px;" class="mt-2">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Mutation Limit</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.MUTATION_LIMIT.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label v-model="ENVIRONMENT.MUTATION_LIMIT.value" min="1" max="10" step="0.01"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.MUTATION_LIMIT.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="1"
                    max="10"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex md8>
        <v-subheader class="mt-2">Creature Behaviour</v-subheader>
        <v-list two-line style="border-radius: 5px;">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Eat Distance</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.EAT_DISTANCE.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label v-model="ENVIRONMENT.EAT_DISTANCE.value" min="0" max="5" step="0.01"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.EAT_DISTANCE.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="0"
                    max="5"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list two-line style="border-radius: 5px;" class="mt-2">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Predator Ratio</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.PREDATOR_RATIO.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label
                    v-model="ENVIRONMENT.PREDATOR_RATIO.value"
                    min="1"
                    max="2"
                    step="0.01"
                  ></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.PREDATOR_RATIO.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="1"
                    max="2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list two-line style="border-radius: 5px;" class="mt-2">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Sense Distance</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.BASE_SENSE_DISTANCE.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label v-model="ENVIRONMENT.BASE_SENSE_DISTANCE.value" min="0.1" max="5" step="0.01"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.BASE_SENSE_DISTANCE.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="0.1"
                    max="5"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list two-line style="border-radius: 5px;" class="mt-2">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Chase Time</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.DEFAULT_CHASE_TIME.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label v-model="ENVIRONMENT.DEFAULT_CHASE_TIME.value" min="0.1" max="5" step="0.01"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.DEFAULT_CHASE_TIME.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="0.1"
                    max="5"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list two-line style="border-radius: 5px;" class="mt-2">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>access_time</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Life Time</v-list-tile-title>
              <v-list-tile-sub-title>{{ ENVIRONMENT.DEFAULT_LIFT_TIME.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-slider thumb-label v-model="ENVIRONMENT.DEFAULT_LIFT_TIME.value" min="1" max="999" step="1"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field
                    v-model="ENVIRONMENT.DEFAULT_LIFT_TIME.value"
                    class="ml-4 mt-0"
                    type="number"
                    min="1"
                    max="999"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="mt-3">
      <v-btn class="v-btn--large" @click="saveAllChange">Save all changes</v-btn>
      <v-btn class="v-btn--large" color="primary">Default Setting</v-btn>
    </v-layout>
  </div>
</template>

<script>
import io from "socket.io-client";
const socket = io("ictp.bj.ac.th:8081");

export default {
  data: () => ({
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
    saveAllChange: function() {
      socket.emit("SetEnvironmentNSS", this.ENVIRONMENT);
      console.log("Updating data...");
    }
  },
  created: function() {
    var _this = this;
    socket.on("connect", function() {
      socket.on("GetEnvironmentNSS", function(ENVIRONMENT) {
        _this.ENVIRONMENT = ENVIRONMENT;
        console.log('config data..',_this.ENVIRONMENT)
      });
    });
  }
};
</script>

