from flask import Flask,jsonify,request
 
app = Flask(__name__)

@app.route('/')
def hello_world():

    return ({"uuid":'Hello World'})
 

if __name__ == '__main__':
 
    
    app.run() 