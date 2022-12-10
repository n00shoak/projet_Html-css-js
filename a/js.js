//boutons :
attaque = document.getElementById("attaque")
defendre = document.getElementById("Defendre")
soins = document.getElementById("soins")
info = document.getElementById("info")
pass = document.getElementById("pass")
sort = document.getElementById("sort")

// ennemy graph
ennemiSelectE = document.getElementById("graphE")
ennemiSelectF = document.getElementById("graphF")
ennemiSelectG = document.getElementById("graphG")

// attack animation
slashA = document.getElementById("slashA")
slashA.style.display = "none";

slashB = document.getElementById("slashB")
slashB.style.display = "none";

slashC = document.getElementById("slashC")
slashC.style.display = "none";

slashD = document.getElementById("slashD")
slashD.style.display = "none";

// healing animation
healA = document.getElementById("healA")
healA.style.display = "none";

healB = document.getElementById("healB")
healB.style.display = "none";

healC = document.getElementById("healC")
healC.style.display = "none";

healD = document.getElementById("healD")
healD.style.display = "none";


// shield animation
ShieldA = document.getElementById("shieldA")
ShieldA.style.display = "none";

ShieldB = document.getElementById("shieldB")
ShieldB.style.display = "none";

ShieldC = document.getElementById("shieldC")
ShieldC.style.display = "none";

ShieldD = document.getElementById("shieldD")
ShieldD.style.display = "none";


perso_A = document.getElementById("perso_A")
perso_B = document.getElementById("perso_B")
perso_C = document.getElementById("perso_C")
perso_D = document.getElementById("perso_D")

//Health
hpEnnemiA = document.getElementById("hpEnnemi1")
hpEnnemiGraphismeA = document.getElementById("Hp_E_Graph1")

hpEnnemiB = document.getElementById("hpEnnemi2")
hpEnnemiGraphismeB = document.getElementById("Hp_E_Graph2")

hpEnnemiC = document.getElementById("hpEnnemi3")
hpEnnemiGraphismeC = document.getElementById("Hp_E_Graph3")

hpA = document.getElementById("hpA")
hp_A_grph = document.getElementById("hp_A_grph")

hpB = document.getElementById("hpB")
hp_B_grph = document.getElementById("hp_B_grph")

hpC = document.getElementById("hpC")
hp_C_grph = document.getElementById("hp_C_grph")

hpD = document.getElementById("hpD")
hp_D_grph = document.getElementById("hp_D_grph")

//mana
mana_a_t =document.getElementById("mana_A_T")
mana_a_g =document.getElementById("mana_A_G")

mana_b_t =document.getElementById("mana_B_T")
mana_b_g =document.getElementById("mana_B_G")

mana_c_t =document.getElementById("mana_C_T")
mana_c_g =document.getElementById("mana_C_G")

mana_d_t =document.getElementById("mana_D_T")
mana_d_g =document.getElementById("mana_D_G")


const desc = document.getElementById("desc")



//stats :
{
//player stats A
{
//basestats
A_pv = 30;
A_attack = 3;
A_def = 0;
A_speed = 3;
A_mana = 50;
//code stats
A_hp = A_pv
Ashield = A_def
A_mana_L = A_mana
}
//player B stats
{
//base stats
B_pv = 20;
B_attack = 5;
B_def = 0;
B_speed = 6;
B_mana = 100;
//code stats
B_hp = B_pv
Bshield = B_def
B_mana_L = B_mana
}
//player C stats
{
//base stats
C_pv = 25;
C_attack = 15;
C_def = 0;
C_speed = 4;
C_mana = 50;
//code stats
C_hp = C_pv
Cshield = C_def
C_mana_L = C_mana
}
//player D stats
{
//base stats
D_pv = 25;
D_attack = 10;
D_def = 1;
D_speed = 5;
D_mana = 50;
//code stats
D_hp = D_pv
Dshield = D_def
D_mana_L = D_mana
}
//ennemy 1 stats 
{
//base stats
E_pv = 100;
E_attack = 8;
E_def = 0;
E_speed = 8;
//code stats
E_hp = E_pv
}
//ennemy 2 stats 
{
//base stats
F_pv = 100;
F_attack = 8;
F_def = 0;
F_speed = 8;
//code stats
F_hp = E_pv
}

//ennemy 3 stats 
{
//base stats
G_pv = 100;
G_attack = 8;
G_def = 0;
G_speed = 8;
//code stats
G_hp = E_pv
}

}

