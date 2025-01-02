(function() {
  function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    
    // Collect form data before disabling inputs
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => {
      if (key !== '_fd') {
        jsonData[key] = value;
      }
    });
    
    // Disable form
    disableAllButtons(form);
    var formInputs = form.querySelectorAll("input, textarea");
    formInputs.forEach(function(input) {
      input.disabled = true;
    });
    
    // Submit the form
    fetch(form.action, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(`Server returned ${response.status}: ${text}`);
        });
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        form.reset();
        
        var formGroup = form.querySelector(".form-group");
        if (formGroup) {
          formGroup.style.opacity = "0.5";
          formGroup.style.pointerEvents = "none";
        }
        
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
          thankYouMessage.style.opacity = "1";
          thankYouMessage.style.visibility = "visible";
        }
      } else {
        throw new Error('Submission was not successful');
      }
    })
    .catch(error => {
      console.error('Submission failed:', error);
      enableAllButtons(form);
      formInputs.forEach(function(input) {
        input.disabled = false;
      });
    });

    return false;
  }
  
  function loaded() {
    var forms = document.querySelectorAll("form.gform");
    forms.forEach(function(form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        handleFormSubmit(e);
      }, {
        passive: false,
        capture: true
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loaded);
  } else {
    loaded();
  }

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  function enableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  }
})();
