/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1462424745",
    "max": 0,
    "min": 0,
    "name": "synopsis",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3409974709",
    "maxSize": 0,
    "name": "synopsisz",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("text1462424745")

  // update field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3409974709",
    "maxSize": 0,
    "name": "synopsis",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
