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
    return {
        addProject,
        allProjects,
        addTodo,
        getProject
    }
})();

export {projects};