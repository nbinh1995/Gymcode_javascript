class Remote{
    constructor(code){
        this.code = code
    }
    changeChannel(tivi,newchannel){
        if(tivi.code === this.code)
        {
            tivi.changeChannel(newchannel);
        } else console.log('Remote disconnect');
    }
    changeVolume(tivi,newvolume){
        if(tivi.code === this.code)
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
    constructor(channel,volume,status){
        this.channel = channel;
        this.volume = volume;
        this.status = status;
        this.code;
    }
    connettoRemote(remote){
        this.code = remote.code;
    }
    changeChannel(newchannel){
        this.channel=newchannel;
    }  
    changeVolume(newvolume){
        this.volume=newvolume;
    }
    onofPower(){
        this.status = !this.status;
    }
}