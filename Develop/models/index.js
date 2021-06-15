// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {foreignKey: 'category_id'});
// Categories have many Products
Category.hasMany(Category, {foreignKey: 'products_id'});
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Category, {through:ProductTag, foreignKey: 'tag_id'});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Category, {through: ProductTag, foreignKey: 'product_id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
