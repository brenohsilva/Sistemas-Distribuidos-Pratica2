# Sistemas-Distribuidos-Pratica 2
Tópicos Avançados em Computação Distribuída e Paralela - Automação da Implantação, Escalonamento e Gerenciamento de Aplicações via Kubernetes

# Kubernetes Cluster com Minikube: Aplicação de Microserviços com Auto-Scaling e Monitoramento

Este projeto documenta o processo para configurar um cluster Kubernetes local utilizando o Minikube, com uma aplicação simples composta por um frontend e um backend. Também inclui o escalonamento automático (Horizontal Pod Autoscaler) e o monitoramento via Kubernetes Dashboard.

## Pré-requisitos

- **Docker**
- **Minikube**
- **kubectl**

### Instalação de Minikube e kubectl no Windows

1. **Minikube**:
   - Instale o Minikube usando [este link](https://minikube.sigs.k8s.io/docs/start/) ou, se tiver o Chocolatey instalado, use o comando:
     ```powershell
     choco install minikube
     ```

2. **kubectl**:
   - Instale o kubectl usando [este link](https://kubernetes.io/docs/tasks/tools/install-kubectl/) ou com Chocolatey:
     ```powershell
     choco install kubernetes-cli
     ```

## Iniciar o Minikube

Inicie o Minikube para criar o cluster Kubernetes local:
```bash
minikube start
```

## Configuração Backend

- Criação de uma pasta chamada backend e adição de um arquivo server.js

- Criação do DockerFile backend

- Configuração do terminal para usar o Docker do Minikube

```bash
minikube docker-env
```

- Construção da imagem

```bash
docker build -t backend-app:latest .
```
## Configuração Frontend

- Criação de uma pasta chamada frontend e adição de um arquivo index.html

- Criação do DockerFile frontend
  
- Construção da imagem

```bash
docker build -t frontend-app:latest .
```
## Criação dos Arquivos de Deployment do Kubernetes

backend-deployment.yaml

frontend-deployment.yaml

## Aplicar os Deployments
```bash
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
```

## Configurar o Horizontal Pod Autoscaler (HPA)
- Instalar o Metrics Server:

```bash
minikube addons enable metrics-server
```

- Criar o HPA:

```bash
kubectl autoscale deployment backend --cpu-percent=50 --min=1 --max=5
```
- Verificar o HPA:
```bash
kubectl get hpa
```

## Monitoramento com Kubernetes Dashboard
- Habilitar o Dashboard:

```bash
minikube addons enable dashboard
```

- Acessar o Dashboard:

```bash
minikube dashboard
```
