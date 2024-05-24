const express = require('express');
const { getAllBlogs, addNewBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const {validateBlog} = require('../controllers/validateController')

const router = express.Router();

router.get('/get', getAllBlogs);
router.post('/add', addNewBlog);
router.put('/edit', updateBlog);
router.delete('/delete', deleteBlog);
router.post('/validate',validateBlog)

module.exports = router;
