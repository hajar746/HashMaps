import { LinkedList, ListNode } from "./linkedlist";

function HashMap() {
  let buckets = new Array(16);
  let capacity = 0;

  //   METHOD FOR RETURNING A HASH CODE BASED ON THE KEY PROVIDED
  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }

    return hashCode;
  };

  //   MAKING SURE TO ONLY SEARCH IF INDEX IS NOT GREATER THAN LENGTH OF BUCKETS ARRAY
  const invalidIndex = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  };

  //   FUCTION FOR CHECKING THE LOAD FACTOR
  const checkLoad = () => {
    let loadFactor = Math.round((capacity / buckets.length) * 100) / 100;
    if (loadFactor >= 0.75) {
      console.log("load factor exceeded", loadFactor);
      buckets.length = 2 * buckets.length;
    }
    return loadFactor;
  };

  //   SETTING/UPDATING A VALUE IN A BUCKET/LINKED LIST
  const set = (key, value) => {
    checkLoad();
    const index = hash(key);
    // checking if index is valid, index value is empty, and if head is null to add a new bucket
    if (
      (!invalidIndex(index) && buckets[index] == undefined) ||
      buckets[index].head === null
    ) {
      capacity++;
      const bucket = LinkedList(); // make the bucket into a linked list
      buckets[index] = bucket;
      bucket.head = ListNode(key, value);
    } else {
      let pointer = buckets[index].head;
      while (pointer !== null) {
        if (pointer.key === key) {
          pointer.value = value;
        }
        if (pointer.value === value || pointer.value !== null) {
          capacity++;
          pointer.next = ListNode(key, value);
          break;
        }
        pointer = pointer.next;
      }
    }
  };

  //   GET A VALUE BASED ON THE KEY PROVIDED
  const get = (key) => {
    const index = hash(key);
    if (!invalidIndex(index)) {
      let pointer = buckets[index].head;
      while (pointer !== null) {
        if (pointer.key === key) {
          return pointer.value;
        }
        pointer = pointer.next;
      }
    } else {
      return null;
    }
  };

  // RETURNS TRUE IF THE KEY IS IN THE HASHMAP
  const has = (key) => {
    const index = hash(key);
    if (!invalidIndex(index) && buckets[index] !== undefined) {
      let pointer = buckets[index].head;
      while (pointer !== null) {
        if (pointer.key === key) {
          return true;
        }
        pointer = pointer.next;
      }
    }
    return false;
  };

  //   REMOVE A KEY AND RETURN TRUE, OTHERWISE RETURN FALSE
  const remove = (key) => {
    const index = hash(key);
    if (!invalidIndex(index)) {
      let pointer = buckets[index].head;
      if (pointer.key === key) {
        if (pointer.next === null) {
          buckets[index].head = buckets[index].head.next;
          return true;
        } else {
          buckets[index].head.value = pointer.next.value;
          buckets[index].head.next = pointer.next.next;
        }
        capacity--;
        return true;
      }
    }
    return false;
  };

  //   RETURN THE TOTAL NUMBER OF STORED KEYS IN HASHMAP
  const length = () => {
    let total = 0;
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] == undefined) total += 0;
      else {
        total++;
      }
    }
    return total;
  };

  //  CLEAR THE HASHMAP (NOT DELETE)
  const clear = () => {
    buckets = new Array(16);
    capacity = 0;
    return buckets;
  };

  //   RETURN AN ARRAY WITH ALL KEYS
  const keys = () => {
    let allKeys = [];
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        allKeys.push(bucket.head.key);
      }
    });
    return allKeys;
  };

  //   RETURN AN ARRAY WITH ALL VALUES
  const values = () => {
    let allValues = [];
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        allValues.push(bucket.head.value);
      }
    });
    return allValues;
  };

  //   RETURN AN ARRAY WITH ALL DATA ENTRIES (KEY VALUE PAIRS)
  const entries = () => {
    let allEntries = [];
    buckets.forEach((bucket) => {
      let pointer = bucket.head;
      while (pointer !== null) {
        allEntries.push([pointer.key, pointer.value]);
        pointer = pointer.next;
      }
    });
    return allEntries;
  };
  return {
    checkLoad,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

// TEST////////////////////////////
const hash = HashMap();

hash.set("Apple", "red");
hash.set("Orange", "orange");
hash.set("Banana", "yellow");
hash.set("Kiwi", "green");
hash.set("Strawberry", "pink");

console.log(hash.get("Kiwi"));
console.log(hash.has("Orange"));
console.log(hash.entries());
console.log(hash.length());
