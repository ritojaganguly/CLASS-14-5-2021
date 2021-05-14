class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }
    getCount(){
        var pcref = db.ref("Pcount");
        pcref.on("value",(data)=>{
            playercount  = data.val()
        })
    }
    update(count){
        db.ref("/").update({
            Pcount : count,
            finishedPlayers : 0
        })
    }
    updatePlayer(){
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).update({
            name: this.name,
            distance: this.distance
        });
    }
    static playerInfo(){
        var Pinfo = db.ref("players");
        Pinfo.on("value", (data)=>{
            allPlayers = data.val()
        })
                          console.log(allPlayers);
    }
    updatefp(){
        db.ref("/").update({
            finishedPlayers: this.rank,
        })
    }
    getfp(){
        db.ref("finishedPlayers").on("value", (data)=>{
            this.rank=data.val();
        })
    }
}