//var general :
{
turns = [A_speed,B_speed,C_speed,D_speed,E_speed]
nextTurns =["P1","P2","P3","P4","E"]

playerHP = [A_hp,B_hp,C_hp,D_hp,] 
playerPV = [A_pv,B_pv,C_pv,D_pv,]

playerMNL = [A_mana,B_mana,C_mana,D_mana]
playerMN = [A_mana_L,B_mana_L,C_mana_L,D_mana_L]

playerATQ = [A_attack ,B_attack ,C_attack ,D_attack]
playerDEF = [A_def,B_def,C_def,D_def]
playerSHI = [Ashield,Bshield,Cshield,Dshield,]

ennemiHP = [E_hp,G_hp,F_hp]
ennemi_E_Death = false
ennemi_F_Death = false
ennemi_G_Death = false


playerPlaying =["paladin","witch","berserk","pirate"]

cd = 3
}

//shield initialisation
console.log("shield")
console.log(playerSHI)

//turn classification
console.log("first turns")
console.log(turns)
console.log(nextTurns)

//game initialisation
tri()
advanceTurn()
whoPlay =0
turn()
actualiseHP()
actualiseMana()

function tri () {
  for (let s = 0; s <= 10; s ++){
    
    for (let i = 0; i <= turns.length;  i ++) 
    {
      for (let b = 0; b <= turns.length - i; b ++) 
      {
        if (b != 0 && (turns[i - 1] > turns[i])) 
        {
          //set value on previous list value
          turns.splice(i - 1,0,turns[i]);

          //delete old value
          turns.splice(i + 1,1)

          // place indicator in the same place in the other list
          nextTurns.splice(i - 1,0,nextTurns[i]);
          nextTurns.splice(i + 1,1)
        }
      }
    }
  }
  
  console.log("turns")
  console.log(turns)
  console.log(nextTurns)
}

function nextTurn (){
  for (let b = 0; b <= turns.length - 1; b ++) {
    turns[b] = turns[b] - 1
  }
  console.log(turns)
}

function advanceTurn () {
  while (turns[0] != 0){ 
    nextTurn() 
  }
  console.log(turns)
}

function endTurn(){

  turns.splice (0 , 1)
  console.log(turns)
  if (nextTurns[0] == "P1"){
    nextTurns.splice(0 , 1)
    nextTurns[nextTurns.length] = "P1"
    turns[turns.length ] = A_speed
  }
  else if (nextTurns[0] == "P2"){
    nextTurns.splice(0 , 1)
    nextTurns[nextTurns.length] = "P2"
    turns[turns.length ] = B_speed
  }
  else if (nextTurns[0] == "P3"){
    nextTurns.splice(0 , 1)
    nextTurns[nextTurns.length] = "P3"
    turns[turns.length ] = C_speed
  }
  else if (nextTurns[0] == "P4"){
    nextTurns.splice(0 , 1)
    nextTurns[nextTurns.length] = "P4"
    turns[turns.length ] = D_speed
  }
  else if (nextTurns[0] == "E"){
    nextTurns.splice(0 , 1)
    nextTurns[nextTurns.length] = "E"
    turns[turns.length ] = E_speed
  }

  console.log(nextTurns)
  console.log(turns)

  checkFoeDeath()
  actualiseHP()
  actualiseMana()
  tri()
  advanceTurn()
  turn()

  console.log("shield")
  console.log(playerSHI)
}

