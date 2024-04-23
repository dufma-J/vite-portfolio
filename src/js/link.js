export function link() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const href = this.getAttribute('href')
            const targetElem = document.querySelector(href)
            if (targetElem) {
                targetElem.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
}