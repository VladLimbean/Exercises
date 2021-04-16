"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.getSpot = void 0;
var dri = [];
var staff = [];
var currentIdx = 0;
function getSpot(numStaff, skip) {
    constructDRIList(numStaff);
    while (dri.length !== numStaff) {
        exec(skip);
    }
    return dri;
}
exports.getSpot = getSpot;
function exec(skip) {
    updateIndex(skip);
    dri.push(staff[currentIdx]);
    remove();
}
function updateIndex(skip) {
    currentIdx += skip - 1; // incremet spot
    if (currentIdx >= staff.length) {
        currentIdx -= staff.length; // reset
    }
    if (staff.length === 1) {
        currentIdx = 0; // end game
    }
}
function constructDRIList(numStaff) {
    for (var i = 0; i < numStaff; i++) {
        staff.push(i);
    }
}
function remove() {
    staff = staff.filter(function (_v, index) { return currentIdx !== index; });
}
function reset() {
    dri.splice(0, dri.length);
    staff.splice(0, staff.length);
    currentIdx = 0;
}
exports.reset = reset;
console.log('running!');
getSpot(41, 3);
//# sourceMappingURL=lazyDri.js.map