function turn(){

  perso_A.style.border= "none";
  perso_B.style.border= "none";
  perso_C.style.border= "none";
  perso_D.style.border= "none";

  if (nextTurns[0] == "P1")
  {
    desc.innerHTML = "its time for the paladin to play !";
    perso_A.style.border= "solid medium cyan";
    whoPlay = 1
  }

  if (nextTurns[0] == "P2")
  {
    desc.innerHTML = "its time for the witch to play !";
    perso_B.style.border= "solid medium cyan";
    whoPlay = 2
  }

  if (nextTurns[0] == "P3")
  {
    desc.innerHTML = "its time for the berserk to play !";
    perso_C.style.border= "solid medium cyan";
    whoPlay = 3
  }

  if (nextTurns[0] == "P4")
  {
    desc.innerHTML = "its time for the pirate to play !";
    perso_D.style.border= "solid medium cyan";
    whoPlay = 4
  }

  if (nextTurns[0] == "E")
  {
    desc.innerHTML = "the ennemy atack now";
    setTimeout(() => {
      if (ennemi_E_Death == false){playerHP[ Math.floor(Math.random() * 4)] -= E_attack}
      if (ennemi_F_Death == false){playerHP[ Math.floor(Math.random() * 4)] -= F_attack}
      if (ennemi_G_Death == false){playerHP[ Math.floor(Math.random() * 4)] -= G_attack}
  
    reset()
    endTurn()
    }, 3000)
  }
  
 }

function reset()
{
  for (let i = 0; i < 4; i++) {
    playerSHI[i] = playerDEF[i]
    console.log("shield reset")
    console.log(playerSHI)

    playerMNL[i] = playerMN[i] 
    console.log( "manareset")
    console.log(playerMNL)
  }
  
}

function actualiseHP()
{

  //resize hp bar by the amount of hp left
  hpEnnemiA.innerHTML = " " +  ennemiHP[0] + " hp";
  hpEnnemiGraphismeA.style.height = (((ennemiHP[0] * 100) / E_pv) * 1.5) + "px";

  hpEnnemiB.innerHTML = " " +  ennemiHP[1] + " hp";
  hpEnnemiGraphismeB.style.height = (((ennemiHP[1] * 100) /F_pv) * 1.5) + "px";

  hpEnnemiC.innerHTML = " " +  ennemiHP[2] + " hp";
  hpEnnemiGraphismeC.style.height = (((ennemiHP[2] * 100) / G_pv) * 1.5) + "px";

  A_hp = playerHP[0]
  hpA.innerHTML = ".  " + A_hp + " hp";
  hp_A_grph.style.height = (A_hp * 100) / A_pv + "px";

  B_hp = playerHP[1]
  hpB.innerHTML = ".  " + B_hp + " hp";
  hp_B_grph.style.height = (B_hp * 100) / B_pv + "px";

  C_hp = playerHP[2]
  hpC.innerHTML = ".  " + C_hp + " hp";
  hp_C_grph.style.height = (C_hp * 100) / C_pv + "px";

  D_hp = playerHP[3]
  hpD.innerHTML = ".  " + D_hp + " hp";
  hp_D_grph.style.height = (D_hp * 100) / D_pv + "px";
}

function actualiseMana()
{
  // resize mana by the amount left
  
  mana_a_t.innerHTML = playerMNL[0] + "mp";
  mana_a_g.style.height = (playerMNL[0] * 100) / playerMN[0] + "px";
  
  mana_b_t.innerHTML = playerMNL[1]  + "mp";
  mana_b_g.style.height = (playerMNL[1] * 100) / playerMN[1] + "px";

  mana_c_t.innerHTML = playerMNL[2]  + "mp";
  mana_c_g.style.height = (playerMNL[2] * 100) / playerMN[2] + "px";

  mana_d_t.innerHTML = playerMNL[3]  + "mp";
  mana_d_g.style.height = (playerMNL[3] * 100) / playerMN[3] + "px";

} 

function checkFoeDeath(ennemi_E_Death , ennemiSelectF , ennemi_G_Death , ennemiSelectE , ennemiSelectF , ennemiSelectG , hpEnnemiA , hpEnnemiB , hpEnnemiC , hpEnnemiGraphismeA , hpEnnemiGraphismeB , hpEnnemiGraphismeC ,)
{
  console.log("check for death :")

  if (ennemiHP[0] <= 0){
    console.log("mort ennemi haut")
    ennemiSelectE.style.display = "none" ;
    hpEnnemiA.style.display = "none" ;
    hpEnnemiGraphismeA.style.display = "none" ;
    ennemi_E_Death = true
  }

  if (ennemiHP[1] <= 0){
    console.log("mort ennemi centre")
    ennemiSelectF.style.display = "none" ;
    hpEnnemiB.style.display = "none" ;
    hpEnnemiGraphismeB.style.display = "none" ;
    ennemi_F_Death = true
  }

  if (ennemiHP[2] <= 0){
    console.log("mort ennemi bas")
    ennemiSelectG.style.display = "none" ;
    hpEnnemiC.style.display = "none" ;
    hpEnnemiGraphismeC.style.display = "none" ;
    ennemi_G_Death = true
  }

  actualiseHP()
}

