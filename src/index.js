import { LinkedList, ListNode } from "./linkedlist";

function HashMap() {
  let buckets = new Array(16);
  let capacity = 0;
  let loadFactor = capacity / buckets.length;

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
    if (loadFactor >= 0.75) {
      buckets.length = 2 * buckets.length;
    }
    return;
  };

  //   SETTING A VALUE IN A BUCKET/LINKED LIST
  const set = (key, value) => {
    const index = hash(key);
    if (!invalidIndex(index) && buckets[index] == undefined) {
      const bucket = LinkedList(); // make the bucket into a linked list
      buckets[index] = bucket;
      bucket.head = ListNode(key, value);
    } else {
      let pointer = buckets[index].head;
      while (pointer !== null) {
        if (pointer.data[0] === key) {
          pointer.data[1] = value;
        }
        if (pointer.data[1] === value) {
          pointer = pointer.next;
          break;
        }
        pointer = pointer.next;
      }
    }
    capacity++;
    checkLoad();
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
      let i = 0;
      while (pointer !== null) {
        if (pointer.key === key) {
          buckets[index].removeAt(i);
          capacity--;
          return true;
        }
        i++;
        pointer = pointer.next;
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
  };

  //   RETURN AN ARRAY WITH ALL KEYS
  // const keys = () => {
  //   let allKeys = [];
  //   for (let i = 0; i < buckets.length; i++) {
  //     if (buckets[i].head !== null) {
  //       let pointer = buckets[i].head;
  //       allKeys.push(pointer.key);
  //     } else {
  //       pointer = pointer.next;
  //     }
  //   }
  //   return allKeys;
  // };

  //   RETURN AN ARRAY WITH ALL VALUES
  const values = () => {
    let allValues = [];
    for (const bucket of buckets) {
      let pointer = bucket.head;
      if (pointer !== null) {
        allValues.push(pointer.value);
        pointer = pointer.next;
      }
      return;
    }
    return allValues;
  };

  //   RETURN AN ARRAY WITH ALL DATA ENTRIES (KEY VALUE PAIRS)
  const entries = () => {
    let allEntries = [];
    for (const bucket of buckets) {
      let pointer = bucket.head;
      while (pointer !== null) {
        allEntries.push([pointer.key, pointer.value]);
      }
    }
    return allEntries;
  };
  return {
    buckets,
    loadFactor,
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

const hash = HashMap();

hash.set("Apple", "red");
hash.set("Banana", "yellow");
hash.set("Kiwi", "green");

console.log(hash.length());
console.log(hash.get("Kiwi"));
console.log(hash.has("Apple"));
console.log(hash.keys());
