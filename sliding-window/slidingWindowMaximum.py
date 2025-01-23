from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        res = []
        queue = deque()
        for r in range(len(nums)):

            while len(queue) > 0 and nums[queue[-1]] < nums[r]:
                queue.pop()
            queue.append(r)
            
            if queue[0] < r - k + 1:
                queue.popleft() 

            if r >= k - 1:
                res.append(nums[queue[0]])

            r += 1
            
        return res

        
print(Solution.maxSlidingWindow(Solution, [1,3,1,2,0,5], 3))
