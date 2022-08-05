jQuery(function() {
    $('.single-option-selector').on('change', function(){
        setTimeout(function(){ 
          if($('[name="id"]').val() != "{{ product.selected_or_first_available_variant.id }}"){
            location.reload();
          }
        }, 1);
    });
  });