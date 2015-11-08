Template.search.events({
  'keyup .search-form': function () {
    var query = $('.search-form').val();
    Session.set('query', query);
  }
});
