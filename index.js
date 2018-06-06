fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (const element of collection) {
          callback(element)
        } 
      } else {
          for (const key in collection) {
            callback(collection[key])
          }
        }
        return collection;
      },

    map: function(collection, callback) {
      
      const newArray = [];
      
      if (Array.isArray(collection)) {
        for (const element of collection) {
          newArray.push(callback(element))
        }
      } else {
        for (const key in collection) {
          newArray.push(callback(collection[key]))
        }
      }    
      return newArray;
    },


    reduce: function(collection, iteratee, acc) {
      
      let result = acc

      for (const element of collection) {
        result = iteratee(result, element, collection)
      }

      return result

    },

    find: function(collection, predicate){
      if (Array.isArray(collection)) {
        for (const element of collection) {
          if(predicate(element))
            return element;
          }
        }     
    },

    filter: function(collection, predicate){
      let newArray = [];

      if (Array.isArray(collection)) {
        for (const element of collection) {
          if(predicate(element))
            newArray.push(element);
          }
        }
      return newArray
    },

    size: function(collection){
      let counter = 0;

      for (const element in collection) {
        if(element)
          counter += 1;
        }

        return counter;
    },

    first: function(array, n = 1){
      let newArray = [];

      for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
      }

      if (newArray.length === 1) {
        return newArray[0]
      } else {
        return newArray;
      }
    },

    last: function(array, n = 1){
      let newArray = [];

      for (let i = array.length - 1; i > 0; i--) {
        newArray.push(array[i]);
      }

      if (n === 1) {
        newArray.reverse();
        return newArray[newArray.length - 1];
      } else {
        return newArray.reverse();
      }
    },

    compact: function(array){
      newArray = [];

      for (const element of array){
        if(Boolean(element)) 
          newArray.push(element);
        }
      return newArray;  
    },


    sortBy: function(array, iterate){
      newArray = [];

      newArray = array.sort()

      return newArray;
    },

    keys: function(){
      console.log("heloooo")
    },

    foo: function() {

      console.log("hey")
    },



    // flatten: function(target){
    //   newArray = [];

    //   if (typeof target === 'object') {
    //     for (const key in target ) {
    //       flatten(target[key]);
    //     }
    //   } else {
    //     newArray.push(element);
    //   }
      
    //   return newArray;
    // },


    keys: function(obj){
      newArray = [];
      for (const key in obj) {
        newArray.push(key);
      }
      
      return newArray;

    },


    values: function(obj){
      newArray = [];

      for (const key in obj ) {
        newArray.push(obj[key]);
      }
      
      return newArray;

    },

    
    functions: function() {

      // keys: function(){

      // }

      // values: function() {

      // },

    },

  }
})()

fi.libraryMethod()
