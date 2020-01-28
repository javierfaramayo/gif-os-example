document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.button').addEventListener('click', () => {
        console.log('funca')
        const body = document.querySelector('body')
        body.classList.add('dark')
        body.classList.remove('light')
    })
})