# 🚀 End-to-End AutoDeploy (GitOps)
This project demonstrates a fully automated, professional GitOps CI/CD pipeline. It bridges the gap between application code and a live Kubernetes cluster using GitHub Actions, Docker Hub, and ArgoCD.

## 🛠️ Tech Stack
- **Runtime:** Node.js (Express.js)
- **Containerization:** Docker (Alpine-based for optimization)
- **Orchestration:** Kubernetes (Minikube)
- **CI Tool:** GitHub Actions
- **CD Tool:** ArgoCD (GitOps Controller)
- **Registry:** Docker Hub

## 🏗️ Architecture & Workflow
1. **Code Push:** A developer pushes code changes to the main branch.
2. **CI Pipeline:** GitHub Actions triggers a workflow that:
     * **Builds** a new Docker image with a unique SHA tag.
     * **Pushes** the image to Docker Hub.
     * **Self-Updates:** Automatically modifies the ```k8s/deployment.yaml``` file with the new image tag and commits it back to the repo.

4. **CD Sync:** ArgoCD detects the change in the Git repository (The Single Source of Truth).

5. **Deployment:** ArgoCD synchronizes the cluster state, pulling the new image and performing a rolling update in Kubernetes.

## 🚀 How to Run

### 1. Clone the Repo:

```
git clone https://github.com/sleinkaraman/end-to-end-autodeploy.git
```

### 2. Set Up Secrets: 
Add ```DOCKERHUB_USERNAME``` and ```DOCKERHUB_TOKEN``` to your GitHub Repository Secrets.

### 3. Start Minikube & ArgoCD:

```
minikube start
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

### 4. Port Forward ArgoCD:

```
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

### 5. Connect App to ArgoCD: 
Create a new app pointing to this repo's ```/k8s``` path.

# 🧠 Key Learning Outcomes
Through the development of this specific End-to-End GitOps infrastructure, I achieved the following technical milestones:

* **GitOps Methodology:** Implemented a full-circle automated deployment using ArgoCD as the Single Source of Truth, ensuring the cluster always matches the Git state.
* **Automated Manifest Updates:** Mastered GitHub Actions workflows that dynamically update Kubernetes ```image``` tags using ```sed``` and commit back to the repository using ```[skip ci]``` to prevent infinite loops.
* **Environment Troubleshooting:** Resolved real-world challenges related to divergent Git branches (```pull/rebase```), remote alias management, and Kubernetes Service exposure.
* **Sync Reconciliation:** Gained hands-on experience in managing "Out-of-Sync" states and implementing self-healing mechanisms within a live cluster.








