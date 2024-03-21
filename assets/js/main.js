jQuery(document).ready(function ($) {
  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Image Upload
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function () {
    readURL(this);
  });

  // Kendo color picker
  function preview(e) {
    $("#background").css("background-color", e.value);
  }

  $("#colorPicker").kendoColorPicker({
    value: "#364F6B",
    buttons: false,
    select: preview,
  });

  // tab script
  // $(".nav-tabs a").click(function(){
  //    $(this).tab('show');
  // });
  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });

  // popover with html
  $("[data-toggle=popover]").popover({
    html: true,
    content: function () {
      var content = $(this).attr("data-popover-content");
      console.log($(content).children(".popover-body").html());
      return $(content).children(".popover-body").html();
    },
  });
});

// Color picker
// document.querySelectorAll('input[type=color]').forEach(function(picker) {

//   var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
//     codeArea = document.createElement('span');

//   codeArea.innerHTML = picker.value;
//   targetLabel.appendChild(codeArea);

//   picker.addEventListener('change', function() {
//     codeArea.innerHTML = picker.value;
//     targetLabel.appendChild(codeArea);
//   });
// });
