Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var postWithSameLink = Posts.findOne({
      url: poastAttributes.url
    });
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      };
    }

    var user = Meteor.user();
    var post = _.extend(postAtrributes, {
      userId: user._id,
      authon: user.username,
      submitted: new Date()
    });

    var postId = Post.insert(post);

    return {
      _id: postId
    };
  }
});
