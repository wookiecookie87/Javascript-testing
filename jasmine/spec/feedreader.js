$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         })

         it('are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


  
    describe("The menu", function(){
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
      
        it('is hiding and showing on click', function(){
            var classExist = $('body').hasClass('menu-hidden');
            $('.menu-icon-link').click();
            var newClassExist = $('body').hasClass('menu-hidden');
            expect(newClassExist).not.toEqual(classExist);
            $('.menu-icon-link').click();
            classExist = $('body').hasClass('menu-hidden');
            expect(newClassExist).not.toEqual(classExist);
        });
    });      

  
   describe("Initial Entries", function(){
        
         beforeEach(function(done){
             loadFeed(0, done);
         });

         it('gets ajax data', function() {
            var len = $('.entry').length;
            expect(len).toBeGreaterThan(0);
         });
    });
  
   describe("New Feed Selection", function(){
        var original = [];    
        var changed = [];

        beforeEach(function(done){
            loadFeed(0, function(){
                console.log("first async");
                original = $('.entry');
                done();
            });

        });

        beforeEach(function(done){
            loadFeed(3, function(){
                console.log("second async");
                changed = $('.entry');
                done();
            });
        });

        it('actually changes content when a new feed is loaded', function() { 
            expect(original).not.toEqual(changed);
        });
    });    
}());
