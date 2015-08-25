var APSWEB_END_OF_INPUT = -1;
var apsweb_base64Chars = new Array(
  'A','B','C','D','E','F','G','H',
  'I','J','K','L','M','N','O','P',
  'Q','R','S','T','U','V','W','X',
  'Y','Z','a','b','c','d','e','f',
  'g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v',
  'w','x','y','z','0','1','2','3',
  '4','5','6','7','8','9','+','/'
);

var apsweb_base64Str;
var apsweb_base64Count;

function apsweb_readBase64(){
  if (!apsweb_base64Str) return APSWEB_END_OF_INPUT;
  if (apsweb_base64Count >= apsweb_base64Str.length) return APSWEB_END_OF_INPUT;
  var c = apsweb_base64Str.charCodeAt(apsweb_base64Count) & 0xff;
  apsweb_base64Count++;
  return c;
}

function apsweb_base64(str) {
  apsweb_base64Str = str;
  apsweb_base64Count = 0;
  var result = '';
  var inBuffer = new Array(3);
  var lineCount = 0;
  var done = false;
  while (!done && (inBuffer[0] = apsweb_readBase64()) != APSWEB_END_OF_INPUT){
    inBuffer[1] = apsweb_readBase64();
    inBuffer[2] = apsweb_readBase64();
    result += (apsweb_base64Chars[ inBuffer[0] >> 2 ]);
    if (inBuffer[1] != APSWEB_END_OF_INPUT){
      result += (apsweb_base64Chars [(( inBuffer[0] << 4 ) & 0x30) | (inBuffer[1] >> 4) ]);
      if (inBuffer[2] != APSWEB_END_OF_INPUT){
        result += (apsweb_base64Chars [((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6) ]);
        result += (apsweb_base64Chars [inBuffer[2] & 0x3F]);
      } else {
        result += (apsweb_base64Chars [((inBuffer[1] << 2) & 0x3c)]);
        result += ('=');
        done = true;
      }
    } else {
      result += (apsweb_base64Chars [(( inBuffer[0] << 4 ) & 0x30)]);
      result += ('=');
      result += ('=');
      done = true;
    }
    lineCount += 4;
    if (lineCount >= 76){
      result += ('\n');
      lineCount = 0;
    }
  }
  return result;
}

function apsweb_enviar() {
  /** CONFIGURACAO
   *******************************************************/
  var cfg_url  = 'http://gv.liberato.com.br:8080';
  var cfg_emp  = 1; // Empresa
  var cfg_uni  = 1; // Unidade
  /*******************************************************/

  if (document.getElementById('apsweb_usr').value == '') {
    alert('Preencha seu nome de Usuário.');
    document.getElementById('apsweb_usr').focus();
    return false;
  } else if (document.getElementById('apsweb_passwd').value == '') {
    alert('Preencha sua Senha.');
    document.getElementById('apsweb_passwd').focus();
    return false;
  }

  document.getElementById('apsweb_form'  ).action = cfg_url + '/index.php5?irPage=login&irModulo=' + document.getElementById('apsweb_tipo').value;
  document.getElementById('apsweb_empuni').value  = cfg_emp+','+cfg_uni;
  document.getElementById('apsweb_passwd').value  = apsweb_base64(document.getElementById('apsweb_passwd').value);

  document.getElementById('apsweb_form'  ).sumbit();
  return false;
}

/**
 * Realiza alterações no corpo da página
 */
(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      $('.link-form-academico').click(function(){
        $('.form-academico').toggle();
      })

      $('.login-academico .cancelar').click(function(){
        $('.form-academico').toggle();
      })
    }
  };


})(jQuery);
;
