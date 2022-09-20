from flask import Flask,jsonify,request
 
app = Flask(__name__)

@app.route('/',methods=['POST'])
def hello_world():
    if request.method == 'POST':
        req_data = request.get_json()
        Symptom_1 = req_data['Symptom_1']
        Symptom_2 = req_data['Symptom_2']
        Symptom_3 = req_data['Symptom_3']
        Symptom_4 = req_data['Symptom_4']
        Symptom_5 = req_data['Symptom_5']
        Symptom_6 = req_data['Symptom_6']
        Symptom_7 = req_data['Symptom_7']
        Symptom_8 = req_data['Symptom_8']
        Symptom_9 = req_data['Symptom_9']
        Symptom_10 = req_data['Symptom_10']
        Symptom_11 = req_data['Symptom_11']
        Symptom_12 = req_data['Symptom_12']
        Symptom_13 = req_data['Symptom_13']
        Symptom_14 = req_data['Symptom_14']
        Symptom_15 = req_data['Symptom_15']
        Symptom_16 = req_data['Symptom_16']
        Symptom_17 = req_data['Symptom_17']

        
        return Symptom_2
 

if __name__ == '__main__':
 
    
    app.run() 