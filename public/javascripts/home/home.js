$(function() {

  window.HomePage = Backbone.View.extend({

    el : document.body,

    events : {
      'keydown #search_box':   'maybeSearch',
      'search #search_box':    'search',
      'focus #search_box':     'addFocus',
      'blur #search_box':      'removeFocus',
      'click .cancel_search':  'cancelSearch',
      'click #login_button':   'login'
    },

    initialize : function() {
      dc.ui.notifier      = new dc.ui.Notifier();
      this.box            = $('#search_box');
      this.emailInput     = $('#account_email');
      this.passwordInput  = $('#account_password');
      _.invoke([this.box, this.emailInput, this.passwordInput], 'placeholder');
    },

    login : function() {
      $('#login_form').submit();
    },

    search : function() {
      var query = this.box.val();
      if (query) window.location = '/public/#search/' + encodeURIComponent(query);
    },

    cancelSearch : function() {
      this.box.val('');
    },

    maybeSearch : function(e) {
      if (e.keyCode == 13) this.search();
    },

    addFocus : function() {
      $('#search_box_wrapper').addClass('focus');
    },

    removeFocus : function() {
      $('#search_box_wrapper').removeClass('focus');
    }

  });

  window.homepage = new HomePage();

});