$(function () {
  $("#scrollBtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".fade-section").first().offset().top,
      },
      800,
    );
  });

  $(window).scroll(function () {
    $(".fade-section").each(function () {
      if ($(window).scrollTop() + window.innerHeight > $(this).offset().top) {
        $(this).addClass("visible");
      }
    });
  });

  $("#perfilTexto").text(
    localStorage.getItem("perfil") || "Completa tu perfil desde editar",
  );
  $("#hab1").text(localStorage.getItem("h1") || "-");
  $("#hab2").text(localStorage.getItem("h2") || "-");
  $("#hab3").text(localStorage.getItem("h3") || "-");

  $("#perfilImg").attr(
    "src",
    localStorage.getItem("fotoPerfil") || "https://via.placeholder.com/150",
  );

  $("#img1").attr(
    "src",
    localStorage.getItem("img1") || "https://via.placeholder.com/300",
  );
  $("#title1").text(localStorage.getItem("title1") || "Proyecto 1");
  $("#desc1").text(localStorage.getItem("desc1") || "Descripción del proyecto");

  $("#img2").attr(
    "src",
    localStorage.getItem("img2") || "https://via.placeholder.com/300",
  );
  $("#title2").text(localStorage.getItem("title2") || "Proyecto 2");
  $("#desc2").text(localStorage.getItem("desc2") || "Descripción del proyecto");

  $("#img3").attr(
    "src",
    localStorage.getItem("img3") || "https://via.placeholder.com/300",
  );
  $("#title3").text(localStorage.getItem("title3") || "Proyecto 3");
  $("#desc3").text(localStorage.getItem("desc3") || "Descripción del proyecto");

  $("#form").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      $("#alert").html(
        '<div class="alert alert-danger">Completa todos los campos</div>',
      );
      return;
    }

    $.ajax({
      url: "#",
      type: "POST",
      data: { name, email, message },
      success: function () {
        $("#alert").html(
          '<div class="alert alert-success">Mensaje enviado</div>',
        );
        $("#form")[0].reset();
      },
    });
  });
});
