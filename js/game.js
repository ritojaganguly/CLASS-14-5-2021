class Game{
    constructor(){
        
    }
    getState(){
        var ref = db.ref("Gstate");
        ref.on("value", function(data){
            gamestate = data.val();
        })
    }
    update(state){
        db.ref("/").update({
            Gstate : state
        })
    }
    async start(){
        if (gamestate === 0){
            player = new Player();
            var pcref = await db.ref("Pcount").once("value");
            if(pcref.exists()){
                playercount=pcref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        //car1 = createSprite(200,300);
        //car1.addImage(c1Image);
        car1 = createSprite(400,300);
        car1.addImage(c2Image);
        car2 = createSprite(600,300);
        car2.addImage(c3Image);
        car3 = createSprite(800,300);
        car3.addImage(c4Image);
        car4 = createSprite(1000,300);
        car4.addImage(c5Image);

        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hideForm();
        textSize(40);
        text("Game BEGINS!!", 100,200);
        Player.playerInfo();
        player.getfp();
        if(allPlayers !== undefined){
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            //var posy = 130;
            var pindex = 0;
            var xpos = 200;
            var ypos;           
           for (var p in allPlayers){
               pindex = pindex + 1;
               xpos = xpos + 200;
               ypos = displayHeight-allPlayers[p].distance
               cars[pindex-1].x= xpos;
               cars[pindex-1].y= ypos;
               if(pindex===player.index){
                   cars[pindex-1].shapeColor="blue";
                   camera.position.x = displayWidth/2
                   camera.position.y = cars[pindex-1].y
               }
                /* if(p === "player" + player.index){
                    fill("red");
                }else {
                    fill("black")
                }
               posy = posy + 20;
               textSize(15)
               text(allPlayers[p].name + ":" + allPlayers[p].distance, 50, posy);*/
            }
        }
    
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance = player.distance + 30;
            player.updatePlayer();
        }

        if(player.distance>displayHeight*5){
            gamestate=2;
            player.rank=player.rank+1;
            player.updatefp();
            text("Rank: " + player.rank, 80, -displayHeight*4-20);
        }
        drawSprites();
    }
    end(){
        console.log("Game ended!")
    }
}