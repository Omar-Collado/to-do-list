const pageRender = (() => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    const renderProjectTab = (project, id) => {

    }
    const initialize = (projects) => {
        for(let i = 0; i < projects.length; i++) {
            let p = document.createElement("p");
            p.innerText = projects[i][0];
            sidebar.appendChild(p);
        }
    }
    return {initialize};
})();


export {pageRender};