import gql from 'graphql-tag';

export const SET_LOCATION = gql`
  mutation setLocation($latitude: Float!, $longitude: Float!) {
    setLocation(input: { latitude: $latitude, longitude: $longitude }) {
      id
    }
  }
`;
