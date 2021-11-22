// Kalender
var now = new Date();
var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear();

var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
var ids = ["hari", "tanggal", "bulan", "tahun"];
var values = [week[dname], dnum, months[mo], yr];
for (var i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i];

// Jam
var hour = document.getElementById("jam");
var minute = document.getElementById("menit");
var seconds = document.getElementById("detik");

var clock = setInterval(
    function time() {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        // if (hr >= 3) {
        //     document.getElementById("waktu").innerHTML = "Selamat Pagi";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 6) {
        //     document.getElementById("absent").style.display = "";
        // }

        // if (hr >= 8) {
        //     document.getElementById("absent").style.display = "none";
        // }
        // if (hr >= 11) {
        //     document.getElementById("waktu").innerHTML = "Selamat Siang";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 15) {
        //     document.getElementById("waktu").innerHTML = "Selamat Sore";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 19) {
        //     document.getElementById("waktu").innerHTML = "Selamat Malam";
        //     document.getElementById("absent").style.display = "none";
        // }

        if (week[dname] == 'Sabtu') {
            document.getElementById("absen").style.display = "none";

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Selamat pagi";
            }

            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Selamat siang";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Selamat sore";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Selamat malam";
            }
        } else if (week[dname] == 'Minggu') {
            document.getElementById("absen").style.display = "none";

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Selamat pagi";
            }

            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Selamat siang";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Selamat sore";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Selamat malam";
            }
        } else {
            document.getElementById("absen").style.display = "";

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Selamat pagi";
                document.getElementById("absen").style.display = "none";
            }

            if (hr >= 6) {
                document.getElementById("absen").style.display = "";
            }

            if (hr >= 8) {
                document.getElementById("absen").style.display = "none";
            }

            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Selamat siang";
                document.getElementById("absen").style.display = "none";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Selamat sore";
                document.getElementById("absen").style.display = "none";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Selamat malam";
                document.getElementById("absen").style.display = "none";
            }
        }


        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;

    }, 1000
);

const senin = document.getElementById('senin');
const selasa = document.getElementById('selasa');
const rabu = document.getElementById('rabu');
const kamis = document.getElementById('kamis');
const jumat = document.getElementById('jumat');
const weekend = document.getElementById('weekend');

if (week[dname] == 'Senin') {
    senin.style.display = '';
    selasa.style.display = 'none';
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
    weekend.style.display = 'none';
} else if (week[dname] == 'Selasa') {
    senin.style.display = 'none'
    selasa.style.display = '';
    rabu.style.display = '';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
    weekend.style.display = 'none';
} else if (week[dname] == 'Rabu') {
    senin.style.display = 'none'
    selasa.style.display = 'none'
    rabu.style.display = '';
    kamis.style.display = '';
    jumat.style.display = 'none';
    weekend.style.display = 'none';
} else if (week[dname] == 'Kamis') {
    senin.style.display = 'none'
    selasa.style.display = 'none'
    rabu.style.display = 'none'
    kamis.style.display = '';
    jumat.style.display = '';
    weekend.style.display = 'none';
} else if (week[dname] == "Jum'at") {
    senin.style.display = 'none'
    selasa.style.display = 'none'
    kamis.style.display = 'none'
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = '';
    weekend.style.display = 'none';
}  else {
    senin.style.display = 'none';
    selasa.style.display = 'none';
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
    weekend.style.display = '';
}