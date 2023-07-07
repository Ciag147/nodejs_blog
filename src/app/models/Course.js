const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, require: true, }, //để bắt buộc nhập thông tin vào trường này dùng require: true
    description: {type: String },
    image: {type: String },
    videoId: {type: String, require: true, },
    level: {type: String },
    slug: { type: String, slug: 'name', unique: true },

    // slug: { type: String, maxlength: 255 }, // thêm dòng này để khi lấy khóa học không bị lỗi chỉ lấy khóa đầu tiên (:slug)

  }, {
    timestamps: true, // tự động thêm thời gian tạo và cập nhật
  });

  //Add plugins
  mongoose.plugin(slug);  
  // Course.plugin(mongooseDelete, { overrideMethods: 'all' });
  Course.plugin(mongooseDelete, { deletedAt: true });
  module.exports = mongoose.model('Course', Course);