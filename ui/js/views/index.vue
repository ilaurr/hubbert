<template>
    <div class="container-fluid p-0 m-0">

        <div class="d-flex h-100">

            <div class="w-80 left-side">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a v-on:click="selectedRoom='Living'" class="nav-link active" id="living-tab" data-toggle="tab" href="#living" role="tab" aria-controls="living" aria-selected="true">Living</a>
                    </li>
                    <li class="nav-item">
                        <a v-on:click="selectedRoom='Bedroom'" class="nav-link" id="bedroom-tab" data-toggle="tab" href="#bedroom" role="tab" aria-controls="bedroom" aria-selected="false">Bedroom</a>
                    </li>
                    <li class="nav-item">
                        <a v-on:click="selectedRoom='Bathroom'" class="nav-link" id="bathroom-tab" data-toggle="tab" href="#bathroom" role="tab" aria-controls="bathroom" aria-selected="false">Bathroom</a>
                    </li>
                    <li class="nav-item">
                        <a v-on:click="selectedRoom='Kitchen'" class="nav-link" id="kitchen-tab" data-toggle="tab" href="#kitchen" role="tab" aria-controls="kitchen" aria-selected="false">Kitchen</a>
                    </li>
                    <li class="nav-item">
                        <a v-on:click="selectedRoom='Hallway'" class="nav-link" id="hallway-tab" data-toggle="tab" href="#hallway" role="tab" aria-controls="hallway" aria-selected="false">Hallway</a>
                    </li>
                </ul>

                <div class="tab-content p-3 m-3" id="myTabContent">

                    <div class="tab-pane fade show active" id="living" role="tabpanel" aria-labelledby="living-tab">
                        <h1>Living</h1>
                        <div class="btns">
                            <button v-on:click="selected(1,'groups')" class="active"><img src="../img/lights.png"><span>All Lights</span></button>
                            <button v-on:click="selected(7,'lights')"><img src="../img/ledstrip.png"><span>Couch Strip</span></button>
                            <button v-on:click="selected(8,'lights')"><img src="../img/ledstrip.png"><span>TV Strip</span></button>
                            <button v-on:click="selected(10,'lights')"><img src="../img/light.png"><span>Light 1</span></button>
                            <button v-on:click="selected(12,'lights')" class="notactive"><img src="../img/light.png"><span>Light 2</span></button>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="bedroom" role="tabpanel" aria-labelledby="bedroom-tab">
                        <h1>Bedroom</h1>
                        <div class="btns">
                            <button v-on:click="selected(2,'groups')"><img src="../img/lights.png"><span>All Lights</span></button>
                            <button v-on:click="selected(4,'lights')"><img src="../img/light.png"><span>Light 1</span></button>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="bathroom" role="tabpanel" aria-labelledby="bathroom-tab">
                        <h1>Bathroom</h1>
                        <div class="btns">
                            <button v-on:click="selected(3,'groups')"><img src="../img/lights.png"><span>All Lights</span></button>
                            <button v-on:click="selected(5,'lights')"><img src="../img/light.png"><span>Light 1</span></button>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="kitchen" role="tabpanel" aria-labelledby="kitchen-tab">
                        <h1>Kitchen</h1>
                        <div class="btns">
                            <button v-on:click="selected(4,'groups')"><img src="../img/lights.png"><span>All Lights</span></button>
                            <button v-on:click="selected(9,'lights')"><img src="../img/light.png"><span>Light 1</span></button>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="hallway" role="tabpanel" aria-labelledby="hallway-tab">
                        <h1>Hallway</h1>
                        <div class="btns">
                            <button v-on:click="selected(7,'groups')"><img src="../img/lights.png"><span>All Lights</span></button>
                            <button v-on:click="selected(13,'lights')"><img src="../img/light.png"><span>Light 1</span></button>
                            <button v-on:click="selected(11,'lights')"><img src="../img/light.png"><span>Light 2</span></button>
                        </div>
                    </div>

                </div>
            </div>

            <div class="w-20 right-side">
                <h1>Control Panel</h1>
                <div class="text-center p-2"><button id=on type="button" class="btn btn-default active" v-on:click="buttonOn()">{{bOn}}</button></div>
                <div class="text-center p-2"><button id=off type="button" class="btn btn-default" v-on:click="buttonOff()">{{bOff}}</button></div>
                <div class="text-center p-2"><button id=sat type="button" class="btn btn-default" v-on:click="buttonSat()">{{bSat}}</button></div>
                <div class="text-center p-2"><button id=bri type="button" class="btn btn-default" v-on:click="buttonBri()">{{bBri}}</button></div>
                <div class="text-center p-2"><button id=hue type="button" class="btn btn-default" v-on:click="buttonHue()">{{bHue}}</button></div>
                <div class="text-center p-2"><button id=ct type="button" class="btn btn-default" v-on:click="buttonCt()">{{bCt}}</button></div>
                <div class="text-center p-3"><span>Brightness:</span> <b-form-slider id=bri v-model="briValue" :min="0" :max="100" trigger-change-event></b-form-slider></div>
                <div class="text-center p-3"><span>Saturation:</span><b-form-slider id=sat v-model="satValue" :min="0" :max="100" trigger-change-event></b-form-slider></div>
                <div class="text-center p-3"><span>Color Temperature:</span><b-form-slider id=ct v-model="ctValue" :min="0" :max="100" trigger-change-event></b-form-slider></div>
                <div class="text-center p-3 color-wheel"><span>Select Color:</span><choice-color :colors='colors' radius='10em' @updateColor='updateColor'></choice-color></div>

                <div>
                    <div v-if="health==0">OK</div>
                    <div v-if="health==1">ERR</div>
                    <div v-if="health==2">Wait</div>
                </div>

            </div>

        </div>

        <!--<button v-on:click="selectedRoom='Living'">Living</button>
        <button v-on:click="selectedRoom='Bedroom'">Bedroom</button>
        <button v-on:click="selectedRoom='Bathroom'">Bathroom</button>
        <button v-on:click="selectedRoom='Kitchen'">Kitchen</button>
        <button v-on:click="selectedRoom='Hallway'">Hallway</button>-->
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
 var colorkey=
            {
                "#FF0000": 0,
                "#FF6A06": 4300,
                "#FFFF00": 10000,
                "#00FF00": 24000,
                "#80FF00": 20000,
                "#00FFFF": 39000,
                "#0000FF": 42000,
                "#FF00FF": 50000,
                "#FF0080": 58000,

            };
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
            satValue:50,
            briValue:50,
            ctValue:200,
            huevalue:0,
            bOn:'Set ON',
            bOff:'Set OFF',
            bSat:'Set SAT',
            bBri:'Set BRI',
            bHue:'Set HUE',
            bCt: 'Set CT',
            sliderVal: 5,
            colors: [
                "#FF0000",
                "#FF6A06",
                "#FFFF00",
                "#00FF00",
                "#80FF00",
                "#00FFFF",
                "#0000FF",
                "#FF00FF",
                "#FF0080"
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
      this.hueValue = colorkey[this.color]

    },
        selected (selectedId, selectedType){
            this.selectedId = selectedId;
            this.selectedType = selectedType;
            console.log(selectedId);
            console.log(selectedType);
        },

        buttonOn (){
            // this.bOn = 'Sent!';
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
            // this.bOff = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/off/"+this.selectedId, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonSat (){
            // this.bSat = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/sat/"+this.selectedId+"/"+this.satValue, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonBri (){
            // this.bBri = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/bri/"+this.selectedId+"/"+this.parameter, function( data ) {
                console.log (data);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonHue (){
            // this.bHue = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/hue/"+this.selectedId+"/"+this.hueValue, function( data ) {
                console.log (data);
                console.log(hueValue);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        },

        buttonCt (){
            // this.bCt = 'Sent!';
            let that = this;
            $.get( "/"+this.selectedType+"/ct/"+this.selectedId+"/"+(150+3.5*this.ctValue), function( data ) {
                console.log (data);
                conosle.log (100+3.5*this.ctValue);
                if (data.status === 'ok'){
                    that.show = true;
                }
                
            });            
        }

    }
};
</script>