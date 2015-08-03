angular.module('tamanku.services', [])

.factory('Tamans', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tamans = [
    {
      "nama": "Taman Hutan Kota Kampung Sawah",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Kampung Sawah (sisi Tol Tomang)",
      "no": "1",
      "kecamatan": "Palmerah",
      "kodifikasi": "15010008",
      "kotamadya": "Jakarta Barat",
      "luas": "31,945.00",
      "kelurahan": "Kemanggisan"
    },
    {
      "nama": "Taman Medan Merdeka (Monas)",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Jl. Silang Monas",
      "no": "2",
      "kecamatan": "Gambir",
      "kodifikasi": "15010005",
      "kotamadya": "Jakarta Pusat",
      "luas": "631,448.00",
      "kelurahan": "Gambir"
    },
    {
      "nama": "Taman Menteng",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Jl. HOS Cokroaminoto",
      "no": "3",
      "kecamatan": "Menteng",
      "kodifikasi": "15010001",
      "kotamadya": "Jakarta Pusat",
      "luas": "24,546.22",
      "kelurahan": "Menteng"
    },
    {
      "nama": "Taman Suropati",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Jl. Untung Suropati",
      "no": "4",
      "kecamatan": "Menteng",
      "kodifikasi": "15010007",
      "kotamadya": "Jakarta Pusat",
      "luas": "16,328.00",
      "kelurahan": "Menteng"
    },
    {
      "nama": "Taman Situlembang",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Jl. Situlembang",
      "no": "5",
      "kecamatan": "Menteng",
      "kodifikasi": "15010006",
      "kotamadya": "Jakarta Pusat",
      "luas": "14,700.00",
      "kelurahan": "Menteng"
    },
    {
      "nama": "Taman Lapangan Banteng",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Jl. Lapangan Banteng",
      "no": "6",
      "kecamatan": "Sawah Besar",
      "kodifikasi": "15010004",
      "kotamadya": "Jakarta Pusat",
      "luas": "52,790.00",
      "kelurahan": "Pasar Baru"
    },
    {
      "nama": "Taman Ayodia",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Jl. Barito",
      "no": "7",
      "kecamatan": "Kebayoran Baru",
      "kodifikasi": "15010009",
      "kotamadya": "Jakarta Selatan",
      "luas": "7,497.00",
      "kelurahan": "Kramat Pela"
    },
    {
      "nama": "Taman Hutan Kota Kebon Pisang Penjaringan",
      "foto": "img/taman.jpg",
      "jenis": "Taman Kota",
      "lokasi": "Jl.Muara Karang (sisi Pluit Interchange)",
      "no": "8",
      "kecamatan": "Penjaringan",
      "kodifikasi": "15010003",
      "kotamadya": "Jakarta Utara",
      "luas": "53,506.00",
      "kelurahan": "Pejagalan"
    }
  ];

  return {
    all: function() {
      return tamans;
    },
    remove: function(taman) {
      tamans.splice(tamans.indexOf(taman), 1);
    },
    get: function(tamanNo) {
      for (var i = 0; i < tamans.length; i++) {
        if (tamans[i]['no'] === tamanNo) {
          return tamans[i];
        }
      }
      return null;
    }
  };
});
