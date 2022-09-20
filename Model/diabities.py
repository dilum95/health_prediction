# -*- coding: utf-8 -*-
"""
Created on Wed Aug 31 21:49:29 2022

@author: Sudarshana Bandara
"""
import pandas as pd 

from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import KFold
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
from sklearn.metrics import classification_report
from sklearn.metrics import accuracy_score
from sklearn.model_selection import RepeatedStratifiedKFold

from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB

data_2 = pd.read_csv(r'D:\python_project\diabetes.csv')
data_2

data_2=data_2.fillna(0) # fill NAs  with 0 

X = data_2.drop(['Outcome'], axis=1)
y = data_2.Outcome

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33)


# KNeighborsClassifier#####################################

kfold = KFold(n_splits=3, shuffle=True, random_state=0)
# Define our candidate hyperparameters
hp_candidates = [{'n_neighbors': [2,3,4,5,6], 'weights': ['uniform','distance']}]
# Search for best hyperparameters
grid = GridSearchCV(estimator=KNeighborsClassifier(), param_grid=hp_candidates, cv=kfold, scoring='r2')
knn =grid.fit(X_train, y_train)

knn_predictions = knn.predict(X_test) 
cm = confusion_matrix(y_test, knn_predictions)
cm
classification_report(y_test, knn_predictions)
# accuracy on X_test
accuracy = accuracy_score(knn_predictions, y_test)
accuracy


#Naïve Bayes
gnb_clf=GaussianNB()
parameters = {
    'var_smoothing': [1e-2, 1e-3, 1e-4, 1e-5, 1e-6, 1e-7, 1e-8, 1e-9, 1e-10, 1e-11, 1e-12, 1e-13, 1e-14, 1e-15]
}
clf = GridSearchCV(gnb_clf, parameters, cv=5)
gnb=clf.fit(X_train, y_train)

gnb_predictions = gnb.predict(X_test)
  
accuracy = accuracy_score(gnb_predictions, y_test)
accuracy
  
cm = confusion_matrix(y_test, gnb_predictions)
cm
classification_report(y_test, gnb_predictions)

#Logistic Regression ##########################

model = LogisticRegression(solver='liblinear')

c_values = [100, 10, 1.0, 0.1, 0.01]
# define grid search
grid = dict(C=c_values)
cv = RepeatedStratifiedKFold(n_splits=10, n_repeats=3, random_state=1)
grid_search = GridSearchCV(estimator=model, param_grid=grid, n_jobs=1, cv=cv)
grid_result = grid_search.fit(X_train, y_train)


logreg=model.fit(X_train, y_train)
log_predictions = grid_result.predict(X_test)

# accuracy on X_test
accuracy = accuracy_score(log_predictions, y_test)
accuracy
  
# creating a confusion matrix
cm = confusion_matrix(y_test, log_predictions)
cm
classification_report(y_test, log_predictions)

#Decision Tree algorithms#############################
model= DecisionTreeClassifier()
parameters={
            "max_depth" : [7,9,11,12,15],
           "min_samples_leaf":[50,10,100],
           "min_weight_fraction_leaf":[0.0001,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9],
           "max_leaf_nodes":[None,1,20,30,40,50,60,70,80,90] }

tuning_model=GridSearchCV(estimator=model,param_grid=parameters,cv=3,verbose=3)

dtree_model =tuning_model.fit(X_train, y_train)

#dtree_model = DecisionTreeClassifier(max_depth = 15).fit(X_train, y_train)
dtree_predictions = dtree_model.predict(X_test)
accuracy = accuracy_score(dtree_predictions, y_test)
accuracy  
# creating a confusion matrix
cm = confusion_matrix(y_test, dtree_predictions)
cm

classification_report(y_test, dtree_predictions)

###########################################################

def Diabities(data,data_1, model ): 
    data=pd.concat([data,data_1])
    data=data.fillna(0) 
    data=data.tail(1)
    if model == 'KNN':
        y = knn.predict(data) 
    if model == 'NB':
        y = gnb.predict(data)
    if model == 'LR':
        y = grid_result.predict(data) 
    if model == 'DTREE':
        y = dtree_model.predict(data)    
    print ("Disease is",y)
        
data_v3 =  pd.read_csv(r'D:\python_project\diabetes.csv')
data=pd.DataFrame(data_v3.iloc[76].drop(['Outcome'], axis=0)).transpose()

Diabities(data,X,"DTREE") # X traning X data

data_real=data_v3.iloc[76]
data_real['Outcome']
