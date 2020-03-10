let images = [

    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg'

];
var i = 0;
var timer = 100;

function ChangeImage() {
    var random = Math.floor(Math.random() * 3);
    document.getElementById("slider").style.backgroundImage = `url("${images[random]}")`
    i++;
    console.log(images[random])
    if (1==1) {
        setTimeout(ChangeImage, 1000)
    }
};
ChangeImage();