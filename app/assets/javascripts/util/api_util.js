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
  }
};
