import student from './student.router.js';
import course from './course.router.js';

export default app => {
    app.use('/', student);
    app.use('/', course);
}