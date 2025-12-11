import arithmetic as ar
from geometry import calc_rect_peri as peri
from geometry import calc_rect_area as area

print("Hello ")
a=int(input("Enter A:"))
b=int(input("Enter B:"))

len=int(input("Enter Length:"))
bre=int(input("Enter Breadth:"))

ar.add(a,b)
ar.sub(a,b)
ar.mult(a,b)
ar.div(a,b)

peri(len,bre)
area(len,bre)