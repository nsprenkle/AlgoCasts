// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate (node, min = null, max = null) {
  // I should not be out of bounds
  if ((max && node.data > max) || (min && node.data < min)) { return false }

  // if there are nodes to the left
  // make sure they're not greater than the node, and keep traversing
  if (node.left) {
    if (node.left.data > node.data || !validate(node.left, min, node.data)) {
      return false
    }
  }

  // if there are nodes to the right
  // make sure they're not greater than the node, and keep traversing
  if (node.right) {
    if (node.right.data < node.data || !validate(node.right, node.data, max)) {
      return false
    }
  }

  return true
}

module.exports = validate
