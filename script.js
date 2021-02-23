// window.onload = choosePic;

// var imgArray = [
//     'images/home/Bestard-Fragments-1.jpg',
//     'images/home/Bestard-Fragments-2.jpg',
//     'images/home/Bestard-Fragments-3.jpg',
//     'images/home/Bestard-Fragments-4.jpg',
//     'images/home/Bestard-Fragments-5.jpg',
//     'images/home/Bestard-Fragments-6.jpg',
//     'images/home/Bestard-Fragments-7.jpg',
//     'images/home/Bestard-Fragments-8.jpg',
//     'images/home/Bestard-Fragments-9.jpg',
//     'images/home/Bestard-Fragments-10.jpg',
//     'images/home/Bestard-Fragments-11.jpg',
//     'images/home/Bestard-Fragments-12.jpg',
//     'images/home/Bestard-Fragments-13.jpg',
//     'images/home/Bestard-Fragments-14.jpg',
//     'images/home/Bestard-Fragments-15.jpg',
//     'images/home/Bestard-Fragments-16.jpg',
//     ];

// function choosePic() {
//     var randomNum = Math.floor(Math.random() * imgArray.length);
//     document.getElementById("myPicture").src = imgArray[randomNum];
//     console.log ("functioning");
// };

window.addEventListener('DOMContentLoaded', choosePic);
function choosePic(event) {
    let images = [
        'images/home/Bestard-Fragments-1.jpg',
        'images/home/Bestard-Fragments-2.jpg',
        'images/home/Bestard-Fragments-3.jpg',
        'images/home/Bestard-Fragments-4.jpg',
        'images/home/Bestard-Fragments-5.jpg',
        'images/home/Bestard-Fragments-6.jpg',
        'images/home/Bestard-Fragments-7.jpg',
        'images/home/Bestard-Fragments-8.jpg',
        'images/home/Bestard-Fragments-9.jpg',
        'images/home/Bestard-Fragments-10.jpg',
        'images/home/Bestard-Fragments-11.jpg',
    ];
    // start with 1
    for(let i=1; i <= 11; i++){
        // 14 is missing!!!
        if(i === 10) continue;
        images.push(`images/home/Bestard-Fragments-${i}.jpg`);
    }
    const index = Math.floor(Math.random() * images.length);
    document.getElementById("myPicture").src = images[index];
}




//si uso window.onload solo puedo tener una función en la página 