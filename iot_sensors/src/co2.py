import time
import board
import busio
import adafruit_scd30
import requests

i2c = busio.I2C(board.SCL, board.SDA, frequency=40000)
scd = adafruit_scd30.SCD30(i2c)
URL = "http://localhost:3001/sensors/1"

while True:
    if scd.data_available:
        print("Data Available!")
        print("CO2: %d PPM" % scd.CO2)
        print("Temperature: %0.2f degrees C" % scd.temperature)
        print("Humidity: %0.2f %% rH" % scd.relative_humidity)
        data = {
        'sensorId': 1,
        'c02':scd.CO2,
        'temperature': scd.temperature,
        'humidity': scd.relative_humidity,
        }
        requests.post(url = URL, data = data)

    time.sleep(0.5)
