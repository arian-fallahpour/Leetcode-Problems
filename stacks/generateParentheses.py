class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        parenthesis = []

        def recursive(str, opens, ends):
            if opens == n:
                for i in range(opens - ends): str += ")"
                parenthesis.append(str)
            else:
                if opens == ends:
                    recursive(str + "(", opens + 1, ends)
                elif opens > ends:
                    recursive(str + "(", opens + 1, ends)
                    recursive(str + ")", opens, ends + 1)

        recursive("(", 1, 0)
        return parenthesis
    
print(Solution.generateParenthesis(Solution, 3))