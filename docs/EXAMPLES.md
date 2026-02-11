## Getting Started

To get started with this project, you likely already have a list of files that you want to parse, something like the following groups.

_files/Authors.graphql_

```graphql
query GetAuthors {
    authors {
        ...AuthorFragment
        books {
            ...BookFragment
        }
    }
}

fragment AuthorFragment on Author {
    id
    name
    email
}
```

_files/Books.graphql_

```graphql
query GetBooks {
    books {
        ...BookFragment
    }
}

fragment BookFragment on Book {
    id
    name
    date
    publisher
}
```

_files/Bookstore.graphql_

```graphql
query GetBooksFromBookstore {
    topSellers {
        ...BookFragment
        authors {
            ...AuthorFragment
        }
    }
}
```

We can then use the `graphql-query-parser` to extract the executable queries as follows.

```javascript
import { GraphQLQueryParser } from "graphql-query-parser";

async function findQueries(directory) {
    return await GraphQLQueryParser.parse(directory);
}

(async function () {
    const results = await findQueries("files/");
    results.forEach((result, idx) => {
        console.log("\nQuery %s: \n%s", idx, result);
    });
});
```

We would see the following results:

```graphql
Query 0:
query GetAuthors {
  authors {
    ... AuthorFragment
    books {
      ... BookFragment
    }
  }
}

fragment AuthorFragment on Author {
  id
  name
  email
}

fragment BookFragment on Book {
  id
  name
  date
  publisher
}



Query 1:
query GetBooks {
  books {
    ... BookFragment
  }
}

fragment BookFragment on Book {
  id
  name
  date
  publisher
}



Query 2:
query GetBooksFromBookstore {
  topSellers {
    ... BookFragment
    authors {
      ... AuthorFragment
    }
  }
}

fragment BookFragment on Book {
  id
  name
  date
  publisher
}

fragment AuthorFragment on Author {
  id
  name
  email
}
```
