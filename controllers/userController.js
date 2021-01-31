var User = require('../models/user');
var models = require('../models');

// Display post create form on GET.
exports.user_create_get = function(req, res, next) {
    // renders a post form
    res.render('forms/user_form', { title: 'Create User', layout: 'layouts/main' });
    console.log("User form renders successfully");
};

// Handle post create on POST.
exports.user_create_post = function(req, res, next) {

    // create a new post based on the fields in our post model
    // I have create two fields, but it can be more for your model
    models.User.create({
        Fullname: req.body.Fullname,
        Trainee_Role: req.body.Trainee_Role,
        Group_no: req.body.Group_no
    }).then(function() {
        console.log("User created successfully");
        // check if there was an error during post creation
        res.redirect('/blog/users');
    });
};

// Display post delete form on GET.
exports.user_delete_get = function(req, res, next) {
    models.user.destroy({
        // find the post_id to delete from database
        where: {
            id: req.params.user_id
        }
    }).then(function() {
        // If an post gets deleted successfully, we just redirect to posts list
        // no need to render a page
        res.redirect('/blog/users');
        console.log("User deleted successfully");
    });
};

// Handle post delete on POST.
exports.user_delete_post = function(req, res, next) {
    models.User.destroy({
        // find the post_id to delete from database
        where: {
            id: req.params.user_id
        }
    }).then(function() {
        // If an post gets deleted successfully, we just redirect to posts list
        // no need to render a page
        res.redirect('/blog/users');
        console.log("User deleted successfully");
    });

};

// Display post update form on GET.
exports.user_update_get = function(req, res, next) {
    // Find the post you want to update
    console.log("ID is " + req.params.user_id);
    models.User.findById(
        req.params.user_id
    ).then(function(user) {
        // renders a post form
        res.render('forms/user_form', { title: 'Update User', user: user, layout: 'layouts/detail' });
        console.log("User update get successful");
    });

};

// Handle post update on POST.
exports.user_update_post = function(req, res, next) {
    console.log("ID is " + req.params.user_id);
    models.User.update(
        // Values to update
        {
            Fullname: req.body.Fullname,
            Trainee_Role: req.body.Trainee_Role,
            Group_no: req.body.Group_no
        }, { // Clause
            where: {
                id: req.params.user_id
            }
        }
        //   returning: true, where: {id: req.params.post_id} 
    ).then(function() {
        // If an post gets updated successfully, we just redirect to posts list
        // no need to render a page
        res.redirect("/blog/users");
        console.log("User updated successfully");
    });
};

// Display detail page for a specific post.
exports.user_detail = function(req, res, next) {
    // find a post by the primary key Pk
    models.User.findById(
        req.params.user_id
    ).then(function(user) {
        // renders an inividual post details page
        res.render('pages/user_detail', { title: 'User Details', user: user, layout: 'layouts/detail' });
        console.log("User deteials renders successfully");
    });
};


// Display list of all posts.
exports.user_list = function(req, res, next) {
    // controller logic to display all posts
    models.User.findAll().then(function(users) {
        // renders a post list page
        console.log("rendering user list");
        res.render('pages/user_list', { title: 'User List', users: users, layout: 'layouts/list' });
        console.log("Users list renders successfully");
    });

};

// This is the blog homepage.
exports.index = function(req, res) {

    // find the count of posts in database
    models.User.findAndCountAll().then(function(userCount) {


        // find the count of authors in database

        // find the count of comments in database

        // find the count of categories in database

        res.render('users/index', { title: 'Homepage', userCount: userCount, layout: 'layouts/main' });

        // res.render('pages/index_list_sample', { title: 'Post Details', layout: 'layouts/list'});
        // res.render('pages/index_detail_sample', { page: 'Home' , title: 'Post Details', layout: 'layouts/detail'});

    })


};
