Template.header.events({
  'click .icon': function () {
    event.preventDefault();
    Session.set('query', '')
  },
  'click .toggleSearch': function () {
    event.preventDefault();

    Session.set('query', '');
    $('.new-box').hide();
    $('.search-form').val('');
    $('.search-box').toggle();
    setTimeout(function(){
      $('.search-form').focus();
    }, 0);
  },
  'click .toggleNew': function () {
    event.preventDefault();

    Session.set('query', '');
    $('.search-box').hide();
    $('input[name=title]').val('');
    $('input[name=url]').val('');
    $('input[name=genre]').val('');
    $('.select-genre').val('');
    $('.select-difficulty').val('');

    $('.input-genre').hide();
    $('.select-genre').show();
    $('.new-box').toggle();
    setTimeout(function(){
      $('input[name=title]').focus();
    }, 0);
  },
  'click .optionNotYet': function () {
    Session.set('query', 'notYet');
  },
  'click .optionPurchased': function () {
    Session.set('query', 'purchased');
  }
});

Template.header.helpers({
  notYet: function () {
    var userId = Meteor.userId();

    return Books.find({ userId: userId, purchased: false }).count();
  },
  purchased: function () {
    var userId = Meteor.userId();

    return Books.find({ userId: userId, purchased: true }).count();
  }
})
