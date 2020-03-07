// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
// ctx can be destructed to grab the db object instead of writing ctx.db
const Query = {
   users(parent, args, { prisma }, info) {
      const opArgs = {};

      if(args.query) {
         opArgs.where = {
            OR: [{
               name_contains: args.query
            }, {
               email_contains: args.query
            }]
         };
      };

      return prisma.query.users(opArgs, info);
   },
   posts(parent, args, { prisma }, info) {
      const opArgs = {};

      if(args.query) {
         opArgs.where = {
            OR: [{
               title_contains: args.query
            }, {
               body_contains: args.query
            }]
         };
      };

      return prisma.query.posts(opArgs, info);
   },
   comments(parent, args, { prisma }, info) {
      return prisma.query.comments(null, info);
   },
   me(parent, args, ctx, info) {
      return {
         id: '0123456',
         name: 'John Doe',
         email: 'j.doe@email.com',
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