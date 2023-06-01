  // 监听表单提交事件
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单数据
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // 构建邮件内容
    var mailToLink = 'mailto:zeozeo460@gmail.com' +
      '?subject=' + encodeURIComponent('联系我们 - 新邮件') +
      '&body=' + encodeURIComponent('姓名: ' + name + '\n邮箱: ' + email + '\n留言: ' + message);

    // 打开默认邮件客户端
    window.location.href = mailToLink;
  });