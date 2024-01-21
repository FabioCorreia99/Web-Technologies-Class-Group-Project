// Splash animation
setTimeout(function() {
    var splash = document.querySelector('.splash');
    var container = document.querySelector('.container-fluid');
    // Efeito fade-out
    splash.style.opacity = 0;
    // Parar de mostrar o splash e mostrar o conteudo da página
    setTimeout(function() {
        splash.style.display = 'none';
        container.style.display = 'block';
    }, 100); //Tempo da transição
}, 2000); //Tempo em que o splash aparece



document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento com a classe 'navbar-toggler'
    var navbarToggler = document.querySelector(".navbar-toggler");

    // Seleciona o elemento com a classe 'navbar-collapse'
    var navbarMenu = document.querySelector(".navbar-collapse");

    // Adiciona um evento de clique ao elemento 'navbarToggler'
    navbarToggler.addEventListener("click", function() {
        // Verifica se a classe 'show' está presente no elemento 'navbarMenu'
        if (navbarMenu.classList.contains("show")) {
            // Se estiver presente, remove a classe 'show' do elemento 'navbarMenu'
            navbarMenu.classList.remove("show");
        } else {
            // Se não estiver presente, adiciona a classe 'show' ao elemento 'navbarMenu'
            navbarMenu.classList.add("show");
        }
    });
});

// Mostrar 3 restaurantes e mover 1 para a frente com a seta - Página offers
$(document).ready(function () {                                             // correr o código depois de carregar o resto da página
    
    $("#restaurantCarousel").on("slide.bs.carousel", function (sliderEvent) {
        var $currentRestaurant = $(sliderEvent.relatedTarget);                  // ir buscar o restaurante ativo
        var currentIndex = $currentRestaurant.index()                           // index atual
        var restaurantsPerSlide = 3;                                            
        var total = $(".carousel-item").length;                                 // numero total de restaurantes

        if (currentIndex >= (total - (restaurantsPerSlide - 1))) {              // verificar se o restaurante ativo é o ultimo
            
            var distance = (restaurantsPerSlide - (total-currentIndex));        // subtrair os restantes restaurantes ao numero total.
            for (var i = 0; i < distance ;i++) {
                if (sliderEvent.direction == "left") {
                    $(".carousel-item").eq(i).appendTo(".carousel-inner");      // mover para a esquerda
                }
                else {
                    $(".carousel-item").eq(0).appendTo(".carousel-inner");      // mover para a direita
                }
            }
        }
    });
});
