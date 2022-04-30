const themes = document.querySelectorAll('#themes .color-options-item')
const themeCSS = document.querySelector('#theme-css')

const currentTheme = localStorage.getItem('theme')

if(currentTheme == null){
    changeTheme('white')
}else{
    changeTheme(currentTheme)
}

themes.forEach(theme => {
    theme.addEventListener('click', (e) => {
        // console.log(e.target.dataset.theme)
        changeTheme(e.target.dataset.theme)
    })
})

function changeTheme(theme){
    switch(theme){
        case 'white': themeCSS.href = "./css/light.css"
        break
        case 'green': themeCSS.href = "./css/darkgreen.css"
        break
        case 'orange': themeCSS.href = "./css/darkorange.css"
        break
        default:
            themeCSS.href = "./css/light.css"
        break
    }

    localStorage.setItem('theme', theme)
}