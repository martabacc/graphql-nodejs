import { GraphQLBoolean } from 'graphql';
import CommentModel from '../../../models/comment';

export default {
  type: GraphQLBoolean,
  resolve() {
    return CommentModel
      .remove()
      .exec();
  },
};