//boss selection :
EnnemiSleceted = 0;


ennemiSelectE.onclick = function()
{
  console.log("ennemi E selected");
  EnnemiSleceted = 1;
  ennemiSelectE.style.border= "solid medium red";
  ennemiSelectF.style.border = "none";
  ennemiSelectG.style.border = "none" ;
}

ennemiSelectF.onclick = function()
{
  console.log("ennemi F selected");
  EnnemiSleceted = 2;
  ennemiSelectF.style.border= "solid medium red"; 
  ennemiSelectG.style.border = "none"; 
  ennemiSelectE.style.border = "none" ;
}

ennemiSelectG.onclick = function()
{
  console.log("ennemi G selected")
  EnnemiSleceted = 3;
  ennemiSelectG.style.border= "solid medium red";
  ennemiSelectE.style.border = "none";
  ennemiSelectF.style.border = "none" ;
}


// action on attack button input
attaque.onclick = function()
{
  
  desc.innerHTML = "epic attack !";

  // play animation in front of the right character
  if (whoPlay == 1){
    slashA.style.display = "block";
    setTimeout(() => {slashA.style.display = "none";}, 250)
  }
  else if(whoPlay == 2)
  {
    slashB.style.display = "block";
    setTimeout(() => {slashB.style.display = "none";}, 750)
  }
  else if(whoPlay == 3)
  {
    slashC.style.display = "block";
    setTimeout(() => {slashC.style.display = "none";}, 250)
  }
  else if(whoPlay == 4)
  {
    slashD.style.display = "block";
    setTimeout(() => {slashD.style.display = "none";}, 250)
  }

  // deal damage
  setTimeout(() => {
    if (EnnemiSleceted !=0)
    {
      ennemiHP[EnnemiSleceted - 1] = ennemiHP[EnnemiSleceted - 1] - playerATQ[whoPlay - 1]
      console.log("pv ennemi  restant : " + (ennemiHP[EnnemiSleceted - 1]))
      
      ennemiSelectE.style.border = "none";
      ennemiSelectF.style.border = "none" ;
      ennemiSelectG.style.border = "none" ;
      actualiseHP()
      endTurn()
    }
    else
    {
      desc.innerHTML= "select an ennemi first !"
    }

  }, 1500)
}


// action on defendre button input
defendre.onclick = function()
{
  if (cd != 0){
    // start cool down
    cd = 4 
    setTimeout(() => {cd = 0}, (cd * 1000))

    desc.innerHTML = "parry this ! "

    // play animation in front of the r
    if (whoPlay == 1){
      ShieldA.style.display = "block";
      ShieldB.style.display = "block";
      ShieldC.style.display = "block";
      ShieldD.style.display = "block";
      setTimeout(() => {ShieldA.style.display = "none";ShieldB.style.display = "none";ShieldC.style.display = "none";ShieldD.style.display = "none";}, 2200)
      for (let i = 0; i < 4; i++) {
        playerSHI[i] = playerSHI[i] + 1
        console.log("i" + playerSHI[i])
      }

    }
    else if(whoPlay == 2)
    {
      ShieldB.style.display = "block";
      setTimeout(() => {ShieldB.style.display = "none";}, 2200)
    }
    else if(whoPlay == 3)
    {
      ShieldC.style.display = "block";
      setTimeout(() => {ShieldC.style.display = "none";}, 2200)
    }
    else if(whoPlay == 4)
    {
      ShieldD.style.display = "block";
      setTimeout(() => {ShieldD.style.display = "none";}, 2200)
    }

    setTimeout(() => {
      playerSHI[whoPlay - 1] = 50
      console.log("rise defense")
      console.debug(playerSHI)
      endTurn()
    }, 1500)

    
  }
 
}

