#!/usr/bin/env python
'''server/app.py back-end main entry point'''
import json
import os
import datetime as dt
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

initLoad = loadData()
maxId = -1
if len(initLoad["todos"]) > 0 and "id" in initLoad["todos"][-1]:
  maxId = initLoad["todos"][-1]["id"]

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
'''
Data Model for the todo list:
todos[
  {
    id            Unique key for each item
    text          Todo item
    completed     Flag of compeletation
    createDate    The time when created the item
    amendDate     The time when the item status changed
  }
]
'''
@app.route('/api/v1.0/tasks', methods=['PUT'])
def updateItem():
  global maxId
  item = json.loads(request.data.decode("utf-8"))
  items = loadData()
  exist = False
  currentTime = dt.datetime.now()

  if "id" in item:
    for i in items["todos"]:
      if i["id"] == item["id"]:
        exist = True
        i["text"] = item["text"]
        i["completed"] = item["completed"]
        i["amendDate"] = currentTime
        break

  if not exist:
    maxId = maxId + 1
    item["id"] = maxId
    item["createDate"] = currentTime
    items["todos"].append(item)

  with open(data_file, 'w') as f:
    json.dump(items, f, default=str)

  return jsonify(result='ok', data=items["todos"])

@app.route('/api/v1.0/toggle', methods=['PUT'])
def toggleItem():
  item = json.loads(request.data.decode("utf-8"))
  items = loadData()
  exist = False
  currentTime = dt.datetime.now()

  for i in items["todos"]:
    if i["id"] == item["id"]:
      exist = True
      i["completed"] = not i["completed"]
      i["amendDate"] = currentTime
      break

  if exist:
    with open(data_file, 'w') as f:
      json.dump(items, f, default=str)

  return jsonify(result='ok', data=items["todos"])

