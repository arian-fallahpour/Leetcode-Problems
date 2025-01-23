from collections import deque 

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# BFS
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        queue = deque()
        if root: queue.append(root)

        depth = 0
        while queue:
            for i in range(len(queue)):
                node = queue.popleft()

                if node.left: queue.append(node.left)
                if node.right: queue.append(node.right)
            depth += 1
        
        return depth

# DFS
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root == None: return 0

        leftDepth = self.maxDepth(root.left) + 1
        rightDepth = self.maxDepth(root.right) + 1
        return max(leftDepth, rightDepth)