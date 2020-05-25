const TEXTCAT = document.getElementById('infocat');
const SAYCAT = document.getElementById('saycat');
const NAMECAT = 'TOM';
const WEIGHTCAT = 20;

const TEXTRAT = document.getElementById('inforat');
const SAYRAT = document.getElementById('sayrat');
const NAMERAT = 'JERRY';
const WEIGHTRAT = 3;

const RANDOMSPEEDCAT = (Math.random()*40 +50).toFixed(0); //randdom tu 50 -90;
const RANDOMSPEEDRAT = (Math.random()*50 +50).toFixed(0); //randdom tu 50 -100;

class Rat{
    constructor(name,weight,status){
        this.name = name;
        this.weight = weight;
        this.speed = RANDOMSPEEDRAT;
        this.status = status;
    }
    say(){
        return 'chít,chít';
    }
    info(){
        
        let text = "<h3>RAT</h3> Name: "+this.name+"<br> Weight: "+this.weight+"<br> Speed: "+this.speed+'<br>'
        if(this.status) text +='Status: Alive <br><br>'; else text+="Status: Dead <br><br>"
        return text;
    }
}

class Cat{
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
        this.speed = RANDOMSPEEDCAT;
    }
    say(){
        return 'meo, meo';
    }
    catch(mouse){
        return this.speed > mouse.speed? true : false;
    }
    eat(mouse){
        if(mouse.status && this.catch(mouse)) {this.weight +=mouse.weight; mouse.status = false; return true}
        else return false;
    }
    info(){
        let text = "<h3>CAT</h3> Name: "+this.name+"<br> Weight: "+this.weight+"<br> Speed: "+this.speed+'<br><br>'
        return text;
    }
}

let cat = new Cat(NAMECAT,WEIGHTCAT);
let rat = new Rat(NAMERAT,WEIGHTRAT,true)



function sayCat(){
    debugger
    let text = cat.say();
    SAYCAT.innerHTML = text;
}
function sayRat(){
    let text = rat.say();
    SAYRAT.innerHTML = text;
}
function catchRat(){
    let flag = cat.catch(rat);
    if(flag) 
    {SAYCAT.innerHTML = 'Chay đi đâu con trai!!';
    SAYRAT.innerHTML = 'Tha cho em!!';}
    else{
        SAYRAT.innerHTML = 'Lêu lêu!!';
        SAYCAT.innerHTML = 'Hãy đợi đấy';
    }
}
function eatRat(){
    let flag = cat.eat(rat);
    if(flag) 
    {SAYCAT.innerHTML = 'Mút chút chút!!';
    SAYRAT.innerHTML = 'XXXXXXXXX';}
    else {
        if(rat.status){
            SAYRAT.innerHTML = 'Lêu lêu!!';
            SAYCAT.innerHTML = 'Ko bắt đc';}
        else{
            SAYCAT.innerHTML = 'Đồ ăn ko tươi!!';
            SAYRAT.innerHTML = 'XXXXXXXXXXXX';
        }
    }
    infoChar();
}
function infoChar(){
    TEXTCAT.innerHTML = cat.info();
    TEXTRAT.innerHTML = rat.info();
}
infoChar();