function dataPersonal(){
    let form = document.getElementById('frm');
    let nama = form.nama.value;
    let pekerjaan = form.pekerjaan.value;
    let hobby = form.hobby.value;

    let succeed = 'Terima Kasih  '+ nama+ ' :)';
    let error = 'Data Belum Lengkap!!';

    let hasil = (nama && pekerjaan && hobby)? succeed : error;

    document.getElementById('hasil').innerHTML = hasil;
}