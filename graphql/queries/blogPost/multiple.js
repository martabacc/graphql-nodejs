import { GraphQLList } from 'graphql';

import blogPostType from '../../types/blogPost';
import getProjection from '../../getProjection';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: new GraphQLList(blogPostType),
  args: {},
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return BlogPostModel
      .find()
      .select(projection)
      .exec();
  },
};
