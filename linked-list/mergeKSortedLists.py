# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# class Solution:
#     def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
#         head = None
#         current = None

#         while len(lists) > 0:
#             smallest_value = float("inf")
#             smallest_index = None
#             for i, list in enumerate(lists):
#                 if list != None and list.val < smallest_value:
#                     smallest_value = list.val
#                     smallest_index = i

#             if smallest_index != None:
#                 if head == None:
#                     head = current = ListNode(smallest_value, None)
#                 else:
#                     current.next = ListNode(smallest_value, None)
#                     current = current.next

#                 lists[smallest_index] = lists[smallest_index].next
#             else:
#                 break
            
#         return head


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if len(lists) == 0:
            return None

        while len(lists) > 1:
            merged = []

            for i in range(len(lists))[::2]:
                list1 = lists[i]
                list2 = lists[i + 1] if i + 1 < len(lists) else None
                merged.append(self.mergeTwoLists(list1, list2))

            lists = merged
        
        return lists[0]
            
    def mergeTwoLists(self, list1, list2):
        head = ListNode(0, None)
        current = head

        while True:
            if list1 != None and list2 != None:
                if list1.val < list2.val:
                    current.next = ListNode(list1.val, None)
                    list1 = list1.next
                else:
                    current.next = ListNode(list2.val, None)
                    list2 = list2.next
                current = current.next
            else:
                if list1 == None:
                    current.next = list2
                elif list2 == None:
                    current.next = list1

                return head.next
            