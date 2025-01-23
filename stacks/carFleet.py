class Solution:
    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:
        pairs = [(p, s) for p, s in zip(position, speed)]
        pairs.sort(reverse=True)
        stack = []
        for p, s in pairs:
            stack.append((target - p) / s)
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
        return len(stack)


print(Solution.carFleet(Solution, 12, [10,8,0,5,3], [2,4,1,1,3]))