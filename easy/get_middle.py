# Get the Middle Character
# You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

def get_middle(s):
    middle = len(s) // 2
    if len(s) % 2 == 0:
        return s[middle-1:middle+1]
    else:
        return s[middle]