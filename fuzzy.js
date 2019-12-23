var input = require('readline-sync')
var umur = input.questionInt("Masukan Umur : ")

/*
    MUDA
    ex:
    = 0 + 0,1 x 5/10 x (umur - 35 )
    = 0,05 x 5
    = 0,25

    TUA
    ex:
    = ((1 - 0,1) x (5/10) x (umur - 35))
    = 1 - 0,25
    = 0,75

    MUDA < 35 tahun ; PAROBAYA 35 ≤ umur ≤ 55 tahun ; TUA > 55 tahun.
*/
if (umur >= 25 && umur <= 45) {
    var tentukanMuda = (0.1 * (5 / 10) * (umur - 35))
    console.log(tentukanMuda); // separuh baya
    console.log((1 - tentukanMuda)); // muda
} else if (umur >= 45 && umur <= 65) {
    var tentukanMuda = (0.1 * (5 / 10) * (umur - 35))
    console.log(tentukanMuda); // tua
    console.log((1 - tentukanMuda)); // separu baya
}
