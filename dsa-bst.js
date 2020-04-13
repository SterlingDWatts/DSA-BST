const BinarySearchTree = require("./binarySearchTree");

/*
                          ______3______
                 _______/               \______
                1___                            4___
                    \___                            \___                    
                        2                              _6_
                                                     _/   \_
                                                    5       9
                                                           /
                                                          7     
*/

/*
                          ______E___________
                 _______/                    \______
                A                                ___S___
                                             ___/       \___                    
                                         _Q_                 _Y
                                     __/     \__         __/     
                                    I_                  U           
                                      \_                     
                                        O 
                                         \
                                          N   
*/

/*
                          ______5______
                 _______/               \______
                1___                            4___
                    \___                            \___                    
                        2                               6_
                                                          \_
                                                            9
                                                           /
                                                          7     
*/

/*
                          ______I______
                 _______/               \______
                A                                ___S___
                                             ___/       \___                    
                                         _Q_                 _Y
                                     __/     \__         __/     
                                    O_                  U           
                                      \_                     
                                        N    
*/

/*
4. this totals all values in the tree and has a runtime of O(n);
*/

const dsaBst = {
  main() {
    const BST = new BinarySearchTree();
    arr = [3, 1, 4, 6, 9, 2, 5, 7]
    for (const number of arr) {
      BST.insert(number);
    }
    console.log(BST)
  },
  height(bst) {
    if (!bst) {
      return 0
    }
    const left = 1 + this.height(bst.left);
    const right = 1 + this.height(bst.right);
    if (left > right) {
      return left;
    } else {
      return right;
    }
  },
  isBST(bst) {
    if (!bst.left && !bst.right) {
      return true
    } else if (bst.left.key > bst.key || bst.right.key < bst.key) {
      return false
    } else {
      return this.isBST(bst.left) === this.isBST(bst.right)
    }
  },
  thirdLargest(bst) {
    const largest = this.findLargest(bst)
    let secondLargest
    if (!largest.left) {
      secondLargest = largest.parent
    } else {
      secondLargest = this.findLargest(largest.left)
    }
    let third
    if (!secondLargest.left) {
      third = secondLargest.parent
    } else {
      third = this.findLargest(secondLargest.left)
    }
    return third;
  },
  findLargest(bst) {
    if (!bst.right) {
      return bst
    } else {
      return this.findLargest(bst.right)
    }
  }
}

module.exports = dsaBst;
