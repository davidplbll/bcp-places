# BCPlaces 👋

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## Uso de librería

### Requerimientos

Se requiere de llave de google maps

### Configuración

```xlm
   <meta-data android:name="com.google.android.geo.API_KEY" android:value="API_KEY" />
```

### Instalación

La librería se encuentra en el proyecto por tanto para usarla se utilizara requireNativeComponent

```typescript
import { requireNativeComponent } from 'react-native';

export default requireNativeComponent<any>('BcpMapViewer');
```

### Uso

La librería recibe como props las ubicaciones para generar los marcadores

```typescript
<View style={{ flex: 1 }}>
  <BcpMapViewer style={{ flex: 1 }} markers={placeList} />
</View>
```

y cada marcador debe tener las propiedades

- latitude : latitud del marcador
- longitude: longitud del marcador
- title: titulo del lugar
- deescription: descripción del lugar

```json
  {
    "latitude": 40.416487,
    "longitude": -3.704112,
    "title": "Restaurante Casa Lucio",
    "description": "Conocido por sus huevos rotos ",
    "images":[
      "imagen1"
    ]
  },
```

### credenciales para login

- usuario: testUser@mail.com
- contraseña: testPassword
