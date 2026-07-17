# Heroku
To get started with Heroku, you'll need to follow these steps:
## Create a Heroku Account:
Go to the Heroku website and sign up for an account if you don’t already have one.

## Install the Heroku CLI:
Heroku provides a Command-Line Interface (CLI) that allows you to interact with your Heroku apps from your terminal.

* For macOS:
```bash
brew tap heroku/brew && brew install heroku
```
* For Windows: Download and install from Heroku's official website.

* For Linux:
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

After installing the CLI, verify the installation:

```bash
heroku --version
```

## Add procfile
Instructions on Adding a Procfile for Heroku Deployment
A Procfile is a special text file used by Heroku to define the commands needed to run your application. It specifies the type of process to run (e.g., web server, worker, etc.), ensuring Heroku knows how to start your app.

### Steps to Add a Procfile:
1. **Create a Procfile in the Root Directory**
Navigate to the root directory of your project.
Create a new file named Procfile (without any extension like .txt).
2. **Define Your Process Type**
The content of the Procfile depends on your application type.

Examples:
For a Node.js application (e.g., using Express.js):

```plaintext
web: node index.js
```

## Log in to Heroku:
To authenticate with Heroku, run the following command in your terminal:

```bash
heroku login
```
This will open a browser window where you can log in with your Heroku account.

## Create a New Heroku App:
You can create a new app using the Heroku CLI. Navigate to your project directory and run:

```bash
heroku create <your-app-name>
```
If you don’t specify an app name, Heroku will generate a random name for your app.

After the app is created, Heroku will provide you with a URL to access your app (e.g., https://\<your-app-name\>.herokuapp.com).

## Deploy Your App to Heroku:
If you have a Git-based project (which is the most common method), you can deploy it by pushing it to Heroku’s remote Git repository.

First, make sure you have initialized a Git repository:

```bash
git init
git add .
git commit -m "Initial commit"
```

Then, Heroku automatically adds a Git remote named heroku to your repository when you create the app. If not, you can manually add it:

```bash
git remote add heroku https://git.heroku.com/<your-app-name>.git
```

Deploy your code by pushing it to Heroku:

```bash
git push heroku main
```
Heroku will build your app, install dependencies (e.g., Node.js or Python packages), and deploy it.

6. Open Your App:
After deployment, open the app in your web browser:

```bash
heroku open
```

## Configure Environment Variables (Optional):
If your app relies on sensitive data like API keys, database credentials, or configuration settings, you can set environment variables directly in Heroku:
```bash
heroku config:set MY_VARIABLE=value
```

To check your variables:
```bash
heroku config
```

## Add a Database (Optional):
If your app requires a database, you can easily add one using Heroku's add-ons. For example, to add a PostgreSQL database:

```bash
heroku addons:create heroku-postgresql:essential-0 --app your-heroku-app
```

After adding the database, you can access the connection URL with:
```bash
heroku config:get DATABASE_URL
```

## Monitor Your App:
Heroku provides several tools to monitor your app, including logging:
```bash
heroku logs --tail
```

## Set Up Continuous Deployment (Optional):
To automate deployments, you can set up Continuous Deployment (CD) with services like GitHub Actions or CircleCI. This will automatically deploy your app when you push changes to your repository.

## Additional Resources:
* Heroku Documentation: Heroku Dev Center
* Heroku Add-ons: Heroku Add-ons
* Heroku CLI Commands: Heroku CLI Docs

By following these steps, you'll have your application set up and deployed on Heroku!

## Notes 
* commands for testing local runs: check public repo
* heroku config:set REACT_APP_API_URL=https://app-backend1-2d99556f99a0.herokuapp.com/
* heroku auth:token