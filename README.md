# react-s3-cloudFront-serverless-template
This project show how fast we can deploy react app in s3 and cloudfront with serverless framework. Try it and make yours
****

## following steps
* ``` npm install serverless -g ```
* Move to ~/.aws/credentials
* Append your AWS PROFILE like this
    ```
    [my-profile] 
    aws_access_key_id=INSERT YOUR ACCESS KEY
    aws_secret_access_key=INSERT YOUR SECRET KEY
    ```
* Export your profile
    ```
    export AWS_PROFILE="my-profile"
    ```
* Move to react-s3-cloudFront-serverless-template/my-app
  ```
  yarn build
  ```
* Move to react-s3-cloudFront-serverless-template
    ```
    sls deploy
    ```
* Wait a minute then you will Success deploy
    [Click Me!](https://serverless-react-app-test-1234.s3.ap-northeast-2.amazonaws.com/index.html)

****

***Isn't it super easy?***
Do not deploy your React app manually!
Use the Serverless Framework to deploy automatically!