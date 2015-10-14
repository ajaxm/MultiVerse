var ApiUtil = {
  fetchPoems: function(status) {
    $.ajax({
      url: 'api/poems',
      type: 'GET',
      dataType: 'json',
      data: status,
      success: function(responseData) {
        ApiActions.receiveAllPoems(responseData);
      }
    });
  },

  fetchOnePoem: function(poem_id) {
    $.ajax({
      url: 'api/poems/' + poem_id,
      type: 'GET',
      dataType: 'json',
      success: function(responseData) {
        ApiActions.receiveOnePoem(responseData);
      }
    });
  }
};
