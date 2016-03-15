/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    var currentTitle;
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls defined', function() {
            for (i=0;i<allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });
        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names defined', function() {
            for (i=0;i<allFeeds.length;i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });
    describe('The menu', function() {
    /* Write a new test suite named "The menu" */
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var menu=$(".slide-menu"),
            body=$("body"),
            menuIcon=$(".menu-icon-link"),
            menuHidden=$(".menu-hidden");

        it ('hidden by default', function(){
            expect(body.hasClass(menuHidden.attr('class'))).toBeTruthy();
        });
         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it ('display and remove by click', function(){
            menuIcon.click();
            menuHidden=$(".menu-hidden");
            expect(body.hasClass(menuHidden.attr('class'))).toBeFalsy();
            menuIcon.click();
            menuHidden=$(".menu-hidden");
            expect(body.hasClass(menuHidden.attr('class'))).toBeTruthy();
        });
    });
    describe('Initial Entries', function() {
    /* Write a new test suite named "Initial Entries" */
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });
        it ("contain at least 1 element in the feed", function(done){
            var numEntries = $(".feed .entry").length;
            expect(numEntries).toBeGreaterThan(0);
            done();
        });
    });

    /* Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var content,
            contentNew;
        beforeEach(function(done){
            loadFeed(1, function(){
                content=$(".feed .entry").find('h2').text();
                done();
            });
        });
        beforeAll(function(done){
            loadFeed(2,function(){
                contentNew=$(".feed .entry").find('h2').text();
                done();
            });
        });
        it ("feed content changes", function(){
            console.log(content);
            console.log(contentNew);
            expect(content).not.toEqual(contentNew);
        });
    });
}());
