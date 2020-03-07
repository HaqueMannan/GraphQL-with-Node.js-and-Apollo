import getUserId from '../utils/getUserId';

// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
// ctx can be destructed to grab the db object instead of writing ctx.db
const User = {
   email(parent, args, { request }, info) {
      const userId = getUserId(request, false);

      if(userId && userId === parent.id) {
         return parent.email;
      } else {
         return null;
      };
   }
};

export { User as default };