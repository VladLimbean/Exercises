const dri: number[] = [];
let staff: number[] = [];
let currentIdx: number = 0;

export function getSpot(numStaff: number, skip: number) {
    constructDRIList(numStaff);
    while (dri.length < numStaff) {
        exec(skip);
    }
    return dri;
}

function exec(skip: number) {
    findNextIndex(skip);
    dri.push(staff[currentIdx]);
    remove();
}

function constructDRIList(numStaff: number) {
    for (let i = 0; i < numStaff; i++) {
        staff.push(i);
    }
}

function remove() {
    staff = staff.filter((_v, index) => currentIdx !== index);
}

function findNextIndex(skip) {
    currentIdx += skip - 1; // incremet
    while (currentIdx >= staff.length) {
        currentIdx -= staff.length; // wrap around
    }
    if (staff.length === 1) { currentIdx = 0;} // end game
}

export function reset() {
    dri.splice(0, dri.length);
    staff.splice(0, staff.length);
    currentIdx = 0;
}