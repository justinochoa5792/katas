# Even or Odd
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number):
    even = number % 2 == 0 
    if(even == False):
        return 'Odd'
    else:
        return 'Even'