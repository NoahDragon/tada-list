#!/usr/bin/env python
'''server/app.py back-end main entry point'''
#pylint: disable-unused-argument
from flask import Flask, send_from_directory
from flask_cors import CORS

APP = Flask(__name__, static_folder="../dist")
CORS(APP)

@APP.route("/", defaults={"path": ""})
@APP.route("/<path:path>")
#pylint: disable-unused-argument
def index():
  '''Return index.html for unspecified routes'''
  #pylint: invalid-name
  return send_from_directory(APP.static_folder, "index.html")
