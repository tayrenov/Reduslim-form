function formatState (state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "img";
    var $state = $(
      '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '-icon.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
  }
  
  $("#leng").select2({
    templateResult: formatState,
    templateSelection: formatState,
    minimumResultsForSearch: -1,
    escapeMarkup: function(m) { return m; }
  });