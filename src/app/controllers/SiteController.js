const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');


class SiteController {
    //[GET] /home
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses) // có thể dùng lean()
                });
            })  // phải viết là courses: courses nhưng do trùng tên nên viết v cũng được
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
