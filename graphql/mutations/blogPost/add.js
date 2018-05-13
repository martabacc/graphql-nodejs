import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import blogPostInputType from '../../types/blogPost.input';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(blogPostInputType),
    },
  },
  async resolve(root, params) {
    const blogPostModel = new BlogPostModel(params.data);
    const newBlogPost = await blogPostModel.save();

    if (!newBlogPost) {
      throw new Error('Error adding new blog post');
    }
    return true;
  },
};
