(function(root) {
  var CHANGE_EVENT = 'CHANGE_EVENT';
  var SHOW_EVENT = 'SHOW_EVENT';
  var POEM_CREATION_EVENT = 'POEM_CREATION_EVENT';
  var STANZA_CREATION_EVENT = 'STANZA_CREATION_EVENT';
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

    involvingCurrentUser: function() {
      /// QUESTIONS
      /// involves_current_user vs involvesCurrentUser
      return this.all().filter(function(poem) {
        return poem.involves_current_user;
      });
    },

    notInvolvingCurrentUser: function() {
      return this.all().filter(function(poem) {
        return !poem.involves_current_user;
      });
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
      this.on(POEM_CREATION_EVENT, callback);
    },

    removeCreationListener: function(callback) {
      this.removeListener(POEM_CREATION_EVENT, callback);
    },

    addStanzaListener: function(callback) {
      this.on(STANZA_CREATION_EVENT, callback);
    },

    removeStanzaListener: function(callback) {
      this.removeListener(STANZA_CREATION_EVENT, callback);
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
          PoemStore.emit(POEM_CREATION_EVENT, action.poem);
          break;
        case PoemConstants.STANZA_CREATED:
          _setSelectedPoem(action.poem);
          PoemStore.emit(STANZA_CREATION_EVENT);
          break;
      }
    })
  });
}(this));
