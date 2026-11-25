import random
import math
for i in range(100):
    x = round((((random.random() - 0.5) * 0.16)) * 100) / 100
    y = round((((random.random() - 0.5) * 0.08)) * 100) / 100
    print(str(i)+"% { transform: translateX(" + str(x) + "rem) translateY(" + str(y) + "rem); }")
