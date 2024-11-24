const header = document.querySelector('header')

window.addEventListener('scroll', stickyHeader)

function stickyHeader(e) {
  header.classList.toggle('sticky', window.scrollY > 0)
}