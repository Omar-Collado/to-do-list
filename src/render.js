import {projects} from './projects';
const pageRender = (() => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let main = document.getElementsByClassName("main")[0];
    const renderProjectTab = (project, id) => {

    }
    const initialize = () => {
        for(let i = 0; i < projects.allProjects.length; i++) {
            let p = document.createElement("p");
            p.innerText = projects.allProjects[i][0];
            sidebar.appendChild(p);
        }
        renderTodos(projects.allProjects[0]);
        
    }
    const renderTodos = (project) => {
        for(let i = 1; i < project.length; i++) {
            let p = document.createElement("p");
            let desc = document.createElement("p");
            let due = document.createElement("p");
            p.innerText = project[i].title;
            desc.innerText = project[i].description;
            due.innerText = project[i].dueDate;
            main.appendChild(p);
            main.appendChild(desc);
            main.appendChild(due);
        }
    }
    return {initialize};
})();


export {pageRender};