var $EXIT_ICON = $('[data-image-role="exit-container"]');
var $HAMBURGER = $('[data-image-role="hamburger"]');
var $MENU_CONTAINER = $('[data-text-role="menu-container"]');


// when hamburger menu icon is clicked, the hamburger icon hids, the exit icon shows and the menu-container shows slowly
function showMenu() {
    $HAMBURGER.click(function () {
        $EXIT_ICON.show();
        $(this).hide();
        $(".hamburger").hide("slow");
        $MENU_CONTAINER.show("slow");
    });
}
// when exit icon is clicked, the exit icon hids, the hamburger menu shows, and the menu-container hides slowly
function hideMenu() {
    $EXIT_ICON.click(function () {
        $HAMBURGER.show();
        $(this).hide();
        $(".exit-container").show("slow");
        $MENU_CONTAINER.hide("slow");
    });
}

function addPortfolioListeners() {
    showMenu();
    hideMenu();
}


// allows document to load before functions are called
$(document).ready(function() {
    addPortfolioListeners();
});