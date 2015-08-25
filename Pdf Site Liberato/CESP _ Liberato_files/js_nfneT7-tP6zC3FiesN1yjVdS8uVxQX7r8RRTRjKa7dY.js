// $Id$

(function($) {
  Drupal.behaviors.BlockTab = {
    attach: function() {
      $('.block_tab-block').hide();
      $('.block_tab-block:first', '.block_tab-blocks').show();

      $('.block_tab-title').click(function() {
        var region = $(this).parent().attr('region');
        var id  = $(this).attr('id').replace(/block_tab-title-/, '', 'gi');

        $('[region="' + region + '"] .block_tab-block').hide();
        $('[region="' + region + '"] .block_tab-title').removeClass('active');

        $('[region="' + region + '"] #block_tab-block-' + id).fadeIn('fast');
        $(this).addClass('active');
      });
    }
  }
})(jQuery)
;

(function($){ Drupal.behaviors.liberato = {
		attach: function(context, settings){
			$(".view-pop-up-banner a").once(function() {
        		$(".view-pop-up-banner a").trigger('click');
    		});
		}
	}
})(jQuery);
/*
// Abrir popup na capa
$("document").ready(function() {
    setTimeout(function() {
        $("#block-views-pop-up-banner-block a.colorbox-inline").trigger('click');
    },10);
});

&jQuery(function($){
	$(".colorbox-inline").trigger("click");
}*/;
