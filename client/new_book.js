Template.newBook.events({
  'click #createBook': function () {
    var userId = Meteor.userId();
    var title = $('input[name=title]').val();
    var url = $('input[name=url]').val();
    var genre = $('.select-genre').val();
    var difficulty = parseInt($('.select-difficulty').val());
    if ($('input[name=genre]').val() != '' || genre == 'addGenre') {
      var genre = $('input[name=genre]').val();
    }

    var newData = Books.insert({
                    title: title,
                    url: url,
                    genre: genre,
                    difficulty: difficulty,
                    purchased: false,
                    createdAt: new Date(),
                    userId: userId
                  });
    $('.toggleNew').click();
    // $('#' + newData).addClass('highLight');
    $("html,body").animate({scrollTop:$('#' + newData).offset().top});
  },
  'change .select-genre': function () {
    var selectGenre = $('.select-genre');
    var value = selectGenre.val();
    if (value == 'addGenre') {
      selectGenre.hide();
      $('.input-genre').show();
    }
  }
});

Template.newBook.helpers({
  genres: function () {
    var userId = Meteor.userId();
    var genres = Books.find({ userId: userId });

    genresArray = []
    genres.forEach(function (data) {
      genresArray.push(data.genre);
    });

    genres = jQuery.unique(genresArray);
    return genres
  }
});
