/**
 * Contains all GraphQL queries and mutations for Database operations
 **/

const Activity = require('../models/Activity.js');
const Supplier = require('../models/Supplier.js');

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean , 
    GraphQLFloat, 
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

// Supplier Type
const SupplierType = new GraphQLObjectType({
    name : 'Supplier',
    fields: ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString},
        zip: { type: GraphQLString},
        city: { type: GraphQLString},
        country: { type: GraphQLString}
    })
});

// Activity Type
const ActivityType = new GraphQLObjectType({
    name : 'Activity',
    fields: ({
        id: { type: GraphQLID },
        title: { type: GraphQLString},
        currency: { type: GraphQLString},
        price: { type: GraphQLInt },
        rating: { type: GraphQLFloat},
        specialOffer: { type: GraphQLBoolean},
        supplierId : { type: GraphQLID },
        supplier : {
            type: SupplierType,
            resolve(parent, args) {
                return Supplier.findById(parent.supplierId);
            }
        }
    })
});

/* Root Query 
    1. activities : query to fetch all activities
    2. activity : query to fetch one activity by ID
    3. suppliers : query to fetch all suppliers
    4. supplier : query to fetch one supplier by ID
*/
const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        activities : {
            type: new GraphQLList(ActivityType),
            resolve(parent, args) {
                return Activity.find();
            }
        },
        activity : {
            type: ActivityType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args) {
                return Activity.findById(args.id);
            }
        },
        suppliers : {
            type: new GraphQLList(SupplierType),
            resolve(parent, args) {
                // mongoose function to return all files
                return Supplier.find();
            }
        },
        supplier : {
            type: SupplierType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args) {
                return Supplier.findById(args.id);
            }
        }
    }
});


/* Mutation
    1. addSupplier : mutation to add a new supplier
    2. deleteSupplier : mutation to delete a supplier by ID
    3. addActivity : mutation to add a new activity
    4. deleteActivity : mutation to delete an activity by ID
    5. updateActivity : mutation to update an activity
*/
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addSupplier : {
            type: SupplierType,
            args: {
                name : { type: GraphQLNonNull(GraphQLString) },
                address : { type: GraphQLNonNull(GraphQLString) },
                zip : { type: GraphQLNonNull(GraphQLString) },
                city : { type: GraphQLNonNull(GraphQLString) },
                country : { type: GraphQLNonNull(GraphQLString) },
            },
            resolve (parent, args) {
                const supplier = new Supplier({
                    name : args.name,
                    address : args.address,
                    zip : args.zip,
                    city: args.city,
                    country: args.country
                });
                return supplier.save();
            }
        },
        deleteSupplier : {
            type: SupplierType,
            args: {
                id : { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent,args) {
                return Supplier.findByIdAndRemove(args.id);
            }
        },
        addActivity : {
            type: ActivityType,
            args: {
                title : { type: GraphQLNonNull(GraphQLString) },
                currency : { type: GraphQLNonNull(GraphQLString) },
                price : { type: GraphQLNonNull(GraphQLInt) },
                rating : { type: GraphQLNonNull(GraphQLFloat) },
                specialOffer : { type: GraphQLNonNull(GraphQLBoolean) },
                supplierId :  { type: GraphQLNonNull(GraphQLID) },
            },
            resolve (parent, args) {
                const activity = new Activity({
                    title : args.title,
                    currency : args.currency,
                    price : args.price,
                    rating : args.rating,
                    specialOffer : args.specialOffer,
                    supplierId :  args.supplierId,
                });
                return activity.save();
                
            }
        },
        deleteActivity : {
            type: ActivityType,
            args: {
                id : { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent,args) {
                return Activity.findByIdAndRemove(args.id);
            } 
        },
        updateActivity : {
            type: ActivityType,
            args: {
                id : { type: GraphQLNonNull(GraphQLString) },
                title : { type: GraphQLString },
                currency : { type: GraphQLString },
                price : { type: GraphQLInt },
                rating : { type: GraphQLFloat },
                specialOffer : { type: GraphQLBoolean },
                supplierId :  { type: GraphQLID },
            }, 
            resolve (parent, args) {
                return Activity.findByIdAndUpdate(
                    args.id,
                    {
                        $set : {
                            title : args.title,
                            currency : args.currency,
                            price : args.price,
                            rating : args.rating,
                            specialOffer : args.specialOffer,
                            supplierId :  args.supplierId,
                        }
                    },
                    { new : true }
                );
            },
        },
        updateSupplier : {
            type: SupplierType,
            args: {
                id : { type: GraphQLNonNull(GraphQLString) },
                name : { type: GraphQLString },
                address : { type: GraphQLString },
                zip : { type: GraphQLString },
                city : { type: GraphQLString },
                country : { type: GraphQLString },
            }, 
            resolve (parent, args) {
                return Supplier.findByIdAndUpdate(
                    args.id,
                    {
                        $set : {
                            name : args.name,
                            address : args.address,
                            zip : args.zip,
                            city : args.city,
                            country :  args.country,
                        }
                    },
                    { new : true }
                );
            },
        }
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});
