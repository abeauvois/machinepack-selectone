module.exports = {


  friendlyName: 'select',


  description: 'select item in a list',


  extendedDescription: '',


  inputs: {
    array: {
      typeclass: 'array',
      friendlyName: 'In array',
      description: 'The array to select',
      required: true
    },
    index: {
      description: 'The index of the item in array is selected',
      typeclass: '*',
      required: true
    }

  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Returns the selected item in array'
      // getExample: function(inputs, env) {
      //   if (Array.isArray(inputs.array) && (inputs.array.length>inputs.index)) {
      //     return [inputs.array[inputs.index]];
      //   }
      // }
    },

  },

  fn: function (inputs,exits) {
    var result;
    if (isNaN(inputs.index)) return exits.error();
    inputs.index = inputs.index * 1.0;
    if (!Array.isArray(inputs.array)) result=JSON.parse(inputs.array)[inputs.index];
        else result=inputs.array[inputs.index];

    return exits.success(result);
  }

};
