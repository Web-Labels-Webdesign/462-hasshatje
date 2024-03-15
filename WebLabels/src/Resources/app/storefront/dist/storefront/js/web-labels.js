
$( document ).ready(function() {
  const catHeight = $('.custom-sidebar').height();
  const boxHeight = 230;
  if (catHeight > boxHeight) {
    $('.custom-sidebar').css({"max-height": boxHeight});
    $('.custom-sidebar').addClass("tns-ovh");
    $('.custom-sidebar').addClass("accordion");
    $('#catAccordinBtn button.show').css({"display": "block"})
    $('#catAccordinBtn  button.show').click(function() {
      $('.custom-sidebar').css({"max-height": catHeight});
      $('#catAccordinBtn button.show').css({"display": "none"})
      $('#catAccordinBtn button.hide').css({"display": "block"})
    });
    $('#catAccordinBtn  button.hide').click(function() {
      $('.custom-sidebar').css({"max-height": boxHeight});
      $('#catAccordinBtn button.show').css({"display": "block"})
      $('#catAccordinBtn button.hide').css({"display": "none"})
    });
  }
});

if (document.querySelector('body').classList.contains("is-ctl-product")) {
  const value = "Frage zu:\n\n " + "\nArt.-Nr.: " + document.querySelector('.product-detail-ordernumber').textContent.trim();
  function timeoutFunc() {
    let textarea = document.getElementById('form-subject');
    if (textarea != null) {
      textarea.value = value;
    } else {
      setTimeout(timeoutFunc, 100);
    }
  }
  timeoutFunc();
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.custom-input').forEach(function(input) {
      input.addEventListener('input', function() {
        var inputValue = this.value;
        document.querySelector('.product-detail-quantity-input').value = inputValue;
      });
    });
  });
}

if (document.getElementById("vatIds") !== null) {
  const vatIdsInput = document.getElementById("vatIds");
  let isRequired = vatIdsInput.hasAttribute("required");

  function updateOptionalLabel() {
      const hasRequiredAttribute = vatIdsInput.hasAttribute("required");

      const elements = document.querySelectorAll('.vat-optional');

      if (hasRequiredAttribute !== isRequired) {
          if (hasRequiredAttribute) {
            elements.forEach(element => {
              element.classList.add('d-none');
            });
          } else {
            elements.forEach(element => {
              element.classList.remove('d-none');
            });
          }
          isRequired = hasRequiredAttribute;
      }
  }

  // Call the function initially
  updateOptionalLabel();

  // Set up a mutation observer to handle attribute changes
  const observer = new MutationObserver(updateOptionalLabel);
  observer.observe(vatIdsInput, { attributes: true, attributeFilter: ['required'] });
}