const walk_in = document.querySelector('.btn-lg');
walk_in.addEventListener("click", function() {
  walk_in.parentElement.innerHTML = `<a href="#" class="btn btn-success btn-lg">Appointment Booked <i class="far fa-calendar-check"></i></a> `;
  document.querySelector('.myalert').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Appointment booked Successfully.</strong> You can now visit us any time within two working days.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
});



//const cart = document.querySelector('.cart');
const button = document.querySelectorAll('.cartbtn');

Array.from(button).forEach(ele => {
  ele.addEventListener("click" , function() {
    ele.parentElement.innerHTML = `<a href="/local/shops/shopx/checkout"><button class="btn btn-primary">Go to Cart</button></a>`;
  });
});



  