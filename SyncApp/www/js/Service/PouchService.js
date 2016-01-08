/**
 * Created by JohnMarco on 21.12.2015.
 */


angular.module("PouchService", [])

  .factory("PouchFactory", function () {
      var db;

        return {
          initDB: function (dbName) {
            db= new PouchDB(dbName);
            return db;
          },

          addTodo: function(){
          },
          deleteTodo: function () {

          }
        }
  })
