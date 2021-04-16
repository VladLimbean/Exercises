const dri: number[] = [];
let staff: number[] = [];
let currentIdx: number = 0;

export function getSpot(numStaff: number, skip: number) {
    constructDRIList(numStaff);
    while (dri.length !== numStaff) {
        exec(skip);
    }
    return dri;
}

function exec(skip: number) {
    updateIndex(skip);
    dri.push(staff[currentIdx]);
    remove();
}

function updateIndex(skip: number) {
    currentIdx += skip - 1; // incremet spot
    
    if (currentIdx >= staff.length) {
        currentIdx -= staff.length; // reset
    }

    if (staff.length === 1) {
        currentIdx = 0; // end game
    }
}

function constructDRIList(numStaff: number) {
    for (let i = 0; i < numStaff; i++) {
        staff.push(i);
    }
}

function remove() {
    staff = staff.filter((_v, index) => currentIdx !== index);
}

export function reset() {
    dri.splice(0, dri.length);
    staff.splice(0, staff.length);
    currentIdx = 0;
}

console.log('running!');
getSpot(41, 3)