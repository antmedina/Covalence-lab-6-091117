//Variables
var friends = ["Kenneth", "Rick", "Razvan", "Nikki", "Gambi"];
var  locations = ["Wired Coffee Bar","Innovation Center", "Pickle Barrel Pub", "Sunset Rock", "Terra Nostra Tapas and Wine", "Matilda's Midnight","Ceniza", "Gold's Gym","The Revelry Room","The Blue Hole" ];
var weapons = ["a Rusty Spoon","a Super Soaker filled with Tabasco","1,000,000 Needle Pokes","Weaponized Hamsters","a Sharp-Pointy Chair","Bad Coffee","Draino","a Chemical Cocktail","90s Pop Star Records","Boredom","Overexposure to Richard Simmons","Halitosis","a Ceremonial Mating Statue","Bad Dates on Tinder","a SUV filled with Corgis","a NES Zapper Light Gun","bad Chinese Food","the evil will of Pazuzu","a lecture of on how to code","a DXR-6 disruptor rifle"];

// //Event listener
document.addEventListener("DOMContentLoaded", function(){
        for (let i = 1; i < 100; i++) {
            var h3 = document.createElement("h3");
            h3.innerText = "Accusation " + i + ".";
            h3.addEventListener('click', function () {
//randomized variable values
                var friend = friends[Math.floor(Math.random()*friends.length)];
                var weapon = weapons[Math.floor(Math.random()*weapons.length)];
                var location = locations[Math.floor(Math.random()*locations.length)];
//window alert text                
                alert("Accusation " +i+": I accuse "+friend+ " killed by using "+weapon+ " while at " +location+"!");
                });
            document.body.appendChild(h3);
        }
    });

