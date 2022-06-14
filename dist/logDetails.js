"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Linux');
logDetails(456, 'Bar');
logDetails('456', 'Bar');
logInfo(123, 'Rafa');
logInfo('123', 'Rafa');
