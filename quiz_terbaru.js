/**
 * Rumus (
 *  AND = Terkecil
 *  OR  = Terbesar
 * )
 * 
 * Permintaan 
 * 6000 - 500 -> 5500
 * 
 * Persediaan
 * 800 - 200 -> 600
 * 
 * Produksi
 * 9000 - 3000 -> 6000
 * 
 * Produksi ? Permintaan 45000, Persediaan 700
 */
let logic = "And"
var msg = "Jadi jumlah minuman jenis XYZ yang harus diproduksi sebanyak "
function getPredikat(nilai1, aturan, nilai2) {
    if (aturan == logic) {
        if (nilai1 <= nilai2) return parseFloat(Number(nilai1).toFixed(2))
        return parseFloat(Number(nilai2).toFixed(2))
    }
}

var permintaanX = 4500
var persediaanX = 700
var permintaanTerbesar = 6000
var permintaanTerkecil = 500
var persediaanBanyak = 800
var persediaanDikit = 200
var produksiBertambah = 9000
var produksiBerkurang = 3000

let diffPermintaan = permintaanTerbesar - permintaanTerkecil
let diffPersediaan = persediaanBanyak - persediaanDikit
let diffProduksi = produksiBertambah - produksiBerkurang

// Mencari Permintaan Naik & Turun
var permintTurun = (permintaanTerbesar - permintaanX) / diffPermintaan
var permintNaik = (permintaanX - permintaanTerkecil) / diffPermintaan
// Mencari Persediaan Dikit & Banyak
var persedDikit = (persediaanBanyak - persediaanX) / diffPersediaan
var persedBanyak = (persediaanX - persediaanDikit) / diffPersediaan
// Mencari Produksi
// 1) Produksi barang Berkurang = Permintaan Turun AND persediaan Banyak
var pred1 = getPredikat(permintTurun, logic, persedBanyak)
var z1 = produksiBertambah - (pred1 * diffProduksi) // 7380
// 2) Produksi barang Berkurang = Permintaan Turun AND persediaan Sedikit
var pred2 = getPredikat(permintTurun, logic, persedDikit)
var z2 = produksiBertambah - (pred2 * diffProduksi) //7980
// 3) Produksi barang Bertambah = Permintaan Naik AND persediaan Banyak
var pred3 = getPredikat(permintNaik, logic, persedBanyak)
var z3 = (pred3 * diffProduksi) + produksiBerkurang //7380
// 4) Produksi barang Bertambah = Permintaan Naik AND persediaan Sedikit
var pred4 = getPredikat(permintNaik, logic, persedDikit)
var z4 = (pred4 * diffProduksi) + produksiBerkurang //4020

var jumPred = parseFloat((pred1 + pred2 + pred3 + pred4).toFixed(2))
var z = (z1 * pred1) + (z2 * pred2) + (z3 * pred3) + (z4 * pred4)
var hasil = parseFloat((z / jumPred).toFixed(1))

console.log(msg + parseFloat(hasil.toFixed(0)) + " botol");