
 Webcamset({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
 });

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"'+data_uri+'"/>'
    })
}

console.log('m15 version: ', m15.version);

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/ETxoCoEzG/')

 function modelLoaded() {
    console.log('Model Loaded!');
 }
 
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object")
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}