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