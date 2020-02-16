// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
// ctx can be destructed to grab the db object instead of writing ctx.db
const Post = {
   author(parent, args, { db }, info) {
      return db.users.find((user) => {
         return user.id === parent.author;
      });
   },
   comments(parent, args, { db }, info) {
      return db.comments.filter((comment) => {
         return comment.post === parent.id;
      });
   }
};

export { Post as default };