var ApiUtil = {
  fetchPoems: function(status) {
    $.ajax({
      url: 'api/poems',
      type: 'GET',
      data: status,
      dataType: 'JSON',
      success: function(responseData) {
        ApiActions.receiveAllPoems(responseData);
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
  }
};
