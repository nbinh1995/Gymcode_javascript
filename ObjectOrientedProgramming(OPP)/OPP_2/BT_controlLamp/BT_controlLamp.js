const DEAULT_STATUS = false;
const LAMP_1 = document.getElementById('lamp_1');
const LAMP_2 = document.getElementById('lamp_2');

const LIGHT_BG = 'rgba(255,255,255,1)';
const LIGHT_SD = 'rgba(255, 255, 255, 0.8) 0px 2px 10px 0px,'+ 
                'rgba(255, 255, 255, 0.8) 0px 5px 50px 0px,'+
                 'rgba(255, 255, 255, 0.6) 0px 8px 80px 0px,'+ 
                 'rgba(255, 255, 255, 0.6) 0px 8px 120px 0px';
const DARK_BG = "rgba(255,255,255,0.03)";
const DARK_SD = 'inset 2px -2px 10px rgba(255,255,255,0.07)'

const SWITCH_1 = document.getElementById('switch_1');
const SWITCH_2 = document.getElementById('switch_2');
const SW_1 = document.getElementById('sw1');
const SW_2 = document.getElementById('sw2');
const LIGHT = 'rgba(201, 15, 15, 0.8)';
const DARK = 'rgba(255,255,255,0.4)'
class SwitchButton{
    constructor(){
        this.status= DEAULT_STATUS;
        this.lamp;
    }
    connectToLamp(Lamp){
        this.lamp = Lamp;
    }
    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }
    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    }
}
class ElectricLamp{
    constructor(){
        this.status= DEAULT_STATUS;
    }
    turnOff(){
        this.status = false;
    }
    turnOn(){
        this.status = true;
    }
}

let lamp_1 = new ElectricLamp();
let lamp_2 = new ElectricLamp();
let sw_1 = new SwitchButton();
let sw_2 = new  SwitchButton();

sw_1.connectToLamp(lamp_1);
sw_2.connectToLamp(lamp_2);

function controlLamp1(){
if(SWITCH_1.checked == true) 
{   SW_1.style.color = LIGHT;
    sw_1.switchOn(); }
else {
    SW_1.style.color = DARK;
    sw_1.switchOff();}

if(lamp_1.status) {
    LAMP_1.style.background= LIGHT_BG;
    LAMP_1.style.boxShadow= LIGHT_SD;
}else{
    LAMP_1.style.background= DARK_BG;
    LAMP_1.style.boxShadow= DARK_SD;
}
}

function controlLamp2(){
if(SWITCH_2.checked) 
{   SW_2.style.color = LIGHT;
    sw_2.switchOn(); }
else{ 
    SW_2.style.color = DARK;
    sw_2.switchOff();}
if(lamp_2.status) {
    LAMP_2.style.background= LIGHT_BG;
    LAMP_2.style.boxShadow= LIGHT_SD;

}else{
    LAMP_2.style.background= DARK_BG;
    LAMP_2.style.boxShadow= DARK_SD;
}
}