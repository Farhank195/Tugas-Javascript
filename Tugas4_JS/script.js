
let form = document.getElementById('frm');
let jabatan = ['Manager','Asisten Manager', 'Staff'];
let Status = ['menikah', 'Belum Menikah'];

let pilihanJabatan = `<option value=""> Pilih Jabatan---- </option>`;
let pilihanStatus = `<option value=""> Status ----</option>`;

for(let j in pilihanJabatan){
    pilihanJabatan += `<option value="${jabatan[j]}">${jabatan[j]}</option>`;
}
form.jabatan.innerHTML = pilihanJabatan;

for(let s in pilihanStatus){
    pilihanStatus += `<option value="${Status[s]}">${Status[s]}</option>`;
}
form.status.innerHTML = pilihanStatus;
let no=0;
function kirimData(){
    no++;
    
    let nama = form.nama.value;
    let jabatan = form.jabatan.value;
    let status = form.status.value;
    
    let gaji = 0;
    if(jabatan === "Manager") {gaji = 15000000;}
    else if(jabatan === "Asisten Manager") {gaji = 10000000;}
    else {gaji = 5000000;}
    
    const tunjanganJabatan = 0.15*gaji;
    const bpjs = 0.10*gaji;
    let nilaiTunjanganKeluarga =(status == "menikah") ? "20% dari gaji pokok" : 0;
    let tunjanganKeluarga =(status == "menikah") ? 0.2*gaji : 0;
    
    let total = gaji + tunjanganJabatan + tunjanganKeluarga - bpjs;
    
    
    const table = `
    <table align="center">
    <tr>
    <th>No.</th>
    <th>Nama</th>
    <th>Jabatan</th>
    <th>Status</th>
    </tr>
    <tr>
    <td>${no}</td>
    <td>${nama}</td>
    <td>${jabatan}</td>
    <td>${status}</td>
    </tr>
    <tr>
    <th colspan="2">Total Gaji</th>
    <td colspan="2">Rp ${total}</td>
    </tr>
    </table>
    `;
    
    swal.fire({
        icon: "success",
        html: table,
    })
}