function submitForm() {
  var myform = document.getElementById('myform')
  var fd = new FormData(myform)

  $.ajax({
    url: 'https://renoasahi-cms.herokuapp.com/contacts',
    data: fd,
    cache: false,
    processData: false,
    contentType: false,
    type: 'POST',
    success: function (res) {
      console.log(res)
    },
  })
}
