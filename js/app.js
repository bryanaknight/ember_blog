App = Ember.Application.create();

App.Router.map(function() {
	this.resource('about');	
	this.resource('posts');
	this.resource('post', { path: ':post_id'});
});

App.PostsRoute = Ember.Route.extend({
	model: function () {
		return posts;
	}
});

var posts = [{
	id: 1,
	title: "fake post #1",
	author: "Bryana",
	body: "Learning Ember!"
}, {
	id: 2,
	title: "fake post #2",
	author: "Bryana",
	body: "this is fun!"
}];

