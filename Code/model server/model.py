from flask import Flask,jsonify,request
from flask_cors import CORS
import pandas as pd
import pickle
from sklearn.preprocessing import LabelEncoder
from sklearn import preprocessing
 
app = Flask(__name__)
CORS(app)


@app.route('/data',methods=['POST'])
def getdata():
    if request.method == 'POST':

        req_data = request.get_json()

        Symptom_1 = req_data['Symptom_1']
        print("symptom1 is ",type(Symptom_1))
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

        data_1 = pd.read_csv(r'dataset.csv')
        data_1.head(1)
        Disease=data_1['Disease']
        data_X=data_1.drop(['Disease'], axis=1)


        label_encoder = preprocessing.LabelEncoder()
          
        Disease = label_encoder.fit_transform(Disease)

        le = LabelEncoder()

        data_1_Encoder= data_X.apply(lambda col: le.fit_transform(col.astype(str)), axis=0, result_type='expand')
        data_1_Encoder

        data_v = pd.read_csv(r'dataset.csv')
        data=pd.DataFrame(data_v.iloc[30].drop(['Disease'], axis=0)).transpose()

        X_test_new = [int(Symptom_1),int(Symptom_2),int(Symptom_3),int(Symptom_4),int(Symptom_5),int(Symptom_6),int(Symptom_7),int(Symptom_8),int(Symptom_9),int(Symptom_10),int(Symptom_11),int(Symptom_12),int(Symptom_13),int(Symptom_14),int(Symptom_15),int(Symptom_16),int(Symptom_17)] 
        print(X_test_new)
        datanew=pd.DataFrame(X_test_new).transpose()

        datan=pd.DataFrame(X_test_new)
        X_test_new=pd.concat([datan,data_X])
        
        X_test_new=X_test_new.fillna(0) 
        X_test_new= X_test_new.apply(lambda col: le.fit_transform(col.astype(str)), axis=0, result_type='expand')
        X_test_new=X_test_new.tail(1)

        with open('model_symptom-bad','rb') as file:
              mp = pickle.load(file)

        pre=mp.predict(datanew)
        y  = label_encoder.inverse_transform(pre) 

        res=pd.Series(y).to_json(orient='values')
       
        print(res)
        return {"status":True,"msg":res}

# #######################################################################
@app.route('/heart',methods=['POST'])
def get_heart_data():
    if request.method == 'POST':

        req_data_h = request.get_json()

        H_Symptom_1 = req_data_h['Symptom_1']
        H_Symptom_2 = req_data_h['Symptom_2']
        H_Symptom_3 = req_data_h['Symptom_3']
        H_Symptom_4 = req_data_h['Symptom_4']
        H_Symptom_5 = req_data_h['Symptom_5']
        H_Symptom_6 = req_data_h['Symptom_6']
        H_Symptom_7 = req_data_h['Symptom_7']
        H_Symptom_8 = req_data_h['Symptom_8']
        H_Symptom_9 = req_data_h['Symptom_9']
        H_Symptom_10 = req_data_h['Symptom_10']
        H_Symptom_11 = req_data_h['Symptom_11']
        H_Symptom_12 = req_data_h['Symptom_12']
        H_Symptom_13 = req_data_h['Symptom_13']

        with open('model_heart2','rb') as file:
            mp = pickle.load(file)

        X_test_new = [float(H_Symptom_1),float(H_Symptom_2),float(H_Symptom_3),float(H_Symptom_4),float(H_Symptom_5),float(H_Symptom_6),float(H_Symptom_7),float(H_Symptom_8),float(H_Symptom_9),float(H_Symptom_10),float(H_Symptom_11),float(H_Symptom_12),float(H_Symptom_13)]
        datanew=pd.DataFrame(X_test_new).transpose()
        pre=mp.predict(datanew)
        print(pre)
        res=pd.Series(pre).to_json(orient='values')

        return {"status":True,"msg":res}

        #######################################################################################################

