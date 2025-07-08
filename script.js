let faq1 = document.getElementById("faq1");
let faq2 = document.getElementById("faq2");
let faq3 = document.getElementById("faq3");
let faq4 = document.getElementById("faq4");
let faq5 = document.getElementById("faq5");
let faq6 = document.getElementById("faq6");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let answer5 = document.getElementById("answer5");
let answer6 = document.getElementById("answer6");
let grid = document.querySelector(".faq-grid");
let spinplus = document.getElementById("plus")
let spinplus2 = document.getElementById("plus2")
let spinplus3 = document.getElementById("plus3")
let spinplus4 = document.getElementById("plus4")
let spinplus5 = document.getElementById("plus5")
let spinplus6 = document.getElementById("plus6");
let footer =document.querySelector(".footer");
let isopen = false;


faq1.addEventListener("click", () => {
    spinplus.style.transform = "rotate(45deg)";
    
    if (!isopen) {
        spinplus2.style.transform = "rotate(0deg)";
        spinplus3.style.transform = "rotate(0deg)";

        answer2.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";
        answer5.style.display = "none";
        answer6.style.display = "none";
        
        answer1.style.display = "flex";
        answer1.style.height="30vh";
        grid.style.gap = "10px";
        answer1.style.marginBottom = "22px ";
        answer1.style.gridRow = "2/4";
        answer1.innerHTML = "  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week! ";
        isopen = true;
    }
    else {
        spinplus.style.transform = "rotate(0deg)";
        answer1.style.display = "none";
        isopen = false;
        
        
    }
    
    
})
faq2.addEventListener("click", () => {
    spinplus2.style.transform = "rotate(45deg)";
    
    if (!isopen) {
        spinplus.style.transform = "rotate(0deg)";
       spinplus3.style.transform = "rotate(0deg)";
        answer1.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";
        answer5.style.display = "none";
        answer6.style.display = "none";

        answer2.style.display = "flex";
        grid.style.gap = "10px";
        answer2.style.gridRow = "3/5";
        answer2.style.padding = "12px";
        answer2.style.height = "29vh"
        answer2.style.fontSize = "1.65rem";
        answer2.innerHTML = " Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts. "
        isopen = true;
    }
    else {
        spinplus2.style.transform = "rotate(0deg)";
        answer2.style.display = "none";
        isopen = false;
        
        
    }
    
})
faq3.addEventListener("click", () => {
    spinplus3.style.transform = "rotate(45deg)";
   

    if (!isopen) {
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer4.style.display = "none";
        answer5.style.display = "none";
        answer6.style.display = "none";

        answer3.style.display = "flex";
        grid.style.gap = "8px";
        answer3.style.gridRow = "4/6";
        answer3.style.padding = "12px";
        answer3.style.height = "29vh"
        answer3.style.fontSize = "1.65rem";
        answer3.innerHTML = "  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        isopen = true;
    }
    else {
        spinplus3.style.transform = "rotate(0deg)";
        answer3.style.display = "none";
        isopen = false;


    }

})
faq4.addEventListener("click", () => {
    spinplus4.style.transform = "rotate(45deg)";
   

    if (!isopen) {
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "none";
        answer5.style.display = "none";
        answer6.style.display = "none";

        answer4.style.display = "flex";
        grid.style.gap = "6px";
        answer4.style.gridRow = "5/7";
        answer4.style.padding = "12px";
        answer4.style.height = "27vh"
        answer4.style.fontSize = "1.65rem";
        answer4.innerHTML = " Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime. "
        isopen = true;
    }
    else {
        spinplus4.style.transform = "rotate(0deg)";
        answer4.style.display = "none";
        isopen = false;


    }

})
faq5.addEventListener("click", () => {
    spinplus5.style.transform = "rotate(45deg)";
   

    if (!isopen) {
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";
        answer6.style.display = "none";

        answer5.style.display = "flex";
        grid.style.gap = "6px";
        answer5.style.gridRow = "6/8";
        answer5.style.padding = "12px";
        answer5.style.height = "21vh"
        answer5.style.fontSize = "1.65rem";
        answer5.innerHTML = "  Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. "
        isopen = true;
    }
    else {
        spinplus5.style.transform = "rotate(0deg)";
        answer5.style.display = "none";
        isopen = false;


    }

})
faq6.addEventListener("click", () => {
    spinplus6.style.transform = "rotate(45deg)";
    
    
    if (!isopen) {
        footer.style.bottom="5px"
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";
        answer5.style.display = "none";
        
        
        answer6.style.display = "flex";
        grid.style.gap = "6px";
        answer6.style.gridRow = "7/9";
        answer6.style.padding = "12px";
        answer6.style.height = "20vh"
        answer6.style.fontSize = "1.65rem";
        answer6.innerHTML = " The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see. "
        isopen = true;
    }
    else {
        footer.style.bottom="65px"
        spinplus6.style.transform = "rotate(0deg)";
        answer6.style.display = "none";
        isopen = false;


    }

})
