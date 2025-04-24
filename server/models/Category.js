const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        
    },
    image: {
        type: String,
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Thay pre('save') thành pre('validate')
categorySchema.pre('validate', function(next) {
    // Kiểm tra xem 'name' có thay đổi không hoặc có phải là document mới không
    // để tránh ghi đè slug không cần thiết khi chỉ cập nhật các trường khác
    if (this.isModified('name') || this.isNew) {
       this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

module.exports = mongoose.model('Category', categorySchema);
