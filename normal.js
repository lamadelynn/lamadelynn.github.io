jQuery(document).ready(function($) {

    $('#snapchat').click(function(event) {
        event.stopPropagation();
        $('.container').hide();
        $('.snap').show();
    });

    $(document).click(function() {
        $('.snap').hide();
        $('.container').show();
    });

    $('.contact a').click(function(event) {
        event.stopPropagation();
        $('.container').hide();
        $('.snap').hide();
        $('.contact-info').show();
    });

    $(document).click(function() {
        $('.contact-info').hide();
        $('.container').show();
    });
})