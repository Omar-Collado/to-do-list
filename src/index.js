import {todo} from './todo';
import {projects} from './projects';

if(!localStorage.getItem("projects")) {
    projects.addProject("Schoolwork");
    let abc = todo("Do homework", "Math Class Problems 1-3", "10-20-1999", 0);
    projects.addTodo(0, abc);
    console.log(projects.getProject(0));

};
