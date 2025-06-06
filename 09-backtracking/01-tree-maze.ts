class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function canReachLeaf(root: TreeNode | null): boolean {
  if (root == null || root.val == 0) {
    return false;
  }
  if (root.left == null && root.right == null) {
    return true;
  }
  if (canReachLeaf(root.left)) {
    return true;
  }
  if (canReachLeaf(root.right)) {
    return true;
  }
  return false;
}

function leafPath(root: TreeNode | null, path: number[]): boolean {
  if (root == null || root.val == 0) {
    return false;
  }
  path.push(root.val);

  if (root.left == null && root.right == null) {
    return true;
  }
  if (leafPath(root.left, path)) {
    return true;
  }
  if (leafPath(root.right, path)) {
    return true;
  }
  path.pop(); // Fixed: JavaScript arrays use pop(), not remove()
  return false;
}
