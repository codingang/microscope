Template.postSubmit.events({
  'submit form': function(e) {
    clearErrors();
    e.preventDefault();
//console.log($(e.target).find('[name=sitename]').val());
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    Meteor.call('post', post, function(err, id) {
	if(err)
	{return throwError(error.reason);
	console.log(error.reason);
    //post._id = Posts.insert(post);
	if (error.error === 302){

	throwError('This link has already been posted');
          Router.go('postPage', {_id: error.details})}}
	else
    Router.go('postPage', {_id: id});
  });
  }
});
