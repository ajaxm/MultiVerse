(function(root) {
  var CHANGE_EVENT = 'CHANGE_EVENT';
  var SHOW_EVENT = 'SHOW_EVENT';
  var CREATION_EVENT = 'CREATION_EVENT';
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

    addShowListener: function(callback) {
      this.on(SHOW_EVENT, callback);
    },

    removeShowListener: function(callback) {
      this.removeListener(SHOW_EVENT, callback);
    },

    addCreationListener: function(callback) {
      this.on(CREATION_EVENT, callback);
    },

    removeCreationListener: function(callback) {
      this.removeListener(CREATION_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function(action) {
      switch (action.actionType) {
        case PoemConstants.POEMS_RECEIVED:
          _resetPoems(action.poems);
          PoemStore.emit(CHANGE_EVENT);
          break;
        case PoemConstants.ONE_POEM_RECEIVED:
          _setSelectedPoem(action.poem);
          PoemStore.emit(SHOW_EVENT);
          break;
        case PoemConstants.POEM_CREATED:
          PoemStore.emit(CREATION_EVENT);
          break;
      }
    })
  });
}(this));
