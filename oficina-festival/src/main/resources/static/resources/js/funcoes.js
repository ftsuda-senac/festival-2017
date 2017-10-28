$(function () {
  $("#btnenviar").click(function (ev) {
    ev.preventDefault();
    $.getJSON("../rest", {nome: $("#txtnome").val()}, function (dataJSON) {
      ///console.log(responseText);
      //var data = $.parseJSON(responseText);
      var htmlDom = "<div>Nome: " + dataJSON.titulo + "</div>" +
	      "<div>Descrição: " + dataJSON.descricao + "</div>";
      $("#resposta-ajax").html(htmlDom);
    });
  });
});
