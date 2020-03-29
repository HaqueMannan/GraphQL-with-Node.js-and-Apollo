import getUserId from '../utils/getUserId';

// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
// ctx can be destructed to grab the db object instead of writing ctx.db
const Query = {
   users(parent, args, { prisma }, info) {
      const opArgs = {
         first: args.first,
         skip: args.skip,
         after: args.after,
         orderBy: args.orderBy
      };

      if(args.query) {
         opArgs.where = {
            OR: [{
               name_contains: args.query
            }]
         };
      };

      return prisma.query.users(opArgs, info);
   },
   me(parent, args, { prisma, request }, info) {
      const userId = getUserId(request);

      return prisma.query.user({
         where: {
            id: userId
         }
      })
   }
};

export { Query as default };