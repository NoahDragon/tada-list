#!/usr/bin/env python
'''server/app.py back-end main entry point'''
import json
import os
#pylint: disable-unused-argument
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS

server_root = os.path.dirname(os.path.realpath(__file__))
data_file = os.path.join(server_root, "data.json")
app = Flask(__name__, static_folder="../dist")
CORS(app)

def loadData():
  with open(data_file, 'r') as f:
    items = json.load(f)
  return items

@app.route("/")
def index():
  '''Return index.html for unspecified routes'''
  #pylint: invalid-name
  return send_from_directory(app.static_folder, "index.html")

@app.route('/<path:path>')
def asserts(path):
  return send_from_directory(app.static_folder, path)

@app.route('/api/v1.0/tasks', methods=['GET'])
def getLists():
  items = loadData()
  return jsonify(result='ok', data=items["todos"])

@app.route('/api/v1.0/tasks', methods=['PUT'])
def updateItem():
  item = json.loads(request.data.decode("utf-8"))
  items = loadData()
  exist = False

  for i in items["todos"]:
    if i["id"] == item["id"]:
      exist = True
      i["text"] = item["text"]
      i["completed"] = item["completed"]
      break

  if not exist:
    items["todos"].append(item)

  with open(data_file, 'w') as f:
    json.dump(items, f)

  return jsonify(result='ok', data=items["todos"])

@app.route('/api/v1.0/toggle', methods=['PUT'])
def toggleItem():
  item = json.loads(request.data.decode("utf-8"))
  items = loadData()

  for i in items["todos"]:
    if i["id"] == item["id"]:
      i["completed"] = not i["completed"]
      break

  with open(data_file, 'w') as f:
    json.dump(items, f)

  return jsonify(result='ok', data=items["todos"])

