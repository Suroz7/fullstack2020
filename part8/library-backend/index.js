const { ApolloServer,UserInputError, gql } = require('apollo-server')
const { v1: uuid } = require('uuid')
const mongoose = require('mongoose')
require('dotenv').config()
const Book = require('./models/BookModel')
const Author = require('./models/AuthorModel')
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
.then(()=>{
  console.log('connected to Mongo DB')
})
.catch((error)=>{
  console.log(error.message)
})
const typeDefs = gql`
  type Book {
    title:String!
    published:Int!
    author:Author!
    id:ID!
    genres:[String!]
  }
  type Query {
    bookCount:Int!
    allBooks(author:String,genre:String): [Book!]!
  }
  type Mutation {
    addBook(
      title:String!
      author:String!
      published:Int
      genres:[String!]!
    ):Book
    editAuthor(name:String,setBornTo:Int):Author
  }
  type Author {
    name:String!
    id:ID!
    born:Int
    bookCount:Int
  }
  type Query{
    authorCount:Int!
    allAuthor:[Author!]!
  }
`

const resolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    authorCount : () => Author.collection.countDocuments(),
    allBooks : async  (root,args) => {
      if(!args.author && !args.genre){
        const allbook = await  Book.find({}).populate('author')
        console.log(allbook)
        return allbook
      }
      if(args.author&&!args.genre){
        return books.filter(book=>book.author===args.author)
      }
      if(args.genre &&!args.author){
        const books= await Book.find({})
        return books.filter(book => {
         return book.genres.find(genre => genre===args.genre)
        })
      }
      const newlist =  books.filter(book => {
        if(book.author===args.author){
         if(book.genres.find(genre => genre===args.genre)){
           return book
         }
        }
      })
      return newlist
    },
    allAuthor :async  () => { 
      const allauthor = await Author.find({})
      return allauthor
  }},
  Mutation:{
    addBook:async (root,args) => {
      const newbooks = {...args}
      const findAuthor = await Author.findOne({name: args.author})
      if(findAuthor){
        const books = new Book({...args,author:findAuthor})
        try {
         const res =  await books.save()
         console.log(res)
         return res
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs:args
          })
        }
      }
      const addedAuthor = new Author({
        "name":args.author
      })
      try {
        await addedAuthor.save()
        const findAuthor = await Author.findOne({name: args.author})
        const books = new Book({...args,author:findAuthor})
        const res = await books.save()
        console.log(res,'res')
      } catch (error) {
        console.log(error)
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
      
      return newbooks

    },
    editAuthor:async (root,args) => {
      const whose = await Author.findOne({name:args.name})
      console.log(whose)
      if(!whose){
        return null
      }
      whose.born = args.setBornTo
      await whose.save()
      return whose
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
