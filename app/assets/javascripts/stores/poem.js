(function(root) {
  var CHANGE_EVENT = 'CHANGE_EVENT';
  var SELECT_EVENT = 'SELECT_EVENT';
  var BLANK_POEM = {stanzas: []};
  
  var _poems = [];
  var _singlePoem = BLANK_POEM;

  var _resetPoems = function(poems) {
    _poems = poems;
    _singlePoem = BLANK_POEM;
  };

  var _setSelectedPoem = function(poem) {
    _singlePoem = poem;
  };

  root.PoemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _poems.slice();
    },

    one: function() {
      return _singlePoem;
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    addSelectListener: function(callback) {
      this.on(SELECT_EVENT, callback);
    },

    removeSelectListener: function(callback) {
      this.removeListener(SELECT_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function(action) {
      switch (action.actionType) {
        case PoemConstants.POEMS_RECEIVED:
          _resetPoems(action.poems);
          PoemStore.emit(CHANGE_EVENT);
          break;
        case PoemConstants.ONE_POEM_RECEIVED:
          _setSelectedPoem(action.poem);
          PoemStore.emit(SELECT_EVENT);
          break;
      }
    })
  });
}(this));
