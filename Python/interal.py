# 参考: https://github.com/SergioJune/python_test

# from collections import Iterable

def enroll(args):
    # isinstance(args, Iterable)
    # a = list(range(1, 11, 100))
    a = (x * x for x in range(1, 11))
    print(next(a))
    print(next(a))
    print(next(a))
    print(next(a))

enroll('test')
















