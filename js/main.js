function carregamento(){
    var mensagem = document.getElementById('cumprimento');
    var img = document.getElementById('foto');
    var data = new Date();
    var minutos = data.getMinutes();
    var hora = (data.getHours()-1);
    if (hora >=0 && hora < 12){
        mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. Bom dia!`;
        img.src = './img/manha.png';
        document.body.style.background = '#eb8378'
    } else if (hora >= 12 && hora > 18) {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. Boa tarde!`;
        img.src = './img/tarde.png';
        document.body.style.background = '#da5507'
    } else {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. Boa noite!`;
        img.src = './img/noite.png';
        document.body.style.background = '#434f5f'
    }
}
