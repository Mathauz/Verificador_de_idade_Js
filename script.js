function verificar() {
let data = new Date()
let ano = data.getFullYear()
ano = Number(ano)
let fano = document.getElementById(`anos`)
let res = document.getElementById(`res`)
if(fano.value == 0 || fano.value > ano) {
    window.alert(`[ERRO] Verifique e tente novamente!`)
} else {
    let fsex = document.getElementsByName(`r`)
    let idade = ano - Number(fano.value)
    let genero = ``
    let img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)
    if(fsex[0].checked) {
    genero = `Homem`
    if (idade >= 0 && idade < 10)
        {img.setAttribute(`src`, `criancam - Copia.jpg`)
        } else if (idade < 40)
        {img.setAttribute(`src`, `maisde10m - Copia.jpg`)
        }else {img.setAttribute(`src`, `maisde40m - Copia.jpg`)} 
    }else if (fsex[1].checked) {
        genero = `Mulher`
        if (idade >= 0 && idade < 10)
            {img.setAttribute(`src`, `criancaf.jpg`)
            } else if (idade < 40)
            {img.setAttribute(`src`, `maisde10f.jpg`)
            }else {img.setAttribute(`src`, `maisde40f - Copia.jpg`)} 
    }
    res.innerHTML = `Detectado ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}