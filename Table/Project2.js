$('#elave').click(function () {
    $('#newuser').css('display' , 'block')
    $('body').css('background-color' , 'grey')
})
$('.fa-window-close').click(function () {
    $('#newuser').css('display' , 'none')
    $('body').css('background-color' , 'white')
})
$('#create').click(function () {
    $('#newuser').css('display' , 'none')
    $('body').css('background-color' , 'white')
    $('tbody').append(
        `<tr>
        <td>${$("#ad").val()}</td>
        <td>${$("#soyad").val()}</td>
        <td>${$("#vezife").val()}</td>
        <td>${$("#yer").val()}</td>
        <td>${$("#tarix").val()}</td>
        <td>${$("#maas").val()}</td>
        <td> <i class="fas fa-edit"></i> <i class="fas fa-user-minus"></i> </td>
        </tr>`
    )

    $('#ad').val(' ');
        $('#soyad').val(' ');
        $('#vezife').val(' ');
        $('#yer').val(' ');
        $('#tarix').val(' ');
        $('#maas').val(' ');
})
var k = " "
$('tbody').on('click' , '.fa-user-minus' , function () {
     k = $(this).parents('tr')
    $('.confirm').css('display' , 'block')
})
$('.yes').click(function () {
    k.remove()
})
$('.no').click(function () {
    $('.confirm').css('display' , 'none')
})
$('.yes').click(function () {
    $('.confirm').css('display' , 'none')
})

var a = " "
var b = " "
var c = " "
var d = " "
var e = " "
var f = " "

$('tbody').on('click' , '.fa-edit' , function () {
    $('#newuser').css('display' , 'block')
    
    a = $(this).parents('tr').children().eq(0);
    b = $(this).parents('tr').children().eq(1);
    c = $(this).parents('tr').children().eq(2);
    d = $(this).parents('tr').children().eq(3);
    e = $(this).parents('tr').children().eq(4);
    f = $(this).parents('tr').children().eq(5);
    $('#ad').val(' ');
    $('#soyad').val(' ');
    $('#vezife').val(' ');
    $('#yer').val(' ');
    $('#tarix').val(' ');
    $('#maas').val(' ');
    
    $('#ad').val(a.text())
    $('#soyad').val(b.text())
    $('#vezife').val(c.text())
    $('#yer').val(d.text())
    $('#tarix').val(e.text())
    $('#maas').val(f.text())

    $('#update').click  (function () {
        $('#newuser').css('display' , 'none')
        a.text($('#ad').val())
        b.text($('#soyad').val())
        c.text($('#vezife').val())
        d.text($('#yer').val())
        e.text($('#tarix').val())
        f.text($('#maas').val())

    })
})