const projects = [
    {
        title: 'JD Site',
        img: './img/jd-site.png',
        tools: ['html','css','javascript'],
        link: 'https://kier2.github.io/jd-site/',
    },
    {
        title: 'Electric Fan App',
        img: './img/electric-fan-app.png',
        tools: ['html','css','javascript'],
        link: 'https://kier2.github.io/electricfan-app/'
    },
    {
        title: 'Conding Ground | Landing Page',
        img: './img/codingground.png',
        tools: ['html','css','javascript'],
        link: 'https://kier2.github.io/codingground/'
    },
    {
        title: 'Christmas Greetings',
        img: './img/xmas-greetings.png',
        tools: ['html','css','javascript'],
        link: 'https://kier2.github.io/xmas-greetings/'
    },
    {
        title: 'Responsive Form',
        img: './img/form.png',
        tools: ['html','css','javascript'],
        link: 'https://kier2.github.io/responsive-form/'
    },
    {
        title: 'Simple Gallery',
        img: './img/gallery-simp.png',
        tools: ['html','css','javascript'],
        link: 'https://kier2.github.io/simple-gallery/'
    },
    {
        title: 'Simple Loading Animation',
        img: './img/loading-anim.png',
        tools: ['html','css','javascript'],
        link: 'https://codepen.io/codingkier/full/LYLqRmZ'
    },
    {
        title: 'Drone App',
        img: './img/drone-follow.png',
        tools: ['html','css','javascript'],
        link: 'https://kier2.github.io/drone-app/'
    },
    {
        title: 'Our Menu',
        img: './img/our-menu.png',
        tools: ['html','css','javascript'],
        link: 'https://codepen.io/codingkier/full/KKMjGXm'
    },
]
const galleryWrapper = document.querySelector('#project-gallery')
document.addEventListener('DOMContentLoaded', () => {
    projects.forEach((project, index) => {
        const article = document.createElement('article')
        const projectImgDiv = document.createElement('div')
        const projectGalleryContent = document.createElement('div')
        const projectTitle = document.createElement('h5')
        const projectContentInner = document.createElement('div')
        const projectToolsHeader = document.createElement('h6')
        const projectLists = document.createElement('ul')
        const projectLinks = document.createElement('a')
        article.setAttribute('class', 'projects-gallery-item')
        projectContentInner.setAttribute('class', 'project-content-inner')
        projectTitle.setAttribute('class', 'project-name')
        projectToolsHeader.setAttribute('class', 'project-tools')
        projectLinks.setAttribute('class', 'btn')
        projectLinks.setAttribute('href', project.link)

        projectTitle.innerText = project.title
        projectToolsHeader.innerText = 'Tools'
        projectLinks.innerHTML = 'View Site <i class="fas fa-arrow-right"></i>'

        projectImgDiv.setAttribute('class', 'projects-gallery-item-img')
        projectGalleryContent.setAttribute('class', 'project-gallery-item-content')

        projectImgDiv.innerHTML = `<img src="${project.img}">`

        for(let i = 0; i < project.tools.length; i++){
            const projectLis = document.createElement('li')
            projectLis.innerText =  project.tools[i]
            projectLists.appendChild(projectLis)
        }
        projectContentInner.append(projectToolsHeader, projectLists, projectLinks)
        projectGalleryContent.append(projectTitle, projectContentInner)
        // articleChild = `<div class="projects-gallery-item-img" ><img src="${project.img}"></div> <div class="project-gallery-item-content"> <h5 class="project-name">${project.title}</h5> <div class="project-content-inner"> <h6 class="project-tools">Tools</h6> ${getTools(projects, index)} <a class="btn" href="https://kier2.github.io/jd-site/">View Site <i class="fas fa-arrow-right"></i></a> </div> </div>`
        article.append(projectImgDiv, projectGalleryContent)
        galleryWrapper.appendChild(article)
    })
    
})

function getTools(obj, index){
    const ul = document.createElement('ul')
    for(let i = 0; i < obj[index].tools.length; i++){
       const lis = '<li>'+ obj[index].tools[i] + '</li>'
        // ul.append(lis)

        return lis
       
    }
}


