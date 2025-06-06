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

function inorder(root: TreeNode | null): void {
  if (root == null) {
    return;
  }
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

function preorder(root: TreeNode | null): void {
  if (root == null) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

function postorder(root: TreeNode | null): void {
  if (root == null) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
