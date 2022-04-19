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

# Setting up and deploying the technonlgys





## Terraform

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


![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/repo1.jpg)


AWS CodeCommit is a secure, highly scalable, managed source control service that hosts private Git repositories. It makes it easy for teams to securely collaborate on code with contributions encrypted in transit and at rest.I USED CODECOMMIT AS SORCE CODE REOSITORY FOR ALL my projrct phases  the app deploy and build and sonartest.  it contain all file such as the APP file , dockerfiles and buildspec.yml






## AWS Elastic Container Registry (ECR)



![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ecr1.jpg)


Amazon Elastic Container Registry (ECR) is a fully managed Docker container registry that makes it easy to store, share, and deploy container images.like docker hub and others i used it too for compitabilty with aws as it aws manged its acctually the repo that host the image after codebuild build and constract the dockerfile to be and image. 

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ecr2.jpg)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ecr5.jpg)

and acctually it documented all my attempts too :)

## AWS Code Build   




![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/build1.jpg)

CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to be realsed ,this stage was so hard to me as it required infinit amount of working and troubleshooting we have a file name buildspecs.yml that the build itself will be based on it and we have to write into it all build specifications how the build will be and what reop will image be pushed into what kind of deploy will be and the quthantication with EKS to be release the deploy to ,mixed with the environmnet varaibles such as the the docker repo and th iam rols which is due to my experince the most complicated thing as my code faild more than 150 times because of it , we should impliment many policy to the code build role to be cabable of communicate with other aws resorces , in addition to , its propreitise such as what kind of vm we will use to build ubunto or linux 2 which repo this build will linked to and env vars and the spacific policy for build process.

![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build2.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build3.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build4.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build4.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build7.jpg)

hundereds of attepts and fails but the APP finally successfully built and deployed :)

## Amazon Codepipline 



![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip0.jpg)

AWS CodePipeline is a fully managed continuous delivery service that help to automate the release pipelines for fast and reliable application , its accutually the orcristarator of all the stages and trigger the workflow and sequance of all the devops process from commiting the code to the buld and test till the deployment process , i liked this really when i commit a change to the pipline by push to code commit the whole process begain to work line a horse in the desert.so flexable that you can add stages in or after any build or source artifact .


![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip5.jpg)


### and this my addvanture deploying my app using codepipline , 
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip1.jpg)


![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip2.jpg)


![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip4.jpg)

### NOW checking the cluster result / the deployment done successfully :DDD
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/deployeks%20sucess.jpg)


### Sonarqube



![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar3.jpg)

SonarQube is the leading tool for continuously inspecting Code Quality and Code Security, and guiding development teams during code reviews. SonarQube provides clear remediation guidance for 27 languages so developers can understand and fix issues, and bugs and so teams can deliver better and safer software. which is an amazing tool but so exhusting for me AS AWS DON NOT HAVE A PLUGIN for sonars i keept searching for this but there is no reabile matrial to work with in aws but i found a paper in spanich ! i transelated it and deployed it and i did !!!
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/SONAR%20T2.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/SONARCONFIG.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar1.jpg)

 #### it took me a day without sleeping to make it and i blieve no one AROUND  done it beFOR IN AWS 🥇

![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar2.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar4.jpg)

#### Ansible
i really hadnt enogh time to cosidered it but i did i a search and i know that it has a spacific aws ec2 plugin itsname ec2_aws.yaml and it will act as dynamic inventory , and its better to configure with ansible in aws ec2 instance env and i found a code doing it with a shell module 



















































