import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

/* userSchema.virtual('id').get(function () {
    return this._id.toHexString();
}
); */
// Ensure virtual fields are serialised.
/* userSchema.set('toJSON', {
    virtuals: true
}); */
/* 
userSchema.findById = function (cb) {
    return this.model('Users').find({ id: this.id }, cb);
}; */

userSchema.pre("save", function (next) {

    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();

    });

});
const User = mongoose.model('User', userSchema);


const findByEmail = (email) => {

    return User.find({ email })
        .then((result) => {
            delete result._id;
            delete result.__v;
            return result;
        })
        ;
};
const findByUserName = (username) => {
    
    return User.findOne({ username })
        .then((result) => {
            //delete result._id;
            delete result.__v;
            return result;
        })
        ;
};
const findOne = (param) => {
    return User.findOne({id})
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};
const findById = (id) => {
    return User.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};
const createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};
const list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};
const patchUser = (id, userData) => {
    return User.findOneAndUpdate({
        _id: id
    }, userData);
};
const removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({ _id: userId }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

export {
    createUser,
    findByEmail,
    findByUserName,
    findById,
    list,
    patchUser,
    removeById


}