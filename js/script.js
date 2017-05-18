var search_btn = document.getElementById('btn_search');
var search_form = document.getElementById('search_bar_form');

btn_search.addEventListener('click', fun1);

function fun1() {
  if(search_form.style.display == 'none') {
    search_form.style.display = 'block';
  }else {
    search_form.style.display = 'none';
  }
}
