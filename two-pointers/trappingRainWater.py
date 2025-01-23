# class Solution:
#     def trap(self, height: list[int]) -> int:
#         tallestLeftHeight = [0] * len(height)
#         tallestRightHeight = [0] * len(height)


#         tallestLeft = 0
#         tallestRight = 0
#         for i in range(len(height)):
#             j = len(height) - i - 1
#             tallestLeftHeight[i] = tallestLeft
#             tallestRightHeight[j] = tallestRight
#             tallestLeft = max(tallestLeft, height[i])
#             tallestRight = max(tallestRight, height[j])

#         trappedTotal = 0
#         for i in range(len(height)):
#             trapped = max(min(tallestLeftHeight[i], tallestRightHeight[i]) - height[i], 0)
#             trappedTotal += trapped

#         return trappedTotal

class Solution:
    def trap(self, height: list[int]) -> int:
        trapped = 0

        l = 0
        r = len(height) - 1
        maxLeft = height[l]
        maxRight = height[r]

        while l < r:
            if maxLeft <= maxRight:
                l += 1
                maxLeft = max(maxLeft, height[l])
                trapped += maxLeft - height[l]
            else:
                r -= 1
                maxRight = max(maxRight, height[r])
                trapped += maxRight - height[r]
        
        return trapped

print(Solution.trap(Solution, [0,1,0,2,1,0,1,3,2,1,2,1]))