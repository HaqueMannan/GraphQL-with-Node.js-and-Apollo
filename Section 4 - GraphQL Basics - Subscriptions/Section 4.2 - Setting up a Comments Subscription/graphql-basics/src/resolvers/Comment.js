// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
// ctx can be destructed to grab the db object instead of writing ctx.db
const Comment = {
   author(parent, args, { db }, info) {
      return db.users.find((user) => {
         return user.id === parent.author;
      });
   },
   post(parent, args, { db }, info) {
      return db.posts.find((post) => {
         return post.id === parent.post;
      });
   }
};

export { Comment as default };