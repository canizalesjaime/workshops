# Example for scheduler project
Setting up **GitHub Actions** automates workflows like building, testing, and deploying your project. Below is a step-by-step guide to configure **GitHub Actions** for your Node.js project with PostgreSQL.

# 🚀 Step-by-Step Setup
## 1️⃣ Create ```.github/workflows``` Directory
In your project root, create the directory:

```bash
mkdir -p .github/workflows
```

## 2️⃣ Add GitHub Actions Workflow
Create a workflow file for CI/CD:
📂 ```.github/workflows/nodejs.yml```

```yaml
name: Node.js CI/CD

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: password
          POSTGRES_DB: scheduler_db
        ports:
          - 5432:5432
        options: >-
          --health-cmd="pg_isready"
          --health-interval=10s
          --health-timeout=5s
          --health-retries=5

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Wait for PostgreSQL to be ready
      run: |
        until pg_isready -h localhost -p 5432; do
          echo "Waiting for PostgreSQL to be ready..."
          sleep 2
        done

    - name: Run DB migrations (if any)
      run: |
        npm run migrate  # Adjust this to your migration script if needed

    - name: Run tests
      env:
        DATABASE_URL: postgres://postgres:password@localhost:5432/scheduler_db
      run: npm test

    - name: Build frontend
      run: |
        cd frontend
        npm install
        npm run build
```

## 📝 Explanation of Workflow
1. Triggers on ```push``` or ```pull_request``` to the ```main``` branch.
2. Sets up PostgreSQL service with ```POSTGRES_USER```, ```POSTGRES_PASSWORD```, and ```POSTGRES_DB```.
3. Installs Node.js dependencies (```npm install```).
4. Waits for PostgreSQL to be ready.
5. Runs Tests (```npm test```).
6. Builds the frontend (```npm run build```).


## 🔐 Optional: Add Environment Variables
If your project uses sensitive data (like API keys), store them securely.
1. Go to your GitHub repo → Settings → Secrets and variables → Actions.
2. Click "New repository secret" and add your secrets.

#### Example:
* ```DATABASE_URL=postgres://postgres:password@localhost:5432/scheduler_db```

## ✅ Commit and Push
```bash
git add .github/workflows/nodejs.yml
git commit -m "Add GitHub Actions workflow"
git push origin main
```


## 📊 Monitor Workflow
1. Go to your GitHub repo.
2. Click on **"Actions"**.
3. Watch the CI/CD pipeline run automatically.


## 🌐 Deployment (Optional)
If you want to deploy after passing tests, add a deploy job:

```yaml
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "your-app-name"
          heroku_email: "your-email@example.com"
```