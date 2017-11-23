---
title: LAB2: Getting Started with Microservice Builder
weight: 3
---

# Introduction

This lab exercise shows how to develop a microservice application using IBM Microservice Builder (MSB) Framework, IBM Cloud private community edition (ICP) and GitHub. In this lab exercise, you learn how to leverage the MSB pipeline application in the ICP and GitHub to set up the DevOps continuous integration and continuous delivery (CI/CD) pipeline for your microservice application and how to create, test and deploy your microservice application to a Kubernetes cluster in ICP environment.

## Business scenario

ABC retail store wants to enhance their customer user experiences by modernizing their online shopping application.  They redesigned the application as a microservice based application which is containerized and running in a Kubernetes cluster environment. ABC development team is looking into the tools and framework to help them create, test and deploy the microservice applications through a DevOps CICD pipeline quickly and easily. 

As a tech lead in the ABC development team, you are going to have a test run to use IBM Microservice Builder framework to develop and deploy your microservice application and the target Kubernetes Cluster deployment environment you selected is the IBM Cloud private community edition.
The enterprise has operational considerations that require collection of logging data and metrics from the runtime environments for visualization and analysis of runtime errors. ABC intends to leverage the integrated ELK stack and Fabric from the IBM Microservice Builder to achieve this requirement.  

## Objectives
The objectives of this series of lab exercises are as follows:
* Learn about the capability of IBM Cloud Private (ICP) and its Microservice Builder pipeline and Fabric applications.
* Learn how to setup and configure ICP Microservice Builder pipeline application with GitHub source code control repository.
* Learn how to develop a microservice application using the IBM Microservice Builder framework.
* Learn how to deploy the microservice application to ICP Kubernetes cluster using the CI/CD pipeline you configured.

## Lab overview
In this lab, you are going to create, test and deploy a simple microservice application to the Kubernetes cluster in ICP environment using IBM Microservice Builder Framework and tools.  Here are the activities involved in this process:
* Configure your GitHub account.
* Create your first microservice project with IBM Microservice Builder Starter kit.
* Check your project code into GitHub repository.
* Configure the IBM Microservice Builder pipeline.
* Activate the Microservice Builder pipeline flow.
* Test and verify your application deployment in Kubernetes cluster in ICP environment.

## Prerequisites 
The lab exercises require that you have a GitHub account.  If you do not have your GitHub account, you can go to GitHub web site (http://github.com) to create one free of charge.
This lab also requires you have internet access.

## What is already complete
An Ubuntu 16.04.3 Linux VM is provided for this lab.  
On the VM, these lab components are ready for use:
* Docker engine
* IBM Cloud Private EE
* IBM Microservice pipeline application
* Bluemix CLI
* Bluemix CLI Developer plug-in
* Eclipse IDE
*JMeter and test script (for load testing)


The login credentials for the lab VM are as follows:
> User ID: ibmdemo

> Password: passw0rd


------------------------



