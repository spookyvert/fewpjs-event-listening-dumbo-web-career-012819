const main = document.getElementById('main');
const input = document.querySelector('input');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

function addingEventListener() {
  input.addEventListener('input', function(event) {
    alert('I was changed!');
  });
}