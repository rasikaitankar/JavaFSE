const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt
  } = require('graphql')

  
  const fetchDevelopers  = () => {
    return fetch("http://localhost:8080/developers/all")
    .then(response=>response.json())
    .then(devs=>devs)
  }
  
  const developer = new GraphQLObjectType({
    name: 'Developer',
    fields: {
      id: {
        type: GraphQLString
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      favoriteLanguage: {
        type: GraphQLString
      },
      yearStarted: {
        type: GraphQLInt
      }
    }
  })
  
  module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        developers: {
          type: new GraphQLList(developer),
          resolve: () => developers  
        },
        developer: {
          type: developer,
          args: {
            id: {
              type: GraphQLString
            }
          },
          resolve: (r, {id}) => fetchDevelopers().then(devs=>devs.find(dev=>dev.id == id))
        },
        devsByFirstName: {
          type: new GraphQLList(developer),
          args: {
            name: {
              type: GraphQLString
            }      
          },
          resolve: (r, {name}) =>  fetchDevelopers().then(devs=>devs.filter(dev=> dev.firstName && dev.firstName.includes(name)))
        },
        devsByLastName: {
          type: new GraphQLList(developer),
          args: {
            name: {
              type: GraphQLString
            }      
          },
          resolve: (r, {name}) => fetchDevelopers().then(devs=>devs.filter(dev=>dev.lastName && dev.lastName.includes(name)))
        },
        devsByFavLang: {
          type: new GraphQLList(developer),
          args: {
            language: {
              type: GraphQLString
            }      
          },
          resolve: (r, {language}) => fetchDevelopers().then(devs=>devs.filter(dev=>dev.favoriteLanguage && dev.favoriteLanguage == language))
        },
        devsByYearStarted: {
          type: new GraphQLList(developer),
          args: {
            year: {
              type: GraphQLInt
            }      
          },
          resolve: (r, {year}) => fetchDevelopers().then(devs=>devs.filter(dev=>dev.yearStarted && dev.yearStarted == year))
        },
      }
    })
  })