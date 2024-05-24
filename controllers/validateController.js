const blogModel = require('../models/blogModel');

const validateBlog = async (request, response) => {
    const { title } = request.body;

    try {
        const existingBlog = await blogModel.findOne({ title });
        if (existingBlog) {
            return response.status(409).send({ message: `A blog with the title '${title}' already exists` });
        }
        return response.status(200).send({ message: 'Valid blog' });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

module.exports = { validateBlog }
