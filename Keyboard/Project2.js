bosluq = " "


$('.buttons button').click(function () {
    var a = $(this).text()
    $('#metn').append(`${a.toLowerCase()}`)
    bosluq += $(this).text()
})
$('#remove').click(function () {
    $('#metn').text(" ")
})
$('.boslug').click(function () {
    $('#metn').append(a)
})

setInterval(10)
$('#backspace').click(function () {
    $('#metn').text($("#metn").text().slice(0, -1))
})

$('enter').click(function () {
    bosluq += '<br>'
    $('#metn p').text(bosluq);
})