(function(root) {
  var CHANGE_EVENT = 'CHANGE_EVENT';
  var _poems = [];
  var _resetPoems = function(poems) {
    _poems = poems;
  };

  root.PoemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _poems.slice();
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function(action) {
      switch (action.actionType) {
        case PoemConstants.POEMS_RECEIVED:
          _resetPoems(action.poems);
          PoemStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));