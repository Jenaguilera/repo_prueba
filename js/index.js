const STUCK_CLASS = 'stuck'

let navBar
let body

window.addEventListener('DOMContentLoaded', () => {
    navBar = document.querySelector('.header__navbar')
    body = document.body

    document.addEventListener('scroll', () => {
        if (!navBar) return

        const hasStuckClass = navBar.className.includes(STUCK_CLASS)
        const scroll = window.scrollY

        if (scroll > 0 && !hasStuckClass) navBar.classList.add(STUCK_CLASS)
        else if (scroll < 1 && hasStuckClass)
            navBar.classList.remove(STUCK_CLASS)
    })
})
