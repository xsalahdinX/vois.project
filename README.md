# vois.project 

#### Devops Project proposal.


### Introduction
an interesting project aims to transform to DevOps methodology and Automation, imagine high impact project that will have a huge impact on the performance of an Application, has to be integrated built tested, and deployed in 3hours rather than 3 days. we need to create an EKS Elastic Kubernetes Cluster in AWS to deploy our microservices App on it, then we should create a reliable pipeline that should trigger the change in the code and begin the build, test, and deploy. in other words a full automated DevOps Infinity Loop .


### an accedental scinario
I spend like  a day from the 3 days deadline revealing AZure pipeline concepts and actual deployment then suddenly I discovered that they made a recent obligation and role for the usage of it, I have to communicate with them personally to give me the permission to use the pipeline, and that was a huge waste of time as I had 2 days remaining not 3 days, so I decided to continue  my work on AWS Code pipeline but I discovered that all the plugins that I have to work with and you mentioned in your manifest is not compatible with AWS and required huge jobs and could be not functional enough, so I made some justification to catch the situation 

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

Firstly we need to Provision an Elastic k8s Cluster in Aws so we used Terraform for this job After the cluster has been created we collect all the files in code commit that will be used to integrate the code then codebuild will pull the code and build it as image and push it to the ECR Container Registry which we will use it in pulling the image to be deployed as a container in the Eks. through this process, the cloudqube will test and validate the code for bugs and vulnerabilities before the deployment. this whole process is orchestrated by the code pipeline which automates the whole process from code change in the repo to apply in the cluster.

# Setting up and deploying the technonlgys





## Terraform

Terraform is an open-source infrastructure as code (IaC) software tool that allows DevOps engineers to programmatically provision the physical resources an application requires to run and it was really the best choice 

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/tr2.jpg)



I made 5 files ., I separated the code one for policy and roles and another for vpc and another for the cluster for easier management, and one for variables, you may notice a .tfstate file that the current state of terraform as I made a number of provisions and troubleshooting 

firstly, I installed terraform in my centos VM and i make a dir for all the * .tf s files required to provision the EKS cluster then we run the command blew


```
$ terraform init
$ terraform plan
$ terraform apply
```

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ter3.jpg)














## AWS Elastic Kubernetes Service (EKS)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eks%20cluster.png)


the EKS cluster has a specific architecture with a specific PVC separated into  two zones each worker node in a separated zone for high availability
of course, all the worker nodes in private subnets, with 2 nat gateways in public subnets attached with 2 elastic IPs for frontend communication linked to an internet gateway, all worker nodes attached with security groups and attached to node group to provide high availability and reliability kind of auto-scaling group. the mater of course, is aws managed, finally, there was some iam group to provide connectivity and authorize the cluster to interact with many aws services. 

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eksssssssssssss.jpg)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eks2.jpg)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/eks%203.jpg)














## AWS CodeCommit


![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/repo1.jpg)


AWS CodeCommit is a secure, highly scalable, managed source control service that hosts private Git repositories. It makes it easy for teams to securely collaborate on code with contributions encrypted in transit and at rest. I USED CODECOMMIT AS SOURCE CODE REPOSITORY FOR ALL my project phases the app deploy and build and sonar test.  it contains all files such as the APP file, docker files and buildspec.yml






## AWS Elastic Container Registry (ECR)



![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ecr1.jpg)


Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy to store, share, and deploy container images. like docker hub and others, I used it too for compatibility with aws as it aws managed it's actually the repo that hosts the image after codebuild build and construct the docker file to be an image. 

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ecr2.jpg)

![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/ecr5.jpg)

and acctually it documented all my attempts too :)

## AWS Code Build   




![alt text](https://github.com/xsalahdinX/vois.project/blob/main/pics/build1.jpg)

CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to be released ,this stage was so hard to me as it required infinite amount of working and troubleshooting we have a file name buildspecs.yml that the build itself will be based on it and we have to write into it all build specifications how the build will be and what repo will image be pushed into  what kind of deploy will be and the authentication with EKS to be release the deploy  ,mixed with the environment variables such as the the docker repo and the  iam rols which is due to my experience the most complicated thing as my code failed more than 150 times because of it , we should implement many policy to the code build role to be capable of communicate with other aws resources , in addition to , its proprieties such as what kind of vm we will use to build ubuntu or Linux 2 which repo this build will linked to and env vars and the specific policy for build process.

![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build2.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build3.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build4.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build4.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/build7.jpg)

hundereds of attepts and fails but the APP finally successfully built and deployed :)

## Amazon Codepipline 



![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip0.jpg)

AWS CodePipeline is a fully managed continuous delivery service that helps to automate the release pipelines for fast and reliable applications, it's actually the orchestrator of all the stages and triggers the workflow and sequence of all the DevOps processes from committing the code to the build and test till the deployment process, i liked this really when i commit a change to the pipeline by pushing to code commit the whole process began to work like a horse in the desert. so flexible that you can add stages in or after any build or source artifact.


![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip5.jpg)


### and this my addvanture deploying my app using codepipline , 
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip1.jpg)


![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip2.jpg)


![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/pip4.jpg)

### NOW checking the cluster result / the deployment done successfully :DDD
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/deployeks%20sucess.jpg)


## Sonarqube



![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar3.jpg)
SonarQube is the leading tool for continuously inspecting Code Quality and Code Security, and guiding development teams during code reviews. SonarQube provides clear remediation guidance for 27 languages so developers can understand and fix issues, and bugs and so teams can deliver better and safer software. which is an amazing tool but so exhausting for me AS AWS DO NOT HAVE A PLUGIN for sonars I kept searching for this but there is no reliable material to work within aws but I found a paper in Spanish! and I did !!!
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/SONAR%20T2.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/SONARCONFIG.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar1.jpg)

 #### it took me a day without sleeping to make it and i blieve no one AROUND  done it beFOR IN AWS 🥇

![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar2.jpg)
![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/sonar4.jpg)

## Ansible

![image](https://github.com/xsalahdinX/vois.project/blob/main/pics/4.png)


I really hadn't enough time to consider it but I did  a search and  know that it has a specific aws ec2 plugin its name aws_ec2.yaml and it will act as dynamic inventory, and it's better to configure with Ansible in AWS ec2 instance env and I found a code doing it with a shell module 

```
$---
$- name: Deploy to K8s Cluster 
$ hosts: all
$ become: true
$tasks:
$  - name: Deploy Pod
$   shell: |
$      kubectl apply -f pod.yml
$
$  - name: Deploy Service
$    shell: | 
$      kubectl apply -f svc.yml
```
















































