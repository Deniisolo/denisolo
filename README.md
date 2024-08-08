# Portfolio Denisolo

## Cambios:

1. Create-React-App no es considerado "production-ready" desde el 2023, aproximadamente. En su lugar, [React recomienda frameworks como Next.js y Remix](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks), entre otros. Por esto, se migró la pagina a **Next.js**.
2. Next.js trae "de cajita" un [manejador de rutas](https://nextjs.org/docs/app), por lo que react-router-dom ya no es necesario.
3. TypeScript en los ultimos años está liderando la parada, y es practicamente una expectativa.
4. Los nombres de los archivos no seguían una estructura universal (InfoLabel.jsx y Openmodal.jsx). Se cambiaron todos a "kebab case".
