import re


def build_pyramid(nums: list):
    step =1
    pyramid = []
    while len(nums):
        if len(nums) >= step:
            new_subset = []
            for i in range(0, step):
                new_subset.append(nums[i])
            pyramid.append(new_subset)
            new_nums = []
            for i in range(step, len(nums)):
                new_nums.append(nums[i])
            nums = new_nums
            step += 1
        else:
            return False
    # print(pyramid)
    return pyramid
        


def get_message(pyramid: list, number_word):
    message = ''
    step =0
    for subset in pyramid:
        number = subset[step]
        message = message + ' ' + number_word[number]
        step += 1
    # print(message)
    return message


def decode(message_file):
    number_word = {}
    with open(message_file, 'r') as file:
        lines = file.readlines()
        for line in lines:
            number, word = line.split()
            if number not in number_word.keys():
                number_word[int(number)] = word
            else:
                print('Ambuiguity detected in number ' + number + '. Second word chosen')

    numbers =  list(number_word.keys())
    numbers.sort()
    pyramid = build_pyramid(numbers)
    message = get_message(pyramid, number_word)
    print(message)
    return message      
    
decode('coding_qual_input.txt')
# decode('test.txt')