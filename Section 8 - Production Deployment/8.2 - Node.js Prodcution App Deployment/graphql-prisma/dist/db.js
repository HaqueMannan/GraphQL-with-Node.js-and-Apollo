'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
// Demo Users, Posts and Comments Data
var users = [{ id: '1', name: 'Alice', email: 'alice@email.com', age: 24 }, { id: '2', name: 'Barry', email: 'barry@email.com' }, { id: '3', name: 'Carl', email: 'carl@email.com', age: 54 }];
var posts = [{ id: '10', title: 'GraphQL 101', body: 'Introduction to GraphQL...', published: true, author: '1' }, { id: '11', title: 'GraphQL 201', body: 'Intermediate GraphQL...', published: false, author: '1' }, { id: '12', title: 'Programming Music', body: '', published: false, author: '3' }];
var comments = [{ id: '100', text: 'Hello World!', author: '3', post: '10' }, { id: '101', text: 'How are you?', author: '1', post: '12' }, { id: '102', text: 'What are we going to learn today?', author: '2', post: '11' }, { id: '103', text: 'Bye for now!', author: '1', post: '12' }];

var db = {
   users: users,
   posts: posts,
   comments: comments
};

exports.default = db;