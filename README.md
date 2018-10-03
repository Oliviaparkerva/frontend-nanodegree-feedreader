# Feed Reader Testing Instructions

1. Clone repository from provided link
	https://github.com/udacity/frontend-nanodegree-feedreader
2. Open files using text editor
3. Open index.html in browser
4. Test will run when page loads. See status of test by scrolling to the bottom of the page.


# Files Functionality

## app.js functionality
	Runs the page contents pulling the feed contents from designated urls. see allFeeds array
## style.css functionality
	Page styling. Menu functionality is created using CSS

	menu-hidden uses transform to keep the menu off screen to the left, translate3d specifies where it should move once the eventlistener (onClick) is activated 

## feedreader.js functionality
### RSS Feeds test suite 
	are defined : test that the rss feed object in app.js is defined with properties with string lengths longer than zero indicating they actually exist
	
	url is defined and not empty: loops through each feed supplied to check they have a url and the string is longer than zero characters

	name is defined and not empty: loops throug each feed supplied to check that they are named and the string is longer that 0 characters

### The menu test suite
	should be hidden by default: test that when the page loads the menu is hidden. The menue is hidden using css transform and translate

	should toggle between hidden and visible when icon is clicked: When the hamburger is clicked check to see what class the body (where the menu class is defined) has. menu-hidden should be the class immediately following the eventListener gettting triggered. Then test to see that when it is clicked a second time the menu-hidden class is no longer there.

### Initial Entries test suite
	are loaded and ther is at least one feed: Test to see if after loadFeed is completed the div with class 'feed' contains one entry. We test that the length of this combination of selectors is more than 0

### New Feed Selection test suite
	loads a unique feed: after each time a feed is loaded we need to make sure it's not the same as the last feed. This is tested by accessing the h1 of each feed that is loaded and making sure the innerText isn't the same. So we expect !=== .

# Useful links

## CSS links:

### CSS Box Sizing
	https://is.gd/EPdFIl
	includes padding and border in elements total size

### CSS Asterisk Selector
	https://is.gd/KJWPQO 
	selects all elements

### List Styling
	https://is.gd/NN1brG
	Specifies all list properties in single declaration

### Hiding menu using transform and translate3d
	https://is.gd/jM5aGX
	https://is.gd/jj6gDi
	Lets you move things in 3d using x,y,z coordinates

## HTML links:

## JS links:

### hasClass
	https://is.gd/VJZT5B

### ajax.jquery
	https://is.gd/kJKs0W 
	performs an asynchronous http request

### arrow functions
	https://is.gd/JyYaaN

## Jasmine links:

	cheatsheet
	https://devhints.io/jasmine
	
	setup and teardown(before/afterEach)
	https://is.gd/u1Crwo