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
    public preOrderTraverse(callback: Function){
        this.preOrderTraverseNode(this.root, callback);
    }
    private preOrderTraverseNode(node: TreeNode<T>, callback: Function){
        if(node){
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    public postOrderTraverse(callback: Function){
        this.postOrderTraverseNode(this.root, callback);
    }
    private postOrderTraverseNode(node: TreeNode<T>, callback: Function){
        if(node){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    public min(): T | null{
        return this.minNode(this.root);
    }
    private minNode(node: TreeNode<T>){
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    }
    public max(): T | null{
        return this.maxNode(this.root);
    }
    private maxNode(node: TreeNode<T>){
        if(node){
            while(node && node.left !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    public search(key: T): Boolean{
        return this.searchNode(this.root, key);
    }
    private searchNode(node: TreeNode<T>, key: T): Boolean{
        if(!node) return false;
        if(key < node.key) return this.searchNode(node.left, key);
        else if(key > node.key) return this.searchNode(node.right, key);
        else return true;
    }
    public findMinNode(node: TreeNode<T>): TreeNode<T>{
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };
    public remove(key: T): TreeNode<T> | null{
        this.root = this.removeNode(this.root, key)
    }
    private removeNode(node: TreeNode<T>, key: T): TreeNode<T> | null{
        if(!node) return null;
        if(key < node.key){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(key > node.key){
            node.right = this.removeNode(node.right, key);
            return node;
        }else {
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right)
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }


}