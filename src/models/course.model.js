import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
name: String,
points: String,
});

export default mongoose.model('Course', CourseSchema);
