
        var lis = document.querySelectorAll('.li_carousel'); 
        var index = 0 ;

        setInterval(nextSlide, 2000);

        function nextSlide(){

            lis[index].classList.remove('visible');
            index++;
            if (index >= lis.length) {
                index = 0; 
            }
            lis[index].classList.add('visible');

        }