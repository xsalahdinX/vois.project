# vois.project 

#### Devops Project proposal.


### Introduction
an interesting project aim to transform to DevOps methodolgy and Automation , imagine high impact project that will have a huge impact to the performance of an Application , has to be integrated builded tested and deployed in 3hours rather than 3 days. we need to create a EKS Elastic Kubernets Cluster in AWS to deploy our microservices App on it , then we should creat a reaible pipleline which should trigr the change in the code and begain the build , test and deploy . in otherwords a full qutomated DevOps Infinity Loop  


### an accedental scinario
i spend like day from the 3 days deadline revealling AZure pipline concepts and actual deployment the suddenly i discovered that they made a recent obligation and role for the usage of it , i have to communicate with them personally to give me the permisiion to use the pipline , and that was a huge wast of time as i hade 2 days remaining not 3 days , so i decided to percced my work on AWS Code pipline but i discovered that all the plugins that i have to work with and you mentioned in your manifast is not commpatable with aws and required a huge jobs and could be not functionable neghou , so i made some justification to catch the stituation 

## Technologies

Project is created with:

* Terraform
* Amazon Elastic Container Registry 
* Amazon Codecommit 
* Amazon Codebuild  
* Amazon Codepipline 
* Sonarqube
* Ansible

## General  Workflow 

Firstly we need to Provision an Elastic k8s Cluser in Aws so we used Terraform for this job After the cluster has been created we collecting all the files in codecommit that will be used to integrate the code then codebuild will pull the code and build it as image and push it to the ECR Container Registry which we will used it in pulling the image to be deployed as container in the Eks. through this process , the cloudqube will test and validate the code from bugs and valnarbibilties before the deploymnet. this whole proccess is ocrestrated by the codepipline which aoutimat the whole process from code change in the repo to apply in the cluster .



















