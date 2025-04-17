# Agency Portfolio - QNAP Deployment Guide

This repository contains the agency portfolio website and instructions for deploying it to a QNAP NAS server using Docker Compose.

## Deployment Steps

### Prerequisites

1. A QNAP NAS with Container Station installed
2. Docker and Docker Compose installed on your QNAP
3. Basic knowledge of Docker and terminal commands

### Step 1: Prepare Your QNAP

1. Install Container Station from the QNAP App Center if not already installed
2. Enable SSH access to your QNAP for easier management

### Step 2: Clone This Repository

Clone this repository to a folder on your QNAP:

```bash
git clone [your-repository-url] /share/your-folder/agency-portfolio
cd /share/your-folder/agency-portfolio
```

### Step 3: Configure Your Domain

If you want to use a custom domain:

1. Edit the `Caddyfile` and uncomment the domain section
2. Replace `yourdomain.com` with your actual domain
3. Replace `your@email.com` with your email (used for Let's Encrypt)
4. Make sure your domain points to your QNAP's public IP

### Step 4: Deploy with Docker Compose

Run the following commands:

```bash
# Build and start the containers
docker-compose up -d

# View logs if needed
docker-compose logs -f
```

### Step 5: Configure Port Forwarding

Ensure ports 80 and 443 are forwarded from your router to your QNAP NAS.

## Maintenance

- Update the application: `docker-compose down && docker-compose up -d --build`
- View logs: `docker-compose logs -f`
- Stop the application: `docker-compose down`

## Troubleshooting

- If you can't access the site, check if ports 80/443 are properly forwarded
- Verify Container Station is running properly
- Check the logs with `docker-compose logs -f`

## Security Considerations

- Keep your QNAP firmware updated
- Configure a secure firewall on your QNAP
- Consider using HTTPS only (default with Caddy)
- Regularly update your containers 