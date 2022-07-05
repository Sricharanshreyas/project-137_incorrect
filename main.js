status1=false;
objects=[];

function preload(){
    
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(400,400);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
    if(status1!= false){
        objectDetector.detect(video, gotresults);
        console.log(ml5.version);
    
    for(i=0;i<objects.length;i++){
        console.log("objects[i] ="+objects[i].label);
        content=document.getElementById("object").value;
        if(objects[i].label == content){
        document.getElementById("status").innerHTML="Objects detected";
        document.getElementById("things").innerHTML="Number of ojects detected:"+objects.length;
        percent=floor(100*objects[i].confidence);
        fill("blue");
        text(objects[i].label+percent+"%",objects[i].x,objects[i].y);
        textSize(10);
        stroke("green");
        //added code to perfrom nofill
        noFill();
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height); 
        speak(); 
        }
    }
    }
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    
    document.getElementById("status").innerHTML="Detecting objects";
}
function modelloaded(){
    console.log("cocossd is loaded");
    status1=true;
   
}
function gotresults(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
    }
    objects=results;
}
function speak(){
    var speech=window.speechSynthesis;
  
    speak_data1="The result is"+objects[i].length==0;
    var utterance=new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterance);
}