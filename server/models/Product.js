const mongoose =require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    discountPrice:{
        type:Number,
    },
    countInStock:{
        type:Number,
        required:true,
        default:0,
    },
    sku:{
        type:String,
        unique:true,
        required:true,
    },
    category:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    character:{
        type:String,
        required:true,
    },
    material:{
        type:String,
    },
    images:[{url:{
        type:String,
        required:true,
    },
    allText:{
        type:String,

    }}
],
        
    isFeatured:{
        type:Boolean,
        default:false,
    },
    isPublished:{
        type:Boolean,
        default:false,
    },

    tags:[String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    metaTitle:{
        type:String,
    },
    metaDescription:{
        type:String,

    },
    metaKeyword:{
        type:String,
    },
    dimensions:{
        length: Number,
        width: Number,
        height:Number,
    },
    weight:Number,   
    sold: {
        type: Number,
        default: 0,
    },
},
{timestamps:true}
);

module.exports= mongoose.model("Product",productSchema);