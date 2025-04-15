# FISHOP <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40"/>

Fishop es una plataforma de ventas en línea especializada en artículos de pesca. Este proyecto está dividido en dos partes: **Backend (Node.js/Express)** y **Frontend (Angular)**.

## 📦 Estructura del proyecto
```
fishop-v1/
├── cliente/          # Frontend (Angular)
│   ├── src/          # Código fuente
│   └── package.json  # Dependencias
├── server/           # Backend (Node.js/Express)
│   ├── controllers/  # Lógica de negocio
│   └── app.js        # Configuración
└── README.md         # Documentación
```

## 🚀 Primeros pasos

### Requisitos
- Node.js v14+
- MySQL v8+
- Angular CLI v12+

```bash
# Clonar repositorio
git clone https://github.com/Perezcortes/fishop-v1.git
cd fishop-v1
```

## 🔙 Configuración del Backend

1. Instalar dependencias:
```bash
cd server
npm install
```

2. Configurar base de datos:
```sql
CREATE DATABASE fishop;
-- Importar fishop.sql (ubicado en server/database/)
```

3. Crear archivo `.env`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=fishop
JWT_SECRET=tu_secreto_jwt
```

4. Iniciar servidor:
```bash
npm start
# Servidor en http://localhost:5000

Documentación:
# http://localhost:3000/documentacion/
```

## 💻 Configuración del Frontend

1. Instalar dependencias:
```bash
cd ../cliente
npm install
```

2. Configurar variables (en `src/environments/environment.ts`):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};
```

3. Iniciar aplicación:
```bash
ng serve
# Abrir http://localhost:4200
```

## 🛠 Comandos útiles

| Función                   | Comando                                |
|---------------------------|----------------------------------------|
| Iniciar backend           | `cd server && npm start`               |
| Iniciar frontend          | `cd cliente && ng serve`               |
| Instalar dependencias     | `npm install` en cada carpeta          |
| Generar build producción  | `cd cliente && ng build --prod`        |
| Solucionar collation utf8 | Reemplazar `utf8mb4_0900_ai_ci` con `utf8mb4_general_ci` en scripts SQL |
| Error de Angular Routing  | Añadir `{ useHash: true }` en RouterModule en Angular |
| Error de CORS             | Verificar configuración del middleware `cors()` en Express |

## 📂 Estructura técnica

### Backend (Node.js/Express)
```
server/
├── config/
│   └── db.js          # Configuración MySQL
├── controllers/       # Lógica de API
│   ├── authController.js
│   └── productController.js
├── routes/            # Endpoints
│   ├── auth.routes.js
│   └── product.routes.js
├── middlewares/       # Autenticación
├── app.js             # Config Express
└── server.js          # Inicio del servidor
```

### Frontend (Angular)
```
cliente/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/
│   │   │   └── shopping-cart/
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   │   └── auth.service.ts
│   │   └── models/
│   │       ├── product.model.ts
│   │       └── user.model.ts
│   ├── assets/
│   └── styles.css     # Estilos globales
```

## 🤝 Cómo contribuir

1. Haz fork del proyecto
2. Crea una rama: `git checkout -b mi-feature`
3. Haz commit: `git commit -am 'Nueva feature'`
4. Haz push: `git push origin mi-feature`
5. Abre un Pull Request

## 📌 Notas importantes

- Para producción, configura:
  - Variables de entorno seguras
  - HTTPS en ambos servidores
  - CORS correctamente configurado
- El archivo SQL inicial contiene datos de prueba

## 📧 Contacto

**Desarrollador**: José Pérez  
**Email**: 9531447499a@gmail.com  
**GitHub**: [Perezcortes](https://github.com/Perezcortes)
