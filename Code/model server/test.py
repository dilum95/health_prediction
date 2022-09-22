import pandas as pd 
from sklearn.preprocessing import LabelEncoder
from sklearn import preprocessing
import pickle

# # import data set
# data_1 = pd.read_csv(r'dataset.csv')
# data_1.head(1)
# Disease=data_1['Disease']
# data_X=data_1.drop(['Disease'], axis=1)


# label_encoder = preprocessing.LabelEncoder()
  
# Disease= label_encoder.fit_transform(Disease)

# le = LabelEncoder()

# data_1_Encoder= data_X.apply(lambda col: le.fit_transform(col.astype(str)), axis=0, result_type='expand')
# data_1_Encoder


# def Disease(data,data_1 ): 
#     datan=pd.DataFrame(data)
#     data=pd.concat([datan,data_1])
    
#     data=data.fillna(0) 
#     data= data.apply(lambda col: le.fit_transform(col.astype(str)), axis=0, result_type='expand')
#     data=data.tail(1)
#     with open('model_symptom-bad','rb') as file:
#           mp = pickle.load(file)

#     pre=mp.predict(datan.transpose())
#     y = label_encoder.inverse_transform(pre)    
#     print ("Disease is",y)

# data_v = pd.read_csv(r'dataset.csv')
# data=pd.DataFrame(data_v.iloc[76].drop(['Disease'], axis=0)).transpose()

# X_test_new = [1,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 

# datanew=pd.DataFrame(X_test_new).transpose()

# Disease(X_test_new,data_X) # data_X traning X data

data_1 = pd.read_csv(r'dataset.csv')
data_1.head(1)
Disease=data_1['Disease']
data_X=data_1.drop(['Disease'], axis=1)


label_encoder = preprocessing.LabelEncoder()
  
Disease= label_encoder.fit_transform(Disease)

le = LabelEncoder()

data_1_Encoder= data_X.apply(lambda col: le.fit_transform(col.astype(str)), axis=0, result_type='expand')
data_1_Encoder

data_v = pd.read_csv(r'dataset.csv')
data=pd.DataFrame(data_v.iloc[76].drop(['Disease'], axis=0)).transpose()

X_test_new = [1,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 

datanew=pd.DataFrame(X_test_new).transpose()

datan=pd.DataFrame(X_test_new)
X_test_new=pd.concat([datan,data_X])

X_test_new=X_test_new.fillna(0) 
X_test_new= X_test_new.apply(lambda col: le.fit_transform(col.astype(str)), axis=0, result_type='expand')
X_test_new=X_test_new.tail(1)
with open('model_symptom-bad','rb') as file:
      mp = pickle.load(file)

pre=mp.predict(datan.transpose())
y = label_encoder.inverse_transform(pre)
print(y)
