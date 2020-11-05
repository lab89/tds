class TreeNode<T>{
    public key: T = null;
    public left: TreeNode<T> = null;
    public right: TreeNode<T> = null;
    constructor(key: T){
        this.key = key;
    }
}
class BinarySearchTree<T>{
    
    private root: TreeNode<T> = null;
    constructor(){}    
    public insert(key: T): void{
        const newNode = new TreeNode<T>(key);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void{
        if(newNode.key < node.key){
            if(node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        }else{
            if(node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }
    public inOrderTraverse(callback: Function){
        this.inOrderTraverseNode(this.root, callback);
    }
    private inOrderTraverseNode(node: TreeNode<T>, callback: Function){
        if(node){
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
}