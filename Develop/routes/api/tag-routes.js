const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({include: {
    model:Product
  }}).then(tagData => res.json(tagData))
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({where: {
    id:req.params.id
  },include: {
    model:Product
  }}).then(tagData => res.json(tagData))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({tag_name:req.body.tag_name})
  .then(tagData => res.json(tagData))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({tag_name:req.body.tag_name},
    {where: {id:req.params.id}})
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({message: 'ID Error'})
        return;
      }
      res.json(tagdata);
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{id:req.params.id}})
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({message: 'No tag found'})
      return;
    }
    res.json(tagData);
  })
});

module.exports = router;
