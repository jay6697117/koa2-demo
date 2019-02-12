const mongoose = require('../index')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	phoneNumber: {
    type: String
  },
  areaCode: String,
  verifyCode: String,
  verified: {
    type: Boolean,
    default: false
  },
  accessToken: String,
  nickname: String,
  gender: String,
  breed: String,
  age: String,
  avatar: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  psd: {
    type: String,
    trim: true,
  },
})

UserSchema.pre('save', (next) => {
  // if (this.isNew) {
  //   this.meta.createAt = this.meta.updateAt = Date.now()
  // }
  // else {
  //   this.meta.updateAt = Date.now()
  // }
  next()
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel