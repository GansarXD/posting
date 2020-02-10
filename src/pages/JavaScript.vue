<template>
    <div>
        <h1>Banging js arrays</h1>
        <button class="btn btn-primary" @click="fillAll">PLAY</button>
        <button class="btn btn-danger" @click="scooterFire">PLAY CHAOTIC PRINT</button>
        <br>
        <br>
        <button class="btn btn-dark" @click="initPromise">PROMISE</button>
        
    </div>
</template>

<script>
    import {MyAxios} from '@/services/index'

    export default {
        name: "JavaScript",
        data() {
            return {
                arr1: ['1st','2nd','3rd','4th','5th','6th','7th'],
                arr2: [1,2,3,4,5,6,7],
                arr3: [1,2,"hello",4,5,6,7],
                arr4: [1,2,3,"hello",5,[1,2,3],6,7],
                element: true,
                arr5: new Array(5),
                arr6: [["world",2,3],1,2,3,4,5,6,7,8,9,10]
            }
        },
        methods: {
            initPromise() {
                let promise = new Promise(((resolve, reject) => {
                    MyAxios.get('posts').then((response) => {
                        let userID = response.data[0].userId;
                        console.log(userID);
                        if (userID === 1) {
                            resolve('success')
                        }
                        else {
                            reject('fail')
                        }
                    });
                }));
                promise.then((message) => {
                    console.log('then');
                    console.log(message);
                })
                    .catch((message) => {
                        console.log('catch');
                        console.log(message)
                    })
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
                let hundred = this.arr2[50] = 'ПИСЯТ';
                console.log(this.arr2);
                alert(this.arr2);
                alert(this.arr2.length)
            },
            scooterFire() {
                let keys = Object.keys(this.arr2);
                // for(let i = 0; i < this.arr2.length; i++) {
                //     document.write(this.arr2[i] + '<br/>')
                // }
                // for( let i = 0; i < keys.length; i++) {
                //     document.write(keys[i] + ' => ' + this.arr2[keys[i]] + '<br>')
                // }
                alert(this.arr6[0[0]])
            }
        },
        mounted() {
            // console.log([this.element + false]);
            console.log(this.arr3)
            // alert(this.arr4)
        }
    }
</script>

<style scoped>

</style>