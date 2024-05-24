const blogModel = require('../models/blogModel');
const initialBlogData = require('../data/blogData')

const getAllBlogs = async (request, response) => {
    try {
        const blogs = await blogModel.find();
        if (blogs.length === 0) {
            const initialBlogs = await blogModel.insertMany(initialBlogData);
            return response.status(200).json(initialBlogs);
        }
        return response.status(200).json(blogs);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const addNewBlog = async (request, response) => {
    const blogToBeAdded = request.body;

    try {
        const existingBlog = await blogModel.findOne({ title: blogToBeAdded.title, date: blogToBeAdded.date });
        if (existingBlog) {
            return response.status(409).send({ message: `A blog with the same title and date already exists` });
        }
        const insertedBlog = await blogModel.create(blogToBeAdded);
        response.status(201).json(insertedBlog);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const updateBlog = async (request, response) => {
    const blogToBeUpdated = request.body;

    try {
        const updatedBlog = await blogModel.updateMany({ title: blogToBeUpdated.title, date: blogToBeUpdated.date }, blogToBeUpdated);
        response.status(200).json(updatedBlog);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const deleteBlog = async (request, response) => {
    const blogToBeDeleted = request.body;

    try {
        const deletedBlog = await blogModel.deleteOne({ title: blogToBeDeleted.title, date: blogToBeDeleted.date });
        response.status(200).json(deletedBlog);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

module.exports = { getAllBlogs, addNewBlog, updateBlog, deleteBlog };
