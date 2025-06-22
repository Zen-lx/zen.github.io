document.addEventListener('DOMContentLoaded', () => {
    // --- Fungsionalitas Filter Proyek ---
    // Pastikan elemen-elemen ini ada sebelum mencoba mengaksesnya
    const filterButtons = document.querySelectorAll('.project-filters .filter-btn');
    const projectCards = document.querySelectorAll('.project-grid .project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Hapus kelas 'active' dari semua tombol filter
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Tambahkan kelas 'active' ke tombol yang baru diklik
                button.classList.add('active');

                const filter = button.dataset.filter; // Ambil nilai data-filter dari tombol

                projectCards.forEach(card => {
                    const category = card.dataset.category; // Ambil nilai data-category dari kartu proyek

                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden'); // Tampilkan kartu
                    } else {
                        card.classList.add('hidden'); // Sembunyikan kartu
                    }
                });
            });
        });
    }

    // --- Fungsionalitas Smooth Scrolling untuk Navigasi Internal (jika ada) ---
    // Ini berlaku untuk tautan di index.html yang mengarah ke #id_section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Hanya terapkan jika tautan berada di halaman yang sama (index.html)
        // dan bukan tautan ke halaman lain (misal: members.html)
        if (anchor.getAttribute('href').length > 1 && anchor.pathname === window.location.pathname) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Mencegah perilaku default (lompat langsung)

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth' // Membuat scroll menjadi halus
                });
            });
        }
    });

    // --- Tambahan: Contoh fungsionalitas lain (misal: untuk tombol "Kirim Pesan" di Kontak Kami) ---
    // Anda bisa menambahkan validasi form di sini jika diperlukan
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form disubmit dan halaman refresh

            // Contoh sederhana: Tampilkan alert
            alert('Pesan Anda telah berhasil dikirim! (Ini adalah simulasi, form belum benar-benar terkirim.)');

            // Di sini Anda bisa menambahkan kode untuk mengirim data ke server
            // Misalnya: fetch('/submit-form', { method: 'POST', body: new FormData(this) })
            // Atau mengosongkan form
            this.reset();
        });
    }
});