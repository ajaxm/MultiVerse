var ApiActions = {
  receiveAllPoems: function(poems) {
    var action = {
      actionType: PoemConstants.POEMS_RECEIVED,
      poems: poems
    };
    AppDispatcher.dispatch(action);
  }
};
