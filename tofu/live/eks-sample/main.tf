provider "aws" {
  region = "us-east-1"
}

module "cluster" {

  source  = "git::https://github.com/2025-fall-devops/devops-book//ch3/tofu/modules/eks-cluster"

  name        = "eks-sample"        
  eks_version = "1.32"              

  instance_type        = "t2.micro" 
  min_worker_nodes     = 3          
  max_worker_nodes     = 10         
}