var ApiUtil = {
  fetchPoems: function(fetchParams) {
    $.ajax({
      url: 'api/poems',
      type: 'GET',
      data: fetchParams,
      dataType: 'JSON',
      success: function(responseData) {
        ApiActions.receiveAllPoems(responseData, fetchParams.page);
      }
    });
  },

  fetchOnePoem: function(poemId) {
    $.ajax({
      url: 'api/poems/' + poemId,
      type: 'GET',
      dataType: 'JSON',
      success: function(responseData) {
        ApiActions.receiveOnePoem(responseData);
      }
    });
  },

  createPoem: function(poem) {
    $.ajax({
      url: 'api/poems',
      type: 'POST',
      data: poem,
      dataType: 'JSON',
      success: function(responseData) {
        ApiActions.createPoem(responseData);
      },
      error: function(errorData) {
        console.log(errorData);
      }
    });
  },

  createStanza: function(stanza) {
    $.ajax({
      url: 'api/stanzas',
      type: 'POST',
      data: stanza,
      dataType: 'JSON',
      success: function(responseData) {
        ApiActions.createStanza(responseData);
      }
    });
  },

  addFavorite: function(favParams) {
    $.ajax({
      url: 'api/favorites',
      type: 'POST',
      data: favParams,
      success: function(responseData) {
        ApiActions.receiveOnePoem(responseData);
      }
    });
  },

  logOut: function() {
    $.ajax({
      url: 'session',
      type: 'POST',
      data: {_method: 'delete'},
      success: function() {
        window.location = "session/new";
      }
    });
  }
};
