import gql from "graphql-tag";
const DATA_QUERY = gql`
query Assets {
  assets {
    id
    womenHighEndCouture{
      hc1Name
      hc1Description
      hc1Price
      hc1Image {
      	url
      }
    }
  }
}
`;
export default DATA_QUERY;