from collections import deque
from typing import Optional, List


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if root == None: return []

        result = []
        level = [root]

        while len(level) > 0:
            nextLevel = []
            result.append(level[-1].val)

            for i in range(len(level)):
                node = level[i]
                if node.left: nextLevel.append(node.left)
                if node.right: nextLevel.append(node.right)

            level = nextLevel
        
        return result
        