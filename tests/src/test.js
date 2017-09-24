module.exports = {
    'Site Up': function(browser) {
        browser
        .url('localhost:8080')
        .assert.title('Project X')
        .end();
    },

    'TODO list': function(browser) {
        browser
        // visit main page to check if the title is "Project X"
        .url('localhost:8080')
        .assert.title('Project X')

        // click "TODO" link to visit TODO page
        // check if the title is "TODO list"
        .assert.fail('Finish the test');

        // Add "Add more tests" into a text box
        // and hit the "Add" button, now the list has "Add more tests"        

        // Add "Learn how to use git". Now the list has "Learn how to use git".

        // click "Team" link to check if the title is "Team"

        // click "TODO" link back to check if the title is "TODO"
        
        // Check the list still has "Add more tests" and "Learn how to use git"

        // remove "Add more tests" and check if "Add more tests" is gone
        
        // Remember to call the .end() method when you want to close your test
        browser.end();
    }    
}