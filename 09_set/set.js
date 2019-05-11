/**
 * A set is a collection of unique elements.
 * Two importrant properties of Set
 *  - members of a set are unordered
 *  - no member can occur in a set more than once
 * It is useful when you want to create a data structure that consists only of unique elements.
 */

class Set {
    constructor() {
        this.dataStore = [];
    }

    /**
     * @param {T} data : member to be added to the set
     * @return {Boolean} true if the element added successfully, otherwise member already exists and return false
     */
    add = data => {
        if (~this.dataStore.indexOf(data)) {
            return false;
        } else {
            this.dataStore.push(data);
            return true;
        }
    }

    /**
     * @param {T} data : member to be removed from the set
     * @return {Boolean} true if the element is found and removed successfully, otherwise memeber is not found and return false
     */
    remove = data => {
        const pos = this.dataStore.indexOf(data);
        if (~pos) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param {T} data
     * @return {Boolean} return true if the member exists in the set, otherwise return false
     */
    contains = data => {
        // return this.dataStore.includes(data); // es7
        return !!~this.dataStore.indexOf(data);
    }

    /**
     * @param {Set} set : the set to be unioned to the current set
     * @return {Set} : combines two sets and return a new set
     */
    union = set => {
        // copy members of current set to a temp set 
        let tempSet = new Set();
        if (!!this.dataStore.length) {
            this.dataStore.forEach(x => tempSet.add(x));
        }
        // traverse the second set to add to current set
        if (!!set.dataStore.length) {
            set.dataStore.forEach(x => {
                if (!tempSet.contains(x)) {
                    tempSet.dataStore.push(x);
                }
            })
        }
        return tempSet;
    }

    /**
     * @param {Set} set : the set to be intersected with the current set
     * @return {Set} : find the common members in both sets and return a new set
     */
    intersect = set => {
        let tempSet = new Set();
        if (!!this.dataStore.length) {
            this.dataStore.forEach(x => {
                if (set.contains(x)) {
                    tempSet.add(x);
                }
            });
        }
        return tempSet;
    }

    /**
     * Determine current set is subset of set
     * @param {Set} set
     * @return {Boolean} true if current set is subset of set, otherwise is false
     */
    isSubsetOf = set => {
        if (this.dataStore.length > set.dataStore.length) {
            return false;
        } else {

            // for(let val of this.dataStore) {
            //     if(!set.contains(val)) {
            //         return false;
            //     }
            // }
            // return true;

            // is equivalent to use every in es6: if one member is not in set, whole result return false
            // Array.forEach() cannot be used since it cannot jump out the loop using neither break nor return

            return this.dataStore.every(x => set.contains(x));
        }
    }

    /**
     * @param {Set} set:
     * @return {Set} returns a set that contains those members of the current set that are not in the specified 'set'
     */
    difference = set => {
        let tempSet = new Set();
        if (!!this.dataStore.length) {
            this.dataStore.forEach(x => {
                if (!set.contains(x)) {
                    tempSet.add(x);
                }
            });
        }
        return tempSet;
    }

    /**
     * display the set element
     */
    show = () => {
        return this.dataStore;
    }
}

module.exports = Set;