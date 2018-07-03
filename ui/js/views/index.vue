<template>
    <div>
        Hello!!!!
        <button v-on:click="selectedRoom='Living'">Living</button>
        <button v-on:click="selectedRoom='Bedroom'">Bedroom</button>
        <button v-on:click="selectedRoom='Bathroom'">Bathroom</button>
        <button v-on:click="selectedRoom='Kitchen'">Kitchen</button>
        <button v-on:click="selectedRoom='Hallway'">Hallway</button>
        <div>
            <div>
                Living
                <div>
                    <button v-on:click="selected(1,'groups')">All Living</button>
                    <button v-on:click="selected(7,'lights')">Living Couch Strip</button>
                    <button v-on:click="selected(8,'lights')">Living TV Strip</button>
                    <button v-on:click="selected(10,'lights')">Living 1</button>
                    <button v-on:click="selected(12,'lights')">Living 2</button>
                </div>
            </div>
            Bedroom
            <div>
                <button v-on:click="selected(2,'groups')">All Bedroom</button>
                <button v-on:click="selected(4,'lights')">Bed 1</button>
            </div>
            Bathroom
            <div>
                <button v-on:click="selected(3,'groups')">All Bathroom</button>
                <button v-on:click="selected(5,'lights')">Bath 1</button>
            </div>
            Kitchen
            <div>
                <button v-on:click="selected(4,'groups')">All Kitchen</button>
                <button v-on:click="selected(9,'lights')">Kitchen 1</button>
            </div>
            Hallway
            <div>
                <button v-on:click="selected(7,'groups')">All Hol </button>
                <button v-on:click="selected(13,'lights')">Hol 1</button>
                <button v-on:click="selected(11,'lights')">Hol 2</button>
            </div>
        </div>
        <div>
            Control
            <div>
                <button id=on type="button" class="btn btn-default" v-on:click="buttonOn()">{{bOn}}</button>
                <button id=off type="button" class="btn btn-default" v-on:click="buttonOff()">{{bOff}}</button>
                <button id=sat type="button" class="btn btn-default" v-on:click="buttonSat()">{{bSat}}</button>
                <button id=bri type="button" class="btn btn-default" v-on:click="buttonBri()">{{bBri}}</button>
                <button id=hue type="button" class="btn btn-default" v-on:click="buttonHue()">{{bHue}}</button>
                <button id=ct type="button" class="btn btn-default" v-on:click="buttonCt()">{{bCt}}</button>
            </div>
            Status
            <div>
                <div v-if="health==0">OK</div>
                <div v-if="health==1">ERR</div>
                <div v-if="health==2">Wait</div>
            </div>
        </div>

        <div v-if="health==0">OK</div>
        <div v-if="health==1">ERR</div>
        <div v-if="health==2">Wait</div>
        

        

        <b-form-slider id=bri v-model="briValue" min="0" :max="100" trigger-change-event></b-form-slider>
        <b-form-slider id=sat v-model="satValue" min="0" :max="100" trigger-change-event></b-form-slider>
        <b-form-slider id=ct v-model="ctValue" min="0" :max="100" trigger-change-event></b-form-slider>
    <h2>Color picked: <span :style="{'color': color}">{{color}}</span></h2>
    <choice-color :colors='colors' radius='10em' @updateColor='updateColor'>
    </choice-color>

    </div>
</template>
<script>
const Vue = require ('vue');
const $ = require ('jquery');
const bFormSlider = require("vue-bootstrap-slider").bFormSlider;
const colorWheel = require ('vue-circle-choice').choiceColor;

Vue.use(bFormSlider);
Vue.use(colorWheel);
Vue.component('b-form-slider', bFormSlider);
Vue.component('choice-color', colorWheel);

module.exports = {
    name: 'index',
    data (){
        return {
            selectedRoom: 'None',
            selectedId: 0,
            selectedType: 0,
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
            sliderVal: 5,
            colors: [
        '#1ba6cc',
        '#189ba7',
        '#98c6ae',
        '#45a270',
        '#7cb325',
        '#eb9826',
        '#7B1FA2',
        '#FF5252'
      ],
      index: 0,
      color: null
        };
    },
    methods: {
        buttonPressed (){
            this.myVar = 'Salut';
            let that = this;
            wait(500);
            $.get( "/lights/state/"+this.selectedId, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },
        
        updateColor ({ index, color }) {
      this.index = index
      this.color = color
    },
        selected (selectedId, selectedType){
            this.selectedId = selectedId;
            this.selectedType = selectedType;
            console.log(selectedId);
            console.log(selectedType);
        },

        buttonOn (){
            this.bOn = 'Sent!';
            let that = this;
            this.health = 2;
            $.get( "/"+this.selectedType+"/on/"+this.selectedId, function( data ) {
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
            $.get( "/"+this.selectedType+"/off/"+this.selectedId, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonSat (){
            this.bSat = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/sat/"+this.selectedId+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonBri (){
            this.bBri = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/bri/"+this.selectedId+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonHue (){
            this.bHue = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/hue/"+this.selectedId+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonCt (){
            this.bCt = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/ct/"+this.selectedId+"/"+this.ctValue, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        }

    }
};
</script>