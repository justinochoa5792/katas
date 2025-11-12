# Sum of two lowest positive integers
# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

def sum_two_smallest_numbers(numbers):
    sorted_num = sorted(numbers)
    return sorted_num[0] + sorted_num[1]