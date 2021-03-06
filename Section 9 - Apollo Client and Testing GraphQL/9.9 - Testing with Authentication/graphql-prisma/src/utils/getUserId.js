import jwt from 'jsonwebtoken';

const getUserId = (request, requireAuth = true) => {
   // header Authentication token = (dynamically set using ternary operator) HTTP : Websocket
   const header = request.request ? request.request.headers.authorization : request.connection.context.Authorization

   if(header) {
      const token = header.replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded.userId;
   };

   if (requireAuth) {
      throw new Error('Authentication required');
   }

   // implicitly returns undefined if there is not header and requireAuth is false
   // We want to explicitly return null instead of undefined
   return null;
};

export { getUserId as default };