---
title: Getting Started
---

Nestjs-Query is collection of packages to make crud for `graphql` (and potentially other transports) easier.

## Why?

While working on projects in nestjs it was very easy to get up and running with typeorm and graphql however, there were many patterns that were common between the resolvers. In particular querying, sorting and paging.  

## Install 

Check out each packages getting started section 

* [@nestjs-query/query-typeorm](../typeorm/getting-started)
* [@nestjs-query/query-graphql](../graphql/getting-started)

## Packages

Nestjs-query is composed of multiple packages

* [`@nestjs-query/core`](https://github.com/doug-martin/nestjs-query/tree/master/packages/core) - Defines all interfaces and utility types implemented by the other packages.
* [`@nestjs-query/query-graphql`](https://github.com/doug-martin/nestjs-query/tree/master/packages/graphql) - Package that provides the graphql resolver and decorators for crud endpoints.
* [`@nestjs-query/query-typeorm`](https://github.com/doug-martin/nestjs-query/tree/master/packages/typeorm) - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by `@nestjs-query/query-graphql`.