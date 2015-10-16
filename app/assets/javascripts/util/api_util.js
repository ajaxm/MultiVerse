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

  createPoem: function(poem) {
    $.ajax({
      url: 'api/poems',
      type: 'POST',
      data: poem,
      dataType: 'JSON',
      success: function(responseData) {
        ApiActions.receiveOnePoem(responseData);
        /// ApiUtil.fetchAllPoems(:incomplete) here if poem creation
        /// redirects to home page.
        /// Otherwise, need some way to reference new poem's id and
        /// redirect to its show page.
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
