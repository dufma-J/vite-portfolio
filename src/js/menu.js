export function menu() {
    const headerToggle = document.getElementById('headerToggle')
    const headerNav = document.querySelector('.header_nav')

    if (headerToggle) {
        headerToggle.addEventListener('click', function () {
            headerNav.classList.toggle('show')
            headerToggle.getAttribute("aria-expanded") === 'true'
                ? headerToggle.setAttribute("aria-expanded",'false')
                : headerToggle.setAttribute("aria-expanded",'true')
        })
    }
}