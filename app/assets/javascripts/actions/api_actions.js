var ApiActions = {
  receiveAllPoems: function(poems) {
    var action = {
      actionType: PoemConstants.POEMS_RECEIVED,
      poems: poems
    };
    AppDispatcher.dispatch(action);
  },

  receiveOnePoem: function(poem) {
    var action = {
      actionType: PoemConstants.ONE_POEM_RECEIVED,
      poem: poem
    };
    AppDispatcher.dispatch(action);
  }
};
