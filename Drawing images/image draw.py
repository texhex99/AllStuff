import PIL.ImageDraw as ImageDraw
import PIL.Image as Image
from PIL import ImageGrab
image = ImageGrab.grab().convert('RGB')
im = Image.new("RGB", (1600, 900))

draw = ImageDraw.Draw(im)
i = 0
x = 0
y = 0
b = 1
while i < 1440000:
    r, g, b = image.getpixel((x, y))
    print(r, g, b)
    draw.point((x, y), fill=(r, g, b))
    if y < 900:
        y += 1
    if y == 900:
        y = 0
        x += 1
    i += 1
    print(i)
im.show('hi mom')
