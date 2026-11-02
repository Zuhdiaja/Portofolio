/* Form kontak: menyusun pesan lalu membuka aplikasi email pengunjung */
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = (name) => {
      const field = contactForm.elements.namedItem(name);
      return field ? field.value.trim() : '';
    };

    const subject = encodeURIComponent('[Portofolio] ' + value('subjek'));
    const body = encodeURIComponent(
      'Halo Zuhdi,\n\n' +
      value('pesan') +
      '\n\nSalam,\n' +
      value('nama') +
      '\n' +
      value('email')
    );

    if (formNote) {
      formNote.textContent = 'Membuka aplikasi email kamu...';
    }

    window.location.href = 'mailto:yudazuhdi21@gmail.com?subject=' + subject + '&body=' + body;
  });
}
