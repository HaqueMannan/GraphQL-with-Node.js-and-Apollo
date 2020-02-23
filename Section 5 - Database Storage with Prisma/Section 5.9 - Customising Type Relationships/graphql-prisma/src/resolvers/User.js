// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
// ctx can be destructed to grab the db object instead of writing ctx.db
const User = {
   posts(parent, args, { db }, info) {
      return db.posts.filter((post) => {
         return post.author === parent.id;
      });
   },
   comments(parent, args, { db }, info) {
      return db.comments.filter((comment) => {
         return comment.author === parent.id;
      });
   }
};

export { User as default };