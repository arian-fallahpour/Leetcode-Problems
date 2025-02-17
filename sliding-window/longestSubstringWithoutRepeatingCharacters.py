class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        count = {}

        longest = 0
        l = r = 0
        while r < len(s):
            if count.get(s[r]) == None:
                count[s[r]] = 1
                r += 1
                longest = max(longest, r - l)
            else:
                count[s[l]] = None
                l += 1
        
        return longest
   