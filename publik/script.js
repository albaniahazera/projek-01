// script.js

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn'); // Dapatkan elemen tombol

    fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
            fileNameDisplay.textContent = this.files[0].name;
        } else {
            fileNameDisplay.textContent = 'Tidak ada file dipilih';
        }
    });

    // --- Fungsi untuk tombol "Kembali ke Atas" ---
    window.addEventListener('scroll', function() {
        // Jika posisi scroll lebih dari 200px dari atas, tampilkan tombol
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        // Menggulir halaman kembali ke atas dengan animasi halus
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // --- Akhir fungsi tombol "Kembali ke Atas" ---
});


function tampilkanFile() {
    let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];
    let loadingOverlay = document.getElementById('loadingOverlay');

    if (!file) {
        alert('Pilih file terlebih dahulu!');
        return;
    }
    if (file.type !== 'text/plain') {
        alert('File yang dipilih bukan file txt!');
        return;
    }

    loadingOverlay.classList.add('visible');

    let reader = new FileReader();
    reader.onload = function (event) {
        let text = event.target.result;
        let lines = text.split('\n');
        let outputHTML = '';

        lines.forEach(line => {
            let parts = line.split(':');
            if (parts.length >= 2) {
                let value = parts.slice(1).join(':').trim();
                outputHTML += `<p style="top: 0px; bottom: 0px; margin: 4px; color: white;"><strong>${parts[0].trim()}:</strong></p>
                               <p style="background-color: #999; padding: 2px; margin: 4px; color: white;">${value}</p>`;
            } else {
                outputHTML += `<p style="margin: 4px; color: white;">${line.trim()}</p>`;
            }
        });

        document.getElementById('output').innerHTML = outputHTML;
        loadingOverlay.classList.remove('visible');
    };

    reader.onerror = function(event) {
        alert('Terjadi kesalahan saat membaca file: ' + event.target.error.name);
        loadingOverlay.classList.remove('visible');
    };

    reader.readAsText(file);
}

function bersihkanKontenDanFile() {
    let loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('visible');

    setTimeout(() => {
        document.getElementById('output').innerHTML = '';
        const fileInput = document.getElementById('fileInput');
        fileInput.value = '';
        document.getElementById('fileNameDisplay').textContent = 'Tidak ada file dipilih';
        loadingOverlay.classList.remove('visible');
        // alert('Konten dan pilihan file telah dihapus!');
    }, 300);
}