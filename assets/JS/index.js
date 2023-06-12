$(function () {
    $("i").css({
        'color': 'red'
    })
})

$(function () {
$("#lupa1").click(function () {
        if($("#enTienda").val() != ''){
        $("#contenedorTienda").attr('class' , 'text-success container bg-success-subtle border border-success border-3 d-flex justify-content-around align-items-center mx-auto mb-5')
        $("#titulo1").attr('class', 'text-success mt-3')
        $("#enTienda").attr('class', 'form-control border border-0 bg-success-subtle text-success')
        $(this).css({'color': 'green'})
        }
    })
})

$(function () {
    $("#lupa2").click(function () {
        if($("#otrasTiendas").val() != ''){
            $("#contenedorOtra").attr('class' , 'text-danger container bg-warning border border-danger border-3 d-flex justify-content-around align-items-center mx-auto mb-5')
            $("#titulo2").attr('class', 'text-danger mt-3')
            $("#otrasTiendas").attr('class', 'form-control border border-0 bg-warning text-danger')
            $(this).css({'color': 'red'})
        }
    })
})

$(function () {
    $("#lupa3").click(function () {
        if($("#online").val() != ''){
            $("#contenedorOnline").attr('class' , 'text-primary-emphasis container bg-primary-subtle border border-primary border-3 d-flex justify-content-around align-items-center mx-auto mb-5')
            $("#titulo3").attr('class', 'text-primary-emphasis mt-3')
            $("#online").attr('class', 'form-control border border-0 bg-primary-subtle text-primary-emphasis')
            $(this).css({'color': 'red'})
            }
        })
    })