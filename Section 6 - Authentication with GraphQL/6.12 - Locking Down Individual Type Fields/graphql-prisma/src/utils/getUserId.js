import jwt from 'jsonwebtoken';

const getUserId = (request, requireAuth = true) => {
   const header = request.request.headers.authorization;

   if(header) {
      const token = header.replace('Bearer ', '');
      const decoded = jwt.verify(token, 'nodesecret');
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