Template.bookItem.helpers({
  purchased: function () {
    return this.purchased ? 'Done' : 'Not yet'
  },
  purchasedStatusBtn: function () {
    return this.purchased ? 'btn-success' : 'btn-primary'
  },
  difficultyRate: function () {
    var rate = this.difficulty

    if (rate == 0) {
      rate = '☆'
    } else {
      temporaryRate = []
      for (i=0; i<rate; i++) {
        temporaryRate.push('★');
      }
      rate = temporaryRate.join('')
    }

    return rate
  }
});

Template.bookItem.events({
  'click .toggleStatus': function () {
    var book = Books.findOne(this._id);

    Books.update(this._id, { $set: { purchased: ! this.purchased} });
  },
  'click .deleteBook': function () {
    event.preventDefault();

     if ( confirm('Are you sure?') == true ){
       Books.remove({ _id: this._id });
     }
  }
});
