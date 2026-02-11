import GraphQLQueryParser from './graphQLQueryParser';

export {
  GraphQLQueryParser
}

var start = new Date();
console.log("FILE");

(async function execute() {
  await GraphQLQueryParser.parse('./test/resources/');
  var end = new Date();
  var interval = end.valueOf() - start.valueOf();
  console.log("Elapsed time: %s", interval);
})()

// console.log("DIRECTORY");

// const dirReader = new DirectoryReader();
// const dirExtractor = new QueryExtractor(dirReader);
// (async function() {
//   const results = await dirExtractor.extract('./test/resources/');
//   results.forEach(result => {
//     const toPrint = result;
//     console.log(toPrint);
//   })
// })();