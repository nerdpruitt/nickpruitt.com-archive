(function($){
	var methods = {
		init : function() {
			return this.each(function() {
				// set variables
				var $this = $(this);
				var placeholder = $this.attr('placeholder');
				
				// if no value is set, set it to the placeholder text
				// then, setup the rest of the functionality
				// we'll toggle the 'placeholder' class on the input for styling
				if ($this.val() === '') {
					$this.val(placeholder).addClass('placeholder');
					
					// remove the placeholder text
					$this.focus(function() {
						if ($this.val() === placeholder) {
							$this.val('').removeClass('placeholder');
						}
						alert("focus");
					})
					// add the placeholder text back if there isn't anything in the field
					.blur(function() {
						if ($this.val() === '') {
							$this.val(placeholder).addClass('placeholder');
						}
					});

					// remove the field text if it is the same as the placeholder so that validation scripts will run properly
					$this.closest('form').submit(function() {
						if ($this.val() === placeholder) {
							$this.val('');
						}
					});
				}
			});	
		}
	};

	$.fn.lwPlaceholder = function(method) {
		// Method calling logic
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.lwPlaceholder');
		}    
	};
})(jQuery);


jQuery(document).ready(function() {
	if (!Modernizr.input.placeholder) { jQuery('input[placeholder]').lwPlaceholder(); }
});