#!/usr/bin/env python
'''server/app.py back-end main entry point'''
import csv
#pylint: disable-unused-argument
from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="../dist")
CORS(app)

#@app.route("/", defaults={"path": ""})
# @app.route("/<path:path>")
# def index(path):
#   '''Return index.html for unspecified routes'''
#   #pylint: invalid-name
#   return send_from_directory(app.static_folder, path)

@app.route('/')
def index():
  return render_template("index.html")

#@app.route('/<path:path>')
#def asserts(path):
#  return send_from_directory(app.static_folder, path)

@app.route('/api/v1.0/tasks', methods=['GET'])
def getTasks():
  return "empty"
