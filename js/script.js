$(document).ready(function () {
  // Tab Switching Logic
  $('#myTabs .nav-link').click(function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Remove active class from all tabs and tab panes
    $('#myTabs .nav-link').removeClass('active');
    $('.tab-pane').removeClass('active');

    // Add active class to the clicked tab and corresponding tab pane
    $(this).addClass('active');
    const target = $(this).data('target');
    $(target).addClass('active');
  });
});
