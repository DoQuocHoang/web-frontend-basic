
document.addEventListener("DOMContentLoaded", function(event) { 
    
    /*----------- Main Slider ------------*/
    // render slider img
    var mainSlider = document.querySelector('.slider_imgs');

    for(var i=0; i < mainSlideImg.length; i++) {
        mainSlider.innerHTML += `
        <div class="slider_img ${i == 0 ? 'active': ''}">
            <a href="#">
                <img src="${mainSlideImg[i].src}"
                    alt="Banner #${i}">
            </a>
        </div>
        `
    }

    // slider onclick change img
    document.querySelector('.left_button').addEventListener("click", prevSlider);
    document.querySelector('.right_button').addEventListener("click", nextSlider);
    
    
    var slideIndex = 1;
    var sliderImg = document.getElementsByClassName("slider_img");
    function nextSlider() {
        slideIndex += 1;
        if (slideIndex > sliderImg.length) {slideIndex = 1}    
        

        for (i = 0; i < sliderImg.length; i++) {
            sliderImg[i].className = sliderImg[i].className.replace(" active", "");
        }
        sliderImg[slideIndex-1].className += " active";
        setTimeout(nextSlider, 2000);
    }

    
    
    function prevSlider() {
        
        slideIndex -= 1;
          
        if (slideIndex< 1) {slideIndex = sliderImg.length}

        for (i = 0; i < sliderImg.length; i++) {
            sliderImg[i].className = sliderImg[i].className.replace(" active", "");
        }
        sliderImg[slideIndex-1].className += " active";
    }

    /*-------------- Our Service ----------------*/
    var ourService = document.querySelector('.our_services__items');

    for(var i=0; i < ourServiceItem.length; i++) {
        ourService.innerHTML += `
        <div class="our_services__items__item" style="background: url('${ourServiceItem[i].url}') no-repeat; background-size: cover; background-position: center;">
            <div class="our_services__items__item__content">
                <div class="our_services__items__item__content__info">
                        <a href="#">${ourServiceItem[i].title}</a>
                        <p>${ourServiceItem[i].text}</p>
                </div>
            </div>
        </div>
        `
    }

     /*-------------- Reason Choose ----------------*/
     var reason = document.querySelector('.reason__items');

     for(var i=0; i < reasonChooseItem.length; i++) {
        reason.innerHTML += `
         <div class="reason__items__item">
            <img src="${reasonChooseItem[i].url}" alt="">
            <p class="title">${reasonChooseItem[i].title}</p>
            <p class="text">${reasonChooseItem[i].text}</p>
        </div>
         `
     }
    
});