const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');


class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({ deleted: null })
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
                }),
            )
            .catch(next)
        // Course.find({ deleted: false })
        // .then(courses => res.render('me/stored-courses', {
        //     courses: multipleMongooseToObject(courses)
        //     }),
        // )
        // .catch(next)
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.find({deleted: true})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
                }),
            )
            .catch(next)
    }
}

module.exports = new MeController();
