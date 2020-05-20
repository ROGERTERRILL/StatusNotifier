// document.addEventListener('DOMContentLoaded', function (event) {
//   document.querySelectorAll('button').forEach(function (e) {
//     e.addEventListener('click', function () {
//       let person = this.dataset.person;
//       console.log(person);
//       return fetch('/', {
//         method: 'POST',
//         body: JSON.stringify({ 'test': 23 }),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       }).then(() => location.reload());
//     });
//   });
// });


$(document).ready(function()
{
  $('button').on('click', function() {
    let person = $(this).data("person");
    console.log(person);
    $.ajax({
      method: 'POST',
      url: '/',
      data: {person}
    }).then(()=>location.reload());
  })
})