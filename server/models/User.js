const mongoose=require("mongoose");
const bcrypt= require("bcryptjs");

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  }, { _id: false });
  

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true, 
            match:[/.+\@.+\..+/, "Please enter a valid email address"],
        },
        password:{
            type:String,
            required: true,
            minLength:6,
        },
        avatar:{
            type:String,
            default:"https://via.placeholder.com/150",//chinh link sau 
        },
        address:[addressSchema],
        lastLogin:Date,
        role:{
            type:String,
            enum:["customer","admin"],
            default:"customer",
        }, 
        lastLogin:Date,
    },
    { timestamps: true}
);

//Password Hash middleware
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next ();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
});

//Noi Password user nhap thanh password ma hoa
userSchema.methods.matchPassword= async function(enteredPassword ){
    return await bcrypt. compare(enteredPassword, this.password);
};
module.exports= mongoose.model("User", userSchema);