// action on soins button input
soins.onclick = function()
{
  desc.innerHTML = "healing time !"
  setTimeout(() => {
    //the player heal but not for more than his max hp
    console.log("heal :")
    playerHP[whoPlay - 1] = playerHP[whoPlay - 1] + 3
    console.log(playerHP[whoPlay - 1])
    
    if (playerHP[whoPlay - 1] > playerPV[whoPlay - 1])
    {
      playerHP[whoPlay - 1] = playerPV[whoPlay - 1]
      desc.innerHTML = "you can't heal for more than your max HP" 
      setTimeout(() => {
        
      }, 1500)
    } 

    if (whoPlay == 1){
      healA.style.display = "block";
      setTimeout(() => {healA.style.display = "none";}, 1750)
    }

    else if(whoPlay == 3)
    {
      healC.style.display = "block";
      setTimeout(() => {healC.style.display = "none";}, 1750)
    }

    else if(whoPlay == 4)
    {
      healD.style.display = "block";
      setTimeout(() => {healD.style.display = "none";}, 1750)
    }

    //the witch heal the whole team
    if (whoPlay == 2)
    {
      healA.style.display = "block";
      healB.style.display = "block";
      healC.style.display = "block";
      healD.style.display = "block";
      setTimeout(() => {healA.style.display = "none";healB.style.display = "none";healC.style.display = "none";healD.style.display = "none";}, 1750)
      console.log(A_hp + "before healing")
      A_hp = A_hp + 3
      console.log(A_hp+ "after healing")
    }

    //take the mana
    playerMNL[whoPlay - 1] = playerMNL[whoPlay -1] - 25
    console.log("mana")
    console.log(playerMNL[whoPlay - 1])

    actualiseMana()
    actualiseHP()
    
  }, 1000)
  setTimeout(() => {endTurn()}, 1500)
}

// action on pass button input
pass.onclick = function(){
  desc.innerHTML = "pass"
  setTimeout(() => {endTurn()}, 1500)
}

// action on info button input
info.onclick = function(){
  desc.innerHTML = "attaque :" + playerATQ[whoPlay - 1] + " defense :" + playerSHI[whoPlay - 1]
  setTimeout(() => {}, 1500)
}

// action on sort button input
sort.onclick = function(){  
  //pladin spell
  if (whoPlay == 1){
    if (playerMNL[0] >= 50){

      desc.innerHTML = "paladin's blessing : every allies defenses rise !";

      //rise allies defense
      for (let i = 0; i < 4; i++) {
        playerSHI[i] = playerSHI[i] + 2
        console.log("i" + playerSHI[i])
      }

      //retrieve mana
      playerMNL[0] = playerMNL[0] - 50
    }
    else{
      desc.innerHTML = " ho no you don't have henought mana !!! - 5 hp"
      playerHP[0] = playerHP[0] - 5
    }
    
  }
  //witch spell
  else if (whoPlay == 2){
    if (playerMNL[0] >= 50){

      desc.innerHTML = " the witch cast a power spell ! everyone gain mana";

      
      for (let i = 0; i < 4; i++) {
        playerMNL[i] = playerMNL[i] + 25
        
      }

      //retrieve mana
      playerMNL[1] = playerMNL[1] - 75
    }
    else{
      desc.innerHTML = " ho no you don't have henought mana !!! - 5 hp"
      playerHP[1] = playerHP[1] - 5
    }

  }
  //berserk spell
  else if (whoPlay == 3){
    if (playerMNL[2] >= 50){

      desc.innerHTML = "the berserk enhance everyones attack by 5 !";

      for (let i = 0; i < 4; i++) {
        playerATQ[i] = playerATQ[i] + 5
        
      }

      //retrieve mana
      playerMNL[2] = playerMNL[2] - 50
    }
    else{
      desc.innerHTML = " ho no you don't have henought mana !!! - 5 hp"
      playerHP[2] = playerHP[2] - 5
    }
  }
  //pirate spell
  else if (whoPlay == 4){
    if (playerMNL[3] >= 50){

      desc.innerHTML = "the pirate makes everyone stronger for a long time : mana max + 5";

      
      for (let i = 0; i < 4; i++) {
        playerMN[i] = playerMN[i] + 5
        
      }

      //retrieve mana
      playerMNL[1] = playerMNL[1] - 50
    }
    else{
      desc.innerHTML = " ho no you don't have henought mana !!! - 5 hp"
      playerHP[1] = playerHP[1] - 5
    }
  }

  setTimeout(() => {endTurn()}, 1500)

}