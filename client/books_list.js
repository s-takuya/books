Template.booksList.events({
  'click #insertSeedData': function () {
    var userId = Meteor.userId();

    Meteor.call('insertSeedData', userId, function (error, result) {
      if (error) return alert('Error: ' + error.error);
    });
  },
  'click #addBook': function () {
    $('.toggleNew').click();
  }
});

Template.booksList.helpers({
  books: function () {
    if (Meteor.user()) {
      Session.setDefault('query', '');
      var userId = Meteor.userId();
      var query = Session.get('query');

      if (query == '') {
        return Books.find({ userId: userId },
                          { sort: { purchased: 1, difficulty: 1, genre: 1 } });

      } else if (query == 'notYet') {
        return Books.find({ userId: userId, purchased: false },
                          { sort: { purchased: 1, difficulty: 1, genre: 1 } });

      } else if (query == 'purchased') {
        return Books.find({ userId: userId, purchased: true },
                          { sort: { purchased: 1, difficulty: 1, genre: 1 } });

      } else {
        return Books.find({ userId: userId, title: new RegExp(query) },
                          { sort: { purchased: 1, difficulty: 1, genre: 1 } });

      }
    }
  },
  haveData: function () {
    if (Meteor.user()) {
      var userId = Meteor.userId();
      var countData = Books.find({ userId: userId }).count();

      return countData > 0 ? true : false
    }
  }
});
