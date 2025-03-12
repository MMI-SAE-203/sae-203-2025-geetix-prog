/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3158625734")

  // remove field
  collection.fields.removeById("number836519531")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text836519531",
    "max": 0,
    "min": 0,
    "name": "tel_num",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3158625734")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number836519531",
    "max": null,
    "min": null,
    "name": "tel_num",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("text836519531")

  return app.save(collection)
})
