const projects = (() => {
    const allProjects = [];
    const addProject = (name) => {
        return [name];
    }
    return {
        addProject,
        allProjects
    }
})();

export {projects};