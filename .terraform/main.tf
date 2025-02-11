terraform {
  backend "s3" {
    bucket = "ancienfiles-terraform-infra"
    key    = "ancientfiles/terraform.tfstate"
    region = "us-east-1"
  }
}
