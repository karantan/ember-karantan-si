export default function() {
  this.urlPrefix = 'http://karantan.si';
  this.namespace = '/wp-json/wp/v2';

  let posts = [
    {
      'id': 1,
      'title': {'rendered':'News 1'},
      'content': {'rendered':'<p>Content 1</p>'}
    },
    {
      'id': 2,
      'title': {'rendered':'News 2'},
      'content': {'rendered':'<p>Content 2</p>'}
    },
    {
      'id': 3,
      'title': {'rendered':'News 3'},
      'content': {'rendered':'<p>Content 3</p>'}
    }
  ];

  this.get('/posts', (schema, request) => {
    if (request.queryParams.page > 1){
      posts = [posts[request.queryParams.page - 1]];
    }
    return posts;
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
