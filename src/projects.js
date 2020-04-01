const projects = (() => {
    const allProjects = [];
    const addProject = (name) => {
        allProjects.push([name]);
    }
    const addTodo = (project, todo) => {
        allProjects[project].push(todo);
    }
    const getProject = (num) => {
        return allProjects[num];

    }
    const storeProjects = () => {
        localStorage.setItem("projects", JSON.stringify(allProjects));
    }
    const getStoredProjects = () => {
        let stored = JSON.parse(localStorage.getItem("projects"));
        for(let i = 0; i < stored.length; i++) {
            allProjects.push(stored[i]);
        }
    }
    return {
        addProject,
        allProjects,
        addTodo,
        getProject,
        storeProjects,
        getStoredProjects
    }
})();

export {projects};