import hashlib
import requests
import json


def test_pw(byte_string, option):
    decoded_pass = byte_string.decode()
    hasher = hashlib.sha1()
    hasher.update(byte_string)
    digest = hasher.hexdigest().upper()
    if option == 'ispass':
        pw_list = requests.get(f'https://api.pwnedpasswords.com/range/{digest[:5]}')
        for line in pw_list.text.split('\n'):
            info = line.split(':')
            if info[0] == digest[5:]:
                print(f'The password {decoded_pass} has been Pwned {int(info[1])} times.')
                break
        else:
            print(f"Error, the password {decoded_pass} wasn't found.")
    else:
        pw_list = requests.get(f'https://haveibeenpwned.com/api/v2/breachedaccount/{decoded_pass}')
        for line in pw_list.text.split('\n'):
            info = line.split(':')
            if info[0] == digest[5:]:
                print(f'The Account {decoded_pass} has been Pwned {int(info[1])} times.')
                break
        else:
            print(f"Error, the Account {decoded_pass} wasn't found.")


print('What should I check?')
type = input("Password or Account. (p for password & a for account) ")
if type == 'p':
    password = input('What password should I check? ')
    new_pass = str.encode(password)
    test_pw(new_pass, 'ispass')
elif type == 'a':
    account = input('What Account should I check? ')
    new_acc = str.encode(account)
    test_pw(new_acc, 'isacc')
