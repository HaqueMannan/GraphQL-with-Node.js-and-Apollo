// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
// ctx can be destructed to grab the db object instead of writing ctx.db
const Query = {
   users(parent, args, { db }, info) {
      if (!args.query) {
         return db.users;
      };

      return db.users.filter((user) => {
         return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
   },
   posts(parent, args, { db }, info) {
      if (!args.query) {
         return db.posts;
      };

      return db.posts.filter((post) => {
         return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase());
      });
   },
   comments(parent, args, { db }, info) {
      return db.comments;
   },
   me(parent, args, ctx, info) {
      return {
         id: '0123456',
         name: 'John Doe',
         email: 'j.doe@email.com',
         // age: 29
      };
   },
   post(parent, args, ctx, info) {
      return {
         id: '001',
         title: 'GraphQL 101',
         body: 'Introduction to GraphQL!',
         published: false
      };
   }
};

export { Query as default };