//Setting themes for the beginning
var lightColor=null, darkColor=null, midColor=null;
var theme=Math.round(Math.random()*6);
switch(theme){
case 0:
lightColor="#94C9A9";
darkColor="#777DA7";
midColor="#FE5F55";
break;
case 1:
lightColor="#D8D8D8";
darkColor="#00CECB";
midColor="#FFFFEA";
break;
case 2:
lightColor="#DAF7DC";
darkColor="#70566D";
midColor="#ABC8C0";
break;
case 3:
lightColor="lightcyan";
darkColor="darkcyan";
midColor="mediumaquamarine";
break;
 case 4:
lightColor="indianred";
darkColor="darkred"
midColor="orangered";
break;
case 5:
lightColor="lightblue";
darkColor="royalblue";
midColor="skyblue";
break;
default:
lightColor="darkgrey";
darkColor="dimgrey";
midColor="lightgrey";
break;
}
randomTheme(darkColor,midColor,lightColor);
function randomTheme(darkColor1,midColor1,lightColor1){
document.querySelector("body").style.backgroundColor=lightColor1;
document.querySelector("body").style.color=darkColor1;
document.querySelector(".footer").style.backgroundColor=darkColor1;
for(var i=1;i<3;i++){
  document.querySelector(".player:nth-child("+i+")").style.background=midColor1;
  document.querySelector(".player:nth-child("+i+")").style.color=darkColor1;
}
for(var i=0;i<2;i++){
  document.querySelector(".scores"+i).style.background=darkColor1;
  document.querySelector(".scores"+i).style.color=midColor1;
}
document.querySelector(".game").style.background=darkColor1;
for(var i=0;i<8;i++){
document.querySelector(".crossLine"+i).style.background=midColor1;
}
for(var i=0;i<9;i++){
  document.getElementById(i).style.background=lightColor1;
}
}
//Functioning:
var v=[null,null,null,null,null,null,null,null,null];
var gameCompleted=false, XorY=0;
var score=[0,0];
function enterValue(keyCode){
  if(!gameCompleted){
    if(v[keyCode]==null){
    if(XorY==0){
      XorY=1;
      v[keyCode]='X';
      winningTheGame('X');
    } else{
      XorY=0;
      v[keyCode]='O';
      winningTheGame('O');
    }
    document.getElementById(keyCode).innerHTML=v[keyCode];
    }
  }
}
function winningTheGame(key){
  if(v[1]==key&&v[2]==key&&v[0]==key){
    document.querySelector(".crossLine4").style.display='block';
    gameCompleted=true;
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  }else if(v[0]==key&&v[3]==key&&v[6]==key){
    gameCompleted=true;
    document.querySelector(".crossLine7").style.display="block";
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  }else if(v[0]==key&&v[4]==key&&v[8]==key){
    gameCompleted=true;
    document.querySelector(".crossLine3").style.display="block";
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  }else if(v[1]==key&&v[4]==key&&v[7]==key){
    gameCompleted=true;
    document.querySelector(".crossLine0").style.display='block';
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  }else if(v[2]==key&&v[5]==key&&v[8]==key){
    gameCompleted=true;
    document.querySelector(".crossLine6").style.display='block';
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  } else if(v[3]==key&&v[4]==key&&v[5]==key){
    gameCompleted=true;
    document.querySelector(".crossLine1").style.display="block";
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  }else if(v[6]==key&&v[7]==key&&v[8]==key){
    gameCompleted=true;
    document.querySelector(".crossLine5").style.display="block";
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  }else if(v[2]==key&&v[4]==key&&v[6]==key){
    gameCompleted=true;
    document.querySelector(".crossLine2").style.display="block";
    switch(key){
      case 'X':
        score[0]+=1;
     break;
      case 'O':
        score[1]+=1;
     break;
    }
  }
}
setInterval(function(){
  document.querySelector(".scores0").innerHTML=score[1];
  document.querySelector(".scores1").innerHTML=score[0];
if(gameCompleted){
  document.querySelector(".restarter").style.display="flex";
}
if(v[0]!=null&&v[1]!=null&&v[2]!=null&&v[3]!=null&&v[4]!=null&&v[5]!=null&&v[6]!=null&&v[7]!=null&&v[8]!=null){
  document.querySelector(".restarter").style.display='flex';
  gameCompleted=true;
}
});
function explode(){
  for(var i=0;i<9;i++){
    v[i]=null;
    document.getElementById(i).innerHTML="";
  }
  gameCompleted=false;
  XorY=0;
  document.querySelector(".restarter").style.display="none";
  for(var i=0;i<8;i++){
    document.querySelector(".crossLine"+i).style.display='none';
  }
}
