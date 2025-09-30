First Project using server actions in Nextjs to learning about 'use client' and 'use server' 

# Install PNPM 

Winget: 

```bash
winget install -e --id pnpm.pnpm
```

Npm: 

```bash
npm install -g pnpm@latest-10
```

# Install Dependencies 
```bash
pnpm i 
```

# Configure Docker 

Run docker-compose using: 

```bash
docker compose up -d
```

# Create .env and paste: 

```bash
DATABASE_URL=postgres://postgres:1234@localhost:5432/formula
```

# Make a Drizzle Migration 

```bash 
npx drizzle-kit push
```

# Run 

```bash 
pnpm run dev 
```

acess in: http://localhost:3000/