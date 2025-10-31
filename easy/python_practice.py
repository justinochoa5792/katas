# practicing the basics of python

import math

# Online Python - IDE, Editor, Compiler, Interpreter
students_count = 1000
is_published = True
long_message = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend massa risus, at ornare dolor mollis a. Sed fermentum dolor quis semper venenatis. 
Donec eget nulla convallis, faucibus ex at, pharetra diam. Vivamus vitae risus id risus accumsan accumsan. Nulla ac ullamcorper massa, eu pellentesque quam. 
Integer congue purus nisl, vel molestie nisl interdum ac. Donec vel metus at tellus ultrices luctus. Praesent at aliquam risus, ut mollis erat. Integer erat 
felis, laoreet quis sodales vel, vestibulum ut erat. In maximus, nunc at vestibulum cursus, lorem nunc finibus risus, ac efficitur nunc nulla vel elit. 
Pellentesque bibendum tincidunt purus sed laoreet. Donec sed sapien neque. Duis et nisl commodo, hendrerit purus ac, suscipit enim. Donec rutrum mollis tortor. 
Quisque pulvinar magna pulvinar fermentum semper.
"""

print("\"test\"")
if is_published:
 print(long_message);
 print(long_message[0:10]);
 print('long_message count', len(long_message))
else:
    print('Not Published')


print(f"{students_count} {is_published}")
# print(math.ceil(2.2))

# arr = [4,5,6]
# for number in range(len(arr)):
#     print('Attempt',arr[number])

# num = 100
# while num > 0 :
#     print(num)
#     num //= 2
count = 0;
for number in range(1,10):
    if number % 2 == 0:
        count += 1
        print(count)
print(f"We have {count} even numbers")

def greet(first,last):
    print(f"Hi {first} {last}!")
    print("How are you?")
greet(first='Justin',last='Ochoa');

def get_greeting(name):
    return f"Hi {name}, how are you ?!"

message = get_greeting('Justin Ochoa')
print(message)

def multiply(*numbers):
    total = 1
    for number in numbers:
     total *= number
    return total

print(multiply(2,3,4,5))

name = input('What is your name?')
print(name)