import GraphQLQueryParser from './graphQLQueryParser';

export {
  GraphQLQueryParser
}

var start = new Date();
console.log("FILE");

(async function execute() {
  const results = await GraphQLQueryParser.parse('/Users/michaelsleevi/git/graphql/resources/android/');
  results.forEach(result => {
    console.log(result);
  })
  var end = new Date();
  var interval = end.valueOf() - start.valueOf();
  console.log("Elapsed time: %s", interval);
})();