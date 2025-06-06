function bfs(root: TreeNode | null): void { 
    let queue: TreeNode[] = [];
    if (root != null) {
        queue.push(root);
    }    
    let level: number = 0;
    while(queue.length > 0) {
        console.log("level " + level + ": ");
        let levelLength: number = queue.length;
        for (let i: number = 0; i < levelLength; i++) {
            let curr: TreeNode = queue.shift()!; 
            console.log(curr.val + " ");
            if(curr.left != null) {
                queue.push(curr.left);  
            }
            if(curr.right != null) {
                queue.push(curr.right);
            }  
        }
        level++;
        console.log();
    }
}