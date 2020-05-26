const CHANNEL= ["https://www.youtube.com/embed/8_TkFVKWOI8?autoplay=1&player.setVolume(50)",
                "https://www.youtube.com/embed/GBDMlrvZoeU?autoplay=1",
                "https://www.youtube.com/embed/8eeZkK5QL_0?autoplay=1"];
        
const DISPLAY = document.getElementById('channel');
const TIVI = document.getElementById('tivi');
const RAND = (Math.random()*2).toFixed(0);
class Remote{
    constructor(code){
        this.code = code
    }
    changeChannel(tivi,newchannel){
        if(tivi.code === this.code && this.status)
        {
            tivi.changeChannel(newchannel);
        } else console.log('Remote disconnect');
    }
    changeVolume(tivi,newvolume){
        if(tivi.code === this.code && tivi.status)
        {
            tivi.changeVolume(newvolume);
        } else console.log('Remote disconnect');
    }
    onoffPower(tivi){
        if(tivi.code === this.code)
        {
            tivi.onofPower();
        } else console.log('Remote disconnect');
    }
}
class Tivi{
    constructor(){
        this.num = RAND;
        this.channel = CHANNEL[RAND];
        this.volume = 0.9;
        this.status = false
        this.code;
        
    }
    connettoRemote(remote){
        this.code = remote.code;
    }
    changeChannel(newchannel){
        if(this.status){
        if(newchannel) this.num -=1;
        else this.num +=1;
        if(this.num > 2) this.num= 0;
        if(this.num < 0 ) this.num =2;
        console.log(this.num); 
        this.channel=CHANNEL[this.num];}
    }  
    changeVolume(newvolume){
        if(this.status){
        if(newvolume) this.volume= (this.volume+0.1).toFixed(1);
        else this.volume =(this.volume -0.1).toFixed(1);
        if(this.volume > 1.0) this.volume= 1.0;
        if(this.volume < 0.0 ) this.volume=0.0;
        console.log('volume: '+this.volume);} 
    }

    onoffPower(){
        this.status = !this.status;
    }
}

let tv = new Tivi();
let remote = new Remote('number1');
tv.connettoRemote(remote);
function onoffTV(){
    if(tv.status) DISPLAY.src = tv.channel;
    console.log(DISPLAY.src);
}
TIVI.addEventListener('click',onoffTV);
