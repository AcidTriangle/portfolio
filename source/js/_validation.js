var validation = (function () {
  var warningString = 'Вы не ввели';
  var classesToRemove;

  function focus (elem) {
    //var classesToRemove = 'warning warning_password warning_login warning_name warning_email warning_message';
    elem.parent().removeClass(classesToRemove);
    return 'kek';
  }

  var content = function (inputs) {
    var contentCheck = true;
    classesToRemove = 'warning';

    inputs.each(function () {
        var $this = $(this);

        if (!$this.val()) {
          contentCheck = false;
          $this.parent().addClass('warning warning_' + $this.attr('id'));
          classesToRemove+=' warning_' + $this.attr('id');
        }
      }
    );

    return contentCheck;
  };

  var auth = function() {
    var login = $('.auth-form__input_login'),
      password = $('.auth-form__input_password'),
      loginContainer = login.parent(),
      passwornContainer = password.parent();

    var loginEmpty = !login.val(),
      passwordEmpty = !password.val();

    if (loginEmpty) {
      loginContainer.addClass('warning warning_login');
    }

    if (passwordEmpty) {
      passwornContainer.addClass('warning warning_pass');
    }

    if (loginEmpty || passwordEmpty)
      return true;
  };

  return {
    focus: function (elem) {
      focus(elem);
    },
    content: function (inputs) {
      return content(inputs);
    }
  };
})();