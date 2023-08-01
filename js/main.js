$(document).ready(function () {
    $(".burger").click(function () {
      $(".nav_list").toggleClass("open");
      $(".burger").toggleClass("open");
    });
  });

  $(document).ready(function() {
    // Активируем первую вкладку по умолчанию
    $("#tab-btn-1").prop("checked", true);

    // При клике на вкладку, отображаем соответствующее содержимое
    $(".tab-btn").on("click", function() {
      var contentId = $(this).attr("id").replace("tab-btn-", "content-");
      $(".tab-content").hide();
      $("#" + contentId).fadeIn("slow");
    });
  });



  $(document).ready(function() {
    // Function to show the modal message and check passwords on form submit
    $("#sign-up-form").submit(function(event) {
        event.preventDefault();

        var password = $("#password").val();
        var confirmPassword = $("#confirm_password").val();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            showModal();
        }
    });

    // Function to show the modal
    function showModal() {
        $("#popup-modal").fadeIn();
    }

    // Function to close the modal and redirect to the home page
    function closeModalAndRedirect() {
        $("#popup-modal").fadeOut(function() {
            window.location.href = "/";
        });
    }

    // Function to close the modal
    function closeModal() {
        $("#popup-modal").fadeOut();
    }

    // Bind the click event for the close button
    $(".modal-close").click(function() {
        closeModalAndRedirect();
    });

    // Bind the click event for the modal background
    $("#popup-modal").click(function(event) {
        if ($(event.target).hasClass("modal-content")) {
            closeModalAndRedirect();
        }
    });
});


$(document).ready(function() {
  $("#work-form").submit(function(event) {
      event.preventDefault(); 

      const requiredFields = ["first_name", "last_name", "email", "clear_password"];
      let allFieldsFilled = true;

      for (const fieldName of requiredFields) {
          const fieldValue = $("input[name='" + fieldName + "']").val().trim();
          if (fieldValue === "") {
              allFieldsFilled = false;
              $(`[for='${fieldName}'] .required-message`).removeClass("hidden");
          } else {
              $(`[for='${fieldName}'] .required-message`).addClass("hidden");
          }
      }

      if (!allFieldsFilled) {
          return;
      }
      const fullName = $("input[name='first_name']").val() + " " + $("input[name='middle_name']").val() + " " + $("input[name='last_name']").val();
      const email = $("input[name='email']").val();
      const password = $("input[name='clear_password']").val();
      const message = `
<p><b>Dear ${fullName},</b></p><br>
<p>This is automatically generated email informing your Application for Employment has been sent to LAVERNE company for HR Department for review.</p><br>
<p>Andrei Dalca is your personal manager and he will call you during the day for a short interview. Please check your e-mail several times a day in order not to miss important notifications from the company.</p><br>
<p>Please use your login and password below to confirm your email address.</p><br>
<p class='cont-in'>We need to be sure you will receive our notifications <a href='https://dashboard.laverne.llc/api/confirm-email?token=30df10be-538d-4030-8f75-e6a48378ec79'>https://dashboard.laverne.llc/api/confirm-email?token=30df10be-538d-4030-8f75-e6a48378ec79</a></p><br>
<p>Login: ${email}</p><br>
<p>Password: ${password}</p><br>
<p>You can check your application status throughout Control Panel. Now you can start the acquaintance with the system you will use for work with the company:</p><br>
<p>The panel is easy to use however it includes all the tools necessary for work.</p><br>
<p>DASHBOARD – is the place where you can check your Employment Status. Currently your status is Under HR review.</p><br>
<p>MESSAGES – we use this section for internal communication with the company stuff.</p><BR>
<p>PACKAGES – here you can see all the information related to incoming and delivered packages.</p><br>
<p>SHIPPING TASKS - this section contains information about processed and to be sent packages.</p><br>
<br><br>
<p>If you need more information, please don't hesitate to contact us and ask for .</p><br>
<p>Regards,</p><br>
<p class='cont-in'><a href='https://laverne.llc/'>https://laverne.llc/</a><br><br>

Phone: (678) 701-8354<br><br>

1100 PEACHTREE ST NE #200, 5TH FLOOR OFFICES 502-511, ATLANTA, GA 30309</p><br>
      `;

      // Скрываем форму
      $("#work-form").hide();

      // Отображаем сообщение на странице
      $("#success-message").html(message).removeClass("hidden");
  });
});


$(document).ready(function() {
  // Function to show the modal message and check passwords on form submit
  $("#sign-in-form").submit(function(event) {
      event.preventDefault();
          showModal2();
  });

  // Function to show the modal
  function showModal2() {
      $("#popup-modal-2").fadeIn();
  }


  // Function to close the modal
  function closeModal2() {
      $("#popup-modal-2").fadeOut();
  }

  // Bind the click event for the close button
  $(".modal-close-2").click(function() {
      closeModal2();
  });

  // Bind the click event for the modal background
  $("#popup-modal-2").click(function(event) {
      if ($(event.target).hasClass("modal-content-2")) {
          closeModal2();
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Получаем элемент прелоудера
  const preloader = document.getElementById("preloader");

  // Задержка в 0.5 секунды перед скрытием прелоудера
  setTimeout(function() {
      preloader.classList.add("preloader-hidden");
  }, 500);
});