@app.route('/diabities',methods=['POST'])
def getdata_diabities():
    if request.method == 'POST':

        req_data = request.get_json()

        D_Symptom_1 = req_data['Symptom_1']
        D_Symptom_2 = req_data['Symptom_2']
        D_Symptom_3 = req_data['Symptom_3']
        D_Symptom_4 = req_data['Symptom_4']
        D_Symptom_5 = req_data['Symptom_5']
        D_Symptom_6 = req_data['Symptom_6']
        D_Symptom_7 = req_data['Symptom_7']
        D_Symptom_8 = req_data['Symptom_8']

        
        with open('model_diabits','rb') as file:
              mp = pickle.load(file)

        X_test_new = [float(D_Symptom_1),float(D_Symptom_2),float(D_Symptom_3),float(D_Symptom_4),float(D_Symptom_5),float(D_Symptom_6),float(D_Symptom_7),float(D_Symptom_8)] 
      
        datanew=pd.DataFrame(X_test_new).transpose()
        pre=mp.predict(datanew)
        print(pre)
        res=pd.Series(pre).to_json(orient='values')

        return {"status":True,"msg":res} 

# ##############################################################################################################

@app.route('/ckd',methods=['POST'])
def getdata_ckd():
    if request.method == 'POST':

        req_data = request.get_json()

        k_Symptom_1 = req_data['Symptom_1']
        k_Symptom_2 = req_data['Symptom_2']
        k_Symptom_3 = req_data['Symptom_3']
        k_Symptom_4 = req_data['Symptom_4']
        k_Symptom_5 = req_data['Symptom_5']
        k_Symptom_6 = req_data['Symptom_6']
        k_Symptom_7 = req_data['Symptom_7']
        k_Symptom_8 = req_data['Symptom_8']
        k_Symptom_9 = req_data['Symptom_9']
        k_Symptom_10 = req_data['Symptom_10']
        k_Symptom_11 = req_data['Symptom_11']
        k_Symptom_12 = req_data['Symptom_12']
        k_Symptom_13 = req_data['Symptom_13']
        k_Symptom_14 = req_data['Symptom_14']
        k_Symptom_15 = req_data['Symptom_15']
        k_Symptom_16 = req_data['Symptom_16']
        k_Symptom_17 = req_data['Symptom_17']
        k_Symptom_18 = req_data['Symptom_18']
        k_Symptom_19 = req_data['Symptom_19']
        k_Symptom_20 = req_data['Symptom_20']
        k_Symptom_21 = req_data['Symptom_21']
        k_Symptom_22 = req_data['Symptom_22']
        k_Symptom_23 = req_data['Symptom_23']
        k_Symptom_24 = req_data['Symptom_24']
        k_Symptom_25 = req_data['Symptom_25']


        with open('model_ckd','rb') as file:
              mp = pickle.load(file)

        X_test_new = [float(k_Symptom_1),float(k_Symptom_2),float(k_Symptom_3),float(k_Symptom_4),float(k_Symptom_5),float(k_Symptom_6),float(k_Symptom_7),float(k_Symptom_8),float(k_Symptom_9),float(k_Symptom_10),float(k_Symptom_11),float(k_Symptom_12),float(k_Symptom_13),float(k_Symptom_14),float(k_Symptom_15),float(k_Symptom_16),float(k_Symptom_17),float(k_Symptom_18),float(k_Symptom_19),float(k_Symptom_20),float(k_Symptom_21),float(k_Symptom_22),float(k_Symptom_23),float(k_Symptom_24),float(k_Symptom_25)]

        datanew=pd.DataFrame(X_test_new).transpose()
        pre=mp.predict(datanew)
        print(pre)
        res=pd.Series(pre).to_json(orient='values')

        return {"status":True,"msg":res}         
 

if __name__ == '__main__':
 
    
    app.run() 