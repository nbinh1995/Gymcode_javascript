        let canvas= document.getElementById('gameboard');
        let ctx = canvas.getContext('2d');
        // let img = new Image();
        // img.src = 'img/car_ahead.png';
        const UP = document.getElementById('car1');
        const DOWN = document.getElementById('car2');
        const LEFT = document.getElementById('car3');
        const RIGHT = document.getElementById('car4');

        const BOMB =document.getElementById('bomb');
        const COIN = document.getElementById('coin');
        
        const   DEFAULT_X = 650;
        const   DEFAULT_Y = 300;
        const   DEFAULT_WIDTH = 80;
        const   DEFAULT_HEIGHT = 100;
        const   DEFAULT_SPEED = 5;

        
        

        class Car{
            constructor(){
            this.x = DEFAULT_X;
            this.y =  DEFAULT_Y;
            this.width = DEFAULT_WIDTH;
            this.height = DEFAULT_HEIGHT;
            this.speed = DEFAULT_SPEED;
            }
            drawCar(){
                ctx.beginPath();
                ctx.drawImage(imgcar,this.x,this.y,this.width,this.height);
                ctx.closePath(); 
            }
            moveCar(){
                switch(imgcar){
                    case DOWN:
                        this.y +=this.speed;
                        if(this.y > 768) this.y = 0;
                        break;
                    case UP:
                        this.y -=this.speed;
                        if(this.y < 0) this.y =768;
                        break;
                    case LEFT:
                        this.x -=this.speed;
                        if(this.x < 0) this.x =1368;
                        break;
                    case RIGHT:
                        this.x +=this.speed;
                        if(this.x > 1368) this.x = 0;
                        break;
                        
                }
            
            }
           
        }
            class Item{
                constructor(){
                this.x = Math.random()* 1268;
                this.y = Math.random()*668;
                this.width = 50;
                this.height = 50;
                }
            drawItem(item){
                ctx.beginPath();
                ctx.drawImage(item,this.x,this.y,this.width,this.height);
                ctx.closePath();  
            }
        }

        let arritem = [];
        let imgcar = UP;
        let car = new Car();
        

        function createItem(){
            for(let i =0; i<6; i++){
                arritem.push(new Item )
            }
        }
        function draw3bomb_3coin(){
            for( let i=0 ; i<arritem.length;i++){
                if(i<3) arritem[i].drawItem(BOMB); else arritem[i].drawItem(COIN); 
            }
        }
        function controlCar(){
            switch(event.key){
            case 'Control':
                car.speed +=2;
                break;
            case 'ArrowLeft':
                imgcar = LEFT;
                break;
            case 'ArrowUp':
                imgcar = UP;
                break;
            case 'ArrowRight':
                imgcar = RIGHT;
                break;
            case 'ArrowDown':
                imgcar = DOWN;
                break;
            }
        }
        
        function moveObj(){
           
            ctx.clearRect(0,0,canvas.width,canvas.height);
            window.addEventListener('keydown',controlCar)
            car.moveCar();
            ruleGame();
            draw3bomb_3coin();
            car.drawCar();
            window.requestAnimationFrame(moveObj);
        }

        function ruleGame(){
        // Ăn bomb lose, Ăn 3 vàng win.
            let pos=6;
            let len = arritem.length;
        for (let i = 0; i<len;i++){
            let item=arritem[i];
            
            if(i<3){
                //bomb
                if((item.x-10) < (car.x+40) && (car.x+40) <(item.x+60) && (item.y-10) < (car.y+50) && (car.y+50) < (item.y+60))
                {  
                    alert('GameOver!!! F5 Play again!');
                    return;
                }
            }else{
                //coin
                if((item.x-10) < (car.x+40) && (car.x+40) <(item.x+60) && (item.y-10) < (car.y+50) && (car.y+50) < (item.y+60))
                {
                    pos=i;
                }
            }
            }
        if(pos !=6) arritem.splice(pos,1);
        if(arritem.length == 3) {alert('You are winner!!! F5 Play again'); return;}
        }

        function playGame(){
        createItem();
        let start ;
        do{
            start = confirm("| RULE: EAT BOMB LOSE/EAT 3 COIN WIN | => Let's Play !!!");
        }
        while (!start) 
        
        window.requestAnimationFrame(moveObj);
    }
        playGame();   

        // window.onload = function {
        //     car.drawCar();
        // }