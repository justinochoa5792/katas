# Sum of positive
# You get an array of numbers, return the sum of all of the positives ones.

def positive_sum(arr):
    # Your code here
        return sum(filter(lambda x: x > 0,arr))

