import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import blogPostType from '../../types/blogPost';
import getProjection from '../../getProjection';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: blogPostType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    const removedBlogPost = await BlogPostModel
      .findByIdAndRemove(params._id, {
        select: projection,
      })
      .exec();

    if (!removedBlogPost) {
      throw new Error('Error removing blog post');
    }

    return removedBlogPost;
  },
};
