/******************Add the story ******************/
const image_profile = [
    ['https://i.ibb.co/3S1hjKR/account1.jpg','namusoke'],
    ['https://i.ibb.co/kD6tj9T/account2.jpg','nakato'],
    ['https://i.ibb.co/cx69NJL/account3-1.jpg','mugisha'],
    ['https://i.ibb.co/Zhc5hHp/account4.jpg','kato'],
    ['https://i.ibb.co/SPTNbJL/account5.jpg','nabirye'],
    ['https://i.ibb.co/nj8pPqZ/account6.jpg','tumusiime'],
    ['https://i.ibb.co/vkXPdxN/account7.jpg','nanteza'],
    ['https://i.ibb.co/7R0Vzp3/account8.jpg','achan'],
    ['https://i.ibb.co/gvrfhjL/account9.jpg','atokos'],
    ['https://i.ibb.co/j8L7FPY/account10.jpg','ayebare'],
    ['https://i.ibb.co/JcXRPht/account11.jpg','natukunda'],
    ['https://i.ibb.co/6WvdZS9/account12.jpg','kiwanuka'],
    ['https://i.ibb.co/pJ8thst/account13.jpg','nanyonjo'],
    ['https://i.ibb.co/4M3W996/account14.jpg','sekandi'],
    ['https://i.ibb.co/Fzpg5yd/account15.jpg','ainomugisha'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})
