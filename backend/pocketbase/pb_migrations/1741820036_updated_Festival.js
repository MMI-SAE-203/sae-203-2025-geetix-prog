/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3158625734")

  // remove field
  collection.fields.removeById("text2469427563")

  // remove field
  collection.fields.removeById("text890398907")

  // remove field
  collection.fields.removeById("text3969746757")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number2469427563",
    "max": null,
    "min": null,
    "name": "prix_billet",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number3969746757",
    "max": null,
    "min": null,
    "name": "reduc_etu",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number890398907",
    "max": null,
    "min": null,
    "name": "abonnement",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3158625734")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2469427563",
    "max": 0,
    "min": 0,
    "name": "prix_billet",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text890398907",
    "max": 0,
    "min": 0,
    "name": "abonnement",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3969746757",
    "max": 0,
    "min": 0,
    "name": "reduc_etu",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("number2469427563")

  // remove field
  collection.fields.removeById("number3969746757")

  // remove field
  collection.fields.removeById("number890398907")

  return app.save(collection)
})
