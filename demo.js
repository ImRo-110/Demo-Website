

function myFunction() {
    const x= document.getElementById("Product");
    console.log(x.value)
    var input = x.value;
    document.getElementById(input).scrollIntoView({behavior: 'smooth'});
}

// var x = document.getElementsByClassName("menuIcon");
// var y = document.getElementsByClassName("closeIcon");
var z = document.getElementById("myLinks");

function toggle() {
    const x = document.querySelector(".menuIcon");
    const y = document.querySelector(".closeIcon");
    // const z = document.getElementById("myLinks");
    const z = document.querySelector(".header-links");
    // var z = document.getElementById("myLinks");
    console.log(x.style.display);
    if (x.style.display === 'block' || window.innerWidth>960){
    x.style.display = 'none';
    y.style.display = 'block';
    z.style.display = 'flex';
    z.style.transform = 'translateY(0%)';
    }
    else{
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';

    }
    // document.getElementById("myLinks").style.display = 'block';


}





// var mybutton = document.getElementById('TOP'); Should be declared inside function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById('TOP');
    if (document.documentElement.scrollTop > 100) 
    {
      mybutton.style.display = 'block';
    } 
    else 
    {
      mybutton.style.display = 'none';
    }
}
function topFunction() {
    document.getElementById("Discover").scrollIntoView({behavior: 'smooth'});
}