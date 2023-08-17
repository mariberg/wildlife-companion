# Components and Placement

## Form Factor:

Material: Lightweight, durable, and animal-friendly materials

Design:  Adjustable band having a small, lightweight module with a streamlined design to minimize the impact on the animal

<a href="https://ibb.co/H71Nt5K"><img src="https://i.ibb.co/xhPm1x2/Doc1.png" alt="Doc1" border="0"></a>

# Components and Placement

| Components | Placement |
| --- | --- |
| High-precision GPS module (NEO-M8N) | On the upper surface of the tagger for optimal satellite signal reception |
| MPU-6050 3-Axis Accelerometer and Gyro Sensor | Inside the tagger for measuring movement, orientation, and behaviors |
| Digital temperature and humidity sensor (DHT22) | Exterior of the tagger for accurate environmental monitoring |
| Ambient light sensor (BH1750) | Near the top of the tagger for detecting day and night cycles. |
| Arduino Uno Microcontroller | Inside the tagger for data processing, control, and communication with other components |
| Rechargeable lithium-polymer battery (with solar charging capabilities if possible) | Inside the tagger, integrated into the design to balance weight and minimize disturbance |
| ESP32 Wi-Fi module for communication | Inside the tagger, enabling data transmission to a central server |
| MicroSD card slot | Inside the tagger for providing data backup in case of loss of connectivity |
| LED Indicator | Exterior of the tagger, visual indication of device’s status |

# Working

**1. Data Collection and Processing:**

- The sensors (MPU-6050, DHT22, NEO-M8N GPS module, and BH1750 light sensor) will collect data based on their specifications.
- The Arduino Uno will process the collected sensor data and make decisions based on predefined logic.

**2. Wireless Communication:**

- The ESP32 Wi-Fi module will be responsible for connecting to the Wi-Fi network and transmitting data to the central server (AWS) using HTTP requests.
- The ESP32 will periodically collect data from the Arduino Uno and sensors and package it into JSON format.

**3. Real-Time Data Transmission:**

- The ESP32 will use the HTTP protocol to send real-time data to the AWS server. This involves creating HTTP POST requests with the collected data in JSON format.

**4. Backup Data Storage:**

- The ESP32 can also log data onto the MicroSD card for backup purposes in case there's a temporary loss of connectivity to the server.
