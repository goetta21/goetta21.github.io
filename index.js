
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    var mailToLink = 'mailto:zeozeo460@gmail.com' +
      '?subject=' + encodeURIComponent('聯繫我們 - 新郵件') +
      '&body=' + encodeURIComponent('姓名: ' + name + '\n郵箱: ' + email + '\n留言: ' + message);

    window.location.href = mailToLink;
  });
