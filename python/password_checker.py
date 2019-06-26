import hashlib
import requests
import json
import os
pswrds = json.loads(open("passwords.json").read())

def test_pw(byte_string):
    decoded_pass = byte_string.decode()
    hasher = hashlib.sha1()
    hasher.update(byte_string)
    digest = hasher.hexdigest().upper()
    print(f'Hash: {digest[:5]}, {digest[5:]}')
    print(f'GET https://api.pwnedpasswords.com/range/{digest[:5]}')
    pw_list = requests.get(f'https://api.pwnedpasswords.com/range/{digest[:5]}')
    for line in pw_list.text.split('\n'):
        info = line.split(':')
        if info[0] == digest[5:]:
            print(f'The password {decoded_pass} has been Pwned {int(info[1])} times.')
            break
    else:
        print('Not found')
for password in pswrds:
    new_pass = str.encode(password)
    test_pw(new_pass)
