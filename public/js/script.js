$(document).ready(function() {
  $('#testimonial-slider').owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    navigationText: ['', ''],
    autoPlay: true
  });
});

$('form').on('submit', e => {
  e.preventDefault();
  const subject = $('#subject').val(); //.trim();
  const email = $('#email').val(); //.trim();
  const text = $('#text').val(); //.trim();

  const data = {
    email,
    subject,
    text
  };

  $.post('/email', data, () => {
    console.log('Server received our data');
  });

  $('#formContato').trigger('reset');
});

$('#enviarBotao').click(() => {
  document.getElementById('showEmail').innerHTML =
    '<div class="alert alert-success"> Email enviado com sucesso  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>';
});
