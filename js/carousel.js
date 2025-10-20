

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(img, texto, link){
        this.img = img;
        this.texto = texto;
        this.link = link;
    }    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const carousel = document.getElementById("carousel");
        const carouselTitle = document.getElementById("carousel-title");
        const atual = Carousel._arr[Carousel._sequence];

        carousel.innerHTML = `<img src="img/${atual.img}" alt="">`;
        carouselTitle.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }
};
