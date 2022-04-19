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

## Setting up and deploying the technonlgys





### Terraform

Terraform is an open source infrastructure as code (IaC) software tool that allows DevOps engineers to programmatically provision the physical resources an application requires to run and it was really the best choice 

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/tr2.jpg)



I made 6 files i seprrated the code one for policy and roles and other for vpc and another for the cluster for easier mangment and one for variables , you may noice a .tfstate file thats the current state of terrafom as i made number of provisions and trobleshooting 

firstly i installed terraform in my centos vm and i make a dir and for all the * .tf s files required to provsion the EKS cluser then we run the command blew


```
$ terraform init
$ terraform plan
$ terraform apply
```

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ter3.jpg)







### AWS Elastic Kubernetes Service (EKS)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eks%20cluster.png)


the EKS cluser have a spacific architicture with a spacific vpc sperated into to 2 two zones each worker node in separted zone for high avalability
of course all the worker nodes in privat subnets , with 2 nat gatways in puplic subnets attached with 2 elastic ips for front end communication linked to an internetgatway , all worker nodes attached with security groups and attched to node group to provide high avalabilty and reabilty kind of auto scalling gruop the mater of course is aws manged , finnaly there were some iam group to provide connewctivty and athorize the cluster to interact with many aws services. 

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eksssssssssssss.jpg)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eks2.jpg)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eks%203.jpg)




### AWS CodeCommit


AWS CodeCommit is a secure, highly scalable, managed source control service that hosts private Git repositories. It makes it easy for teams to securely collaborate on code with contributions encrypted in transit and at rest. 





### AWS Elastic Container Registry (ECR)





































