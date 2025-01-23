# class Solution:
#     def minWindow(self, s: str, t: str) -> str:
#         if t == "": return ""

#         wMap = {}
#         tMap = {}
#         for c in t: tMap[c] = 1 + tMap.get(c, 0) # O(1)

#         res = None
#         l = r = 0
#         wMap[s[r]] = 1 + wMap.get(s[r], 0)
#         while l < len(s):
#             haveAll = True
#             for c in tMap.keys():
#                 if wMap.get(c, 0) < tMap[c]:
#                     haveAll = False
#                     break
            
#             if haveAll == True:
#                 if res == None or len(res) > sum(wMap.values()):
#                     res = s[l:r + 1]
                
#                 if wMap[s[l]]:
#                     wMap[s[l]] -= 1
#                 l += 1
#             else:
#                 if r < len(s):
#                     r += 1
#                     if r < len(s): wMap[s[r]] = 1 + wMap.get(s[r], 0)

#                 else:
#                     break

#         return res if res != None else ""

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s): return ""

        wMap = {}
        tMap = {}
        for c in t: tMap[c] = 1 + tMap.get(c, 0)

        have = 0
        need = len(tMap)
        maxL = maxR = 0
        maxLen = float("inf")
        l = r = 0
        for r in range(len(s)):
            c = s[r]
            wMap[c] = 1 + wMap.get(c, 0)

            if c in tMap and wMap[c] == tMap[c]: have += 1

            while have == need:
                if r - l + 1 < maxLen:
                    maxL = l
                    maxR = r
                    maxLen = r - l + 1

                wMap[s[l]] -= 1
                if s[l] in tMap and wMap[s[l]] < tMap[s[l]]:
                    have -= 1
                l += 1

        if maxLen > 0 and maxLen != float("inf"):
            return s[maxL:maxR + 1]
        else:
            return ""


print(Solution.minWindow(Solution, "a", "b"))
# print(Solution.minWindow(Solution, "ab", "a"))
# print(Solution.minWindow(Solution, "0123456789012", "ABC"))