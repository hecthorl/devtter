<h1 align="center" >Devtter App</h1>

Devtter App es un proyecto personal, **basada** en la idea de hacer un clon de Twitter (pero para desarrolladores) tomado del curso gratuito de NextJS del gran [Midudev.](https://www.youtube.com/watch?v=2jxc8DMzt0I&list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6)

## Estructura de carpetas

```css
            /
            ├── components/
            │   ├── AppBar/
            │   │    ├── AppBaritem.jsx
            │   │    ├── index.jsx
            │   │    └── items.json
            │   ├── Aside/
            │   │    └── index.jsx
            │   ├── Avatar/
            │   │    └── index.jsx
            │   ├── Devit/
            │   │    ├── CommentBtn.jsx
            │   │    ├── HeartIcon.jsx
            │   │    ├── LikeBtn.jsx
            │   │    ├── index.jsx
            │   │    └── SkeletonDevit.jsx
            │   ├── DevitInput/
            │   │    ├── DevitInputBtn.jsx
            │   │    ├── DevitInputIcons.jsx
            │   │    ├── DevitInputModal.jsx
            │   │    ├── index.jsx
            │   │    ├── OnImage.jsx
            │   │    ├── WordsCounter.jsx
            │   │    └── DevitInputTextarea.jsx
            │   ├── NotLoggedUser.jsx
            │   ├── TimeLine.jsx
            ├── context/
            │   └── Context.jsx
            ├── firebase/
            │   ├── admin.js
            │   └── cliente.js
            ├── helpers/
            │   └── constants.js
            ├── hooks/
            │   ├── useGlobalcontext.js
            │   ├── useHandlers.js
            │   ├── usePreview.js
            │   ├── useResizeObserver.js
            │   ├── useSendDevit.js
            │   ├── useTimeAgo.js
            │   └── useUser.js
            ├── pages/
            │   ├── api/
            │   │    └── devits/
            │   │          └── [id].js
            │   ├── compose/
            │   │    └── tweet/
            │   │          └── index.jsx
            │   ├── home/
            │   │    └── index.jsx
            │   ├── status/
            │   │    └── [id]/
            │   │          └── index.jsx
            │   ├── _app.jsx
            │   └── index.jsx
            ├── public/
            │   └── *assets
            └── styles/
                └── globals.css
```

## Características

-  Crear devits con o sin imagen (el equivalente a tweets)
-  Ver devits en tiempo real
-  100% responsive
-  Autenticación a través de firebase/auth
-  Estilado con puro tailwindcss
-  Ver devits por separado
