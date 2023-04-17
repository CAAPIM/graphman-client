
const fs = require('fs');
const cp = require('child_process');

module.exports = {
    graphman: function (...args) {
        args.push("--output");
        args.push("output.json");
        cp.execFileSync("graphman.bat", args);
        return JSON.parse(fs.readFileSync("output.json"));
    },

    expectArrayObject: function(obj) {
        return {
            shouldContain: function (items) {
                let expectItems = items.map(item => expect.objectContaining(item));
                expect(obj).toEqual(expect.arrayContaining(expectItems));
            }
        };
    },
    
    readFileAsJson: function (path) {
        return JSON.parse(fs.readFileSync(path));
    }
};
