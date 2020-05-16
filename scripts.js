let spanishList=[0,1,2,3,4];
let englishList=["a","b","c","d","e"];
let wordList = [];
let alternativeList = [];
let i=0;
let randomsWords=[];


for(i=0; i<3; i++){
    
    let r=Math.floor(Math.random()*englishList.length);
    
    if(randomsWords.includes(r)){
        
        i=i-1
    }
    
    else{
        
        wordList[i]=englishList[r];
        alternativeList[i]=[];
        alternativeList[i][0]=spanishList[r];
        let randomsAlt=[];
        randomsAlt[0]=r;
        randomsWords[i]=r 
        let j=1;
        
        
        for(j=1; j<4;j++){
            let r1 = Math.floor(Math.random()*englishList.length);
            
            if(randomsAlt.includes(r1)){
                
                j=j-1 
            } else{
                
                randomsAlt[j] = r1;
                alternativeList[i][j]=spanishList[r1]
        }        
    }
    }
}


let correct=[];
function shuffle(a){
    for(let i=0;i<a.length;i++){
        let c=Math.floor(4*Math.random());
        correct[i]=c;
        temp=a[i][c];
        a[i][c]=a[i][0];
        a[i][0]=temp
    }
}


shuffle(alternativeList);


i=0;
for(i=0; i<3; i++){
    var fSet = document.createElement("fieldset");
    document.body.appendChild(fSet);
    var legend = document.createElement("legend");
    legend.innerHTML=wordList[i];
    fSet.appendChild(legend);
    let j;
    for(j=0; j<4 ;j++){
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "glosa_"+i;
        input.id = "alt_"+j;
        var label = document.createElement("label");
        label.for = "alt_"+j;
        label.innerHTML = alternativeList[i][j];  


        fSet.appendChild(input);
        fSet.appendChild(label);

    }
    
}

let btn = document.createElement("button");
btn.type = "submit";
btn.innerHTML= "Rätta!";


function btnClicker(){
    let correctAnswers = 0;
    let fList = document.getElementsByTagName("fieldset");
    let ansList;
    let i;
    let j;
    let labList = document.getElementsByTagName("label")
    for(i=0;i<fList.length;i++){
        ansList = document.getElementsByName("glosa_"+i);
        for(j=0;j<ansList.length;j++){
            if(ansList[j].checked ===true){
                if(j===correct[i]){
                    correctAnswers++;
                    labList[4*i+j].style = "color: green";
                    break; 
                }
                else{
                    labList[4*i+j].style = "color: red"; 
                    labList[4*i+correct[i]].style = "color: green";
                    break; 
                }
            }
        }    
    }

    btn.style = "display: none";
    let result = document.createElement("h2");
    result.innerHTML = "Du fick " + correctAnswers + " av " + fList.length +" möjliga." ;
    document.body.appendChild(result);    
}


btn.onclick = btnClicker;
document.body.appendChild(btn);
