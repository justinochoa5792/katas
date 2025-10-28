# Highest and Lowest
# In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

def high_and_low(numbers):
    # ...
    sort = numbers.split()
    sort = sorted(list(map(int, sort)))
    return str(sort[len(sort) - 1]) + " " + str(sort[0])