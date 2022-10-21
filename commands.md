##use command in config.json for launch запуск and create database
npx sequelize-cli db:create

creating database
npx sequelize-cli model:generate --name User --attributes name:string,email:string


дфгтср ьшпкфешщт 

launch database

npx sequelize-cli db:create
or u can use database name 

when you will giv command index.js file and lounch it dont forget 
!!!!!!!! to go out from db folder, u have just be ib src folder 


In migrations:
allovNull:false --поле обязательное
unique: true --уникальность

Запуск всех миграций 
npx sequelize db:migrate запуск всех 
npx sequelize db:migrate:undo -отменить миграцию
npx sequelize db:migrate --name migratNAme запуск

Создание миграции
npx sequelize migration:generate --name migrationName
выполнение 
 npx sequelize db:migrate --name 20221020091403-addUserPhoto

 удаление
 npx sequelize db:migrate:undo --name 20221020091403-addUserPhoto


http: srquelize query interface ////it is all forr migrations f.e. createColumn
В качестве ограничений в ьщдели добавляют валидации...

Seeders
npx sequelize seed:generate --name test-users 

npx sequelize db:seed --seed 20221020094816-test-users


//use bcrypt for hashing password
npm i bcrypt 

in seeders you shoul to write:
passwordHash:bcrypt.hashSync(`admin${i}`,10)
and also don't forget to require in file

