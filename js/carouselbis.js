

        var next = document.querySelectorAll('.next');
        var prev = document.querySelectorAll('.prev'); 
        var index = [];

        for(var k=0; k < next.length; k++ ){

            index[k] = 0;
            next[k].addEventListener('click', function(event){
            // var index = 0 ;
            var k = event.target.getAttribute("sel");

            var lis = document.querySelectorAll('.li_carousel_'+ k);

            lis[index[k]].classList.remove('visible');
            index[k]++;
            if (index[k] >= lis.length) {
                index[k] = 0; 
            }
            lis[index[k]].classList.add('visible');

        });

            prev[k].addEventListener('click', function(event){

            var k = event.target.getAttribute("sel");

            var lis = document.querySelectorAll('.li_carousel_'+ k);

            lis[index[k]].classList.remove('visible');
            index[k]--;
            if (index[k] < 0) {
                index[k] = 5; 

            }
            lis[index[k]].classList.add('visible');

        });

        }

       