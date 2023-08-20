# MongoDB Commands

## Shows DBs
```shell
$ show dbs
```

## Create and Use DB
```shell
$ use baseCRUD
```

## Create New Collection
```shell
$ db.createCollection('mascotas')
```

## Insert Multiples Documents
```shell
$ db.mascotas.insertMany([
    {
        name: 'Firulais',
        specie: 'Canino',
        age: 2
    },
    {
        name: 'Pepe',
        specie: 'Ave',
        age: 3
    },
    {
        name: 'Tobi',
        specie: 'Canino',
        age: 3
    }
])
```

## Consult Documents by Filter
```shell
$ db.mascotas.find({specie: 'Canino'})
```

## Count All Documents
```shell
$ db.mascotas.estimatedDocumentCount()
```