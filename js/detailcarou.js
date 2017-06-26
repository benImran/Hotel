        var next     =  document.querySelector('.next');
        var prev     =  document.querySelector('.prev');
        var preview  =  document.querySelector('.preview');
        var preview1 =  document.querySelector('.preview1');
        var lis      =  document.querySelectorAll('.li-carousel'); 
        var dots     =  document.querySelectorAll('.dots li');
        var index    =  0 ;

        next.addEventListener('click', function(event){

            lis[index].classList.remove('visible');

            index++;
            if (index > 4) {
                index = 0; 
            }
            
            lis[index].classList.add('visible');

            // prev.classList.toggle('hidden', index === 0);
            // next.classList.toggle('hidden', index === 4);

            for (var i = 0; i < dots.length; i++){ 

                dots[i].classList.remove('active');
                                   
            };
                dots[index].classList.add('active');

                if (index === 4){
                    var src = lis[0].querySelector('img').src;
                        preview1.style.background = 'url("' + src + '")';
                        preview1.style.backgroundSize = 'cover';
                }
                else{
                    var src = lis[index+1].querySelector('img').src;
                        preview1.style.background = 'url("' + src + '")';
                        preview1.style.backgroundSize = 'cover';
                }
                if (index === 0){
                    var src = lis[4].querySelector('img').src;
                        preview.style.background = 'url("' + src + '")';
                        preview.style.backgroundSize = 'cover';
                }
                else{
                    var src = lis[index-1].querySelector('img').src;
                        preview.style.background = 'url("' + src + '")';
                        preview.style.backgroundSize = 'cover';

                }

        });

        prev.addEventListener('click',function(){

            lis[index].classList.remove('visible');

            index--;
            if (index < 0){
                index = 4; 
            }
            lis[index].classList.add('visible');

            // prev.classList.toggle('hidden', index === 0);
            // next.classList.toggle('hidden', index === 4);

            for (var i = 0; i < dots.length; i++){ 

                dots[i].classList.remove('active');
                                   
            }
                dots[index].classList.add('active');

                if (index === 4){
                    var src = lis[0].querySelector('img').src;
                        preview1.style.background = 'url("' + src + '")';
                        preview1.style.backgroundSize = 'cover';
                }
                else{
                    var src = lis[index+1].querySelector('img').src;
                        preview1.style.background = 'url("' + src + '")';
                        preview1.style.backgroundSize = 'cover';
                }
                if (index === 0){
                    var src = lis[4].querySelector('img').src;
                        preview.style.background = 'url("' + src + '")';
                        preview.style.backgroundSize = 'cover';
                }
                else{
                    var src = lis[index-1].querySelector('img').src;
                        preview.style.background = 'url("' + src + '")';
                        preview.style.backgroundSize = 'cover';

                }

        });

            // prev.classList.toggle('hidden', index === 0);
            // next.classList.toggle('hidden', index === 4);


        for (let i = 0; i < dots.length; i++) {
            // Le let permet de créer une variable actif dans le bloc courant 

            dots[i].addEventListener('click', function(event){

               dots[index].classList.remove('active');
               // index pointe tjr le dernier élément actif 
               dots[i].classList.add('active');;
               // i pointe le nouvel element actif 
               index = i;  
               // met à jour le nouvel element actif 

               for( let j = 0; j < lis.length ; j++ ){

                    lis[j].classList.remove('visible');
                    
               }

                    lis[index].classList.add('visible');

                 // on fait un toggle pour enlever les span next et prev quand ils sont au debut et a la fin dans la fonction !
                // prev.classList.toggle('hidden', index === 0);
                // next.classList.toggle('hidden', index === 4);

                if (index === 4){
                    var src = lis[0].querySelector('img').src;
                        preview1.style.background = 'url("' + src + '")';
                        preview1.style.backgroundSize = 'cover';
                }
                else{
                    var src = lis[index+1].querySelector('img').src;
                        preview1.style.background = 'url("' + src + '")';
                        preview1.style.backgroundSize = 'cover';
                }
                if (index === 0){
                    var src = lis[4].querySelector('img').src;
                        preview.style.background = 'url("' + src + '")';
                        preview.style.backgroundSize = 'cover';
                }
                else{
                    var src = lis[index-1].querySelector('img').src;
                        preview.style.background = 'url("' + src + '")';
                        preview.style.backgroundSize = 'cover';

                }
                
            });
        }
                    var src = lis[index+1].querySelector('img').src;
                        preview1.style.background = 'url("' + src + '")';
                        preview1.style.backgroundSize = 'cover';

                    var src = lis[4].querySelector('img').src;
                        preview.style.background = 'url("' + src + '")';
                        preview.style.backgroundSize = 'cover';
