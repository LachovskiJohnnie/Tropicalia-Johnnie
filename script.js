document.addEventListener('DOMContentLoaded,' function () {
    const aumentaFonteBotao = document.getElementById(aumentar - fonte)

    let tamanhoAtualFonte = 1;


    aumentarFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontsize = `${tamanhoAtualFonte}rem`;
    });
});