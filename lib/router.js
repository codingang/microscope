Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { clearErrors(); return [Meteor.subscribe('posts'),
  Meteor.subscribe('comments')];}
});


Router.map(function() {
  this.route('postsList', {path: '/'});

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postSubmit', {
    path:'/submit'});
});



//Router.before(function() { clearErrors() });
