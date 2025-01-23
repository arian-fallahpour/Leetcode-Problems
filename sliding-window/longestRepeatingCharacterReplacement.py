class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        longest = 0

        count = {}
        l = 0
        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)

            while (r - l + 1) - max(count.values()) > k:
                count[s[l]] -= 1
                l += 1
            
            longest = max(longest, r - l + 1)
            
        return longest
        
print(Solution.characterReplacement(Solution, "AABABBA", 1))
print(Solution.characterReplacement(Solution, "ABAB", 2))