import json
import os
import random
greetings = json.loads(open('ops.json').read())
new_greetings = greetings.split(',')
inputs = input()
if inputs == new_greetings:
    print(random.randint(0,3))
