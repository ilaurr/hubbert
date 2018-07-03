<template>
    <div>
        Hello!!!!
        <div>
            Room: Living 1
        </div>
        <div>
            Room: Bedroom 2
        </div>
        <div>
            Room: Bathroom 3
        </div>
        <div>
            Room: Kitchen 4
        </div>
        <div>
            Room: Hallway 7
        </div>
        <div>
            Living
            <div>
                All 1
                Living Couch Strip 7
                Living TV Strip 8
                Living 1 10
                Living 2 12
            </div>
            Bedroom
            <div>
                All 2
                Bed 1 4
            </div>
            Bathroom
            <div>
                All 3
                Bath 1 5
            </div>
            Kitchen
            <div>
                All 4
                Kitchen 1 9
            </div>
            Hallway
            <div>
                All 7
                Hol 2 11
                Hol 1 13
            </div>
        </div>
        <div>
            Control
            <div>
                On
                Off
                Bri
                Sat
                K-Temp
                Hue
            </div>
        </div>





        <input v-model="value" placeholder="Insert value"></input>
        <button type="button" class="btn btn-default" v-on:click="buttonPressed()">{{myVar}}</button>
        <div v-if="health==0">OK</div>
        <div v-if="health==1">ERR</div>
        <div v-if="health==2">Wait</div>
        
        <button id=on type="button" class="btn btn-default" v-on:click="buttonOn()">{{bOn}}</button>
        <button id=off type="button" class="btn btn-default" v-on:click="buttonOff()">{{bOff}}</button>
        <button id=sat type="button" class="btn btn-default" v-on:click="buttonSat()">{{bSat}}</button>
        <button id=bri type="button" class="btn btn-default" v-on:click="buttonBri()">{{bBri}}</button>
        <button id=hue type="button" class="btn btn-default" v-on:click="buttonHue()">{{bHue}}</button>
        <button id=ct type="button" class="btn btn-default" v-on:click="buttonCt()">{{bCt}}</button>
lalala
        

        <b-form-slider id=bri v-model="basicValue" min="0" :max="100" trigger-change-event></b-form-slider>
        <b-form-slider id=sat v-model="basicValue" min="0" :max="100" trigger-change-event></b-form-slider>
lala



    </div>
</template>
<script>
const Vue = require ('vue');
const $ = require ('jquery');
const bFormSlider = require("vue-bootstrap-slider").bFormSlider;

Vue.use(bFormSlider);
Vue.component('b-form-slider', bFormSlider);

module.exports = {
    name: 'index',
    data (){
        return {
            myVar: 'Hello',
            value: 4,
            type: 'lights',
            parameter: 201,
            health: 0,
            bOn:'Do ON',
            bOff:'Do OFF',
            bSat:'Do SAT',
            bBri:'Do BRI',
            bHue:'Do HUE',
            bCt: 'Do CT',
            sliderVal: 5
        };
    },
    methods: {
        buttonPressed (){
            this.myVar = 'Salut';
            let that = this;
            wait(500);
            $.get( "/lights/state/"+this.value, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonOn (){
            this.bOn = 'Sent!';
            let that = this;
            this.health = 2;
            $.get( "/"+this.type+"/on/"+this.value, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.health = 0;
                }
                else that.health = 1;
                
            });            
        },

        buttonOff (){
            this.bOff = 'Sent!';
            let that = this;
            $.get( "/"+this.type+"/off/"+this.value, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonSat (){
            this.bSat = 'Sent!';
            let that = this;
            $.get( "/"+this.type+"/sat/"+this.value+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonBri (){
            this.bBri = 'Sent!';
            let that = this;
            $.get( "/"+this.type+"/bri/"+this.value+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonHue (){
            this.bHue = 'Sent!';
            let that = this;
            $.get( "/"+this.type+"/hue/"+this.value+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonCt (){
            this.bCt = 'Sent!';
            let that = this;
            $.get( "/"+this.type+"/ct/"+this.value+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        }

    }
};
</script>