$('#formulario').submit(function(event) {
    event.preventDefault();

    const nombre = $('#nombre').val();
    const email = $('#email').val();
    const telefono = $('#telefono').val();
    const direccion = $('#direccion').val();
    const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3A${nombre}%0AEMAIL%3A${email}%0ATEL%3A${telefono}%0AEND%3AVCARD`;
$('#qr-code').html(`<img src="${qrUrl}" alt="QR code">`);
  });