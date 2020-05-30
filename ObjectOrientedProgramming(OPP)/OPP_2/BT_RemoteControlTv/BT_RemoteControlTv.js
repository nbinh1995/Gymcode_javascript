const CHANNEL= ["https://www.youtube.com/embed/8_TkFVKWOI8?controls=0&enablejsapi=1&autoplay=1&loop=1",
                "https://www.youtube.com/embed/GBDMlrvZoeU?controls=0&enablejsapi=1&autoplay=1&loop=1",
                "https://www.youtube.com/embed/8eeZkK5QL_0?controls=0&enablejsapi=1&autoplay=1&loop=1"];
        
const DISPLAY = document.getElementById('channel');
const TIVI = document.getElementById('tivi');
const REMOTE = document.getElementById('remote');

const RAND = (Math.random()*2).toFixed(0);
class Remote{
    constructor(code){
        this.code = code
    }
    changeChannel(tivi,newchannel){
        if(tivi.code === this.code && tivi.status)
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
            tivi.onoffPower();
        } else console.log('Remote disconnect');
    }
}
class Tivi{
    constructor(){
        this.num = RAND;
        this.channel = CHANNEL[RAND];
        this.volume = 50;
        this.status = false
        this.code;
        this.time=0;
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
        if(newvolume) this.volume= (this.volume+10);
        else this.volume =(this.volume - 10);
        if(this.volume > 100) this.volume= 100;
        if(this.volume < 0 ) this.volume=0;
         this.time= player.getCurrentTime();
       } 
    }

    onoffPower(){
        this.status = !this.status;
    }
}
//--------------------------------------
let tv = new Tivi();
let remote = new Remote('number1');
tv.connettoRemote(remote);
function runTV(){
    if(tv.status) 
    {DISPLAY.src = tv.channel;
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    else DISPLAY.src = '';
}
//--------------------
TIVI.addEventListener('click',runTV);
REMOTE.addEventListener('click',runTV);

//API iframe youtube
var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];


    var player;
    function onYouTubeIframeAPIReady() {
          player = new YT.Player('channel', { 
            events: {
                'onReady': onPlayerReady,
              }
          });
    }
    function onPlayerReady(event) {  
        event.target.setVolume(tv.volume);
        event.target.seekTo(tv.time);
        event.target.playVideo();
    }