$(document).ready(function () {
    // Inicialização do carrossel
    $('#carousel-imagens').slick({
        autoplay: true
    });

    // Controle do menu hamburguer
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    // Máscara para o campo telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function (form) {
            console.log(form);
            // Aqui você pode adicionar a lógica para lidar com o envio do formulário.
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos > 0) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Scroll suave para o destino
    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
