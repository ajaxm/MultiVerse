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

  fetchOnePoem: function(poem_id) {
    $.ajax({
      url: 'api/poems/' + poem_id,
      type: 'GET',
      dataType: 'JSON',
      success: function(responseData) {
        ApiActions.receiveOnePoem(responseData);
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
        ApiActions.receiveOnePoem(responseData);
      }
    });
  }
};
