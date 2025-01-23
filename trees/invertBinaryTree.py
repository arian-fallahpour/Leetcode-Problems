from collections import deque 

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Breadth First Search
# class Solution:
#     def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
#         if root == None: return root

#         queue = deque([root])
#         while queue:
#             node = queue.popleft()
#             node.left, node.right = node.right, node.left
#             if node.left: queue.append(node.left)
#             if node.right: queue.append(node.right)
#         return root

# Depth First Search
# class Solution:
#     def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
#         if root.left == None and root.right == None:
#             return root

#         left = self.invertTree(root.right)
#         right = self.invertTree(root.left)
#         root.left = left
#         root.right = right
#         return root