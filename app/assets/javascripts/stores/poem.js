(function(root) {
  var CHANGE_EVENT = 'CHANGE_EVENT';
  var SHOW_EVENT = 'SHOW_EVENT';
  var POEM_CREATION_EVENT = 'POEM_CREATION_EVENT';
  var STANZA_CREATION_EVENT = 'STANZA_CREATION_EVENT';
  var SCROLL_EVENT = 'SCROLL_EVENT';
  var BLANK_POEM = {stanzas: []};

  var _poems = [];
  var _singlePoem = BLANK_POEM;
  var _currentPage = 1;
  var _scrollEnd = false;

  var _resetPoems = function(poems) {
    _poems = poems;
    _singlePoem = BLANK_POEM;
  };

  var _loadMorePoems = function(poems) {
    _poems = _poems.concat(poems);
  };

  var _setSelectedPoem = function(poem) {
    _singlePoem = poem;
  };

  var _setCurrentPage = function(page) {
    _currentPage = page;
  };

  var _setScrollEnd = function(bool) {
    _scrollEnd = bool;
  };

  root.PoemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _poems.slice();
    },

    // involvingCurrentUser: function() {
    //   return this.all().filter(function(poem) {
    //     return poem.involves_current_user;
    //   });
    // },
    //
    // notInvolvingCurrentUser: function() {
    //   return this.all().filter(function(poem) {
    //     return !poem.involves_current_user;
    //   });
    // },

    one: function() {
      return _singlePoem;
    },

    currentPage: function() {
      return _currentPage;
    },

    scrollEnd: function() {
      return _scrollEnd;
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

    processReceivedPoems: function(poems, page) {
      _setCurrentPage(page);
      if (page === 1) {
        _resetPoems(poems);
      } else {
        _loadMorePoems(poems);
      }
      if (poems.length === 0) {
        _setScrollEnd(true);
      }
    },

    dispatcherId: AppDispatcher.register(function(action) {
      switch (action.actionType) {
        case PoemConstants.POEMS_RECEIVED:
          PoemStore.processReceivedPoems(action.poems, action.page);
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
