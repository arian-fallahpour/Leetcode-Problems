from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root == None: return []
        result = []
        currentNodes = [root]
        nextNodes = []

        while len(currentNodes) > 0:
            currentLevel = []
            for i in range(len(currentNodes)):
                currentLevel.append(currentNodes[i].val)
                if currentNodes[i].left != None: nextNodes.append(currentNodes[i].left)
                if currentNodes[i].right != None: nextNodes.append(currentNodes[i].right)
            result.append(currentLevel)
            currentNodes = nextNodes
            nextNodes = []
        
        return result