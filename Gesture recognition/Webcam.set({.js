prediciton1=""
prediciton2=""

Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    png_quality:90
})


camera = document.getElementById("camera")

webcam.attach( '#camera' );

function Takesnapshot() {
    webcam.snap(function(data_url)) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_url'">"'
    }
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.jason',modelLodaded);

function modelLodaded() {
    console.log('model Lodaded')
}

function check() {
    img =  document.getElementById('captured_image')
    classifier.classify(image, gotResults);
}

function gotResults() {
    if (error) {
        console.error(error)
    } else {
       console.log(results)
       document.getElementById("result_emotion_name").innerHTML=results[0].label
       document.getElementById("result_emotion_name2").innerHTML=results[0].label
       prediciton1=results[0]
       prediciton2=results[1]
       speak();
       if(results[0].label =="happy")
       {
        document.getElementById("update_emoji").innerHTML = "&#128522"
       }
       if(results[0].label =="sad")
       {
        document.getElementById("update_emoji").innerHTML = "&#128532"
       }
       if(results[0].label =="angry")
       {
        document.getElementById("update_emoji").innerHTML = "&#128548"
       }
       if(results[1].label =="happy")
       {
        document.getElementById("update_emoji").innerHTML = "&#128522"
       }
       if(results[1].label =="sad")
       {
        document.getElementById("update_emoji").innerHTML = "&#128532"
       }
       if(results[1].label =="angry")
       {
        document.getElementById("update_emoji").innerHTML = "&#128548"
       }


    }
}