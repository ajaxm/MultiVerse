(function(root) {
  var POEM_INDEX_CHANGE_EVENT = 'POEM_INDEX_CHANGE_EVENT';
  var POEM_SHOW_EVENT = 'POEM_SHOW_EVENT';
  var POEM_CREATION_EVENT = 'POEM_CREATION_EVENT';
  var STANZA_CREATION_EVENT = 'STANZA_CREATION_EVENT';
  var FAVORITE_EVENT = 'FAVORITE_EVENT';
  var BLANK_POEM = {stanzas: [], favoritors: []};

  var _poems = [];
  var _singlePoem = BLANK_POEM;
  var _currentPage = 1;

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
  var _setFavorite = function(favorite) {
    _singlePoem.favorited = favorite.favStatus;
    _singlePoem.fav_object = favorite.favObject;
    if (favorite.favStatus) {
      _singlePoem.favoritors.push(favorite.favoritor);
    } else {
      var favArray = _singlePoem.favoritors;
      favArray.splice(favArray.indexOf(favorite.favoritor), 1);
    }
  };

  root.PoemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _poems.slice();
    },

    one: function() {
      return _singlePoem;
    },

    currentPage: function() {
      return _currentPage;
    },

    addChangeListener: function(callback) {
      this.on(POEM_INDEX_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(POEM_INDEX_CHANGE_EVENT, callback);
    },

    addShowListener: function(callback) {
      this.on(POEM_SHOW_EVENT, callback);
    },

    removeShowListener: function(callback) {
      this.removeListener(POEM_SHOW_EVENT, callback);
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

    addFavListener: function(callback) {
      this.on(FAVORITE_EVENT, callback);
    },

    removeFavListener: function(callback) {
      this.removeListener(FAVORITE_EVENT, callback);
    },

    processReceivedPoems: function(poems, page) {
      _setCurrentPage(page);
      if (page === 1) {
        _resetPoems(poems);
      } else {
        _loadMorePoems(poems);
      }
    },

    dispatcherId: AppDispatcher.register(function(action) {
      switch (action.actionType) {
        case PoemConstants.POEMS_RECEIVED:
          PoemStore.processReceivedPoems(action.poems, action.page);
          PoemStore.emit(POEM_INDEX_CHANGE_EVENT);
          break;
        case PoemConstants.ONE_POEM_RECEIVED:
          _setSelectedPoem(action.poem);
          PoemStore.emit(POEM_SHOW_EVENT);
          break;
        case PoemConstants.POEM_CREATED:
          PoemStore.emit(POEM_CREATION_EVENT, action.poem);
          break;
        case PoemConstants.STANZA_CREATED:
          _setSelectedPoem(action.poem);
          PoemStore.emit(STANZA_CREATION_EVENT);
          break;
        case PoemConstants.POEM_FAVORITED:
          _setFavorite(action.favorite);
          PoemStore.emit(FAVORITE_EVENT);
          break;
      }
    })
  });
}(this));
