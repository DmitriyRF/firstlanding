$(document).ready(function() {
   //$(".pinfo").hide();
   //$('.IcoDown').click(function(){/*
   //    var elm = document.getElementsByClassName('pinfo');
   //   elm[0].style.display = (elm[0].style.display == 'none') ? '' : 'none';*/
   //   // $('.pinfo').slideToggle("normal");
   //   //this.next().slideToggle();
   //  //this.parentNode.getElementsByClassName('pinfo').slideToggle();
   //   //.slideToggle();
   //   //this.parentNode.nextSibling.slideToggle();
   //
   //    this.parentNode.childNodes[1].slideToggle('normal');
   //   this.innerHTML = (this.innerHTML  == '<span class="lnr  lnr-chevron-down"></span>') ? '<span class="lnr lnr-cross"></span>' : '<span class="lnr  lnr-chevron-down"></span>';
   //});
   //Скрипт для прокрутки меню вверх и прикрепления его к верху сайта
   //Т.е. фиксация меню вверху сайта для этого вставляем в nav
   //Для работы нужен только jQery
   //<nav id="top_nav" >
   /* с CSS 
   #top_nav{
   display: block;
   position: fixed;
   top: 200px;
   z-index: 1000;}*//*
 var h_hght = 46; // высота шапки
   var h_mrg = 0;     // отступ когда шапка уже не видна
   $(function(){
   	$(window).scroll(function(){
   		//отступ сверху
   		var top = $(this).scrollTop();
   			// наверное отступ сверху элемента
           var elem = $('#top_s');

           if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
         } else {
            elem.css('top', h_mrg);
         }
      });
   });*/

   //Функция для плавного скролинка по странице и подсветки классом .cur пункта в меню
   //Также для работы нужно подключить jquery.liLanding.js и liLanding.css и jQuery
   // В CSS нужно согласовать классы и подключить меню в общий контейнер ниже боди
   // так же закоментпрованно классы которые выделяют блок заменой backgrounda
   //<link rel="stylesheet" href="libs/liLanding/liLanding.css">
   //<script src="libs/liLanding/jquery.liLanding.js"></script>
   //Информация http://masscode.ru/index.php/k2/item/54-lilanding
   /*        <div style="position:relative">
            <div class="landingMenu">
            */
            $(window).load(function(){
               $('.landingMenu').liLanding({
      //Может менять цвет блока к которому переходит ссылка добавляя
      // класс screenDecor
      /*show: function (linkEl, landingItem) {
         $('.screenDecor',landingItem).animate({opacity:1},500);
         landingItem.css({backgroundColor:'#ff0'});
      },
      hide: function (linkEl, landingItem) {
         $('.screenDecor',landingItem).animate({opacity:0},300);
         landingItem.css({backgroundColor:'#fff'});
      }  /*/
   });
            });
   //Инициализация бокового меню для одного экрана без прокрутки
   //    mp-menu для начала меню
   //    trigger для кнопки запуска меню
   //Структура меню
   /*    <!-- mp-menu -->
            <nav id="mp-menu" class="mp-menu">
               <div class="mp-level">
                  <h2 class="">Categories</h2>
                  <ul>
                     <li class="">
                        <a class="" href="#">1</a>
                        <div class="mp-level">
                           <h2 class=""></h2>
                           <a class="mp-back" href="#">back</a>
                           <ul>
                              <li class="">
                                 <a class="" href="#">1.1</a>
                                 <div class="mp-level">
                                    <h2></h2>
                                    <a class="mp-back" href="#">back</a>
                                    <ul>
                                       <li><a href="#"></a>1.1.1</li>
                                       <li><a href="#"></a>1.1.2</li>
                                       <li><a href="#"></a>1.1.3</li>
                                       <li><a href="#"></a>1.1.4</li>
                                    </ul>
                                 </div>
                              </li>
                              <li class="">
                                 <a class="" href="#">1.2</a>
                                 <div class="mp-level">
                                    <h2></h2>
                                    <a class="mp-back" href="#">back</a>
                                    <ul>
                                       <li><a href="#">1.2.1</a></li>
                                       <li><a href="#">1.2.2</a></li>
                                       <li><a href="#">1.2.3</a></li>
                                       <li><a href="#">1.2.4</a></li>
                                       <li><a href="#">1.2.5</a></li>
                                    </ul>
                                 </div>
                              </li>
                              <li class="">
                                 <a class="" href="#">1.3</a>
                                 <div class="mp-level">
                                    <h2>Cameras</h2>
                                    <a class="mp-back" href="#">back</a>
                                    <ul>
                                       <li><a href="#">1.3.1</a></li>
                                       <li><a href="#">1.3.2</a></li>
                                       <li><a href="#">1.3.3</a></li>
                                       <li><a href="#">1.3.4</a></li>
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </li>
                     <li class=""><a class="" href="#">2</a></li>
                     <li class=""><a class="" href="#">3</a></li>
                     <li><a class="" href="#">4</a></li>
                     <li><a class="" href="#">5</a></li>
                  </ul>                     
               </div>
            </nav>
            <!-- /mp-menu -->
            */
   //Для работы необходимо
   //<script src="libs/mlPushMenu/modernizr.custom.js"></script>
   //<script src="libs/mlPushMenu/classie.js"></script>
   //<script src="libs/mlPushMenu/mlpushmenu.js"></script>
    /*     new mlPushMenu( 
                        document.getElementById( 'mp-menu' ), 
                        document.getElementById( 'trigger' ), 
                        {   type : 'cover' }
                        );*/

   //Скрипт для прокрутки меню вверх и прикрепления его к верху сайта
   //Т.е. фиксация меню вверху сайта для этого вставляем в nav
   //Для работы нужен только jQery
   //<nav id="top_nav" >
   /* с CSS 
   #top_nav{
   display: block;
   position: fixed;
   top: 200px;
   z-index: 1000;}*//*
   var h_hght = 46; // высота шапки
   var h_mrg = 1600;     // сколько держать на экране / отступ
   $(function(){
      $(window).scroll(function(){
         //отступ сверху
         var t=false,b=false;
         var top = $(this).scrollTop();
         // наверное отступ сверху элемента
         var elem = $('#top_slider');
         //высота экрана
         var Height = elem.height();
         if (top < h_hght) {
            elem.css('top', (h_hght-top));
         } else {
            elem.css('top', h_hght);
            t=true;
            if (top+Height < h_mrg) {
               elem.css('top', h_mrg-top);
            } else {

            }
            
         }
      }
   });
   });*/

});