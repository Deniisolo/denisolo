# Portfolio Denisolo

## Cambios:

1. Create-React-App no es considerado "production-ready" desde el 2023, aproximadamente. En su lugar, [React recomienda frameworks como Next.js y Remix](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks), entre otros. Por esto, se migró la pagina a **Next.js**.
2. Next.js trae "de cajita" un [manejador de rutas](https://nextjs.org/docs/app), por lo que react-router-dom ya no es necesario.
3. TypeScript en los ultimos años está liderando la parada, y es practicamente una expectativa.
4. Los nombres de los archivos no seguían una estructura universal (InfoLabel.jsx y Openmodal.jsx). Se cambiaron todos a "kebab-case".
5. Los nombres de los componentes no siguen CamelCase, se renombraron.
6. Los componentes no se "auto cierran", se cambiaron las etiquetas de cerrado.
7. "import React from 'react';" ya no es necesario desde [React v17 (2020)](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).
8. Los links, o redirecciones, deberían hacerse usando <a>, no <button>.
