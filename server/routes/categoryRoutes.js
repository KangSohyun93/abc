const express = require('express');
const Category = require('../models/Category');
const { protect } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/adminMiddleware');

const router = express.Router();

// @route POST /api/categories/create
// @desc Create category 
// @access (Admin only)
router.post('/create', protect, isAdmin, async (req, res) => {
    try {
        const { categories } = req.body;

        // If categories array is provided, create multiple categories
        if (Array.isArray(categories)) {
            const createdCategories = [];
            const errors = [];

            for (const categoryData of categories) {
                try {
                    const { name, description, image, parentId } = categoryData;

                    // Validation
                    if (!name) {
                        errors.push({
                            category: categoryData,
                            error: "Name is required"
                        });
                        continue;
                    }

                    // Check if category name already exists
                    const existingCategory = await Category.findOne({ name });
                    if (existingCategory) {
                        errors.push({
                            category: categoryData,
                            error: "Category name already exists"
                        });
                        continue;
                    }

                    // Validate parentId if provided
                    if (parentId) {
                        const parentCategory = await Category.findById(parentId);
                        if (!parentCategory) {
                            errors.push({
                                category: categoryData,
                                error: "Parent category not found"
                            });
                            continue;
                        }
                    }

                    // Validate image URL if provided
                    if (image) {
                        try {
                            new URL(image);
                        } catch (e) {
                            errors.push({
                                category: categoryData,
                                error: "Invalid image URL format"
                            });
                            continue;
                        }
                    }

                    const category = new Category({
                        name,
                        description,
                        image,
                        parentId
                    });

                    const createdCategory = await category.save();
                    createdCategories.push(createdCategory);
                } catch (error) {
                    errors.push({
                        category: categoryData,
                        error: error.message
                    });
                }
            }

            return res.status(201).json({
                success: true,
                message: `Successfully created ${createdCategories.length} categories${errors.length > 0 ? `, ${errors.length} failed` : ''}`,
                categories: createdCategories,
                errors: errors.length > 0 ? errors : undefined
            });
        }

        // Single category creation
        const { name, description, image, parentId } = req.body;

        // Validation
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required"
            });
        }

        // Check if category name already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category name already exists"
            });
        }

        // Validate parentId if provided
        if (parentId) {
            const parentCategory = await Category.findById(parentId);
            if (!parentCategory) {
                return res.status(400).json({
                    success: false,
                    message: "Parent category not found"
                });
            }
        }

        // Validate image URL if provided
        if (image) {
            try {
                new URL(image);
            } catch (e) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid image URL format"
                });
            }
        }

        const category = new Category({
            name,
            description,
            image,
            parentId
        });

        const createdCategory = await category.save();
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            category: createdCategory
        });
    } catch (error) {
        console.error('Category creation error:', error);
        res.status(500).json({
            success: false,
            message: "Error creating category",
            error: error.message
        });
    }
});

//@route GET /api/categories
// @desc Get all categories
//@access
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({ isActive: true })
            .populate('parentId', 'name');
        res.json(categories);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching categories",
            error: error.message
        });
    }
});

//@route PUT /api/categories/:id Update category (Admin only)
router.put('/:id', protect, isAdmin, async (req, res) => {
    try {
        const { name, description, image, parentId, isActive } = req.body;
        const category = await Category.findById(req.params.id);

        if (category) {
            category.name = name || category.name;
            category.description = description || category.description;
            category.image = image || category.image;
            category.parentId = parentId || category.parentId;
            category.isActive = isActive !== undefined ? isActive : category.isActive;

            const updatedCategory = await category.save();
            res.json(updatedCategory);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error updating category",
            error: error.message
        });
    }
});

// @route DELETE /api/categories/:id Delete category (Admin only)
router.delete('/:id', protect, isAdmin, async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        
        if (category) {
            // Kiểm tra xem có sản phẩm nào đang sử dụng category này không
            const productsUsingCategory = await Product.countDocuments({ category: req.params.id });
            
            if (productsUsingCategory > 0) {
                // Thay vì xóa, set isActive = false
                category.isActive = false;
                await category.save();
                res.json({ message: "Category deactivated" });
            } else {
                await category.deleteOne();
                res.json({ message: "Category removed" });
            }
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting category",
            error: error.message
        });
    }
});

module.exports = router;
