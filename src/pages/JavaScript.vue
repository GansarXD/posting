<template>
  <div>
    <h1>{{ $t("message.hello") }}</h1>
    <button class="btn btn-primary" @click="fillAll">PLAY</button>
    <br />
    <br />
    <button class="btn btn-danger" @click="scooterFire">
      PLAY CHAOTIC PRINT
    </button>
    <br />
    <br />
    <button class="btn btn-dark" @click="initPromise">PROMISE</button>
    <br />
    <br />
    <button class="btn btn-info" @click="check">CHECK</button>
    <br />
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <input
            class="-input"
            type="text"
            v-model="str"
            placeholder="palindrome"
          />
          <br />

          <button class="btn btn-primary" @click="startPalindrome()">
            CHECK PALINDROME
          </button>
          <br />
          <br />
          <input type="number" v-model="num" />
          <br />
          <button class="btn btn-danger" @click="startFizzBuzz()">
            FIZZBUZZ
          </button>
          <br />
          <br />
          <input type="text" v-model="vowels" />
          <br />
          <button class="btn btn-warning" @click="startFindVowels">
            FIND VOWELS
          </button>
          <br />
          <br />
          <input type="number" v-model="fibonacci" />
          <br />
          <button class="btn btn-success" @click="startFibo">FIBONACCI</button>
          <br />
          <br />
          <input type="number" placeholder="number" v-model="n" />
          <br />
          <input type="number" placeholder="in the power" v-model="powerNum" />
          <br />
          <button class="btn btn-primary" @click="startPowerNum">
            POWER OF N
          </button>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { MyAxios } from "@/services/index";

export default {
  name: "JavaScript",
  data() {
    return {
      arr1: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"],
      arr2: [1, 2, 3, 4, 5, 6, 7],
      arr3: [1, 2, "hello", 4, 5, 6, 7],
      arr4: [1, 2, 3, "hello", 5, [1, 2, 3], 6, 7],
      element: true,
      arr5: new Array(5),
      arr6: [["world", 2, 3], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      str: "",
      num: Number,
      vowels: "",
      fibonacci: Number,
      n: Number,
      powerNum: Number
    };
  },
  methods: {
    initPromise() {
      let promise = new Promise((resolve, reject) => {
        MyAxios.get("posts").then(response => {
          let dataArray = response.data;
          dataArray.forEach((element, index) => {
            if (element.userId === 1) {
              console.log(element.body);
            }
          });
          // if (userID === 1) {
          //     resolve('success')
          // }
          // else {
          //     reject('fail')
          // }
        });
      });
      promise
        .then(message => {
          console.log("then");
          console.log(message);
        })
        .catch(message => {
          console.log("catch");
          console.log(message);
        });
    },
    fillAll() {
      // let led = 2;
      // let bread = 3;
      // let arr3 = this.arr3[6] = 'Bye';
      // let test = this.arr2['eight'] = 8;
      // let test2 = this.arr3['key'] = {
      //     ice: led,
      //     fire: bread
      // };
      let hundred = (this.arr2[50] = "ПИСЯТ");
      console.log(this.arr2);
      alert(this.arr2);
      alert(this.arr2.length);
    },
    scooterFire() {
      // let keys = Object.keys(this.arr2);
      // for(let i = 0; i < this.arr2.length; i++) {
      //     document.write(this.arr2[i] + '<br/>')
      // }
      // for( let i = 0; i < keys.length; i++) {
      //     document.write(keys[i] + ' => ' + this.arr2[keys[i]] + '<br>')
      // }
      // console.log(this.arr2.concat('end', 'till the end'));
      // console.log(this.arr2.slice(1));
      // alert(this.arr6[0[0]])
      // this.arr2.forEach((value, index, array) => {
      //     array[index] = value + 10;
      // });
      // console.log(this.arr2)
      // let newArr2 = this.arr2.map((value, index, array) => {
      //     return value*value;
      // });
      // console.log(newArr2)
      // let newArr2 = this.arr2.filter((value, index, array) => {
      //     return value <= 4
      // });
      // console.log(newArr2)
      // let newArr2 = this.arr2.every((value) => {
      //     return value <= 6
      // });
      // console.log(newArr2)
      // let newArr2 = this.arr2.some((value) => {
      //     return value <= 0
      // });
      // console.log(newArr2)
      // let newArr2 = this.arr2.reduce((x, y) => {
      //     return x + y
      // });
      // console.log(newArr2)
    },
    check() {
      let negative = false;
      let empty = null;
      if (negative == empty) {
        console.log("it worked");
      } else if (!empty && !negative) {
        console.log("anti null statement worked");
        console.log(!empty, !negative);
      } else if (!negative) {
        console.log("true statement worked");
      } else {
        console.log("fail");
      }
    },
    palindrome(str) {
      str = str.toLowerCase();
      return (
        str ===
        str
          .split("")
          .reverse()
          .join("")
      );
    },
    startPalindrome() {
      alert(this.palindrome(this.str));
    },
    fizzBuzz(num) {
      for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("fizzbuzz");
        } else if (i % 3 === 0) {
          console.log("fizz");
        } else if (i % 5 === 0) {
          console.log("buzz");
        } else {
          console.log(i);
        }
      }
    },
    startFizzBuzz() {
      this.fizzBuzz(this.num);
    },
    findVowels(str) {
      let count = 0;
      const vowels = ["a", "e", "i", "o", "u"];
      for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    },
    startFindVowels() {
      console.log(this.findVowels(this.vowels));
    },
    fibo(num) {
      if (num < 2) {
        return num;
      }
      return this.fibo(num - 1) + this.fibo(num - 2);
    },
    startFibo() {
      console.log(this.fibo(this.fibonacci));
    },
    powerFunc(number, power) {
      if (power === 1) {
        return number;
      } else {
        return number * this.powerFunc(number, power - 1);
      }
    },
    startPowerNum() {
      console.log(this.powerFunc(this.n, this.powerNum));
    }
  },
  mounted() {
    // console.log([this.element + false]);
    // console.log(this.arr3)
    // alert(this.arr4)
  }
};
</script>

<style scoped></style>
