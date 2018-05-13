import { GraphQLBoolean } from 'graphql';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: GraphQLBoolean,
  resolve() {
    return BlogPostModel
      .remove({})
      .exec();
  },
};
