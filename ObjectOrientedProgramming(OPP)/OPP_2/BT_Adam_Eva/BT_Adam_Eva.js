// Story :
// Adam và Eva là những con người đầu tiên, trong vườn địa đàng có một cây táo ra những quả táo chín mọng. 
// Adam và Eva lấy một quả táo và ăn, mỗi người ăn một miếng táo cho đến khi hết!
const NAME = ['Adam','Eva'];
const GENDER = [true,false];
const WEIGHT = [75,47];

class Apple{
    constructor(){
        this.weight = 10;
    }
    getWeight(){
        return this.weight;
    }
    decreaseWeight(){
        this.weight--;
    }
    isEmpty(){
    if(this.weight === 0) return true; else return false;
    }
}
class Human{
    constructor(){
        this.name;
        this.gender;
        this.weight;
    }
    isMale(){
        if(gender) return true; else return false
    }
    setGender(gender){
        this.gender = gender;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    checkApple(apple){
        if(apple.isEmpty()) return false; else return true;
    }
    say(str){
        console.log(this.name+": "+ str);
    }
    eat(apple){
        this.weight++;
        apple.decreaseWeight();
    }
}

// Khoi tao Adam va Eva.
let Adam = new Human();
let Eva = new Human();
Adam.setName(NAME[0]);
Eva.setName(NAME[1]);
Adam.setGender(GENDER[0]);
Eva.setGender(GENDER[1]);
Adam.setWeight(WEIGHT[0]);
Eva.setWeight(WEIGHT[1]);
// Apple .
let apple = new Apple();
//Story Adam vs Eva.
function storyAdam_Eva(){
Adam.say("Hello. I'm "+Adam.getName())
Eva.say("Hi "+Adam.getName()+". I'm "+Eva.getName()+ ". I'm hurry.")
Adam.say("Look! That is a apple. Let 's eat it.")
while(!apple.isEmpty()){
    Adam.say('Eat it');
    console.log('Adam_Weight_before: '+Adam.getWeight())
    Adam.eat(apple);
    console.log('Adam_Weight_after: '+Adam.getWeight())
    console.log('AppleWeight: '+apple.getWeight());
    if(Eva.checkApple(apple)){
    Eva.say('Eat it')
    console.log('Eva_Weight_before: '+Eva.getWeight())
    Eva.eat(apple);
    console.log('Eva_Weight_after: '+Eva.getWeight())
    console.log('AppleWeight: '+apple.getWeight());}
    else Eva.say('The apple was eaten.')
}
console.log('END STORY ADAM AND EVA');
}
storyAdam_Eva();
