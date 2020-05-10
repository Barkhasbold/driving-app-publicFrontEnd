
import gql from 'graphql-tag';

export const COURSES_QUERY = gql`
query courses {
  courses {
    _id
    name
    description
    image
  }
}
`;