// when hamburger menu icon is clicked, the hamburger icon hids, the exit icon shows and the menu-container shows slowly
function showMenu() {
    $HAMBURGER.click(function () {
        $EXIT_ICON.show();
        $(this).hide();
        $(".my-logo").hide("slow");
        $MENU_CONTAINER.show("slow");
    });
}
// when exit icon is clicked, the exit icon hids, the hamburger menu shows, and the menu-container hids slowly
function hideMenu() {
    $EXIT_ICON.click(function () {
        $HAMBURGER.show();
        $(this).hide();
        $(".my-logo").show("slow");
        $MENU_CONTAINER.hide("slow");
    });
}

function addAboutListeners() {
    showMenu();
    hideMenu();
}


// allows document to load before functions are called
$(document).ready(function() {
    addAboutListeners();
});