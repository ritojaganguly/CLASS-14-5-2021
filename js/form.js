class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Name please!");
        this.button = createButton("Let's gooooo!!!");
        this.greeting = createElement("h2");
        this.title = createElement("h2");
        this.reset = createButton("RESET!!");
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game- Register NOW!");
        title.position(displayWidth/2, 10);

        this.input.position(displayWidth/2+300, displayHeight/2);
        
        this.button.position(displayWidth/2+370, displayHeight/2+50); 

        this.reset.position(displayWidth - 70, 20)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playercount = playercount + 1;
            player.index = playercount;
            player.update(playercount);
            player.updatePlayer();
            
            this.greeting.html("Hey" + " " + this.input.value() + "!");
            this.greeting.position(displayWidth/2+300, displayHeight/2);
            
        })

        this.reset.mousePressed(()=>{
            game.update(0);
            player.update(0);
        })
    }
    hideForm(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}