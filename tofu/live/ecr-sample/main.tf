provider "aws" {
  region = "us-east-1"
}

module "repo" {
  source  = "git::https://github.com/2025-fall-devops/devops-book//ch3/tofu/modules/ecr-repo"

  name = "sample-app"
}