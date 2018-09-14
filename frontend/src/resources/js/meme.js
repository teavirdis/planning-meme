import $ from "jquery";

jQuery('#mainNavBar').hide();
jQuery('#storyArea').hide();
$("[name='collapseHref']").click(function(){
    $(".collapse").collapse('hide');
    jQuery('#mainNavBar').hide();
    jQuery('#boardArea').show();
    jQuery('#storyArea').hide();
    jQuery('#loginNavBar').show();
});
function goFromBoardToStory(){
    jQuery('#storyArea').show();
    jQuery('#boardArea').hide();
}

function goFromStoryToBoard(){
    jQuery('#storyArea').hide();
    jQuery('#boardArea').show();
}

$("[name='collapseLogin']").click( function(e) {
    jQuery('.collapse').collapse('hide');
    jQuery('#loginNavBar').hide();
    jQuery('#boardArea').show();
    jQuery('#storyArea').hide();
    jQuery('#mainNavBar').show();
});