Template.postsList.helpers({
  postsWithRank: function() {
    return this.posts.map(function (post, index, cursor) {
      post._rack = index;
      return post;
    });
  }
});
