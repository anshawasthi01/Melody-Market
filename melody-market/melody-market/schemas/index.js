/*
Predefined
export const schemaTypes = []    */
import product from './product';
import banner from './banner';

/*Tutorial
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
export default createSchema({
    name: 'default',
    types: schemaTypes.concat([product, banner]),
})*/
export const schemaTypes = [].concat([product, banner])


