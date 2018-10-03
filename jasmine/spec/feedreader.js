
//Everything goes inside the $() function so that it all runs after the DOM is loaded to avoid elements not existing when called upon throughout our testing suites
$(function(){

    //RSS Feeds test suite defines feeds and makes sure they exist within the app.js file
        //First Test- are the feeds defined and is there at least one. Check the allFeeds array, this shapes our expectation
        //Second Test has a url property been given to each feed and is it populated.
        //Third Test has a name property been given to each feed and is it populated.
        //TODO: Make sure urls aren't broken links
    describe('RSS Feeds', function(){
        it('are defined', function (){
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('url is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        it('name is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    //The menu test suite
        //FirstTest: is the menu hidden by default? Expect it to have menu-hidden as its class
        //SecondTest: does clicking the menu hamburger change between hidden and visible? Expect click eventListener to toggle between these two states
            //first click should disable the default class menu hidden
    describe('The menu', function(){
        it('should be hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);    
         });
        it('should toggle between hidden and visible when the icon is clicked', function(){
            $('.menu-icon-link').click(); 
                expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click(); 
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    //Initial Entries test suite
        //First Test: After the loadFeed function finishes has at least one feed been added to the container?
            //Use the beforeEach function to ensure that loadFeed has completed prior to it and expect. Use done as the cb function for loadFeed
            //feed and entry classes select the individual entries within the feeds. The number of these just needs to be more than 0.
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0,done);
        });
        
        it('are loaded and there is at least one feed', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    //New Feed Selection test suite
        //Test: after a new feed is loaded have the contents changed?
            //Compare one feed to another after loadFeed has been completed twice.
                // the initial loadfeed and then the load feed that gives us a new feed to read
            //before each it/expecation of having two unique feeds. save each feed loaded into a seperate variable. The expectation is that these variables aren't the same thing.
                //loadFeed 0, save anything unique on the page as your first variable (h1.innerText)
                //using nested variables to ensure the first feed loads before the second feed so that our variables are unique vs reading the same exact element from the DOM
    describe('New Feed Selection', function() {
            
        let firstFeed,
            secondFeed;

        beforeEach(function(done) {
            loadFeed(0, function(){
                firstFeed = document.querySelector('h1').innerText;
                loadFeed(1, function(){
                    secondFeed = document.querySelector('h1').innerText;
                });
                done();
            });
        });

        it('loads a unique feed', function(){
            expect(firstFeed === secondFeed).toBe(false);
        });
    });

}());