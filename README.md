Open index.html in the broser.

The following tests are provided:
1. test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Test suite named "The menu".
10. Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
13. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
