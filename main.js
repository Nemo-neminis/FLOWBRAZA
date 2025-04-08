$(function () {
    $('.sipario').on('click', function () {
        // Sfuma l’immagine cracked
        $('.cracked-overlay').css('opacity', '0');

        // Dopo la sfumatura, mostra la scena
        setTimeout(() => {
            $('.sipario').fadeOut(600, function () {
                $('.scena').fadeIn(800);
                $('body').css('overflow', 'auto');
            });
        }, 1300); // Deve combaciare con la durata della transizione in CSS
    });
});
