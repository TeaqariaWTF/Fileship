<div align="center">
  <a href="https://github.com/hanzydev/Fileship">
    <img src="banner.png" alt="Fileship" width="550" height="110">
  </a>

  <p align="center">
    Fileship is an open-source and self-hosted image uploading service with cool features.
    <br />
    <br />
    <a href="https://github.com/hanzydev/Fileship/issues">Report Bug</a>
    ·
    <a href="https://github.com/hanzydev/Fileship/issues">Request Feature</a>
  </p>
</div>

## 📸 Screenshot

<img src="public/previews/fileship-desktop.png" alt="Screenshot">

## 🧰 Built With

![Nuxt.js](https://img.shields.io/static/v1?style=for-the-badge&message=Nuxt.js&color=222222&logo=Nuxt.js&logoColor=00DC82&label=)
![Vue.js](https://img.shields.io/static/v1?style=for-the-badge&message=Vue.js&color=222222&logo=Vue.js&logoColor=4FC08D&label=)
![UnoCSS](https://img.shields.io/static/v1?style=for-the-badge&message=UnoCSS&color=333333&logo=UnoCSS&logoColor=FFFFFF&label=)
![Prisma](https://img.shields.io/static/v1?style=for-the-badge&message=Prisma&color=2D3748&logo=Prisma&logoColor=FFFFFF&label=)
![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)
![Socket.io](https://img.shields.io/static/v1?style=for-the-badge&message=Socket.io&color=010101&logo=Socket.io&logoColor=FFFFFF&label=)
![ESLint](https://img.shields.io/static/v1?style=for-the-badge&message=ESLint&color=4B32C3&logo=ESLint&logoColor=FFFFFF&label=)
![Prettier](https://img.shields.io/static/v1?style=for-the-badge&message=Prettier&color=222222&logo=Prettier&logoColor=F7B93E&label=)
![Vite](https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=)
![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)

## 📦 Features

- Fast & Secure
- Self-hosted
- Easy to Use
- Vibrant Themes
- Statistics
- OpenGraph Embeds
- Folders
- Notes
- Codes
- URLs
- Backups
- Image Compression
- Custom Domains
- Chunked Uploads
- AI Powered Image Search
- Multi-Factor Authentication
- Multi-User Support
- Real-Time Updates
- Password Protection
- Video Thumbnails
- Auto-Delete after Views
- Auto-Delete after expiration
- Ambient Mode

## 🚀 Getting Started

### Minimum system requirements

Fileship is designed to run on a variety of systems, but the following minimum requirements are recommended for optimal performance:

- **CPU**: 2 Core
- **RAM**: 4 GB
- **Disk Space**: 4 GB (plus space for uploaded files)
- **Database**: PostgreSQL 16.x or higher
- **Node.js**: 20.x or higher

### Install & run using Docker

This section requires [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to be installed on your machine.

```sh
git clone https://github.com/hanzydev/Fileship.git
cd Fileship
docker compose up -d
```

Open your browser and go to `http://localhost:3000`

### Building & running from source

This section requires [Node.js 20.x or higher](https://nodejs.org/) to be installed on your machine.

1. Clone the repo
    ```sh
    git clone https://github.com/hanzydev/Fileship.git
    ```
2. Go into the repo directory
    ```sh
    cd Fileship
    ```
3. Enable [Corepack](https://github.com/nodejs/corepack)
    ```sh
    corepack enable
    ```
4. Install NPM packages
    ```sh
    pnpm i
    ```
5. Create an .env file using .env.example. The only one required is the `DATABASE_URL` which is the connection string to your database.

    ```sh
    cp .env.example .env
    ```

6. Build the project
    ```sh
    pnpm build
    ```
7. Start the server
    ```sh
    pnpm preview
    ```
8. Open your browser and go to `http://localhost:3000`

### Default credentials

- Username: `admin`
- Password: `password`

### Web server configuration (optional)

This section requires [Nginx](https://nginx.org/) to be installed on your machine.

```nginx
server {
    listen 80;
    server_name <domain>;

    client_max_body_size 100M;

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:3000;
    }

    location /socket.io/ {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

## 🔄 Updating

To update Fileship, follow these steps:

### Using Docker

```sh
cd Fileship
git pull
docker compose up --build -d
```

### From source

```sh
cd Fileship
git pull
pnpm i
pnpm build
pnpm preview
```

## ❤️ Contribute

Contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## ⚖️ License

[MIT](LICENSE)
